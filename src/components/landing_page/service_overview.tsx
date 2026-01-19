import React from 'react';
import Image from 'next/image';

import { useTranslations } from 'next-intl';
import FadeIn from '@/components/animations/fade_in';

const ServiceOverview: React.FC = () => {
  const t = useTranslations('ServiceOverview');

  const features = [
    { order: 1, key: 'auth', image: '/services/finger_print.png' },
    { order: 2, key: 'registration', image: '/services/license.png' },
    { order: 3, key: 'accounting', image: '/services/accounting.png' },
    { order: 4, key: 'tokenization', image: '/services/north_korean_won.png' },
    { order: 5, key: 'governance', image: '/services/smart_contract.png' },
    { order: 6, key: 'finance', image: '/services/financial_institute.png' },
  ];

  const serviceTickets = features.map((feature, index) => (
    <FadeIn
      key={feature.order}
      delay={index * 0.1}
      className="h-full"
    >
      <div
        className="flex h-full flex-col items-center gap-[20px] rounded-[30px] border border-white/75 bg-linear-to-t from-white/10 to-white/70 py-5 backdrop-blur-3xl transition-all duration-300 hover:scale-105 hover:bg-white/80 hover:shadow-[0_0_30px_rgba(181,49,253,0.3)]"
      >
        <Image
          src={feature.image}
          alt={t(`features.${feature.key}.title`)}
          width={150}
          height={150}
          className="shrink-0 drop-shadow-lg"
        />
        <div className="text-text-primary flex flex-col gap-2 px-6 py-3 text-center">
          <h3 className="text-20px font-bold">{t(`features.${feature.key}.title`)}</h3>
          <p className="text-16px font-normal whitespace-pre-line text-text-secondary text-left">{t(`features.${feature.key}.description`)}</p>
        </div>
      </div>
    </FadeIn>
  ));

  return (
    <div className="relative z-10 flex flex-col items-center justify-center gap-8 py-10 md:py-16">
      {/* Info: (20251106 - Julian) Ring background */}
      <div className="absolute z-0 opacity-50 animate-pulse duration-[10000ms]">
        <Image src="/elements/ring.png" alt="ring_background" width={900} height={900} />
      </div>

      {/* Info: (20251106 - Julian) Title */}
      <FadeIn className="z-10 flex flex-col items-center gap-2 font-bold">
        <p className="text-text-brand text-sm font-bold uppercase tracking-[0.2em]">{t('label')}</p>
        <h2 className="text-text-primary text-center text-3xl md:text-4xl font-bold">{t('title')}</h2>
      </FadeIn>

      {/* Info: (20251106 - Julian) Features Grid */}
      <div className="z-10 grid grid-cols-1 gap-4 px-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 lg:px-8 max-w-[1200px]">
        {serviceTickets}
      </div>
    </div>
  );
};

export default ServiceOverview;
