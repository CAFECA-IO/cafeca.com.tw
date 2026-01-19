'use client';

import { motion, useInView, UseInViewOptions, HTMLMotionProps } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/components/animations/fade_in';

type Direction = 'left' | 'right' | 'up' | 'down';

type SlideInProps = HTMLMotionProps<'div'> & {
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  viewOptions?: UseInViewOptions;
};

export default function SlideIn({
  children,
  className,
  direction = 'up',
  delay = 0,
  duration = 0.5,
  distance = 50,
  viewOptions = { once: true, margin: '-50px' },
  ...props
}: SlideInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, viewOptions);

  const getInitial = () => {
    switch (direction) {
      case 'left':
        return { opacity: 0, x: -distance };
      case 'right':
        return { opacity: 0, x: distance };
      case 'up':
        return { opacity: 0, y: distance };
      case 'down':
        return { opacity: 0, y: -distance };
      default:
        return { opacity: 0, y: distance };
    }
  };

  const getAnimate = () => {
    switch (direction) {
      case 'left':
      case 'right':
        return { opacity: 1, x: 0 };
      case 'up':
      case 'down':
        return { opacity: 1, y: 0 };
      default:
        return { opacity: 1, y: 0 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitial()}
      animate={isInView ? getAnimate() : getInitial()}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={cn('w-full', className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
