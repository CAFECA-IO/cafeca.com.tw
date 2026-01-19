import Image from 'next/image';
import Navbar from '@/components/common/navbar';
import Footer from '@/components/common/footer';
import CTA from '@/components/landing_page/cta';
import ServiceOverview from '@/components/landing_page/service_overview';
import ServiceStage from '@/components/landing_page/service_stage';
import OurProducts from '@/components/landing_page/our_products';

export default function Home() {
  return (
    <main className="bg-surface-background relative flex min-h-screen grow flex-col items-center justify-center">
      {/* Info: (20251106 - Julian) Rectangle neon background */}
      <div className="absolute top-0 z-0 h-[500px] w-full md:h-[800px]">
        <Image src="/elements/rectangle.png" alt="neon_background" fill className="object-cover" />
      </div>

      {/* Info: (20251105 - Julian) Navbar */}
      <Navbar />

      {/* Info: (20251105 - Julian) Body */}
      <div className="relative flex flex-1 flex-col">
        {/* Info: (20251105 - Julian) CTA */}
        <CTA />

        {/* Info: (20251106 - Julian) Wave shape background */}
        <div className="absolute top-[250px] -z-10 hidden h-[700px] w-full md:block">
          <Image src="/elements/lines.png" alt="wave_background" fill className="object-cover" />
        </div>

        {/* Info: (20251106 - Julian) Service Overview */}
        <ServiceOverview />

        {/* Info: (20251106 - Julian) Wave shape background */}
        <div className="absolute bottom-[350px] -z-10 hidden h-[700px] w-full -scale-x-100 md:block">
          <Image src="/elements/lines.png" alt="wave_background" fill className="object-cover" />
        </div>

        {/* Info: (20251106 - Julian) Service Stage */}
        <ServiceStage />

        {/* Info: (20250119 - Julian) Our Products */}
        <OurProducts />
      </div>

      {/* Info: (20251105 - Julian) Footer */}
      <Footer />
    </main>
  );
}
