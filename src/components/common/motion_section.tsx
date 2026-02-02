"use client";
import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

interface IMotionSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const MotionSection: React.FC<IMotionSectionProps> = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Info: (20260202 - Luphia) Calculate delay as a style since standard tailwind delay utils are limited
  const delayStyle = { transitionDelay: `${delay}s` };

  return (
    <div
      ref={ref}
      style={delayStyle}
      className={cn(
        "transform transition-all duration-1000 ease-out",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MotionSection;
