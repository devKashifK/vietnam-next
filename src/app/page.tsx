import { Icon } from "@iconify/react/dist/iconify.js";
import Home from "./home";
import Link from "next/link";

export default function page() {
  return (
    <div className="relative">
      <Home />
      <nav className="fixed z-[9999999999999999999] bottom-0 left-0 w-full bg-white shadow-lg border-t border-highlight lg:hidden">
        <ul className="flex justify-around items-center h-full py-0">
          <li className="flex flex-1 justify-center items-center border border-r-highlight">
            <Link
              href="/"
              className="h-12 w-full flex justify-center items-center"
            >
              <Icon
                icon={"material-symbols:home-app-logo"}
                className="text-xl text-highlight"
              />
            </Link>
          </li>
          <li className="flex flex-1 justify-center items-center border border-r-highlight">
            <Link
              href={"/tin-tuc"}
              className="h-12 w-full flex justify-center items-center"
              aria-label="Notifications"
            >
              <Icon
                icon={"material-symbols:breaking-news-outline-sharp"}
                className="text-xl text-highlight"
              />
            </Link>
          </li>
          <li className="flex flex-1 justify-center items-center border border-r-highlight">
            <a
              className="h-12 w-full flex justify-center items-center"
              aria-label="Search"
            >
              <Icon
                href={"mailto:tuvan@icanpr.vn"}
                icon={"material-symbols:mail-rounded"}
                className="text-xl text-highlight "
              />
            </a>
          </li>

          <li className="flex flex-1 justify-center items-center border border-r-highlight">
            <a
              href="https://api.whatsapp.com/send?phone=84869967809"
              target="_blank"
              className="h-12 w-full flex justify-center items-center"
              aria-label="Notifications"
            >
              <Icon icon={"mdi:whatsapp"} className="text-xl text-highlight" />
            </a>
          </li>
          <li className="flex flex-1 justify-center items-center border border-r-highlight">
            <a
              href="https://zalo.me/84869967809"
              target="_blank"
              className="h-12 w-full flex justify-center items-center"
              aria-label="Notifications"
            >
              <Icon
                icon={"simple-icons:zalo"}
                className="text-xl text-highlight"
              />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
