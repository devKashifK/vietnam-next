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
}: {
  title?: string | React.ReactNode;
  subtitle?: string;
  description?: string | React.ReactNode;
  to?: string;
  cta?: string;
  className?: string;
}) {
  return (
    <div className=" flex w-full justify-between ">
      <div
        className={cn(
          "flex flex-col w-full gap-1 justify-center items-center",
          className
        )}
      >
        <h4 className="text-highlight text-2xl">{subtitle}</h4>
        <div className="flex flex-col gap-3 w-full">
          {typeof title === "string" ? (
            <div className="relative flex flex-col justify-center items-center gap-1">
              <h2 className="text-2xl text-center md:text-4xl tracking-wider text-black/50">
                {title}
                <span className="block h-0.5 bg-background mt-2"></span>
              </h2>
            </div>
          ) : (
            title
          )}
        </div>
        <span className="block h-0.5 bg-highlight w-max"></span>

        {description &&
          (typeof description === "string" ? (
            <p className="text-center text-black/50 w-[70%]">{description}</p>
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
