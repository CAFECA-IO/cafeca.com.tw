import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const CTA: React.FC = () => {
  const t = useTranslations('CTA');
  return (
    <div className="relative z-10 flex min-h-[600px] flex-col items-center gap-10 px-6 py-20 md:flex-row md:px-8 md:py-0">
      <div className="flex w-full flex-col gap-5 md:w-1/2 lg:mr-[0px] lg:max-w-[600px]">
        <h1 className="text-text-primary text-4xl font-bold md:text-56px">
          {t('titlePrefix')} <span className="text-text-brand">{t('titleHighlight1')}</span> {t('titleConjunction')}{' '}
          <span className="text-text-brand">{t('titleHighlight2')}</span>
        </h1>
        <p className="text-20px-lg text-text-primary font-medium">
          {t('description')}
        </p>
      </div>
      <div className="relative h-[300px] w-full md:absolute md:right-0 md:h-[600px] md:w-2/3">
        <Image src="/elements/chain.png" alt="laptop_with_chain_img" fill className="object-contain" />
      </div>
    </div>
  );
};

export default CTA;
