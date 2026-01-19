'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import FadeIn from '@/components/animations/fade_in';
import { FaArrowRight, FaRobot, FaCloud, FaWallet, FaShieldHalved } from 'react-icons/fa6';

const OurProducts: React.FC = () => {
  const t = useTranslations('OurProducts');

  const products = [
    {
      key: 'cafeca',
      url: 'https://cafeca.io',
      icon: '/logo/cafeca_icon.svg',
      isImage: true
    },
    {
      key: 'isunfa',
      url: 'https://newtaipei.isunfa.com',
      icon: <FaRobot size={40} className="text-brand-brand-purple-500" />,
      isImage: false
    },
    {
      key: 'tidebit',
      url: 'https://tidebit-defi.com',
      icon: <FaWallet size={40} className="text-brand-brand-blud-500" />,
      isImage: false
    },
    {
      key: 'gringotts',
      url: 'https://gringotts.tidebit-defi.com',
      icon: <FaShieldHalved size={40} className="text-state-warn" />,
      isImage: false
    },
    {
      key: 'isuncloud',
      url: 'https://isuncloud.com',
      icon: <FaCloud size={40} className="text-brand-brand-blud-300" />,
      isImage: false
    },
    {
      key: 'baifa',
      url: 'https://baifa.io',
      icon: <FaRobot size={40} className="text-state-link" />,
      isImage: false
    },
  ];

  return (
    <div className="relative z-10 flex flex-col items-center gap-10 py-[60px] px-4 md:py-[120px] md:px-8">
      {/* Title */}
      <FadeIn className="flex flex-col items-center gap-2">
        <p className="text-text-brand text-20px uppercase tracking-widest">{t('label')}</p>
        <h2 className="text-text-primary text-center text-3xl md:text-48px font-bold">{t('title')}</h2>
      </FadeIn>

      {/* Product Grid */}
      <div className="grid w-full max-w-[1200px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => (
          <FadeIn key={product.key} delay={index * 0.1} className="h-full">
            <Link
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-full flex-col gap-6 rounded-[30px] border border-white/50 bg-white/30 p-8 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:bg-white/60 hover:shadow-[0_0_30px_rgba(181,49,253,0.15)]"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-[60px] w-[60px] items-center justify-center rounded-2xl bg-white shadow-sm">
                  {product.isImage ? (
                    <Image src={product.icon as string} alt={t(`${product.key}.title`)} width={40} height={40} className="object-contain" />
                  ) : (
                    product.icon
                  )}
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/50 text-text-brand opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <FaArrowRight size={16} />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-text-primary text-2xl font-bold group-hover:text-brand-brand-purple-500 transition-colors">
                  {t(`${product.key}.title`)}
                </h3>
                <p className="text-text-secondary text-base leading-relaxed">
                  {t(`${product.key}.description`)}
                </p>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
