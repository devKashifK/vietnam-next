"use client";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = usePathname();
  const pathSegments = location.split("/");
  const path1 = decodeURIComponent(pathSegments[pathSegments.length - 1]);

  console.log(path1);

  const isActive = (path) => path1 === path;

  return (
    <div className="hidden lg:flex flex-col fixed text-white/80 z-[9999999999] top-0 right-0 w-[104px] h-screen bg-background">
      <Link
        href="/"
        className={`flex py-5 flex-col gap-2 justify-center items-center  ${
          location === "/" ? "bg-highlight  text-text  shadow-xl" : ""
        }`}
      >
        <Icon
          icon="material-symbols:android-google-home"
          className="w-10 text-2xl font-light"
        />
        <span className="font-light text-base">TRANG CHỦ</span>
      </Link>

      <div className="flex flex-col h-[85%]  py-2">
        <div
          className={`flex-1 border-b flex  flex-col gap-2 justify-center items-center border-white/10 ${
            isActive("viec-lam-dinh-cu")
              ? "bg-highlight  text-white  shadow-xlflex-1"
              : ""
          }`}
        >
          <Link
            href="/immigration/viec-lam-dinh-cu"
            className={` px-5  flex justify-center  items-center gap-2 flex-col`}
          >
            <Icon
              icon="mdi:briefcase-outline"
              className="w-10 text-xl font-light"
            />
            <span className="font-light text-xs">CÔNG VIỆC</span>
          </Link>
        </div>
        <div
          className={`flex border-b border-white/10  flex-1 flex-col gap-2 justify-center items-center ${
            isActive("du-hoc-dinh-cu") ? "bg-highlight  text-white" : ""
          }`}
        >
          <Link
            href="/immigration/du-hoc-dinh-cu"
            className={` px-5  flex justify-center items-center gap-2 flex-col`}
          >
            <Icon
              icon="guidance:study-room"
              className="w-10 text-xl font-light"
            />
            <span
              className={cn(
                "font-light  text-xs text-center leading-none",
                isActive("du-hoc-dinh-cu") ? "text-white" : ""
              )}
            >
              DU HỌC
            </span>
          </Link>
        </div>

        <div
          className={`flex flex-1 flex-col gap-2 justify-center items-center px-5 border-b border-white/10 ${
            isActive("doanh-nghiep-C11-visa") ? "bg-highlight  text-white" : ""
          }`}
        >
          <Link
            href="/immigration/doanh-nghiep-c11-visa"
            className={` px-5  flex justify-center items-center gap-2 flex-col`}
          >
            <Icon
              icon="streamline:money-graph-bar-increase-up-product-performance-increase-arrow-graph-business-chart"
              className="w-10 text-xl font-light"
            />
            <span className="font-light text-center text-xs leading-none">
              VIỆC KINH DOANH
            </span>
          </Link>
        </div>

        <div
          className={`flex flex-1 flex-col gap-2 justify-center items-center px-5 border-b border-white/10  ${
            isActive("tin-tuc") ? "bg-highlight  text-whitex" : ""
          }`}
        >
          <Link
            href="/tin-tuc"
            className={`flex py-2 flex-1 flex-col gap-2 justify-center items-center px-5 border-b border-white/10 `}
          >
            <Icon
              icon="material-symbols:breaking-news-outline-sharp"
              className="w-10 text-xl font-light"
            />
            <span className="font-light text-center text-xs leading-none">
              TIN TỨC
            </span>
          </Link>
        </div>

        <div
          className={`flex flex-1 flex-col gap-2 justify-center items-center px-5 border-b border-white/10  ${
            isActive("cau-hoi-thuong-gap") ? "bg-highlight  text-white" : ""
          }`}
        >
          <Link
            href="/cau-hoi-thuong-gap"
            className={`flex py-2 flex-1 flex-col gap-2 justify-center items-center px-5 `}
          >
            <Icon
              icon="mdi:frequently-asked-questions"
              className="w-10 text-xl font-light"
            />
            <span className="font-light text-center text-xs leading-none">
              CÂU HỎI
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
