"use client";
import React from 'react';
import { useTranslations } from '@/hooks/use_translations';

import { motion } from 'framer-motion';

const Vision: React.FC = () => {
  const t = useTranslations('Vision');

  return (
    <section className="relative w-full border-t border-white/5 bg-bg-secondary py-16 lg:py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">

          {/* Info: (20260203 - Luphia) Content Side */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6 text-3xl font-bold leading-tight text-text-primary md:text-4xl lg:text-5xl">
                {t('title') || 'MIT vs. Global Standards'}
              </h2>
              <div className="mb-8 h-1 w-20 rounded-full bg-gradient-to-r from-accent-cyan to-blue-600"></div>

              <p className="mb-8 text-base leading-relaxed text-text-secondary md:text-lg">
                {t('description') || 'Built on decentralized architecture, deeply cultivating core AI financial accounting technologies. Rooted in Taiwan with a global vision, we provide self-developed AI financial infrastructure that rivals international leaders like Temenos, redefining the benchmark for high-performance FinTech.'}
              </p>

              <ul className="space-y-4 sm:space-y-6">
                {['autonomous', 'performance', 'global', 'genAI'].map((key, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-cyan/10 text-accent-cyan ring-1 ring-accent-cyan/20">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-base font-medium text-text-primary md:text-lg">{t(`points.${key}`)}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Info: (20260203 - Luphia) Visual Side */}
          <div className="order-1 lg:order-2">
            <div className="relative aspect-square w-full max-w-[500px] mx-auto overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-bg-primary/80 to-bg-primary/40 p-1 shadow-2xl backdrop-blur-md">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,229,255,0.05),transparent_70%)]" />

              <div className="relative flex h-full w-full items-center justify-center rounded-[20px] bg-bg-primary/30 overflow-hidden">
                {/* Info: (20260203 - Luphia) Grid Background */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />

                {/* Info: (20260203 - Luphia) Animated Rings */}
                <div className="relative h-48 w-48 sm:h-64 sm:w-64 md:h-80 md:w-80">
                  {/* Info: (20260203 - Luphia) Ring 1 */}
                  <motion.div
                    className="absolute inset-0 rounded-full border border-dashed border-accent-cyan/30"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  />

                  {/* Info: (20260203 - Luphia) Ring 2 */}
                  <motion.div
                    className="absolute inset-4 rounded-full border border-accent-cyan/10"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="absolute top-0 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-cyan shadow-[0_0_10px_rgba(0,229,255,0.5)]" />
                  </motion.div>

                  {/* Info: (20260203 - Luphia) Ring 3 - Oval */}
                  <motion.div
                    className="absolute inset-[-10%] rounded-full border border-accent-gold/10"
                    style={{ borderRadius: "40%" }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  />

                  {/* Info: (20260203 - Luphia) Center Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.8 }}
                      className="text-center"
                    >
                      <h3 className="text-5xl font-black tracking-tighter text-text-primary sm:text-6xl md:text-7xl drop-shadow-lg">
                        MIT
                      </h3>
                      <div className="mt-2 text-[10px] font-bold tracking-[0.3em] text-accent-cyan uppercase sm:text-xs">
                        {t('visualSubtitle') || 'License'}
                      </div>
                    </motion.div>
                  </div>

                  {/* Info: (20260203 - Luphia) Glow Effects */}
                  <div className="absolute inset-1/4 bg-accent-cyan/20 blur-[60px] animate-pulse" />
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
