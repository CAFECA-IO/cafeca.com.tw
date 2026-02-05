"use client";
import React, { useState, useRef, useEffect } from 'react';
import { useLanguage, Language } from '@/contexts/language_context';
import { cn } from '@/lib/utils';
import { FaGlobe } from 'react-icons/fa6';
import { IoChevronDown } from 'react-icons/io5';

const languages: { code: Language; label: string; short: string }[] = [
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'zh-tw', label: '繁體中文', short: '繁中' },
  { code: 'zh-cn', label: '简体中文', short: '简中' },
  { code: 'ja', label: '日本語', short: 'JP' },
  { code: 'ko', label: '한국어', short: 'KR' },
];

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find(l => l.code === language) || languages[0];

  // Info: (20260202 - Luphia) Close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium transition-all duration-300",
          isOpen
            ? "border-accent-cyan bg-accent-cyan/10 text-accent-cyan shadow-[0_0_15px_rgba(0,229,255,0.2)]"
            : "border-text-secondary/30 bg-bg-secondary/50 text-text-secondary hover:border-accent-cyan/50 hover:text-accent-cyan"
        )}
      >
        <FaGlobe size={14} />
        <span>{currentLang.short}</span>
        <IoChevronDown size={12} className={cn("transition-transform duration-300", isOpen ? "rotate-180" : "")} />
      </button>

      {/* Info: (20260202 - Luphia) Dropdown Menu */}
      <div
        className={cn(
          "absolute right-0 top-full mt-2 w-32 origin-top-right overflow-hidden rounded-xl border border-white/10 bg-bg-secondary/95 p-1 shadow-xl backdrop-blur-xl transition-all duration-200",
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        )}
      >
        <div className="flex flex-col gap-0.5">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className={cn(
                "flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-xs transition-colors",
                language === lang.code
                  ? "bg-accent-cyan/10 text-accent-cyan font-bold"
                  : "text-text-secondary hover:bg-white/5 hover:text-text-primary"
              )}
            >
              <span>{lang.label}</span>
              {language === lang.code && <div className="h-1.5 w-1.5 rounded-full bg-accent-cyan shadow-[0_0_5px_#00e5ff]" />}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
