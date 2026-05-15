'use client';

import { HamburgerMenu } from './hamburger-menu';
import { useEffect, useRef } from 'react';
import { TransitionLink } from '../page-transition/transition-link';

export const Nav = () => {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const handleScroll = () => {
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className="
    w-full px-7 sticky top-0 left-0 flex justify-between items-center
    lg:mx-auto lg:px-24 self-start
    z-[1000]
    transition-all duration-300 ease-out

    py-6 lg:py-9
    bg-black/50 backdrop-blur-2xl lg:bg-black/20

    [&.scrolled]:py-4
    lg:[&.scrolled]:py-6
    [&.scrolled]:bg-black/20
  "
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
