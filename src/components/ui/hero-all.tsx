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
    <div
      className="flex flex-col gap-2 mx-auto bg-center relative bg-cover aspect-square  w-full  h-[90vh]"
      style={{
        backgroundImage: `url(${data?.image})`,
        backgroundPosition: "start",
      }}
    >
      <div className="relative ">
        <Navbar defaultStyle={true} />
        <div className="flex justify-center items-center w-full h-[55vh] mt-10">
          <div
            className=" bg-black bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 h-max px-6 text-6xl py-6 flex justify-center items-center font-primary tracking-widest text-white lg:mt-0 mt-[6rem] text-center"
            dangerouslySetInnerHTML={{ __html: data?.text }}
          />
        </div>
      </div>
      <div className="absolute  bg-highlight bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 w-full py-1 bottom-0 px-12  flex justify-start items-center gap-2 cursor-pointer">
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
      {/* </div> */}
    </div>
  );
}
