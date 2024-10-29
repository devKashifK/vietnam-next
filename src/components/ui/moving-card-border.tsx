import React from "react";
import "./style.css";
import { cn } from "@/lib/utils";

export default function MovingCardBorder({
  children,
  className,
  animate = false,
  color = "gray",
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
  animate?: boolean;
} & React.HTMLProps<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "card card-animated card-animated-loop hover:scale-105 rounded-2xl border-gray-100 group px-0 py-0 transition-all duration-300 ease-in-out",
        color
      )}
      {...props}
    >
      {animate ? (
        <div className="card_effect invisible group-hover:visible"></div>
      ) : (
        <div className="card_effect"></div>
      )}
      <div
        className={cn(
          "relative z-10 h-full px-10 py-14 rounded-2xl",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}
