import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

export const H2 = ({
  children,
  className,
}: PropsWithChildren<{ className?: string; as?: string }>) => (
  <h2
    className={cn(
      'scroll-m-20 pb-2 text-3xl lg:text-4xl font-semibold tracking-tight first:mt-0 bg-gradient-to-r from-purple to-white inline-block text-transparent bg-clip-text',
      className,
    )}
  >
    {children}
  </h2>
);
