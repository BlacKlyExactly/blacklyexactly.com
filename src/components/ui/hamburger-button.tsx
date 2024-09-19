'use client';

import { cn } from '@/lib/utils';
import { useState } from 'react';

export const HamburgerButton = ({
  className,
  onClick,
  open,
}: {
  className?: string;
  onClick?: () => any;
  open?: boolean;
}) => {
  return (
    <button
      className={cn('relative group', className)}
      onClick={onClick}
      aria-label="Toggle hamburger menu"
      data-clicked={open?.toString()}
    >
      <div className="relative flex overflow-hidden items-center justify-center w-[50px] h-[50px] transform transition-all duration-200 ">
        <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
          <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-data-[clicked=true]:rotate-[42deg]"></div>
          <div className="bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 group-data-[clicked=true]:-translate-x-10"></div>
          <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-data-[clicked=true]:-rotate-[42deg]"></div>
        </div>
      </div>
    </button>
  );
};
