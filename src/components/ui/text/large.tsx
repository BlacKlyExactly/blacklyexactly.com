import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

export const Large = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => (
  <p className={cn('text-lg font-semibold', className)}>{children}</p>
);
