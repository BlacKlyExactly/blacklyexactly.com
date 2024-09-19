import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

export const H1 = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => (
  <h1
    className={cn(
      'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl bg-gradient-to-r from-purple to-white inline-block text-transparent bg-clip-text',
      className,
    )}
  >
    {children}
  </h1>
);
