import React from "react";
import { cn } from "@/utils";

interface CardProps {
    className?: string;
    children: React.ReactNode
}

export const Card = ({ className, children, ...props }: CardProps) => {
  return <div className={cn('p-2 m-3 rounded dark:bg-[#252529] dark:text-white box shadow', className)} {...props}>{children}</div>;
};