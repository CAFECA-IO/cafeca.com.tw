"use client";
import React from 'react';
import { useTranslations } from '@/hooks/use_translations';
import { FaFingerprint, FaRobot, FaRightLeft, FaFileContract, FaChartLine, FaCloud } from 'react-icons/fa6';

const Ecosystem: React.FC = () => {
  const t = useTranslations('Ecosystem');

  return (
    <section className="bg-bg-primary py-24 px-6 relative overflow-hidden">
      {/* Info: (20260202 - Luphia) Background Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(var(--color-accent-cyan)_1px,transparent_1px),linear-gradient(90deg,var(--color-accent-cyan)_1px,transparent_1px)] opacity-[0.03] bg-[size:40px_40px]"></div>

      <div className="mx-auto max-w-6xl relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-text-primary md:text-5xl">{t('title')}</h2>
          <p className="mt-4 text-text-secondary mx-auto max-w-2xl">
            {t('description')}
          </p>
        </div>

        <div className="relative">
          {/* Info: (20260202 - Luphia) Central Node */}
          <div className="flex justify-center mb-12">
            <div className="relative h-40 w-40 rounded-full bg-accent-cyan/10 border border-accent-cyan flex items-center justify-center shadow-[0_0_50px_rgba(0,229,255,0.2)]">
              <div className="text-center">
                <span className="block text-2xl font-bold text-text-primary">CAFECA</span>
                <span className="text-xs text-accent-cyan">CORE</span>
              </div>
              {/* Info: (20260202 - Luphia) Connecting Lines (Visual Only - CSS) */}
              <div className="absolute top-1/2 left-full w-24 h-[1px] bg-gradient-to-r from-accent-cyan to-transparent hidden md:block"></div>
              <div className="absolute top-1/2 right-full w-24 h-[1px] bg-gradient-to-l from-accent-cyan to-transparent hidden md:block"></div>
            </div>
          </div>

          {/* Info: (20260202 - Luphia) Satellites */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: "cafeca", icon: <FaFingerprint />, link: "https://cafeca.io" },
              { id: "isunfa", icon: <FaRobot />, link: "https://isunfa.com" },
              { id: "tidebit", icon: <FaRightLeft />, link: "https://tidebit-defi.com" },
              { id: "gringotts", icon: <FaFileContract />, link: "https://gringotts.tidebit-defi.com" },
              { id: "baifa", icon: <FaChartLine />, link: "https://baifa.io" },
              { id: "isuncloud", icon: <FaCloud />, link: "https://isuncloud.com" }
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-bg-secondary/80 border border-white/5 backdrop-blur-md hover:border-accent-cyan/30 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="mb-4 text-accent-cyan text-3xl group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="font-bold text-text-primary mb-2 min-h-[3rem] items-center flex justify-center group-hover:text-accent-cyan transition-colors">{t(`nodes.${item.id}.title`)}</h3>
                <p className="text-xs text-text-secondary text-justify">{t(`nodes.${item.id}.desc`)}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
