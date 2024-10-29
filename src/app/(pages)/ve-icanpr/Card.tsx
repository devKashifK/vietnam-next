"use client";
import Glass from "@/lib/helpers";
import { cn } from "@/lib/utils";

export const Card = ({ image, title, list, flip }) => {
  return (
    <>
      <Glass
        className={cn(
          "h-[450px] w-[450px] flex flex-col gap-4 items-center relative z-10 mx-0 bg-cover",

          flip ? "justify-end" : "justify-start"
        )}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 rounded-2xl border-gray-100  h-full absolute top-0 left-0 w-full"></div>
      </Glass>
    </>
  );
};
