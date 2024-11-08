"use client";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./sheet";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./collapsible";
import { getIcon, Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function MobileNavbar({ isOpen, setIsOpen, config }) {
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="z-[100000] h-full" asChild>
        <div className="flex w-full justify-between items-center">
          <img src="/logo.png" alt="logo" className="h-8" />
          <Icon
            icon={"solar:hamburger-menu-broken"}
            className="text-black text-scale-1200 cursor-pointer px-0 py-2 text-4xl"
          />
        </div>
      </SheetTrigger>
      <SheetContent
        position="right"
        className="w-max h-full overflow-y-scroll flex flex-col gap-6 pretty-scroll bg-white     border-gray-100 border-none justify-start items-center"
      >
        <Link
          onClick={() => setIsOpen(false)}
          // to={"/"}
          href={"/"}
          className="flex gap-2 py-0.5 cursor-pointer justify-start items-center"
        >
          <div className="flex-col flex w-full justify-start items-start">
            <img
              src="/logo.png"
              className="w-28 mt-[-5px] ml-[-10px]"
              alt="logo"
            />
          </div>
        </Link>
        {config.map((group, index) => {
          return <SideBar group={group} setIsOpen={setIsOpen} key={index} />;
        })}
      </SheetContent>
    </Sheet>
  );
}

export const SideBar = ({ group, setIsOpen }) => {
  // const activeId = useLocation();
  const path = usePathname();
  const activeId = path.split("/").pop();
  const router = useRouter();

  // const navigate = useNavigate();
  return (
    <Collapsible
      defaultOpen
      className={cn(
        "transition-all pb-3 flex flex-col rounded-md w-full py-2 text-scale-1100 shadow-lg"
      )}
    >
      <CollapsibleTrigger className="w-full flex gap-2 items-center">
        <div
          className={cn(
            "bg-black text-white rounded-md h-6 w-6 z-10 flex justify-center items-center"
          )}
        >
          <Icon icon={group.icon} className="text-sm text-scale-1200" />
        </div>
        <h3 className={cn("font-normal text-black/80 text-md")}>
          {group.name}
        </h3>
      </CollapsibleTrigger>
      <CollapsibleContent className="w-full flex gap-1 relative pt-1">
        <div className="flex w-full flex-col gap-1 border-scale-900">
          {group.apis.map((item, index) => (
            <>
              <div
                className={cn(
                  "top-0 left-0 w-full h-6 rounded-md border border-transparent flex justify-start items-center transition-all",
                  `/${activeId}` === item.path ? group.active : "text-black/80"
                )}
              >
                <Link
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  key={index}
                  className={cn(
                    "flex gap-2 px-6 w-[95%] items-center transition-all text-sm duration-200 relative ml-[26px] text-black/80"
                  )}
                >
                  <div
                    className={cn(
                      "absolute bg-black top-3 left-0 w-2 h-[0.1rem] rounded-r-md"
                    )}
                  ></div>
                  <div
                    className={cn(
                      "absolute bg-black -top-[15px] left-0 w-[0.1rem] h-[27px]"
                    )}
                  ></div>
                  <span
                    className={cn(
                      getIcon(item.name),
                      "transition icon text-foreground",
                      `/${activeId}` === item.path ? group.activeIcon : ""
                    )}
                  ></span>

                  {item.name}
                </Link>
              </div>
            </>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};
