import React from "react";

export default function TitleWithDoubleBorder({
  children,
}: {
  children: string;
}) {
  return (
    <div className="relative w-max">
      <div className="absolute top-0 left-0 w-14 lg:w-20 h-0.5 bg-background rounded-md"></div>
      <div className="absolute top-[12px] transform rotate-90 -left-[12px] w-6 h-0.5 bg-background rounded-md"></div>

      <div className="px-3 py-1.5">
        <h5 className="tracking-widest text-xl">{children}</h5>
      </div>

      <div className="absolute bottom-0 right-0 w-14 lg:w-20 h-0.5 bg-background rounded-md"></div>
      <div className="absolute bottom-[12px] transform rotate-90 -right-[12px] w-6 h-0.5 bg-background rounded-md"></div>
    </div>
  );
}
