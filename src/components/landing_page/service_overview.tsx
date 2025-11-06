import React from 'react';
import Image from 'next/image';

const SERVICE_FEATURES = [
  {
    order: 1,
    title: 'Decentralized Identity Authentication',
    description:
      'Using biometric identification and advanced encryption, we create tamper-proof digital IDs and electronic signature systems.\n— Real-time verification without the need for third-party institutions',
    image: '/services/finger_print.png',
  },
  {
    order: 2,
    title: 'Blockchain-Based Company Registration',
    description:
      'One-stop service for establishing limited companies, supporting multi-jurisdictional legal frameworks and registration processes.\n— Publicly record shareholder structures and corporate charters on the blockchain, powered by smart contracts for paperless, cross-border operations',
    image: '/services/license.png',
  },
  {
    order: 3,
    title: 'On-Chain Accounting Services',
    description:
      'Financial data is encrypted and uploaded to the blockchain in real time, with flexible permissions granted to accountants, tax authorities, or internal governance.\n— Dynamic access control, audit-ready transparency, and data sovereignty with privacy protection',
    image: '/services/accounting.png',
  },
  {
    order: 4,
    title: 'Equity Tokenization & Stablecoin Issuance',
    description:
      'Convert equity into programmable tokens and issue stablecoins backed by staked equity, enabling capital increases, equity trading, budget allocation, payroll, and more.\n— Asset digitalization to drive innovation in equity financing',
    image: '/services/north_korean_won.png',
  },
  {
    order: 5,
    title: 'On-Chain Corporate Governance',
    description:
      'Use smart contracts to automate board voting, budget allocation, and financial decision-making processes, ensuring transparent governance records and automatic execution of resolutions.\n— No intermediaries needed, publicly auditable, with immediate implementation',
    image: '/services/smart_contract.png',
  },
  {
    order: 6,
    title: 'On-Chain Financial Services',
    description:
      'Integrate supply chain finance and equity-backed lending to streamline business operations and financing channels.\n— Lower financing barriers and unlock greater growth potential for enterprises',
    image: '/services/financial_institute.png',
  },
];

const ServiceOverview: React.FC = () => {
  const serviceTickets = SERVICE_FEATURES.map((feature) => (
    <div
      key={feature.order}
      className="flex flex-col items-center gap-[20px] rounded-[30px] border border-white/75 bg-linear-to-t from-white/10 to-white/70 py-5 bg-blend-overlay backdrop-blur-3xl"
    >
      <Image
        src={feature.image}
        alt={feature.title}
        width={150}
        height={150}
        className="shrink-0"
      />
      <div className="text-text-primary flex flex-col gap-2 px-2 py-3">
        <h3 className="text-20px font-bold">{feature.title}</h3>
        <p className="text-16px font-normal whitespace-pre-line">{feature.description}</p>
      </div>
    </div>
  ));

  return (
    <div className="relative z-10 flex flex-col items-center justify-center gap-8 py-10">
      {/* Info: (20251106 - Julian) Ring background */}
      <div className="absolute z-0 opacity-50">
        <Image src="/elements/ring.png" alt="ring_background" width={900} height={900} />
      </div>

      {/* Info: (20251106 - Julian) Title */}
      <div className="z-10 flex flex-col items-center gap-1 font-bold">
        <p className="text-text-brand text-20px uppercase">SERVICE OVERVIEW</p>
        <h2 className="text-text-primary text-48px">Build Your Future with Us</h2>
      </div>
      {/* Info: (20251106 - Julian) Features Grid */}
      <div className="z-10 grid grid-cols-3 grid-rows-2 gap-[60px] px-8">{serviceTickets}</div>
    </div>
  );
};

export default ServiceOverview;
