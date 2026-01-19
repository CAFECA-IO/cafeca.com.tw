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
      icon: <FaRobot size={32} className="text-brand-brand-purple-500" />,
      isImage: false
    },
    {
      key: 'tidebit',
      url: 'https://tidebit-defi.com',
      icon: <FaWallet size={32} className="text-brand-brand-blud-500" />,
      isImage: false
    },
    {
      key: 'gringotts',
      url: 'https://gringotts.tidebit-defi.com',
      icon: <FaShieldHalved size={32} className="text-state-warn" />,
      isImage: false
    },
    {
      key: 'isuncloud',
      url: 'https://isuncloud.com',
      icon: <FaCloud size={32} className="text-brand-brand-blud-300" />,
      isImage: false
    },
    {
      key: 'baifa',
      url: 'https://baifa.io',
      icon: <FaRobot size={32} className="text-state-link" />,
      isImage: false
    },
  ];

  return (
    <div className="relative z-10 flex flex-col items-center gap-10 py-[60px] px-4 md:py-[100px] md:px-8">
      {/* Title */}
      <FadeIn className="flex flex-col items-center gap-2">
        <p className="text-text-brand text-sm font-bold uppercase tracking-[0.2em]">{t('label')}</p>
        <h2 className="text-text-primary text-center text-3xl md:text-4xl font-bold">{t('title')}</h2>
      </FadeIn>

      {/* Product Grid */}
      <div className="grid w-full max-w-[1200px] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => (
          <FadeIn key={product.key} delay={index * 0.1} className="h-full">
            <Link
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-full flex-col gap-5 rounded-2xl border border-white/40 bg-white/40 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-brand-brand-purple-200 hover:bg-white/60 hover:shadow-[0_8px_30px_rgba(181,49,253,0.1)]"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-black/5">
                  {product.isImage ? (
                    <Image src={product.icon as string} alt={t(`${product.key}.title`)} width={32} height={32} className="object-contain" />
                  ) : (
                    product.icon
                  )}
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/50 text-text-secondary transition-all duration-300 group-hover:bg-brand-brand-purple-500 group-hover:text-white">
                  <FaArrowRight size={14} className="opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-text-primary text-xl font-bold tracking-tight group-hover:text-brand-brand-purple-600 transition-colors">
                  {t(`${product.key}.title`)}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
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
