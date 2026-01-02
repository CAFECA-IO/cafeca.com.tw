import createMiddleware from 'next-intl/middleware';
import { routing } from '@/i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Info: (20260102 - Luphia) Match only internationalized pathnames
  matcher: ['/', '/(zh-TW|en)/:path*']
};
