import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col grow items-center justify-center">
      {/* Info: (20251105 - Julian) Navbar */}
      <Navbar />

      {/* Info: (20251105 - Julian) Body */}
      <div className="flex-1 flex flex-col">
        {/* Info: (20251105 - Julian) CTA */}
        <div className="grid grid-cols-2 px-8">
          <div className="flex flex-col">
            <h1 className="text-56px font-bold">
              The Future of{" "}
              <span className="text-text-brand">Corporate Governance</span> and{" "}
              <span className="text-text-brand">FinTech</span>
            </h1>
            <p className="font-medium text-20px-lg text-text-primary">
              We are dedicated to building a decentralized corporate
              infrastructure that leverages biometric technology and blockchain
              digital signatures to create a trustworthy, secure, and
              intelligent digital business environment.
            </p>
          </div>
          {/* <Image
            src="/elements/chain.png"
            alt="Home Image 1"
            width={700}
            height={600}
          /> */}
        </div>
      </div>

      {/* Info: (20251105 - Julian) Footer */}
      <Footer />
    </main>
  );
}
