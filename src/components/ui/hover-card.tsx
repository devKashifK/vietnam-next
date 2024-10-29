"use client";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";

export default function HoverCard({
  icon,
  title,
  description,
  cta,
  color = "bg-background",
  className,
}: {
  icon?: string | React.ReactNode;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  cta?: string | React.ReactNode;
  color?: string;
  className?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={cn(
        "group flex-1 relative cursor-pointer overflow-hidden bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 border-background shadow-md rounded-2xl  px-6 pt-10 pb-8 ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span
        className={cn(
          "absolute  left-[40px] top-10 z-0 h-20 w-20 rounded-full transition-all duration-300 group-hover:scale-[10]",
          color
        )}
      ></span>
      <div className="relative z-10 mx-auto max-w-md">
        <div
          className={cn(
            "grid h-20 w-20 place-items-center rounded-full transition-all duration-300 ",
            isHovered && color
          )}
        >
          {typeof icon === "string" ? (
            <Icon icon={icon} className="text-highlight h-10 w-full" />
          ) : (
            icon
          )}
        </div>
        <div className="space-y-1 pt-8 text-base text-gray-600 transition-all duration-300 group-hover:text-white/90 flex flex-col gap-1">
          <h6 className="text-2xl text-left">{title}</h6>
          {description && <p className="text-left">{description}</p>}
        </div>
        <div className="pt-5 text-base font-semibold leading-7 flex justify-start items-start">
          {cta && (
            <p className="flex gap-2 justify-center items-center">
              {cta} <Icon icon={"zondicons:cheveron-right"} />
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
