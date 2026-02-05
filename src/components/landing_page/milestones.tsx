"use client";
import React from 'react';
import { useTranslations } from '@/hooks/use_translations';
import { FaRocket, FaBuilding, FaCheck } from 'react-icons/fa6';

const Milestones: React.FC = () => {
  const t = useTranslations('Milestones');

  const stages = [
    {
      id: "stage1",
      icon: <FaBuilding />,
      status: "current"
    },
    {
      id: "stage2",
      icon: <FaCheck />,
      status: "upcoming"
    },
    {
      id: "stage3",
      icon: <FaRocket />,
      status: "upcoming"
    }
  ];

  return (
    <section className="bg-bg-secondary py-24 px-6 border-t border-white/5 relative overflow-hidden">
      <div className="mx-auto max-w-6xl relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-text-primary md:text-5xl">{t('title')}</h2>
          <p className="mt-4 text-text-secondary mx-auto max-w-2xl">
            {t('subtitle')}
          </p>
        </div>

        <div className="relative">
          {/* Info: (20260202 - Luphia) Connecting Line */}
          <div className="absolute top-8 left-0 w-full h-1 bg-white/10 hidden md:block"></div>

          <div className="grid md:grid-cols-3 gap-12">
            {stages.map((stage, index) => {
              const isCurrent = stage.status === "current";

              return (
                <div key={stage.id} className={`relative flex flex-col items-center text-center group ${isCurrent ? 'opacity-100' : 'opacity-70 hover:opacity-100 transition-opacity'}`}>
                  {/* Info: (20260202 - Luphia) Icon Node */}
                  <div className={`
                    w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-6 relative z-10 border-4
                    ${isCurrent
                      ? 'bg-bg-primary border-accent-cyan text-accent-cyan shadow-[0_0_30px_rgba(0,229,255,0.3)]'
                      : 'bg-bg-tertiary border-white/10 text-text-secondary'}
                    transition-all duration-300
                  `}>
                    {stage.icon}
                  </div>

                  {/* Info: (20260202 - Luphia) Content */}
                  <div className="bg-bg-primary/50 backdrop-blur-sm p-6 rounded-2xl border border-white/5 w-full h-full hover:border-accent-cyan/20 transition-colors">
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <span className="text-sm font-mono text-accent-cyan uppercase tracking-wider">Stage {index + 1}</span>
                      {isCurrent && (
                        <span className="bg-accent-cyan/20 text-accent-cyan text-[10px] font-bold px-2 py-0.5 rounded-full">
                          {t('currentBranch')}
                        </span>
                      )}
                    </div>

                    <h3 className={`text-xl font-bold mb-3 ${isCurrent ? 'text-text-primary' : 'text-text-secondary'}`}>
                      {t(`${stage.id}.title`)}
                    </h3>

                    <p className="text-sm text-text-secondary leading-relaxed">
                      {t(`${stage.id}.desc`)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestones;
