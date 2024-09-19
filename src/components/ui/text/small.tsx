import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

export const Small = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => (
  <small className={cn('text-sm font-medium leading-none', className)}>
    {children}
  </small>
);
