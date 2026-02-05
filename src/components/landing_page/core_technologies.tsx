"use client";
import React from 'react';
import { useTranslations } from '@/hooks/use_translations';
import { FaFingerprint, FaLock, FaNetworkWired, FaBrain } from 'react-icons/fa6';

const CoreTechnologies: React.FC = () => {
  const t = useTranslations('TechPillars');

  const pillars = [
    {
      id: 'identity',
      icon: <FaFingerprint className="text-accent-cyan h-10 w-10" />,
      title: t('pillar1Title') || 'Digital Identity',
      desc: t('pillar1Desc') || 'FIDO2 Biometrics & Multi-factor Authentication.',
    },
    {
      id: 'alohomora',
      icon: <FaLock className="text-accent-cyan h-10 w-10" />,
      title: t('pillar2Title') || 'Alohomora',
      desc: t('pillar2Desc') || 'Homomorphic Encryption for secure data utilization.',
    },
    {
      id: 'locutus',
      icon: <FaNetworkWired className="text-accent-cyan h-10 w-10" />,
      title: t('pillar3Title') || 'Locutus',
      desc: t('pillar3Desc') || 'Edge Computing powering decentralized infrastructure.',
    },
    {
      id: 'faith',
      icon: <FaBrain className="text-accent-cyan h-10 w-10" />,
      title: t('pillar4Title') || 'FAITH AI',
      desc: t('pillar4Desc') || 'Multi-modal Accounting Intelligence Model.',
    },
  ];

  return (
    <section className="bg-bg-primary py-12 sm:py-24 px-4 sm:px-6 relative z-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 md:mb-20 text-center">
          <h2 className="text-3xl font-bold text-text-primary md:text-5xl lg:text-6xl">
            {t('title') || 'Core Technologies'}
          </h2>
          <p className="mt-4 md:mt-6 text-base md:text-xl text-text-secondary font-light">
            {t('subtitle') || 'Building blocks of the next-gen financial ecosystem.'}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-8 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-bg-secondary p-4 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:border-accent-cyan/30 hover:shadow-[0_0_40px_rgba(0,229,255,0.15)]"
            >
              <div className="mb-4 sm:mb-8 inline-flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-accent-cyan/10 transition-colors group-hover:bg-accent-cyan/20">
                <div className="scale-75 sm:scale-100 transform transition-transform">
                  {pillar.icon}
                </div>
              </div>

              <h3 className="mb-2 sm:mb-4 text-sm sm:text-xl font-bold text-text-primary group-hover:text-accent-cyan transition-colors">
                {pillar.title}
              </h3>

              <p className="text-xs sm:text-sm leading-relaxed text-text-secondary">
                {pillar.desc}
              </p>

              {/* Info: (20260202 - Luphia) Hover Glow Effect */}
              <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-accent-cyan/5 blur-3xl transition-all duration-500 group-hover:bg-accent-cyan/10"></div>
            </div>
          ))}
        </div>
      </div>
    </section >
  );
};

export default CoreTechnologies;
