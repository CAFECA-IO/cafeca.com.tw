import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";
import CTA from "@/components/landing_page/cta";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col grow items-center justify-center">
      {/* Info: (20251105 - Julian) Navbar */}
      <Navbar />

      {/* Info: (20251105 - Julian) Body */}
      <div className="flex-1 flex flex-col">
        {/* Info: (20251105 - Julian) CTA */}
        <CTA />
      </div>

      {/* Info: (20251105 - Julian) Footer */}
      <Footer />
    </main>
  );
}
