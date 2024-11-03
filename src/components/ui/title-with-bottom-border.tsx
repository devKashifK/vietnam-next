import { cn } from "@/lib/utils";
import React from "react";

export default function TitleWithBottomBorder({
  children,
  borderClass,
  titleClass,
}: {
  children: string;
  borderClass?: string;
  titleClass?: string;
}) {
  console.log(children, "CheckChildren23");
  return (
    <div className="relative flex flex-col justify-start items-start gap-1">
      <h2
        className={cn(
          "text-2xl md:text-4xl tracking-wider text-black/50",
          titleClass
        )}
      >
        {children}
        <span
          className={cn("block h-0.5 bg-background mt-2", borderClass)}
        ></span>
      </h2>
    </div>
  );
}
