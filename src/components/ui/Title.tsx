import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
// import { Link } from "react-router-dom";

export default function Title({
  title,
  subtitle,
  description,
  to,
  cta,
  className,
  descriptionClassName,
  titleClassName,
  effect = true,
}: {
  title?: string | React.ReactNode;
  subtitle?: string;
  description?: string | React.ReactNode;
  to?: string;
  cta?: string;
  className?: string;
  descriptionClassName?: string;
  titleClassName?: string;
  effect ? : boolean;
}) {
  return (
    <div className=" flex w-full px-4 lg:px-0 justify-between">
      <div
        className={cn(
          "flex flex-col w-full gap-1 justify-start items-start lg:justify-start lg:items-start",
          className
        )}
      >
        {subtitle && (
       <div className="mb-2 flex items-center gap-2">
                {effect && (
          <span className="inline-block w-8 h-1 rounded-full bg-highlight" />
                )}
          <span className="text-xs text-highlight font-semibold tracking-widest uppercase">{subtitle}</span>
        </div>
        )}

        <div className="flex flex-col gap-3 w-full">
          {typeof title === "string" ? (
            <div
              className={cn(
                "relative flex flex-col justify-start w-full items-start lg:justify-start lg:items-start gap-1 text-2xl text-center md:text-4xl tracking-wider text-black/50"
              )}
            >
            

        <h2 className={cn("text-3xl md:text-5xl font-extrabold text-[#6B3F1D] leading-tight mb-2",
             
                
                  "text-center relative lg:text-4xl tracking-wider ",
                  titleClassName
                )}
              >
                {title}
                {effect && (
          <span className="block w-16 h-1 bg-[#6B3F1D] mt-2 rounded-full" />
        )}
              </h2>
            </div>
          ) : (
            title
          )}
        </div>
        <span className="block h-0.5 bg-highlight w-max"></span>

        {description &&
          (typeof description === "string" ? (
            <p
              className={cn(
                "text-left lg:text-left text-black/50 w-full lg:w-[70%]",
                descriptionClassName
              )}
            >
              {description}
            </p>
          ) : (
            description
          ))}
      </div>
      {/* {cta && (
        <div className="flex group justify-center flex-col text-black/50 border-b-highlight items-center  transition-all duration-150 cursor-pointer">
          <Link
            to={to}
            className="flex gap-3 justify-center items-center font-primary tracking-widest"
          >
            {cta}
            <Icon icon={"material-symbols:arrow-right-alt"} />
          </Link>
          <div className="h-0.5 w-28 group-hover:visible invisible bg-highlight"></div>
        </div>
      )} */}
    </div>
  );
}
