'use client';

import { motion } from 'framer-motion';
import { HamburgerButton } from './hamburger-button';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { TransitionLink } from '../page-transition/transition-link';

const selects = [
  { display: 'Home', href: '/' },
  { display: 'Projects', href: '/projects' },
  { display: 'Contact', href: '/contact' },
];

const variants = {
  menu: {
    open: {
      opacity: 1,
      scaleX: 1,
    },
    closed: {
      opacity: 0,
      scaleX: 0,
    },
  },
  cover: {
    open: {
      opacity: 0.5,
    },
    closed: {
      opacity: 0,
    },
  },
  wrapper: {
    open: {
      pointerEvents: 'inherit',
    },
    closed: {
      pointerEvents: 'none',
    },
  },
  item: {
    open: {
      y: 0,
    },
    closed: {
      y: -100,
    },
  },
} as const;

export const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  return (
    <>
      <HamburgerButton onClick={() => setIsOpen(!isOpen)} open={isOpen} />
      <motion.div
        className="fixed top-0 left-0 w-full h-screen pointer-events-none z-[-1]"
        variants={variants.wrapper}
        initial={variants.wrapper.closed}
        animate={isOpen ? 'open' : 'closed'}
      >
        <motion.div
          className="fixed top-0 left-0 w-fit h-screen bg-dark z-[-1] border-r border-r-white/10 origin-left flex flex-col justify-center px-16 lg:px-24 gap-8"
          variants={variants.menu}
          initial={variants.menu.closed}
          animate={isOpen ? 'open' : 'closed'}
          transition={{
            duration: 0.4,
            ease: 'circInOut',
            staggerChildren: 0.1,
            delay: isOpen ? 0 : selects.length * 0.04,
          }}
        >
          {selects.map(({ display, href }, index) => (
            <TransitionLink
              key={display}
              href={href}
              onClick={() => setIsOpen(false)}
            >
              <div className="clip">
                <motion.p
                  className={cn(
                    'text-2xl lg:text-3xl font-bold hover:text-purple transition-colors',
                    {
                      'bg-gradient-to-r from-purple to-white inline-block bg-clip-text text-transparent':
                        pathname === href,
                    },
                  )}
                  variants={variants.item}
                  initial={variants.item.closed}
                  animate={isOpen ? 'open' : 'closed'}
                  transition={{
                    delay: isOpen ? 0.02 + 0.04 * index : 0,
                    ease: 'circInOut',
                    duration: 0.6,
                  }}
                >
                  {display}
                </motion.p>
              </div>
            </TransitionLink>
          ))}
          <a target="_blank" href="/Resume_Sebastian_Matkowski_EN.pdf">
            <div className="clip">
              <motion.p
                className={cn(
                  'text-2xl lg:text-3xl font-bold hover:text-purple transition-colors',
                )}
                variants={variants.item}
                initial={variants.item.closed}
                animate={isOpen ? 'open' : 'closed'}
                transition={{
                  delay: isOpen ? 0.02 + 0.04 * (selects.length + 1) : 0,
                  ease: 'circInOut',
                  duration: 0.6,
                }}
              >
                Get my CV
              </motion.p>
            </div>
          </a>
        </motion.div>
        <motion.div
          aria-label="Close hamburger menu"
          className="absolute left-0 top-0 w-full h-full bg-dark opacity-50 z-[-10] cursor-pointer"
          onClick={() => setIsOpen(false)}
          variants={variants.cover}
          initial={variants.cover.closed}
          animate={isOpen ? 'open' : 'closed'}
          transition={{ duration: 0.4, ease: 'circInOut' }}
        ></motion.div>
      </motion.div>
    </>
  );
};
