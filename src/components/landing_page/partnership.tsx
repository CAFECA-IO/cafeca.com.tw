"use client";
import React from 'react';
import { useTranslations } from '@/hooks/use_translations';
import { FaRocket } from 'react-icons/fa6';

const Partnership: React.FC = () => {
  const t = useTranslations('SandboxCTA');

  return (
    <section id="partnership" className="relative w-full overflow-hidden bg-bg-secondary py-24 px-6">
      {/* Info: (20260202 - Luphia) Background Decor - Gradient Mesh */}
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(ellipse_at_center,var(--color-accent-cyan)_0%,transparent_70%)] opacity-20 blur-[100px]"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl rounded-3xl border border-white/5 bg-bg-primary/80 p-8 text-center shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-md md:p-16">
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-cyan to-bg-primary shadow-lg ring-1 ring-white/10">
          <FaRocket className="text-white text-3xl" />
        </div>

        <h2 className="mb-6 text-3xl font-bold text-text-primary md:text-5xl">
          {t('headline') || 'Shape the Future of Capital Markets'}
        </h2>

        <p className="mx-auto mb-12 max-w-2xl text-lg text-text-secondary leading-relaxed whitespace-pre-line">
          {t('subheadline') || 'We are seeking licensed Securities, Banks, or Trust firms to co-apply for our Blockchain-based Convertible Bond Issuance & Exchange Platform.'}
        </p>

        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
          <button
            onClick={() => window.location.href = 'mailto:contact@cafeca.com.tw'}
            className="rounded-full bg-accent-cyan px-10 py-4 text-base font-bold text-bg-primary shadow-[0_0_30px_rgba(0,229,255,0.3)] transition-transform hover:scale-105 hover:bg-accent-cyan-dim"
          >
            {t('ctaButton') || 'Join the Sandbox Experiment'}
          </button>
        </div>

        <p className="mt-8 text-xs font-medium tracking-wide text-text-secondary/60">
          Limited spots available for the 2025-2026 Regulatory Sandbox cohort.
        </p>
      </div>
    </section>
  );
};

export default Partnership;
