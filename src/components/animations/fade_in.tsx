'use client';

import { motion, useInView, UseInViewOptions, HTMLMotionProps } from 'framer-motion';
import { useRef } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type FadeInProps = HTMLMotionProps<'div'> & {
  delay?: number;
  duration?: number;
  viewOptions?: UseInViewOptions;
};

export default function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.5,
  viewOptions = { once: true, margin: '-50px' },
  ...props
}: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, viewOptions);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={cn('w-full', className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
