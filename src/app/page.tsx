import Image from 'next/image';
import Navbar from '@/components/common/navbar';
import Footer from '@/components/common/footer';
import CTA from '@/components/landing_page/cta';
import ServiceOverview from '@/components/landing_page/service_overview';
import ServiceStage from '@/components/landing_page/service_stage';

export default function Home() {
  return (
    <main className="bg-surface-background flex min-h-screen grow flex-col items-center justify-center bg-[url('/elements/neon.png')] bg-contain bg-top bg-no-repeat">
      {/* Info: (20251105 - Julian) Navbar */}
      <Navbar />

      {/* Info: (20251105 - Julian) Body */}
      <div className="relative flex flex-1 flex-col">
        {/* Info: (20251105 - Julian) CTA */}
        <CTA />

        <div className="absolute top-[250px] z-0 h-[700px] w-full">
          <Image src="/elements/lines.png" alt="wave_background" fill objectFit="cover" />
        </div>

        {/* Info: (20251106 - Julian) Service Overview */}
        <ServiceOverview />

        {/* Info: (20251106 - Julian) Service Stage */}
        <ServiceStage />
      </div>

      {/* Info: (20251105 - Julian) Footer */}
      <Footer />
    </main>
  );
}
