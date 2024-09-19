'use client';

import { usePathname, useRouter } from 'next/navigation';
import { MouseEvent, PropsWithChildren } from 'react';
import gsap, { Circ } from 'gsap';

export const TransitionLink = ({
  href,
  children,
  className,
  onClick,
}: TransitionLinkProps & { onClick?: () => any }) => {
  const { push } = useRouter();
  const pathname = usePathname();

  const handleTransition = (e: MouseEvent) => {
    e.preventDefault();

    onClick && onClick();

    if (pathname === href) return;

    const transition = document.querySelector('#transition');

    if (!transition) {
      push(href);
      return;
    }

    gsap
      .to(transition?.children, {
        y: 0,
        stagger: 0.05,
        delay: 0.1,
        ease: Circ.easeOut,
      })
      .then(() => push(href));
  };

  return (
    <a href={href} onClick={handleTransition} className={className}>
      {children}
    </a>
  );
};

type TransitionLinkProps = PropsWithChildren<{
  href: string;
  className?: string;
}>;
