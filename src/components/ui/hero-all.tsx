"use client";
import Navbar from "./navbar";
import { Button } from "./custom";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getCachedData } from "@/lib/custom-func";
import { use } from "react";
import { useQuery } from "@tanstack/react-query";
// import { Link, useLocation } from "react-router-dom";
export default function HeroDefault({
  text,
  image,
}: {
  text?: string;
  image?: string;
}) {
  // const fullUrl = headersList.get("referer") || headersList.get("x-next-url");
  // const pathname = fullUrl ? new URL(fullUrl).pathname : "/";
  // const lastPath = pathname.split("/").pop();

  const pathName = usePathname();

  const lastPath = pathName.split("/").pop();

  const { data, error, isLoading } = useQuery({
    queryKey: ["mediaItem", lastPath],
    queryFn: () => getCachedData(lastPath),
  });

  // const displayText = text || use(getCachedData(lastPath))?.text;
  // const displayImage = image || use(getCachedData(lastPath))?.image;
  // console.log(displayImage, getCachedData(lastPath), "checkMedia2333");

  return (
    <div>
        <Navbar defaultStyle={true} />
    <div
className="relative min-h-[28.75rem] xsm:min-h-[10.75rem] xsm:mt-[3.75rem] overflow-hidden pt-[3.75rem] sm:min-h-[36.45rem] sm:pt-[6.44rem]"
    >
      <img alt="" draggable="false" loading="lazy" width="3200" height="956" decoding="async" data-nimg="1" className="absolute inset-0 h-full w-full object-cover" src={data?.image} style={{color : "transparent"}} />


            <div className="absolute inset-0 h-full w-full bg-black/30"></div>
            <div className="absolute inset-0 h-full w-full bg-[linear-gradient(26deg,rgba(0,0,0,0.30)_-19.37%,rgba(0,0,0,0.00)_128.25%)]"></div>

        <div className="z-1 relative mx-auto flex max-w-full flex-col  sm:max-w-[90rem] sm:flex-col sm:flex-wrap sm:px-0 mt-[3.94rem] sm:mt-[1.5rem ">
          <div className="px-20 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row justify-start items-center gap-3">
          <Link
          // to={"/"}
          href={"/"}
          className="text-white/60 uppercase font-primary tracking-widest"
        >
          Trang chủ
        </Link>
        <Icon
          icon={"zondicons:cheveron-right"}
          className="text-white/60 -mt-1"
        />
        <span className="text-white relative  font-bold uppercase font-primary tracking-widest">
          {lastPath}
        </span>
        </div>
        <div className="bg-white/40 w-[250px] h-[1px]"></div>

          </div>
          <div
            className=" text-[2.375rem] font-medium leading-[1.2] tracking-[-0.0475rem] text-white sm:text-[5rem] sm:tracking-[-0.1rem]"
            dangerouslySetInnerHTML={{ __html: data?.text }}
          />
          </div>
        </div>
      </div>
      {/* <div className="absolute  bg-highlight bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 w-full py-1 bottom-0 px-12  flex justify-start items-center gap-2 cursor-pointer">
      
      </div> */}
      </div>

  );
}
