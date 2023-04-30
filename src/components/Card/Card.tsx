import React from "react";
import { cn } from "@/utils";

interface CardProps {
    className?: string;
    children: React.ReactNode
}

export const Card = ({ className, children, ...props }: CardProps) => {
  return <div className={cn('p-2 m-3 border rounded dark:bg-slate-400 dark:text-white', className)} {...props}>{children}</div>;
};

