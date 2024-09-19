'use client';

import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { Circle } from '../ui/circle';
import { H3 } from '../ui/headings/h3';
import { Large } from '../ui/text/large';
import { usePathname } from 'next/navigation';

gsap.registerPlugin(ScrollToPlugin);

export const Footer = () => {
  const pathname = usePathname();

  return (
    <div className="relative">
      <Circle className="-top-12 lg:-top-24" />
      <footer className="p-7 bg-dark/50 border-t border-purple/30 mt-16 relative lg:px-14 lg:mt-32 flex justify-between items-center">
        <div>
          <Large>All rights reserved</Large>
          <H3>Sebastian Matkowski</H3>
        </div>
        {pathname !== '/contact' && (
          <button
            className=" w-11 h-11 bg-white rounded-full flex items-center justify-center"
            onClick={() => gsap.to(window, { scrollTo: 0, ease: 'circ.inOut' })}
          >
            <svg
              width="16"
              height="9"
              viewBox="0 0 16 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="-mt-0.5"
            >
              <path
                d="M7.29289 0.792893C7.68342 0.402369 8.31658 0.402369 8.70711 0.792893L15.0711 7.15685C15.4616 7.54738 15.4616 8.18054 15.0711 8.57107C14.6805 8.96159 14.0474 8.96159 13.6569 8.57107L8 2.91421L2.34315 8.57107C1.95262 8.96159 1.31946 8.96159 0.928932 8.57107C0.538408 8.18054 0.538408 7.54738 0.928932 7.15685L7.29289 0.792893ZM7 2L7 1.5L9 1.5L9 2L7 2Z"
                fill="#8000FF"
              />
            </svg>
          </button>
        )}
      </footer>
    </div>
  );
};
