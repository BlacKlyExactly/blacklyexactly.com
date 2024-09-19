import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

export const Section = ({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) => (
  <section className={cn('mt-16 relative z-10 lg:mt-48', className)}>
    {children}
  </section>
);
