import React from 'react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa6';
import { useTranslations } from 'next-intl';

const ServiceStage: React.FC = () => {
  const t = useTranslations('ServiceStage');

  return (
    <div className="z-10 flex flex-col gap-8 px-8 py-[120px]">
      {/* Info: (20251106 - Julian) Title */}
      <div className="z-10 flex flex-col items-start gap-1 font-bold">
        <p className="text-text-brand text-20px uppercase">{t('label')}</p>
        <h2 className="text-text-primary text-48px">{t('title')}</h2>
      </div>

      {/* Info: (20251106 - Julian) Stages */}
      <div className="bg-surface-primary grid grid-cols-8 items-center rounded-[30px] px-6 py-[60px] shadow-[0px_50px_70px_-20px_#5D5D7B26]">
        {/* Info: (20251106 - Julian) Stage 1: Financial Regulatory Sandbox */}
        <div className="col-span-2 flex flex-col items-center gap-[60px]">
          <Image src="/icons/box_seam_fill.svg" alt="stage_1" width={120} height={120} />
          <p className="text-text-primary text-center text-lg font-bold">
            {t('stage1')}
          </p>
        </div>

        {/* Info: (20251106 - Julian) Arrow between 1st and 2nd stage */}
        <div className="text-brand-brand-blud-500 mx-auto">
          <FaArrowRight size={80} />
        </div>

        {/* Info: (20251106 - Julian) Stage 2: License Acquisition & Expanded Testing Scope */}
        <div className="col-span-2 flex flex-col items-center gap-[60px]">
          <Image src="/icons/badge_check.svg" alt="stage_2" width={120} height={120} />
          <p className="text-button-disable text-center text-lg font-bold">
            {t('stage2')}
          </p>
        </div>

        {/* Info: (20251106 - Julian) Arrow between 2nd and 3rd stage */}
        <div className="text-button-disable mx-auto">
          <FaArrowRight size={80} />
        </div>

        {/* Info: (20251106 - Julian) Stage 3: Official Launch */}
        <div className="col-span-2 flex flex-col items-center gap-[60px]">
          <Image src="/icons/rocket_sharp.svg" alt="stage_1" width={120} height={120} />
          <p className="text-button-disable text-center text-lg font-bold">{t('stage3')}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceStage;
