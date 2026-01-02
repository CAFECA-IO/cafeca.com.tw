import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const CTA: React.FC = () => {
  const t = useTranslations('CTA');
  return (
    <div className="relative z-10 flex min-h-[600px] items-center px-8">
      <div className="mr-[750px] flex flex-col gap-5">
        <h1 className="text-56px text-text-primary font-bold">
          {t('titlePrefix')} <span className="text-text-brand">{t('titleHighlight1')}</span> {t('titleConjunction')}{' '}
          <span className="text-text-brand">{t('titleHighlight2')}</span>
        </h1>
        <p className="text-20px-lg text-text-primary font-medium">
          {t('description')}
        </p>
      </div>
      <div className="absolute right-0 h-[600px] w-2/3">
        <Image src="/elements/chain.png" alt="laptop_with_chain_img" fill objectFit="contain" />
      </div>
    </div>
  );
};

export default CTA;
