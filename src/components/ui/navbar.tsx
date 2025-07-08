"use client";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { Button } from "./custom";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import MobileNavbar from "./mobile-navbar";
import { relative } from "path";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar({ defaultStyle = false, type = "default" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState(null);
  const navigate = useRouter();

  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="lg:hidden flex py-2 z-50 relative bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 border-gray-100  px-8">
        <MobileNavbar
          config={mobileConfig}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </div>
      <div
        className={cn(
          "hidden md:flex border-b h-24 justify-start items-center",
          "bg-content text-black z-[100000000]",
          isFixed ? "fixed w-full z-[100000000000]" : "relative"
        )}
      >
     
        <div className="flex flex-col  w-full justify-start items-start h-24">
          <div
            className={cn(
              "w-full flex gap-5 py-2 justify-between items-center border-b bg-[#2E1506] text-white border-background/40 px-8"
            )}
          >

            <div className="flex gap-2">
            <Link
              href={"/ve-icanpr"}
              className="bg-transparent text-xs font-light flex flex-col gap-0.5 group"
            >
              <span className={"text-white  text-[11px] flex items-center gap-1"}>
                <Icon icon="material-symbols:contact-emergency" className="text-xs" />
                Liên hệ
              </span>
            </Link>
            </div>
            <div className="flex gap-8">
            <Link
              href={"/ve-icanpr"}
              className="bg-transparent text-xs font-light flex flex-col gap-0.5 group"
            >
              <span className={"text-white  text-[11px] flex items-center gap-1"}>
                <Icon icon="mdi:information-outline" className="text-xs" />
                VỀ CHÚNG TÔI
              </span>
            </Link>
            <Link
              href={"/lmia-map"}
              className="bg-transparent text-xs font-light flex flex-col gap-0.5 group"
            >
              <span className={"text-white  text-[11px] flex items-center gap-1"}>
                <Icon icon="mdi:map-marker-outline" className="text-xs" />
                BẢN ĐỒ LMIA
              </span>
            </Link>
            <Link
              href={"/cong-viec-nong"}
              className="bg-transparent text-xs font-light flex flex-col gap-0.5 group"
            >
              <span className={"text-white  text-[11px] flex items-center gap-1"}>
                <Icon icon="mdi:briefcase-outline" className="text-xs" />
                BẢN ĐỒ VIỆC LÀM
              </span>
            </Link>

            <Link
              href={"/tin-tuc"}
              className="bg-transparent text-xs font-light flex flex-col gap-0.5 group"
            >
              <span className={"text-white text-[11px] flex items-center gap-1"}>
                <Icon icon="mdi:newspaper-variant-outline" className="text-xs" />
                TIN TỨC
              </span>
            </Link>
            <Link
              href={"/immigration/khach-hang-thanh-cong"}
              className="text-xs font-light flex flex-col gap-0.5 group"
            >
              <span className={"text-white text-[11px] flex items-center gap-1"}>
                <Icon icon="mdi:star-outline" className="text-sm" />
                KHÁCH HÀNG THÀNH CÔNG
              </span>
            </Link>
            </div>

          </div>

          <div className="flex  gap-4 justify-between items-center px-0 w-full h-20">
          <div className=" flex w-[10%] justify-center  items-center px-8 ">
          <img
            src="/logo.png"
            alt="logo"
            className="w-full cursor-pointer"
            onClick={() => navigate.push("/")}
          />
        </div>
        <div className="w-[90%] flex justify-end px-10">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-0 py-0">
                {router.map((navItem) => (
                  <NavigationMenuItem
                    key={navItem.path}
                    className="relative min-w-12 !px-0"
                  >
                    <NavigationMenuTrigger
                      className={cn(
                        "bg-transparent text-[11px]  data-[state=open]:border-b-highlight data-[state=open]:border-b-0 py-0 data-[state=open]:text-highlight  border-r border-white/40  data-[state=open]:bg-transparent focus:border-[#2E1506] rounded-none h-[3.15rem] ml-0 font-bold relative flex items-center gap-2"
                      )}
                    >
                      {navItem.path}
                    </NavigationMenuTrigger>
                    {navItem.children && (
                      <NavigationMenuContent className="absolute bg-white border-none  rounded-none left-0 px-0 z-[100000000000000000000] h-max max-h-auto overflow-y-scroll overflow-visible">
                        <div className="w-[200px] h-auto z-[100000000000000000000] py-0">
                          {renderSubmenus(
                            navItem.children,
                            hoveredPath,
                            setHoveredPath
                          )}
                        </div>
                      </NavigationMenuContent>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            </div>
          </div>
        </div>
        {/* <div className="w-[110px]"></div> */}
      </div>
    </>
  );
}

const renderSubmenus = (submenus, hoveredPath, setHoveredPath) => {
  return (
    <ul className="z-[1000000000000000000] overflow-visible ">
      {submenus.map((subPage) => (
        <li
          key={subPage.path}
          className="flex text-left w-full py-1 hover:bg-black hover:text-white  text-black border-black border-b last:border-b-0  "
          onMouseEnter={() => setHoveredPath(subPage.path)}
          onMouseLeave={() => setHoveredPath(null)}
        >
          {subPage.children ? (
            <div className="w-full z-[10000]  overflow-visible">
              <div
                className={cn(
                  "flex justify-between cursor-pointer items-center text-left text-sm px-2 w-full  rounded-md py-1 relative"
                )}
              >
                <span className="flex items-center gap-2 ">
                  <Icon icon={submenuIconMap[subPage.path] || 'mdi:menu'} className="text-base" />
                  {subPage.element || subPage.path}
                </span>
                <Icon icon={"zondicons:cheveron-right"} />
              </div>
              {hoveredPath === subPage.path && (
                <div
                  className={`absolute top-0 left-[200px] z-[10000] w-[300px] bg-white text-left py-0.5 flex flex-col transition-all duration-300 transform ease-out z-1000000000`}
                >
                  {subPage.children.map((item) => (
                    <Link
                      key={item.path}
                      className="text-left hover:bg-[#b33d3d] text-black py-1  text-sm border-b last:border-b-0 px-2 w-full flex items-center gap-2"
                      href={item.path}
                    >
                      <motion.div
                        // whileHover={{
                        //   scale: 1.01,
                        //   backgroundColor: "#b33d3d",
                        //   color: "#fff",
                        // }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="px-3 py-1 flex items-center gap-2"
                      >
                        <Icon icon={submenuIconMap[item.path] || 'mdi:menu'} className="text-base" />
                        {item.element}
                      </motion.div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              target={subPage.external ? "_blank" : "_parent"}
              className="text-left   py-1  text-sm border-b last:border-b-0 px-2 w-full flex items-center gap-2"
              href={subPage.path}
            >
              <Icon icon={submenuIconMap[subPage.path] || 'mdi:menu'} className="text-base" />
              {subPage.element}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export const mobileConfig = [
  {
    // name: "Home",
    name: "Trang chủ",
    icon: "mdi:home",
    heading: "font-semibold text-green-800",
    pointer: "bg-green-700",
    active: "bg-green-300 border-green-600 text-green-800",
    activeIcon: "text-green-800",
    iconBg: "bg-green-700",
    apis: [
      {
        provider: "internal",
        // name: "Home",
        name: "Trang chủ",

        path: "/",
      },
    ],
  },
  {
    name: "ICANPR",
    icon: "mdi:information-outline",
    heading: "font-semibold text-blue-800",
    pointer: "bg-blue-700",
    active: "bg-blue-300 border-blue-600 text-blue-800",
    activeIcon: "text-blue-800",
    iconBg: "bg-blue-700",
    apis: [
      {
        provider: "internal",
        name: "Về iCanPR",
        path: "/ve-icanpr",
      },
      {
        provider: "internal",
        name: "Đối tác iCanPR",
        path: "/doi-tac-icanpr",
      },
      {
        provider: "internal",
        name: "Liên hệ",
        path: "/lien-he",
      },
    ],
  },
  {
    name: "Express Entry",
    icon: "mdi:airplane-takeoff",
    heading: "font-semibold text-red-800",
    pointer: "bg-red-700",
    active: "bg-red-300 border-red-600 text-red-800",
    activeIcon: "text-red-800",
    iconBg: "bg-red-700",
    apis: [
      {
        provider: "internal",
        name: "Lao Động Lành Nghề Liên Bang (FSW)",
        path: "/immigration/nhap-canh-nhanh/cong-nhan-lanh-nghe-lien-bang",
      },
      {
        provider: "internal",
        name: "Lao Động Tay Nghề Liên Bang (FST)",
        path: "/immigration/nhap-canh-nhanh/thuong-mai-co-tay-nghe-lien-bang",
      },
      {
        provider: "internal",
        name: "Canada Experience Class (CEC)",
        path: "/immigration/nhap-canh-nhanh/lop-hoc-trai-nghiem-canada",
      },
      {
        provider: "internal",
        name: "Tính điểm CRS",
        path: "/immigration/nhap-canh-nhanh/tinh-toan-diem-crs",
      },
    ],
  },
  {
    name: "Provincial Nominee Programs",
    icon: "mdi:map-marker-multiple-outline",
    heading: "font-semibold text-purple-800",
    pointer: "bg-purple-700",
    active: "bg-purple-300 border-purple-600 text-purple-800",
    activeIcon: "text-purple-800",
    iconBg: "bg-purple-700",
    apis: [
      {
        provider: "internal",
        name: "Alberta Nhap Cu (AAIP)",
        path: "/de-cu-tinh-bang-pnp/alberta-nhap-cu-aaip",
      },
      {
        provider: "internal",
        name: "British Columbia (BC PNP)",
        path: "/de-cu-tinh-bang-pnp/british-columbia-bcpnp",
      },
      {
        provider: "internal",
        name: "Ontario (OINP)",
        path: "/de-cu-tinh-bang-pnp/ontario-oinp",
      },
      {
        provider: "internal",
        name: "Manitoba (MPNP)",
        path: "/de-cu-tinh-bang-pnp/manitoba-mpnp",
      },
      {
        provider: "internal",
        name: "New Brunswick (NB PNP)",
        path: "/de-cu-tinh-bang-pnp/new-brunswick-nbpnp",
      },
      {
        provider: "internal",
        name: "Nova Scotia (NSNP)",
        path: "/de-cu-tinh-bang-pnp/nova-scotia-nsnp",
      },
      {
        provider: "internal",
        name: "Prince Edward Island (PEI PNP)",
        path: "/de-cu-tinh-bang-pnp/prince-edward-island-peipnp",
      },
      {
        provider: "internal",
        name: "Saskatchewan (SINP)",
        path: "/de-cu-tinh-bang-pnp/saskatchewan-sinp",
      },
      {
        provider: "internal",
        name: "Quebec (PNP)",
        path: "/de-cu-tinh-bang-pnp/quebec",
      },
      {
        provider: "internal",
        name: "Yukon (YNP)",
        path: "/de-cu-tinh-bang-pnp/yukon-ynp",
      },
    ],
  },
  {
    name: "Immigration",
    icon: "mdi:account-question-outline",
    heading: "font-semibold text-red-800",
    pointer: "bg-red-700",
    active: "bg-red-300 border-red-600 text-red-800",
    activeIcon: "text-red-800",
    iconBg: "bg-red-700",
    apis: [
      {
        provider: "internal",
        name: "Việc làm định cư",
        path: "/immigration/viec-lam-dinh-cu",
      },
      {
        provider: "internal",
        name: "Du học - định cư",
        path: "/immigration/du-hoc-dinh-cu",
      },
      {
        provider: "internal",
        name: "Doanh nghiệp C11 Visa",
        path: "/immigration/doanh-nghiep-c11-visa",
      },
      {
        provider: "internal",
        name: "Start Up Visa",
        path: "/immigration/start-up-visa",
      },
      {
        provider: "internal",
        name: "Bảo lãnh gia đình",
        path: "/immigration/bao-lanh-gia-dinh",
      },
      {
        provider: "internal",
        name: "Khách hàng thành công",
        path: "/immigration/khach-hang-thanh-cong",
      },
    ],
  },
  {
    name: "cac-tinh-bang-canada",
    icon: "mdi:briefcase-outline",
    heading: "font-semibold text-brown-800",
    pointer: "bg-brown-700",
    active: "bg-brown-300 border-brown-600 text-brown-800",
    activeIcon: "text-brown-800",
    iconBg: "bg-brown-700",
    apis: [
      {
        provider: "internal",
        name: "Alberta Tinh",
        path: "/cuoc-song-canada/cac-tinh-bang-canada/tinh-alberta",
      },
      {
        provider: "internal",
        name: "British Colombia (BC PNP)",
        path: "/cuoc-song-canada/cac-tinh-bang-canada/brcolumbiaP",
      },
      {
        provider: "internal",
        name: "Manitoba Tinh",
        path: "/cuoc-song-canada/cac-tinh-bang-canada/manitobaP",
      },
      {
        provider: "internal",
        name: "New Brunswick Tinh",
        path: "/cuoc-song-canada/cac-tinh-bang-canada/new-brunswickP",
      },
      {
        provider: "internal",
        name: "Newfoundland and Labrador",
        path: "/cuoc-song-canada/cac-tinh-bang-canada/newfoundland-labradorP",
      },
      {
        provider: "internal",
        name: "Northwest Territories Tinh",
        path: "/cuoc-song-canada/cac-tinh-bang-canada/northwest-territoriesP",
      },
      {
        provider: "internal",
        name: "Nova Scotia Tinh",
        path: "/cuoc-song-canada/cac-tinh-bang-canada/nova-scotiaP",
      },
      {
        provider: "internal",
        name: "Nunavut Tinh",
        path: "/cuoc-song-canada/cac-tinh-bang-canada/nunavutP",
      },
      {
        provider: "internal",
        name: "Ontario Tinh",
        path: "/cuoc-song-canada/cac-tinh-bang-canada/ontarioP",
      },
      {
        provider: "internal",
        name: "Prince Edward Island Tinh",
        path: "/cuoc-song-canada/cac-tinh-bang-canada/prince-edwardP",
      },
      {
        provider: "internal",
        name: "Saskatchewan Tinh",
        path: "/cuoc-song-canada/cac-tinh-bang-canada/ saskatchewanP",
      },
      {
        provider: "internal",
        name: "Yukon Tinh",
        path: "/cuoc-song-canada/cac-tinh-bang-canada/yukonP",
      },
    ],
  },
  {
    name: "cuoc-song-canada",
    icon: "mdi:briefcase-outline",
    heading: "font-semibold text-brown-800",
    pointer: "bg-brown-700",
    active: "bg-brown-300 border-brown-600 text-brown-800",
    activeIcon: "text-brown-800",
    iconBg: "bg-brown-700",
    apis: [
      {
        provider: "internal",
        name: "Môi trường Canada",
        path: "/cuoc-song-canada/moi-truong-canada",
      },
      {
        provider: "internal",
        name: "Văn hóa & tôn giáo",
        path: "/cuoc-song-canada/van-hoa-ton-gaio",
      },
      {
        provider: "internal",
        name: "Giáo dục Canada",
        path: "/cuoc-song-canada/giao-duc-canada",
      },
      {
        provider: "internal",
        name: "Y Tế",
        path: "/cuoc-song-canada/y-te",
      },
      {
        provider: "internal",
        name: "Tỷ giá đô Canada",
        path: "/cuoc-song-canada/ty-gia-do-canada",
      },
      {
        provider: "internal",
        name: "Chính sách thuế",
        path: "/cuoc-song-canada/chinh-sach-thue",
      },
    ],
  },
  {
    name: "thong-tin-huu-ich",
    icon: "mdi:briefcase-outline",
    heading: "font-semibold text-teal-800",
    pointer: "bg-teal-700",
    active: "bg-teal-300 border-teal-600 text-teal-800",
    activeIcon: "text-teal-800",
    iconBg: "bg-teal-700",
    apis: [
      {
        provider: "internal",
        name: "Câu hỏi thường gặp",
        path: "/thong-tin-huu-ich/cau-hoi-thuong-gap",
      },
      {
        provider: "internal",
        name: "Trang web hữu ích",
        path: "/thong-tin-huu-ich/trang-web-huu-ich",
      },
      {
        provider: "internal",
        name: "Thuật ngữ trong di trú",
        path: "/thong-tin-huu-ich/thuat-ngu-trong-di-tru",
      },
      {
        provider: "internal",
        name: "CLB là gì?",
        path: "/thong-tin-huu-ich/CLB-la-gi",
      },
    ],
  },
  {
    name: "Tuyen-dung",
    icon: "mdi:briefcase-check-outline",
    heading: "font-semibold text-orange-800",
    pointer: "bg-orange-700",
    active: "bg-orange-300 border-orange-600 text-orange-800",
    activeIcon: "text-orange-800",
    iconBg: "bg-orange-700",
    apis: [
      {
        provider: "internal",
        name: "Làm việc cho iCanPR",
        path: "/tuyen-dung/lam-viec-cho-icanpr",
      },
      {
        provider: "external",
        name: "Tổng hợp việc làm Canada",
        path: "https://jobs.icanpr.vn/jobs/Careers",
      },
      {
        provider: "external",
        name: "Công nhân trại gà",
        path: "https://icanpr.zohorecruit.com/jobs/Careers/777018000000558001/75119---General-Labour-C%C3%B4ng-nh%C3%A2n-n%C3%B4ng-tr%E1%BA%A1i-g%C3%A0?source=CareerSite",
      },
      {
        provider: "internal",
        name: "Đầu bếp Món Âu",
        path: "/tuyen-dung/dau-bep-mon-au",
      },
    ],
  },

  {
    name: "Công Việc",
    icon: "mdi:file-document-outline",
    heading: "font-semibold text-gray-800",
    pointer: "bg-gray-700",
    active: "bg-gray-300 border-gray-600 text-gray-800",
    activeIcon: "text-gray-800",
    iconBg: "bg-gray-700",
    apis: [
      {
        provider: "internal",
        name: "Công Việc",
        path: "/cong-viec-nong",
      },
    ],
  },

  {
    name: "Việc kinh doanh",
    icon: "mdi:file-document-outline",
    heading: "font-semibold text-gray-800",
    pointer: "bg-gray-700",
    active: "bg-gray-300 border-gray-600 text-gray-800",
    activeIcon: "text-gray-800",
    iconBg: "bg-gray-700",
    apis: [
      {
        provider: "internal",
        name: "Việc kinh doanh",
        path: "/doanh-nghiep",
      },
    ],
  },
  {
    name: "Bảo Lãnh",
    icon: "mdi:file-document-outline",
    heading: "font-semibold text-gray-800",
    pointer: "bg-gray-700",
    active: "bg-gray-300 border-gray-600 text-gray-800",
    activeIcon: "text-gray-800",
    iconBg: "bg-gray-700",
    apis: [
      {
        provider: "internal",
        name: "Bảo Lãnh",
        path: "/bảo-lãnh",
      },
    ],
  },
  {
    name: "Du-học",
    icon: "mdi:file-document-outline",
    heading: "font-semibold text-gray-800",
    pointer: "bg-gray-700",
    active: "bg-gray-300 border-gray-600 text-gray-800",
    activeIcon: "text-gray-800",
    iconBg: "bg-gray-700",
    apis: [
      {
        provider: "internal",
        name: "Du Học",
        path: "/du-học",
      },
    ],
  },
  {
    name: "Cau Hoi",
    icon: "mdi:file-document-outline",
    heading: "font-semibold text-gray-800",
    pointer: "bg-gray-700",
    active: "bg-gray-300 border-gray-600 text-gray-800",
    activeIcon: "text-gray-800",
    iconBg: "bg-gray-700",
    apis: [
      {
        provider: "internal",
        name: "Cau Hoi",
        path: "/thong-tin-huu-ich/cau-hoi-thuong-gap",
      },
    ],
  },
  {
    name: "Tin Tức",
    icon: "mdi:file-document-outline",
    heading: "font-semibold text-gray-800",
    pointer: "bg-gray-700",
    active: "bg-gray-300 border-gray-600 text-gray-800",
    activeIcon: "text-gray-800",
    iconBg: "bg-gray-700",
    apis: [
      {
        provider: "internal",
        name: "Tin Tức",
        path: "/tin-tuc",
      },
    ],
  },
];

const router = [
  {
    path: "ICANPR",
    children: [
      {
        path: "/ve-icanpr",
        element: "Về iCanPR",
        // elemtnt: "About iCanPR",
      },
      {
        path: "/doi-tac-icanpr",
        element: "Đối tác iCanPR",
        // element: "iCanPR Partners",
      },
      {
        path: "/lien-he",
        element: "Liên hệ",
        // element: "Contact",
      },
    ],
  },

  {
    path: "ĐỊNH CƯ CANADA",
    // path: "Định cư Canada",

    children: [
      {
        path: "/immigration/viec-lam-dinh-cu",
        element: "Việc làm định cư",
        // element: "Immigration work",
      },
      {
        path: "/immigration/du-hoc-dinh-cu",
        element: "Du học – định cư",
        // element: "Study abroad - settlement",
      },
      {
        path: "/immigration/doanh-nghiep-c11-visa",
        element: "Doanh nghiệp C11 Visa",
        // element: "C11 Visa Business",
      },
      {
        path: "/immigration/start-up-visa",
        element: "Visa khởi nghiệp",
      },

      {
        path: "Express Entry",
        element: `Nhập cảnh nhanh`,
        children: [
          {
            path: "/immigration/nhap-canh-nhanh/cong-nhan-lanh-nghe-lien-bang",
            element: "Công nhân lành nghề liên bang (FSW)",
          },
          {
            path: "/immigration/nhap-canh-nhanh/thuong-mai-co-tay-nghe-lien-bang",
            element: "Thương mại tay nghề liên bang (FST)",
          },
          {
            path: "/immigration/nhap-canh-nhanh/lop-hoc-trai-nghiem-canada",
            element: "Lớp trải nghiệm Canada (CEC)",
          },
          {
            path: "/immigration/nhap-canh-nhanh/tinh-toan-diem-crs",
            element: "Tính điểm CRS",
          },
        ],
      },
      {
        path: "/immigration/bao-lanh-gia-dinh",
        element: "Bảo lãnh gia đình",
        // element: "Family sponsorship",
      },
      {
        path: "/immigration/khach-hang-thanh-cong",
        element: "Khách hàng thành công",
        // element: "Customer Success",
      },
    ],
  },
  {
    path: "CHƯƠNG TRÌNH ĐỀ CỬ CẤP TỈNH BANG",
    // path: "Đề cử tỉnh bang PNP"
    children: [
      {
        path: "/de-cu-tinh-bang-pnp/alberta-nhap-cu-aaip",
        element: "Alberta Nhap Cu (AAIP)",
      },

      {
        path: "/de-cu-tinh-bang-pnp/british-columbia-bcpnp",
        element: "British Colombia (BC PNP)",
      },
      {
        path: "/de-cu-tinh-bang-pnp/ontario-oinp",
        element: "Ontario (OINP)",
      },

      {
        path: "/de-cu-tinh-bang-pnp/manitoba-mpnp",
        element: "Manitoba (MPNP)",
      },
      {
        path: "/de-cu-tinh-bang-pnp/new-brunswick-nbpnp",
        element: "New Brunswick (NBPNP)",
      },
      // {
      //   path: "/de-cu-tinh-bang-pnp/newfoundland-and-labrador",
      //   element: "Newfoundland and Labrador",
      // },

      // {
      //   path: "/de-cu-tinh-bang-pnp/northwest-territories",
      //   element: "Northwest Territories",
      // },
      {
        path: "/de-cu-tinh-bang-pnp/nova-scotia-nsnp",
        element: "Nova Scotia (NSNP)",
      },
      // {
      //   path: "/de-cu-tinh-bang-pnp/nanuvut",
      //   element: "Nanuvut",
      // },

      {
        path: "/de-cu-tinh-bang-pnp/prince-edward-island-peipnp",
        element: "Prince Edward Island (PEI PNP)",
      },
      {
        path: "/de-cu-tinh-bang-pnp/quebec",
        element: "Quebec",
      },
      {
        path: "/de-cu-tinh-bang-pnp/saskatchewan-sinp",
        element: "Saskatchewan (SINP)",
      },
      {
        path: "/de-cu-tinh-bang-pnp/yukon-ynp",
        element: "Yukon (YNP)",
      },
    ],
  },
  {
    path: "CUỘC SỐNG CANADA",
    // path: "Cuộc sống Canada",
    children: [
      {
        // path: "cac-tinh-bang-canada",
        path: "Các tỉnh bang Canada",
        element: "Các tỉnh bang Canada",
        children: [
          {
            path: "/cuoc-song-canada/cac-tinh-bang-canada/tinh-alberta",
            element: "Alberta (AAIP)",
          },

          {
            path: "/cuoc-song-canada/cac-tinh-bang-canada/brcolumbiaP",
            element: "British Colombia (BC PNP)",
          },

          {
            path: "/cuoc-song-canada/cac-tinh-bang-canada/manitobaP",
            element: "Manitoba (MPNP)",
          },
          {
            path: "/cuoc-song-canada/cac-tinh-bang-canada/new-brunswickP",
            element: "New Brunswick (NBPNP)",
          },
          {
            path: "/cuoc-song-canada/cac-tinh-bang-canada/newfoundland-labradorP",
            element: "Newfoundland and Labrador",
          },

          {
            path: "/cuoc-song-canada/cac-tinh-bang-canada/northwest-territoriesP",
            element: "Northwest Territories",
          },
          {
            path: "/cuoc-song-canada/cac-tinh-bang-canada/nova-scotiaP",
            element: "Nova Scotia (NSNP)",
          },
          {
            path: "/cuoc-song-canada/cac-tinh-bang-canada/nunavutP",
            element: "Nunavut",
          },
          {
            path: "/cuoc-song-canada/cac-tinh-bang-canada/ontarioP",
            element: "Ontario (OINP)",
          },
          {
            path: "/cuoc-song-canada/cac-tinh-bang-canada/prince-edwardP",
            element: "Prince Edward Island (PEI PNP)",
          },
          {
            path: "/cuoc-song-canada/cac-tinh-bang-canada/quebecP",
            element: "Quebec",
          },
          {
            path: "/cuoc-song-canada/cac-tinh-bang-canada/saskatchewanP",
            element: "Saskatchewan (SINP)",
          },
          {
            path: "/cuoc-song-canada/cac-tinh-bang-canada/yukonP",
            element: "Yukon (YNP)",
          },
        ],
      },
      {
        path: "/cuoc-song-canada/moi-truong-canada",
        // element: "Environment Canada",
        element: "Môi Trường Canada",
      },
      {
        path: "/cuoc-song-canada/van-hoa-ton-gaio",
        // element: "Culture & Education",
        element: "Văn hóa & tôn giáo",
      },
      {
        path: "/cuoc-song-canada/y-te",
        // element: "Medical",
        element: "Y Tế",
      },
      {
        path: "/cuoc-song-canada/giao-duc-canada",
        // element: "Canadian Education",
        element: "Giáo dục Canada",
      },
      {
        path: "/cuoc-song-canada/ty-gia-do-canada",
        // element: "Canadian Dollar Exchange Rate",
        element: " Tỷ giá đô Canada",
      },

      {
        path: "/cuoc-song-canada/chinh-sach-thue",
        element: "Chính sách thuế",
        // element: "Chính sách thuế",
      },
    ],
  },

  {
    path: "THÔNG TIN HỮU ÍCH",
    // path: "Thông tin hữu ích",
    children: [
      {
        path: "/thong-tin-huu-ich/cau-hoi-thuong-gap",
        element: "Câu hỏi thường gặp",
        // element: "FAQ",
      },

      {
        path: "/thong-tin-huu-ich/trang-web-huu-ich",
        element: "Trang web hữu ích",
        // element: "Useful Website",
      },

      {
        path: "/thong-tin-huu-ich/thuat-ngu-trong-di-tru",
        element: "Thuật ngữ trong di trú",
        // element: "Immigration terminology",
      },

      {
        path: "/thong-tin-huu-ich/CLB-la-gi",
        element: "CLB là gì? Cách quy đổi điểm đương đương?",
        // element: "What is CLB? How to convert equivalent points?",
      },
    ],
  },
  {
    path: "TUYỂN DỤNG",
    // path:"Tuyển dụng",
    children: [
      {
        path: "/tuyen-dung/lam-viec-cho-icanpr",
        element: "Làm việc cho iCanPR",
        // element: "Work for ICanPR",
      },
      {
        path: "https://jobs.icanpr.vn/jobs/Careers",
        element: "Tổng hợp việc làm Canada",
        external: true,
        // element: "Canada Jobs Summary",
      },
      {
        path: "https://icanpr.zohorecruit.com/jobs/Careers/777018000000558001/75119---General-Labour-C%C3%B4ng-nh%C3%A2n-n%C3%B4ng-tr%E1%BA%A1i-g%C3%A0?source=CareerSite",
        element: "Công nhân trại gà",
        external: true,
        // element: "Chicken farm Worker",
      },
      {
        path: "/tuyen-dung/dau-bep-mon-au",
        element: "Đầu bếp Món Âu",
        // element: "European Chef",
      },
    ],
  },
];

// Icon mapping for top-level and submenu items
const navIconMap = {
  'ICANPR': 'mdi:information-outline',
  'ĐỊNH CƯ CANADA': 'mdi:account-question-outline',
  'CHƯƠNG TRÌNH ĐỀ CỬ CẤP TỈNH BANG': 'mdi:map-marker-multiple-outline',
  'CUỘC SỐNG CANADA': 'mdi:briefcase-outline',
  'THÔNG TIN HỮU ÍCH': 'mdi:briefcase-outline',
  'TUYỂN DỤNG': 'mdi:briefcase-check-outline',
};
const submenuIconMap = {
  '/ve-icanpr': 'mdi:information-outline',
  '/doi-tac-icanpr': 'mdi:account-group-outline',
  '/lien-he': 'mdi:email-outline',
  '/immigration/viec-lam-dinh-cu': 'mdi:briefcase-account-outline',
  '/immigration/du-hoc-dinh-cu': 'mdi:school-outline',
  '/immigration/doanh-nghiep-c11-visa': 'mdi:domain',
  '/immigration/start-up-visa': 'mdi:rocket-launch-outline',
  '/immigration/bao-lanh-gia-dinh': 'mdi:account-multiple-plus-outline',
  '/immigration/khach-hang-thanh-cong': 'mdi:star-outline',
  '/de-cu-tinh-bang-pnp/alberta-nhap-cu-aaip': 'mdi:map-marker',
  '/de-cu-tinh-bang-pnp/british-columbia-bcpnp': 'mdi:map-marker',
  '/de-cu-tinh-bang-pnp/ontario-oinp': 'mdi:map-marker',
  '/de-cu-tinh-bang-pnp/manitoba-mpnp': 'mdi:map-marker',
  '/de-cu-tinh-bang-pnp/new-brunswick-nbpnp': 'mdi:map-marker',
  '/de-cu-tinh-bang-pnp/nova-scotia-nsnp': 'mdi:map-marker',
  '/de-cu-tinh-bang-pnp/prince-edward-island-peipnp': 'mdi:map-marker',
  '/de-cu-tinh-bang-pnp/quebec': 'mdi:map-marker',
  '/de-cu-tinh-bang-pnp/saskatchewan-sinp': 'mdi:map-marker',
  '/de-cu-tinh-bang-pnp/yukon-ynp': 'mdi:map-marker',
  '/cuoc-song-canada/cac-tinh-bang-canada/tinh-alberta': 'mdi:map-marker',
  '/cuoc-song-canada/cac-tinh-bang-canada/brcolumbiaP': 'mdi:map-marker',
  '/cuoc-song-canada/cac-tinh-bang-canada/manitobaP': 'mdi:map-marker',
  '/cuoc-song-canada/cac-tinh-bang-canada/new-brunswickP': 'mdi:map-marker',
  '/cuoc-song-canada/cac-tinh-bang-canada/newfoundland-labradorP': 'mdi:map-marker',
  '/cuoc-song-canada/cac-tinh-bang-canada/northwest-territoriesP': 'mdi:map-marker',
  '/cuoc-song-canada/cac-tinh-bang-canada/nova-scotiaP': 'mdi:map-marker',
  '/cuoc-song-canada/cac-tinh-bang-canada/nunavutP': 'mdi:map-marker',
  '/cuoc-song-canada/cac-tinh-bang-canada/ontarioP': 'mdi:map-marker',
  '/cuoc-song-canada/cac-tinh-bang-canada/prince-edwardP': 'mdi:map-marker',
  '/cuoc-song-canada/cac-tinh-bang-canada/quebecP': 'mdi:map-marker',
  '/cuoc-song-canada/cac-tinh-bang-canada/saskatchewanP': 'mdi:map-marker',
  '/cuoc-song-canada/cac-tinh-bang-canada/yukonP': 'mdi:map-marker',
  '/cuoc-song-canada/moi-truong-canada': 'mdi:leaf',
  '/cuoc-song-canada/van-hoa-ton-gaio': 'mdi:account-group',
  '/cuoc-song-canada/y-te': 'mdi:medical-bag',
  '/cuoc-song-canada/giao-duc-canada': 'mdi:school',
  '/cuoc-song-canada/ty-gia-do-canada': 'mdi:currency-usd',
  '/cuoc-song-canada/chinh-sach-thue': 'mdi:scale-balance',
  '/thong-tin-huu-ich/cau-hoi-thuong-gap': 'mdi:frequently-asked-questions',
  '/thong-tin-huu-ich/trang-web-huu-ich': 'mdi:web',
  '/thong-tin-huu-ich/thuat-ngu-trong-di-tru': 'mdi:book-open-variant',
  '/thong-tin-huu-ich/CLB-la-gi': 'mdi:help-circle-outline',
  '/tuyen-dung/lam-viec-cho-icanpr': 'mdi:briefcase-check-outline',
  '/tuyen-dung/dau-bep-mon-au': 'mdi:chef-hat',
};
