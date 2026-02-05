"use client";

import React from 'react';
import { useTranslations } from '@/hooks/use_translations';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const t = useTranslations('Hero');

  return (
    <section className="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden bg-bg-primary px-4 pt-20">
      {/* Info: (20260123 - Luphia) Background Tech Effects */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none overflow-hidden" style={{ perspective: '1000px' }}>

        {/* Info: (20260203 - Luphia) 3D Geometric Core */}
        <motion.div
          className="relative flex h-[600px] w-[600px] items-center justify-center"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateY: 360, rotateX: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          {/* Info: (20260203 - Luphia) Ring 1 - Outer Orbital */}
          <motion.div
            className="absolute inset-0 rounded-full border border-accent-cyan/20 shadow-[0_0_15px_rgba(0,229,255,0.1)]"
            style={{ transformStyle: "preserve-3d" }}
            animate={{ rotateX: 360, rotateY: 180, rotateZ: 90 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute top-0 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-cyan shadow-[0_0_10px_rgba(0,229,255,0.8)]" />
          </motion.div>

          {/* Info: (20260203 - Luphia) Ring 2 - Middle Diagonal */}
          <motion.div
            className="absolute inset-[10%] rounded-full border border-accent-cyan/30"
            style={{ transformStyle: "preserve-3d" }}
            animate={{ rotateX: 180, rotateY: 360, rotateZ: 45 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear", repeatType: "reverse" }}
          >
            <div className="absolute bottom-1/4 right-0 h-1.5 w-1.5 rounded-full bg-accent-gold shadow-[0_0_8px_rgba(255,215,0,0.8)]" />
          </motion.div>

          {/* Info: (20260203 - Luphia) Ring 3 - Inner Fast */}
          <motion.div
            className="absolute inset-[25%] rounded-full border border-accent-cyan/40 border-dashed"
            style={{ transformStyle: "preserve-3d" }}
            animate={{ rotateX: -360, rotateY: -180 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />

          {/* Info: (20260203 - Luphia) Ring 4 - Vertical Axis */}
          <motion.div
            className="absolute inset-[15%] rounded-full border-[0.5px] border-accent-gold/20"
            style={{ transformStyle: "preserve-3d" }}
            animate={{ rotateY: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />

          {/* Info: (20260203 - Luphia) Core - Energy Sphere */}
          <div className="absolute h-24 w-24 rounded-full bg-radial-gradient from-accent-cyan via-blue-500 to-transparent blur-[2px] opacity-90 shadow-[0_0_50px_rgba(0,229,255,0.6)] animate-pulse" style={{ background: 'radial-gradient(circle, rgba(0,229,255,0.8) 0%, rgba(0,229,255,0.1) 70%, transparent 100%)' }}>
            <div className="absolute inset-0 animate-ping rounded-full bg-accent-cyan/20 blur-md"></div>
          </div>
        </motion.div>

        {/* Info: (20260123 - Luphia) Floating Data Labels - Kept for context layer but pushed back */}
        <div className="absolute inset-0 overflow-hidden" style={{ transform: 'translateZ(-100px)' }}>
          {[
            { text: t('floatingLabels.realTimeRisk'), top: "20%", left: "15%", delay: 0 },
            { text: t('floatingLabels.autoRebalance'), top: "15%", right: "20%", delay: 2 },
            { text: t('floatingLabels.hyperPersonalizing'), bottom: "25%", left: "20%", delay: 4 },
            { text: t('floatingLabels.latency'), bottom: "30%", right: "15%", delay: 1 },
            { text: t('floatingLabels.zkProof'), top: "40%", right: "10%", delay: 3 },
            { text: t('floatingLabels.homomorphicEncryption'), bottom: "15%", left: "30%", delay: 5 },
          ].map((label, i) => (
            <motion.div
              key={i}
              className="absolute flex items-center gap-2 rounded bg-black/40 px-3 py-1 text-[10px] font-mono text-accent-cyan/70 backdrop-blur-md border border-accent-cyan/20"
              style={{ top: label.top, left: label.left, right: label.right, bottom: label.bottom }}
              initial={{ opacity: 0, scale: 0.9, z: -50 }}
              animate={{ opacity: [0, 1, 1, 0], scale: [0.9, 1, 1, 0.9], z: [0, 50, 0, -50] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatDelay: ((i + 1) * 1.5) % 5 + 2,
                delay: label.delay,
                times: [0, 0.2, 0.8, 1]
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
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 mask-image-gradient-to-b" />

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
