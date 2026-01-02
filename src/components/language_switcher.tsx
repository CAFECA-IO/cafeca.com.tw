'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { ChangeEvent, useTransition } from 'react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <div className="relative">
      <select
        defaultValue={locale}
        onChange={handleChange}
        disabled={isPending}
        className="bg-transparent border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:border-blue-500"
      >
        <option value="en">English</option>
        <option value="zh-TW">繁體中文</option>
      </select>
    </div>
  );
}
