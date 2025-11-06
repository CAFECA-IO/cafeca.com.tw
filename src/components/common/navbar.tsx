import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <div className="px-xl py-m w-full bg-transparent">
      <Link href={'/'}>
        <Image src="/logo/cafeca_logo.svg" width={120} height={36} alt="cafeca_logo" />
      </Link>
    </div>
  );
};

export default Navbar;
