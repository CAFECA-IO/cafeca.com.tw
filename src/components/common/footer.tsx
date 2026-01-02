import React from 'react';
import { Link } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import { BiLogoFacebook } from 'react-icons/bi';
import { FaLocationDot, FaPhone, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa6';
import {
  CAFECA_COPYRIGHT,
  CAFECA_PHONE,
  CAFECA_LOCATION_EN,
  CAFECA_LOCATION_CH,
  CAFECA_LOCATION_MAP,
  CAFECA_FACEBOOK_LINK,
  CAFECA_TWITTER_LINK,
  CAFECA_LINKEDIN_LINK,
  CAFECA_GITHUB_LINK,
} from '@/constants/config';

const Footer: React.FC = () => {
  const locale = useLocale();
  const address = locale === 'zh-TW' ? CAFECA_LOCATION_CH : CAFECA_LOCATION_EN;

  return (
    <footer className="bg-surface-invert text-14px flex w-full flex-col items-center justify-between gap-3 px-8 py-3 text-xs font-normal text-white lg:flex-row lg:px-3">
      {/* Info: (20250804 - Julian) Contact Information */}
      <div className="flex flex-1 flex-col items-center gap-3 lg:flex-row">
        <Link href={CAFECA_LOCATION_MAP} target="_blank" className="flex items-center gap-1">
          <FaLocationDot size={24} className="shrink-0" />
          <p>{address}</p>
        </Link>
        <Link href={`tel:${CAFECA_PHONE}`} className="flex items-center gap-1 whitespace-nowrap">
          <FaPhone size={16} className="shrink-0" />
          <p>{CAFECA_PHONE}</p>
        </Link>
        {/* Info: (20250804 - Julian) Social Media Links */}
        <div className="flex items-center gap-2">
          <Link href={CAFECA_FACEBOOK_LINK} target="_blank" className="shrink-0">
            <BiLogoFacebook size={24} />
          </Link>
          <Link href={CAFECA_TWITTER_LINK} target="_blank" className="shrink-0">
            <FaTwitter size={24} />
          </Link>
          <Link href={CAFECA_LINKEDIN_LINK} target="_blank" className="shrink-0">
            <FaLinkedinIn size={24} />
          </Link>
          <Link href={CAFECA_GITHUB_LINK} target="_blank" className="shrink-0">
            <FaGithub size={24} />
          </Link>
        </div>
      </div>

      {/* Info: (20250804 - Julian) Copyright */}
      <p className="whitespace-nowrap">{CAFECA_COPYRIGHT}</p>
    </footer>
  );
};

export default Footer;
