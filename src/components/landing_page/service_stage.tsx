'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import FadeIn from '@/components/animations/fade_in';

const ServiceStage: React.FC = () => {
  const t = useTranslations('ServiceStage');

  const stages = [
    { key: 'stage1', icon: '/icons/box_seam_fill.svg', iconBg: 'bg-white' },
    { key: 'stage2', icon: '/icons/badge_check.svg', iconBg: 'bg-white' },
    { key: 'stage3', icon: '/icons/rocket_sharp.svg', iconBg: 'bg-white' },
  ];

  return (
    <div className="z-10 flex flex-col gap-12 px-4 py-[60px] md:gap-20 md:px-8 md:py-[120px]">
      {/* Title */}
      <FadeIn className="z-10 flex flex-col items-center gap-2 md:items-start">
        <p className="text-text-brand text-20px uppercase tracking-widest">{t('label')}</p>
        <h2 className="text-text-primary text-center text-3xl font-bold md:text-left md:text-48px">{t('title')}</h2>
      </FadeIn>

      <div className="relative mx-auto flex max-w-[1200px] flex-col gap-10 md:flex-row md:items-start md:gap-0">
        {/* Connecting Line (Desktop) */}
        <div className="absolute top-[60px] left-0 hidden h-[2px] w-full bg-linear-to-r from-transparent via-brand-brand-purple-300 to-transparent md:block opacity-30"></div>
        {/* Connecting Line (Mobile) */}
        <div className="absolute top-0 left-[60px] block h-full w-[2px] bg-linear-to-b from-transparent via-brand-brand-purple-300 to-transparent md:hidden opacity-30"></div>

        {stages.map((stage, index) => (
          <div key={stage.key} className="relative z-10 flex flex-1 flex-row items-start gap-6 md:flex-col md:items-center md:gap-8 md:text-center">
            {/* Icon */}
            <FadeIn delay={index * 0.2} className="shrink-0">
              <div className={`flex h-[120px] w-[120px] items-center justify-center rounded-full bg-white shadow-lg shadow-brand-brand-purple-500/10`}>
                <Image src={stage.icon} alt={stage.key} width={60} height={60} className="object-contain" />
              </div>
            </FadeIn>

            {/* Content */}
            <FadeIn delay={index * 0.2 + 0.1} className="flex flex-col gap-3 pt-4 md:pt-0 md:px-4">
              <h3 className="text-text-primary text-xl font-bold md:text-2xl min-h-[64px] flex items-center md:justify-center">
                {t(`${stage.key}.title`)}
              </h3>
              <p className="text-text-secondary text-base leading-relaxed">
                {t(`${stage.key}.description`)}
              </p>
            </FadeIn>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceStage;
