"use client";
import React from 'react';
import { useTranslations } from '@/hooks/use_translations';

const Vision: React.FC = () => {
  const t = useTranslations('Vision');

  return (
    <section className="relative w-full border-t border-white/5 bg-bg-secondary py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="mb-8 text-3xl font-bold text-text-primary md:text-5xl">
              {t('title') || 'MIT vs. Global Standards'}
            </h2>
            <div className="mb-10 h-1 w-24 rounded-full bg-accent-cyan"></div>
            <p className="mb-8 text-lg leading-relaxed text-text-secondary">
              {t('description') || 'Built on decentralized architecture, deeply cultivating core AI financial accounting technologies. Rooted in Taiwan with a global vision, we provide self-developed AI financial infrastructure that rivals international leaders like Temenos, redefining the benchmark for high-performance FinTech.'}
            </p>
            <ul className="space-y-6">
              {['autonomous', 'performance', 'global', 'genAI'].map((key, index) => (
                <li key={index} className="flex items-center gap-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-cyan/10 text-accent-cyan">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-lg text-text-primary">{t(`points.${key}`)}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative h-[400px] w-full overflow-hidden rounded-2xl border border-white/5 bg-bg-primary/50 p-8 shadow-2xl backdrop-blur-sm">
            {/* Info: (20260202 - Luphia) Abstract visual for MIT vs Global */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative h-72 w-72">
                <div className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-accent-cyan/20"></div>
                <div className="absolute inset-8 rounded-full border border-accent-cyan/30"></div>
                {/* Info: (20260202 - Luphia) Center Glow */}
                <div className="absolute inset-0 flex items-center justify-center bg-accent-cyan/5 blur-3xl"></div>

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-black tracking-tighter text-text-primary">MIT</div>
                    <div className="mt-4 px-4 text-xs font-bold tracking-widest text-accent-cyan uppercase leading-loose">
                      {t('visualSubtitle') || 'MIT License & Made in Taiwan'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
