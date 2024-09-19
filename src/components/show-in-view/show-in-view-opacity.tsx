'use client';

import { inView, stagger, useAnimate } from 'framer-motion';
import { PropsWithChildren, useEffect } from 'react';

export const ShowInViewOpacity = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(scope.current.children, {
      y: -40,
      opacity: 0,
    });

    inView(
      scope.current,
      ({ target }) => {
        animate(
          [...target.children],
          { y: 0, opacity: 1 },
          { ease: 'circOut', delay: stagger(0.1) },
        );
      },
      { margin: '0px 0px -300px 0px' },
    );
  }, []);

  return (
    <div ref={scope} className={className}>
      {children}
    </div>
  );
};
