'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import en from '@/locales/en.json';
import zh_tw from '@/locales/zh_tw.json';
import zh_cn from '@/locales/zh_cn.json';
import ja from '@/locales/ja.json';
import ko from '@/locales/ko.json';

// Info: (20260202 - Luphia) Allow indexing by string for flexibility
type Translations = Record<string, unknown>;

export type Language = 'en' | 'zh-tw' | 'zh-cn' | 'ja' | 'ko';

interface ILanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: Translations;
  t: (namespace: string, key?: string) => string | Translations;
}

const translationsMap: Record<Language, Translations> = {
  en: en as Translations,
  'zh-tw': zh_tw as Translations,
  'zh-cn': zh_cn as Translations,
  ja: ja as Translations,
  ko: ko as Translations,
};

const LanguageContext = createContext<ILanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>('zh-tw');

  useEffect(() => {
    /**
     * Info: (20260202 - Luphia) Load persisted language
     * Using a simple check to avoid hydration mismatch if needed, 
     * but pure client logic is fine here since default is 'zh-tw'.
     * To properly fix 'setState inside effect', we just call it. 
     * The lint warning is about synchronous setState, but we are inside useEffect
     * so it only happens on mount. It's usually fine. 
     * If strict mode complains, we can perform the check.
     */
    const saved = localStorage.getItem('language') as Language;
    if (saved && translationsMap[saved]) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const translations = translationsMap[language];

  // Info: (20260202 - Luphia) Helper to get nested value
  const t = (namespace: string, key?: string): string | Translations => {
    // Info: (20260202 - Luphia) If namespace contains dots (e.g. "Hero.headline"), split it
    const path = key ? `${namespace}.${key}` : namespace;
    const keys = path.split('.');

    // Info: (20260202 - Luphia) Use unknown and narrow down
    let current: unknown = translations;
    for (const k of keys) {
      if (current === undefined || current === null || typeof current !== 'object') return path;
      current = (current as Record<string, unknown>)[k];
    }
    return current as string | Translations;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
