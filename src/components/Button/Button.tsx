import { cn } from '@/utils';
import React from 'react';

type ButtonProps<T extends React.ElementType = 'button'> = {
    className?: string;
    as?: T;
    children: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

export const Button = <T extends React.ElementType = 'button'>({ children, className, as, ...props}: ButtonProps<T>) => {
  const Component = as || 'button';
  return (
    <Component className={cn('p-2 rounded bg-blue-400 outline', className)} {...props}>{children}</Component>
  )
}
