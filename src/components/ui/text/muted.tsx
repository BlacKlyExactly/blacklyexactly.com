import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

export const Muted = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => (
  <p className={cn('text-sm text-white/70', className)}>{children}</p>
);
