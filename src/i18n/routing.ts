import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  // Info: (20260102 - Luphia) A list of all locales that are supported
  locales: ['en', 'zh-TW'],

  // Info: (20260102 - Luphia) Used when no locale matches
  defaultLocale: 'zh-TW'
});

/**
 * Info: (20260102 - Luphia) Lightweight wrappers around Next.js' navigation APIs
 * that will consider the routing configuration
 */
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
