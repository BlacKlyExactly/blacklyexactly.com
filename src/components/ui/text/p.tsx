import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

export const P = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => (
  <p className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}>
    {children}
  </p>
);
