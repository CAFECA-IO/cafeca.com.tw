"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LanguageSwitcher from '@/components/language_switcher';

const Navbar: React.FC = () => {

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-bg-primary/80 backdrop-blur-xl transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative h-8 w-8 overflow-hidden rounded-full border border-white/10 p-1 shadow-[0_0_15px_rgba(0,229,255,0.15)] transition-all duration-300 group-hover:border-accent-cyan/50 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.3)]">
            <Image src="/logo/cafeca_icon.svg" alt="CAFECA Logo" className="h-full w-full object-contain" width={32} height={32} />
          </div>
          <span className="text-xl font-bold tracking-widest text-text-primary transition-colors group-hover:text-white">CAFECA</span>
        </Link>

        <div className="flex items-center gap-6">
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
