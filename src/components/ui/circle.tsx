import { cn } from '@/lib/utils';

export const Circle = ({ className }: { className?: string }) => (
  <div
    className={cn(
      'w-[150px] h-[150px] lg:w-[220px] lg:h-[220px] absolute top-0 left-0 rounded-full bg-purple z-[-1] opacity-65 blur-[212px] lg:opacity-35',
      className,
    )}
  />
);
