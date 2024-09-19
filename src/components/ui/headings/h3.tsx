import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

export const H3 = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => (
  <h3
    className={cn(
      'scroll-m-20 text-2xl font-semibold tracking-tight bg-gradient-to-r from-purple to-white inline-block text-transparent bg-clip-text',
      className,
    )}
  >
    {children}
  </h3>
);
