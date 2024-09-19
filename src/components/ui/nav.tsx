'use client';

import { HamburgerMenu } from './hamburger-menu';
import { useEffect, useRef } from 'react';
import { TransitionLink } from '../page-transition/transition-link';

export const Nav = () => {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current) return;

      const isDesktop = window.innerWidth >= 1024;

      if (window.scrollY > 50) {
        if (isDesktop) {
          navRef.current.style.paddingTop = '24px';
          navRef.current.style.paddingBottom = '24px';
        }

        navRef.current.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
        navRef.current.style.backdropFilter = 'blur(40px)';

        return;
      }

      if (isDesktop) {
        navRef.current.style.paddingTop = '36px';
        navRef.current.style.paddingBottom = '36px';
      }

      navRef.current.style.backgroundColor = 'rgba(0, 0, 0, 0)';
      navRef.current.style.backdropFilter = 'none';
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className="w-full px-7 sticky top-0 left-0 py-6 flex justify-between items-center lg:mx-auto lg:py-9 z-[1000] lg:px-24 self-start bg-black/50 backdrop-blur-2xl lg:bg-black/20 transition-all"
      ref={navRef}
    >
      <TransitionLink
        href="/"
        className="text-2xl font-bold border-b-4 border-purple"
      >
        Blackly
      </TransitionLink>
      <HamburgerMenu />
    </nav>
  );
};
