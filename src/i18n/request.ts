import { getRequestConfig } from 'next-intl/server';
import { routing } from '@/i18n/routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // Info: (20260102 - Luphia) This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Info: (20260102 - Luphia) Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as typeof routing.locales[number])) {
    locale = routing.defaultLocale;
  }

  const localeFile = locale.replace(/-/g, '_').toLowerCase();

  return {
    locale,
    messages: (await import(`../locales/${localeFile}.json`)).default
  };
});
