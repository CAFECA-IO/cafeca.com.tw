"use client";
import React from 'react';
import { CAFECA_COPYRIGHT, CAFECA_EMAIL } from '@/constants/config';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-bg-secondary py-8 text-center text-text-secondary border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">
          {CAFECA_COPYRIGHT}
        </p>
        <div className="flex gap-4 text-sm">
          <a href={`mailto:${CAFECA_EMAIL}`} className="hover:text-accent-cyan transition-colors">Contact Us</a>
          <span className="text-text-secondary/50">|</span>
          <span className="hover:text-accent-cyan cursor-pointer transition-colors">Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
