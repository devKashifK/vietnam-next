import React from "react";
import { cn } from "./utils";

export default function Glass({
  children,
  className,
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
} & React.HTMLProps<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex-col w-full bg-white border-black/5 border shadow-xl  mx-auto py-8 px-4 flex",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
