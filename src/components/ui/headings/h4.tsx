import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

export const H4 = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => (
  <h4
    className={cn(
      'scroll-m-20 text-2xl lg:text-3xl font-bold tracking-tight bg-gradient-to-r from-purple to-white inline-block text-transparent bg-clip-text',
      className,
    )}
  >
    {children}
  </h4>
);
