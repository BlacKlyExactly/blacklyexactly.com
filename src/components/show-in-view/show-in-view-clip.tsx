'use client';

import { inView, useAnimate } from 'framer-motion';
import { PropsWithChildren, useEffect } from 'react';

export const ShowInViewClip = ({
  children,
  direction,
}: PropsWithChildren<{ direction: 'top' | 'bottom' }>) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (window.innerWidth < 1024) return;

    animate(scope.current.children[0], {
      y: direction === 'top' ? '-100%' : '100%',
    });

    inView(
      scope.current,
      ({ target }) => {
        animate(
          target.children[0],
          { y: 0 },
          { ease: 'circOut', duration: 0.5 },
        );
      },
      { margin: '0px 0px -300px 0px' },
    );
  }, []);

  return (
    <div className="clip" ref={scope}>
      {children}
    </div>
  );
};
