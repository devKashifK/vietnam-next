import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { Button } from "./custom";
import Link from "next/link";
// import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="flex flex-col w-full  mx-auto bg-white shadow-2xl">
      <div className="bg-white bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 rounded-t-2xl h-max md:h-[500px] flex  flex-col md:flex-row gap-10 px-12 py-16 items-center justify-center text-white">
        <div className="flex flex-col gap-10 flex-1 text-secondary/50 pt-10  justify-start items-start">
          <img src="/logo.png" alt="" className="w-[60%]  md:pl-8" />

          <div className="flex flex-col gap-2 text-white font-no8rmal justify-start items-start w-full cursor-pointer pl-0 md:pl-2 text-sm">
            <Link
              // to={""}
              href={""}
              className="border-secondary hover:underline text-secondary-b text-secondary w-[80%] text-left  text-secondary-white/25 px-0 md:px-8 block"
            >
              {/* About iCanPR company */}
              Giới thiệu về công ty iCanPR
            </Link>
            <Link
              // to={""}
              href={""}
              className="border-secondary text-secondary-b text-secondary w-[80%] text-left hover:underline text-secondary-white/25 px-0 md:px-8 block"
            >
              {/* Contact */}
              Liên hệ
            </Link>
            <Link
              // to={""}
              href={""}
              className="border-secondary text-secondary-b text-secondary w-[80%] text-left hover:underline text-secondary-white/25 px-0 md:px-8 block"
            >
              {/* iCanPR Partner */}
              Đối tác iCanPR
            </Link>
            <Link
              // to={""}
              href={""}
              className="border-secondary text-secondary-b text-secondary w-[80%] text-left hover:underline text-secondary-white/25 px-0 md:px-8 block"
            >
              {/* Service */}
              Dịch vụ
            </Link>
            <Link
              // to={""}
              href={""}
              className="border-secondary text-secondary-b text-secondary w-[80%] text-left hover:underline text-secondary-white/25 px-0 md:px-8 block"
            >
              {/* Provincial Program */}
              Chương trình tỉnh bang
            </Link>

            {/* <Link
              to={""}
              className="border-secondary text-secondary-b w-[80%] text-left border-secondary text-secondary-white/25 px-0 md:px-8 block"
            >
              Make Appointment
            </Link>
            <Link
              to={""}
              className="border-secondary text-secondary-b w-[80%] text-left border-secondary text-secondary-white/25 px-0 md:px-8 block"
            >
              Work and Jobs
            </Link> */}
          </div>
          <div className="flex flex-col gap-6 md:gap-2 md:flex-row  text-sm font-normal text-secondary pb-12 md:px-10">
            <div className="w-[40%] text-left hover:underline">
              {/* 2124 Broad St, Regina, Saskatchewan,Canada S4P 1Y5 (Registered
              office) */}
              Địa chỉ : Tầng 2, tòa nhà Rosana, 60 Nguyễn Đình Chiểu, Quận 1, Hồ
              Chí Minh, Việt Nam
            </div>
            <div className="flex w-[60%] flex-col gap-1 text-secondary">
              <div className="flex gap-2 text-left">
                <p className="flex-1">Email</p>
                <p className="flex-1 -ml-20 hover:underline">tuvan@icanpr.vn</p>
              </div>
              <div className="flex gap-2 text-left">
                <p className="flex-1">
                  {/* Phone */}
                  Điện thoại
                </p>
                <p className="flex-1 -ml-20 hover:underline">
                  {/* +1-855-477-9797 */}
                  +84 869967809
                </p>
              </div>
              <div className="flex gap-2 text-left">
                <p className="flex-1">
                  {/* Timings */}
                  Giờ làm việc
                </p>
                <p className="flex-1 -ml-20 text-secondary hover:underline">
                  {/* 9AM to 5PM (GMT-6) */}
                  9:00 - 5:00, Thứ 2- Thứ 6, 9-12:00 sáng Thứ 7
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 flex-1 h-full text-secondary font-normal  justify-start items-start md:px-5">
          <div className="flex flex-col gap-5">
            <p className="text-sm text-left">
              {/* Follow us */}
              Theo dõi chúng tôi
            </p>
            <div className="h-10  border-secondary text-secondary-gray-400 flex flex-row">
              <span className="w-14 h-14">
                <Icon
                  icon={"carbon:logo-linkedin"}
                  className="text-4xl text-secondary cursor-pointer border  border-secondary rounded-full py-2 px-2"
                />
              </span>
              <span className="w-14 h-14">
                <Icon
                  icon={"carbon:logo-facebook"}
                  className="text-4xl cursor-pointer border border-secondary text-secondary rounded-full py-2 px-2"
                />
              </span>
              <span className="w-14 h-14">
                <Icon
                  icon={"carbon:logo-twitter"}
                  className="text-4xl cursor-pointer border border-secondary text-secondary rounded-full py-2 px-2"
                />
              </span>
              <span className="w-14 h-14">
                <Icon
                  icon={"carbon:logo-instagram"}
                  className="text-4xl cursor-pointer border  border-secondary text-secondary rounded-full py-2 px-2"
                />
              </span>
              <span className="w-14 h-14">
                <Icon
                  icon={"carbon:logo-youtube"}
                  className="text-4xl cursor-pointer border border-secondary text-secondary  rounded-full py-2 px-2"
                />
              </span>
            </div>
            <p className="text-sm text-left w-[50%] pb-3">
              {/* Receive resources & tools that can help you prepare for the
              future. You can cancel anytime. */}
              Nhận các nguồn lực và công cụ có thể giúp bạn chuẩn bị cho tương
              lai. Bạn có thể hủy bất cứ lúc nào.
            </p>

            <input
              placeholder="Email"
              className="w-[80%] bg-[#3A3A3C]  focus:border-secondary text-secondary-none cursor-pointer outline-none px-4 py-3 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60  rounded-lg"
            />

            <div className="pt-4 mt-8 flex gap-6 relative w-full">
              <Button
                className="py-2 px-4  text-white"
                icon={
                  <div className="flex gap-2 justify-center items-center text-xs">
                    <Icon icon={"mdi:phone"} />
                    <span>+84 869967809</span>
                  </div>
                }
              >
                <span className="text-xs">
                  {/* Free Consultation */}
                  Tư vấn miễn phí
                </span>
              </Button>
              <img
                src="./RCIC-CERTIFIED-1.png"
                className="w-56 absolute right-28 -top-4"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex  py-5  px-12 bg-highlight  w-full text-white text-xs">
        <span className="">© ICANPR Vietnam - All rights reserved</span>
      </div>
    </div>
  );
}
