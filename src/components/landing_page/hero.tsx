"use client";

import React from 'react';
import { useTranslations } from '@/hooks/use_translations';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const t = useTranslations('Hero');

  return (
    <section className="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden bg-bg-primary px-4 pt-20">
      {/* Info: (20260123 - Luphia) Background Tech Effects */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none">

        {/* Info: (20260123 - Luphia) Geometric Core */}
        <div className="relative flex h-[800px] w-[800px] items-center justify-center opacity-60">

          {/* Info: (20260123 - Luphia) Ring 1 - Outer Slow Rotate */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <svg className="h-[600px] w-[600px]" viewBox="0 0 600 600">
              <circle cx="300" cy="300" r="299" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent-cyan/10" strokeDasharray="4 4" />
              <circle cx="300" cy="300" r="299" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent-cyan/30" strokeDasharray="100 500" strokeLinecap="round" />
            </svg>
          </motion.div>

          {/* Info: (20260123 - Luphia) Ring 2 - Middle Rev Rotate */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <svg className="h-[450px] w-[450px]" viewBox="0 0 450 450">
              <circle cx="225" cy="225" r="220" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent-cyan/20" />
              {/* Info: (20260123 - Luphia) Fiber optic pulse */}
              <motion.circle
                cx="225" cy="225" r="220"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-accent-cyan opacity-80"
                strokeDasharray="20 1400"
                strokeLinecap="round"
                animate={{ strokeDashoffset: -1420 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </svg>
          </motion.div>

          {/* Info: (20260123 - Luphia) Ring 3 - Inner Fast Rotate */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <svg className="h-[300px] w-[300px]" viewBox="0 0 300 300">
              <polygon points="150,10 290,150 150,290 10,150" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent-cyan/30" />
              <circle cx="150" cy="150" r="80" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent-cyan/10" />
            </svg>
          </motion.div>

          {/* Info: (20260123 - Luphia) Center Core Pulse */}
          <div className="absolute h-32 w-32 rounded-full bg-accent-cyan/10 blur-[40px] animate-pulse" />
          <div className="absolute h-20 w-20 rounded-full bg-gradient-to-br from-accent-cyan to-blue-600 blur-[20px] opacity-80" />

        </div>

        {/* Info: (20260123 - Luphia) Floating Data Labels */}
        <div className="absolute inset-0 overflow-hidden">
          {[
            { text: "Real-time Risk: 0.02%", top: "20%", left: "15%", delay: 0 },
            { text: "Auto-rebalance active", top: "15%", right: "20%", delay: 2 },
            { text: "Hyper-personalizing UX", bottom: "25%", left: "20%", delay: 4 },
            { text: "Latency: <1ms", bottom: "30%", right: "15%", delay: 1 },
            { text: "Zero-Knowledge Proof Verified", top: "40%", right: "10%", delay: 3 },
            { text: "Quantum-Resistant Layer", bottom: "15%", left: "30%", delay: 5 },
          ].map((label, i) => (
            <motion.div
              key={i}
              className="absolute flex items-center gap-2 rounded bg-black/40 px-3 py-1 text-[10px] font-mono text-accent-cyan/70 backdrop-blur-md border border-accent-cyan/20"
              style={{ top: label.top, left: label.left, right: label.right, bottom: label.bottom }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: [0, 1, 1, 0], scale: [0.9, 1, 1, 0.9] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatDelay: ((i + 1) * 1.3) % 5 + 2,
                delay: label.delay,
                times: [0, 0.1, 0.8, 1]
              }}
            >
              <div className="h-1.5 w-1.5 rounded-full bg-accent-cyan animate-pulse" />
              {label.text}
            </motion.div>
          ))}
        </div>

        <div className="absolute top-[-20%] right-[10%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,var(--color-accent-cyan)_0%,transparent_70%)] opacity-10 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,var(--color-accent-gold)_0%,transparent_70%)] opacity-5 blur-[80px]" />

        {/* Info: (20260123 - Luphia) Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />

        <div className="absolute inset-x-0 bottom-0 h-[300px] bg-gradient-to-t from-bg-primary to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        <div className="mb-8 inline-flex items-center rounded-full border border-accent-cyan/30 bg-accent-cyan/5 px-4 py-1.5 backdrop-blur-md transition-transform hover:scale-105">
          <span className="text-xs font-bold tracking-[0.2em] text-accent-cyan uppercase">CAFECA Fintech</span>
        </div>

        <h1 className="mb-8 text-5xl font-bold leading-tight tracking-tight text-text-primary md:text-7xl lg:text-8xl">
          <span className="block bg-gradient-to-r from-text-primary via-text-primary to-text-secondary bg-clip-text text-transparent">
            {t('headline')}
          </span>
        </h1>

        <p className="mx-auto mb-12 max-w-2xl text-lg font-light leading-relaxed text-text-secondary md:text-xl">
          {t('subheadline')}
        </p>

        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
          <button
            onClick={() => window.location.href = 'mailto:contact@cafeca.com.tw'}
            className="group relative overflow-hidden rounded-full bg-accent-cyan px-10 py-4 text-sm font-bold tracking-wider text-bg-primary transition-all hover:bg-accent-cyan-dim hover:shadow-[0_0_30px_rgba(0,229,255,0.3)] hover:-translate-y-1"
          >
            <span className="relative z-10">{t('ctaPrimary')}</span>
          </button>

          <button
            onClick={() => document.getElementById('partnership')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative overflow-hidden rounded-full border border-accent-cyan/30 bg-transparent px-10 py-4 text-sm font-bold tracking-wider text-accent-cyan transition-all hover:border-accent-cyan hover:bg-accent-cyan/5 hover:-translate-y-1"
          >
            <span className="relative z-10">{t('ctaSecondary')}</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
