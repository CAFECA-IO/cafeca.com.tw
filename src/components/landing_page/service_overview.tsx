import React from 'react';
import Image from 'next/image';

import { useTranslations } from 'next-intl';

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

  const serviceTickets = features.map((feature) => (
    <div
      key={feature.order}
      className="flex flex-col items-center gap-[20px] rounded-[30px] border border-white/75 bg-linear-to-t from-white/10 to-white/70 py-5 bg-blend-overlay backdrop-blur-3xl"
    >
      <Image
        src={feature.image}
        alt={t(`features.${feature.key}.title`)}
        width={150}
        height={150}
        className="shrink-0"
      />
      <div className="text-text-primary flex flex-col gap-2 px-2 py-3">
        <h3 className="text-20px font-bold">{t(`features.${feature.key}.title`)}</h3>
        <p className="text-16px font-normal whitespace-pre-line">{t(`features.${feature.key}.description`)}</p>
      </div>
    </div>
  ));

  return (
    <div className="relative z-10 flex flex-col items-center justify-center gap-8 py-10">
      {/* Info: (20251106 - Julian) Ring background */}
      <div className="absolute z-0 opacity-50">
        <Image src="/elements/ring.png" alt="ring_background" width={900} height={900} />
      </div>

      {/* Info: (20251106 - Julian) Title */}
      <div className="z-10 flex flex-col items-center gap-1 font-bold">
        <p className="text-text-brand text-20px uppercase">{t('label')}</p>
        <h2 className="text-text-primary text-48px">{t('title')}</h2>
      </div>
      {/* Info: (20251106 - Julian) Features Grid */}
      <div className="z-10 grid grid-cols-3 grid-rows-2 gap-[60px] px-8">{serviceTickets}</div>
    </div>
  );
};

export default ServiceOverview;
