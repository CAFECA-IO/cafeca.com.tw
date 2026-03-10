import React from 'react';
import MotionSection from '@/components/common/motion_section';
import Navbar from '@/components/common/navbar';
import Footer from '@/components/common/footer';
import Hero from '@/components/landing_page/hero';
import Vision from '@/components/landing_page/vision';
import CoreTechnologies from '@/components/landing_page/core_technologies';
import Ecosystem from '@/components/landing_page/ecosystem';
import Milestones from '@/components/landing_page/milestones';
import Partnership from '@/components/landing_page/partnership';
import Philosophy from '@/components/landing_page/philosophy';

export default function Home() {
  return (
    <main className="relative flex min-h-screen grow flex-col overflow-x-hidden">
      {/* Info: (20260123 - Luphia) Global Fixed Background Layer */}
      <div className="fixed inset-0 z-[-1] bg-bg-primary">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,var(--color-accent-cyan)_0%,transparent_50%)] opacity-5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-[radial-gradient(ellipse_at_bottom,var(--color-accent-gold)_0%,transparent_60%)] opacity-5 blur-[100px]" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay"></div>
      </div>

      {/* Info: (20260123 - Luphia) Navbar */}
      <Navbar />

      {/* Info: (20260123 - Luphia) Main Content Body */}
      <div className="flex flex-1 flex-col w-full">
        {/* Info: (20260123 - Luphia) Hero handles its own internal motion mostly, but we can wrap it for consistency or leave it 'above the fold' static-start -> animated */}
        <Hero />

        <MotionSection delay={0.2}>
          <Vision />
        </MotionSection>

        <MotionSection delay={0.1}>
          <CoreTechnologies />
        </MotionSection>

        <MotionSection>
          <Ecosystem />
        </MotionSection>

        <MotionSection>
          <Milestones />
        </MotionSection>

        <MotionSection>
          <Partnership />
        </MotionSection>

        {/* Info: (20260123 - Luphia) Smart Efficiency Formula */}
        <MotionSection delay={0.3}>
          <Philosophy />
        </MotionSection>
      </div>

      {/* Info: (20260123 - Luphia) Footer */}
      <Footer />
    </main>
  );
}
