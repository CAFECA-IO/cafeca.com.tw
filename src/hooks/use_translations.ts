import { useLanguage } from '@/contexts/language_context';

export const useTranslations = (namespace: string) => {
  const { t } = useLanguage();

  // Info: (20260202 - Luphia) Return a function that acts like the next-intl t()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const translator = (key: string): any => {
    return t(namespace, key);
  };

  return translator;
};
