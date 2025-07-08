"use client";

import { Icon } from "@iconify/react";
import React, { useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "./button";
import { Phone } from "lucide-react";
import { motion, useInView } from "framer-motion";

const provinces = [
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
];
const services = [
  {
    id: "settle-in-canada",
    title: "Định cư Canada",
    description:
      "Chọn Canada để định cư là một quyết định thú vị và thay đổi cuộc đời. Canada nổi tiếng với chất lượng cuộc sống, sự đa dạng văn hóa và hứa hẹn nhiều cơ hội. Hãy cùng tìm kiếm lựa chọn định cư phù hợp nhất cho gia đình bạn!",
    ctaText: "Tìm hiểu thêm",
    ctaLink: "/immigration/dinh-cu-canada",
  },
  {
    id: "work-in-canada",
    title: "Làm việc tại Canada",
    description:
      "Canada với nhiều cơ hội việc làm đa dạng, thúc đẩy sự phát triển nghề nghiệp và trải nghiệm toàn cầu. Là một quốc gia phồn thịnh và thân thiện đang chào đón các chuyên gia có kỹ năng và người lao động thời vụ.",
    ctaText: "Khám phá cơ hội",
    ctaLink: "/immigration/nhap-canh-nhanh/cong-nhan-lanh-nghe-lien-bang",
  },
  {
    id: "study-in-canada",
    title: "Du học tại Canada",
    description:
      "Học tập tại Canada chắc chắn mang đến cho bạn một giáo dục hàng đầu thế giới, sự đa dạng văn hóa phong phú và một lối đi tới tương lai đầy triển vọng, tất cả trong một môi trường thân thiện và mở cửa, đón nhận sự đa dạng.",
    ctaText: "Tìm hiểu chương trình",
    ctaLink: "/immigration/du-hoc-dinh-cu",
  },
  {
    id: "family-sponsorship",
    title: "Bảo Lãnh",
    description:
      "Với kiến thức chuyên sâu về luật di trú và quy trình đoàn tụ gia đình tại Canada, chúng tôi cam kết hỗ trợ bạn trong việc kết nối và tái hợp với người thân yêu của mình, tạo nên những khoảnh khắc đáng trân trọng và ấm áp tại Canada.",
    ctaText: "Xem thêm chi tiết",
    ctaLink: "/immigration/family-sponsorship",
  },
];
export default function Footer() {
  const navigate = useRouter();

  return (
    <footer className="w-full mx-auto  bg-[#FAFAF8]  text-white pb-14 lg:pb-0">
      <div className="px-10  w-full border-b h-max  py-2 pt-20 text-xl   flex  justify-between items-center font-primary tracking-widest text-white">
        <img src="/logo.png" alt="logo" className="w-40" />
        {/* <a
          href="tel:+84869967809"
          className="inline-flex text-black items-center justify-center space-x-2 hover:underline"
        >
          <Icon icon="mdi:phone" className="w-5 h-5" />
          <span> +84 869967809</span>
        </a> */}
        <FancyPhone />
      </div>
      <div className=" py-8 mx-auto w-full  text-black">
        <div className="grid px-12 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and Links */}
          <div className="space-y-4  ">
            <nav className="grid gap-1 text-sm">
              <Link href="/ve-icanpr" className="hover:underline pt-3">
                <h3 className="text-lg font-semibold">Ve iCanPR</h3>
              </Link>
              <Link href="/ve-icanpr" className="hover:underline">
                Giới thiệu về công ty iCanPR
              </Link>
              <Link href="/lien-he" className="hover:underline">
                Liên hệ
              </Link>
              <Link href="/doi-tac-icanpr" className="hover:underline">
                Đối tác iCanPR
              </Link>
              <Link
                href="/immigration/dinh-cu-canada"
                className="hover:underline pt-3"
              >
                <h3 className="text-lg font-semibold">
                  Dịch vụ nổi bật của ICanPR
                </h3>
              </Link>

              {services.map((service, index) => (
                <Link href={service.ctaLink} key={index}>
                  {service.title}
                </Link>
              ))}

              {/* <Link
                href="/cuoc-song-canada/cac-tinh-bang-canada/tinh-alberta"
                className="hover:underline"
              >
                Chương trình tỉnh bang
              </Link> */}
            </nav>
          </div>

          <div className="space-y-4">
            <Link
              href="/cuoc-song-canada/cac-tinh-bang-canada/tinh-alberta"
              className="hover:underline"
            >
              <h3 className="text-lg font-semibold"> Chương trình tỉnh bang</h3>
            </Link>
            <div className="space-y-2 text-sm">
              {provinces.map((province) => (
                <Link href={province.path} key={province.path}>
                  <ul className="hover:underline py-0.5">
                    <li>{province.element}</li>
                  </ul>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Thông tin liên hệ</h3>
            <div className="space-y-2 text-sm">
              <p>
                Địa chỉ: Tầng 7, 85 Nguyễn Hữu Cầu, phường Tân Định, Quận 1, Tp.
                Hồ Chí Minh, Việt Nam
              </p>
              <p>
                Email:{" "}
                <a href="mailto:tuvan@icanpr.vn" className="hover:underline">
                  tuvan@icanpr.vn
                </a>
              </p>
              <p>
                Điện thoại:{" "}
                <a href="tel:+84869967809" className="hover:underline">
                  +84 869967809
                </a>
              </p>
              <p>
                Giờ làm việc: 8:30 - 5:30, Thứ 2- Thứ 6 Thứ 7: vui lòng đặt hẹn
              </p>
            </div>
          </div>

          {/* Social Media and Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Theo dõi chúng tôi</h3>
            <div className="flex space-x-4">
              {["linkedin", "facebook", "instagram", "youtube"].map(
                (social) => (
                  <Link
                    key={social}
                    href={
                      social === "facebook"
                        ? "https://www.facebook.com/DinhCu.iCanPR"
                        : social === "youtube"
                        ? "https://www.youtube.com/watch?v=2un5fxffDjc"
                        : social === "linkedin"
                        ? "https://www.linkedin.com/company/icanpr"
                        : social === "twitter"
                        ? "https://twitter.com/icanpr"
                        : "https://www.instagram.com/icanprvietnam/"
                    }
                    className="hover:text-primary-foreground transition-colors"
                  >
                    <Icon icon={`carbon:logo-${social}`} className="w-6 h-6" />
                  </Link>
                )
              )}
            </div>
            <p className="text-sm">Đăng ký nhận thông tin từ iCanPR</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 bg-blue-50 border border-white/20 rounded focus:outline-none focus:ring-1 focus:ring-white text-black placeholder-black/50"
              />
              <Button
                onClick={() => navigate.push("/lien-he")}
                className="w-full py-2 px-4 bg-blue-50 text-primary hover:bg-primary-foreground transition-colors"
              >
                <span className="text-sm">Tư vấn miễn phí</span>
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t px-10  flex  flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-black">
            © iCanPr - All rights reserved
          </p>
          <img
            src="/RCIC-CERTIFIED-1.png"
            className="w-24"
            alt="RCIC-CERTIFIED-1"
          />
        </div>
      </div>
     
    </footer>
  );
}

export function FancyPhone() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="flex items-center justify-center px-4 py-3  rounded-lg "
    >
      <a
        href="tel:+84869967809"
        className="group flex items-center gap-3 text-highlight hover:text-white transition-colors duration-300"
      >
        <motion.div variants={itemVariants}>
          <Phone className="w-6 h-6" />
        </motion.div>
        <div className="font-sans text-2xl font-bold tracking-wider flex gap-1">
          <motion.span
            variants={itemVariants}
            className="bg-[#1A2A3A]  bg-opacity-20 px-2 py-1 rounded"
          >
            +84
          </motion.span>
          <motion.span
            variants={itemVariants}
            className="bg-[#1A2A3A]  bg-opacity-10 px-2 py-1 rounded"
          >
            869
          </motion.span>
          <motion.span
            variants={itemVariants}
            className="bg-[#1A2A3A]  bg-opacity-10 px-2 py-1 rounded"
          >
            967
          </motion.span>
          <motion.span
            variants={itemVariants}
            className="bg-[#1A2A3A]  bg-opacity-10 px-2 py-1 rounded"
          >
            809
          </motion.span>
        </div>
      </a>
    </motion.div>
  );
}
