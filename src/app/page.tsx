import Navbar from '@/components/common/navbar';
import Footer from '@/components/common/footer';
import CTA from '@/components/landing_page/cta';

export default function Home() {
  return (
    <main className="flex min-h-screen grow flex-col items-center justify-center bg-[url('/elements/neon.png')] bg-contain bg-no-repeat">
      {/* Info: (20251105 - Julian) Navbar */}
      <Navbar />

      {/* Info: (20251105 - Julian) Body */}
      <div className="flex flex-1 flex-col">
        {/* Info: (20251105 - Julian) CTA */}
        <CTA />

        {/* Info: (20251106 - Julian) Service Overview */}
        <div className="grid grid-cols-3 grid-rows-2 gap-8 px-8 py-10"></div>
      </div>

      {/* Info: (20251105 - Julian) Footer */}
      <Footer />
    </main>
  );
}
