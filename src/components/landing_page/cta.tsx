import React from 'react';
import Image from 'next/image';

const CTA: React.FC = () => {
  return (
    <div className="relative z-10 flex min-h-[800px] items-center px-8">
      <div className="mr-[700px] flex flex-col gap-5">
        <h1 className="text-56px font-bold">
          The Future of <span className="text-text-brand">Corporate Governance</span> and{' '}
          <span className="text-text-brand">FinTech</span>
        </h1>
        <p className="text-20px-lg text-text-primary font-medium">
          We are dedicated to building a decentralized corporate infrastructure that leverages
          biometric technology and blockchain digital signatures to create a trustworthy, secure,
          and intelligent digital business environment.
        </p>
      </div>
      <div className="absolute right-0">
        <Image src="/elements/chain.png" alt="laptop_with_chain_img" width={900} height={620} />
      </div>
    </div>
  );
};

export default CTA;
