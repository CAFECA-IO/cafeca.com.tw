
import React from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import LanguageSwitcher from '@/components/language_switcher';
import { useTranslations } from 'next-intl';

const Navbar: React.FC = () => {
  const t = useTranslations('Navigation');

  return (
    <div className="px-xl py-m z-10 w-full bg-transparent flex justify-between items-center px-4 md:px-8">
      <Link href={'/'}>
        <Image src="/logo/cafeca_logo.svg" width={120} height={36} alt={t('logoAlt')} />
      </Link>
      <LanguageSwitcher />
    </div>
  );
};

export default Navbar;
