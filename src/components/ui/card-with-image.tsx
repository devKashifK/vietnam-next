"use client";
import { cn } from "@/lib/utils";
import TitleWithBottomBorder from "./title-with-bottom-border";
// import { Link } from "react-router-dom";
import Link from "next/link";

export function CardWithImage({
  image,
  title,
  description,
  to,
}: {
  title?: string;
  description?: React.ReactNode | string;
  image?: string;
  to?: string;
}) {
  return (
    <div className="lg:max-w-xs w-full group/card">
      <div
        className={cn(
          " cursor-pointer overflow-hidden relative card h-96  shadow-md border border-black/5  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
          " bg-cover bg-center bg-no-repeat"
        )}
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-white opacity-60"></div>

        <div className="text content flex justify-end h-full items-start flex-col relative z-10">
          <TitleWithBottomBorder titleClass="text-white group-hover/card:text-black">
            {title}
          </TitleWithBottomBorder>
          <div className="group-hover/card:flex hidden transition-all duration-150 ease-linear">
            {typeof description === "string" ? (
              <p className="font-normal text-left  text-sm text-gray-50 group-hover/card:text-black relative z-10 my-4">
                {description}
              </p>
            ) : (
              description
            )}
          </div>
          <Link
            // href={}
            href={""}
            // to={}
            className="group-hover/card:bg-background px-3 py-1 group-hover/card:flex  hidden text-white rounded-none relative transition-all duration-150 z-10 ease-linear"
          >
            Xem thêm
          </Link>
        </div>
      </div>
    </div>
  );
}
