"use client";
import React from 'react';
import { CAFECA_COPYRIGHT } from '@/constants/config';
import { useTranslations } from '@/hooks/use_translations';
import { FaGithub, FaLocationDot, FaPhone, FaEnvelope } from 'react-icons/fa6';

const Footer: React.FC = () => {
  const t = useTranslations('Footer');

  return (
    <footer className="w-full bg-bg-secondary py-16 text-text-secondary border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Info: (20260202 - Luphia) Left Column: Contact Information */}
        <div className="flex flex-col gap-6 items-center md:items-start">
          {/* Info: (20260202 - Luphia) Address */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4 text-center md:text-left">
            <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 text-accent-cyan">
              <FaLocationDot />
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-text-secondary/80">
              {t('address')}
            </p>
          </div>

          {/* Info: (20260202 - Luphia) Phone */}
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 text-accent-cyan">
              <FaPhone />
            </div>
            <a href={`tel:${t('phone')}`} className="text-sm hover:text-accent-cyan transition-colors">
              {t('phone')}
            </a>
          </div>

          {/* Info: (20260202 - Luphia) Email */}
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 text-accent-cyan">
              <FaEnvelope />
            </div>
            <a href={`mailto:${t('email')}`} className="text-sm hover:text-accent-cyan transition-colors">
              {t('email')}
            </a>
          </div>
        </div>

        {/* Info: (20260202 - Luphia) Right Column: Social & Legal */}
        <div className="flex flex-col items-center md:items-end justify-between gap-8 h-full">
          <a
            href={`https://${t('github')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-2 text-sm transition-all hover:border-accent-cyan/50 hover:bg-accent-cyan/10"
          >
            <FaGithub className="text-lg text-text-secondary group-hover:text-accent-cyan transition-colors" />
            <span className="group-hover:text-text-primary transition-colors">{t('github')}</span>
          </a>

          <div className="flex flex-col items-center md:items-end gap-2 text-sm text-text-secondary/50 text-center md:text-right">
            <p>{CAFECA_COPYRIGHT}</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
