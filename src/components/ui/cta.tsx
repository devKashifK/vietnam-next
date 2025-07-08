"use client";
import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
// import { Link } from "react-router-dom";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import Title from "./Title";
import Container from "./container";
import Glass from "@/lib/helpers";
import TitleWithBottomBorder from "./title-with-bottom-border";
import Link from "next/link";
import MediaItem from "./media-item";
import { Button } from "./button";

export default function CTA() {
  return (
    <>
      <Container
        effect="none"
        className="flex flex-col mx-auto  md:flex-row relative"
      >
        {/* <Title
          title={
            <p className="text-5xl text-black/50 w-full text-left">ancl;</p>
          }
          to={""}
          subtitle={"WHAT ARE YOU LOOKING FOR?"}
          cta={"All Solutions"}
        /> */}
        <div className="flex gap-4 min-h-screen  mx-auto">
          <div className="flex-1 items-center justify-center grid grid-cols-1 md:grid-cols-2 gap-10  relative ">
            {CtaDetails.map((item, index) => (
              <CtaCard item={item} key={item.id} />
            ))}
          </div>
        </div>
      </Container>
      <Container effect="slide-left" className="flex md:hidden mx-auto">
        <Title
          title={
            <p className="text-2xl md:text-5xl  text-black/50 w-full !text-left">
              Comprehensive solutions for <br /> all your needs!
            </p>
          }
          to={""}
          subtitle={"WHAT ARE YOU LOOKING FOR?"}
          cta={"All Solutions"}
        />
        <div className="flex gap-4 min-h-screen h-max w-[90%] mx-auto pt-80 lg:pt-96 md:py-0">
          <div className="w-full items-center justify-center flex flex-col space-y-96">
            {CtaDetails.slice(0, CtaDetails.length - 1).map((item, index) => (
              <CtaCard2 item={item} key={item.id} flip={true} />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}

export const CtaCard = ({ item }) => {
  return (
    <div className="flex hover:bg-background group flex-col  bg-content px-4 py-4 border-gray-100 shadow-md  sm:w-[420px] md:w-full h-[517px] md:h-max justify-start items-center transition-all duration-100 ease-in-out">
      <div className="w-full">
        <MediaItem title={item.image} className="h-[250px] lg:h-[370px]" />
      </div>
      <div className="px-8 flex flex-col gap-2 py-5">
        <div className="flex flex-col gap-0">
          <h5 className="text-4xl text-left text-background group-hover:text-white">
            {item.title}
          </h5>
          {/* <p className="text-sm text-left text-black/70">
            {truncateTextHeading(item.subtitle)}
          </p> */}
        </div>
        <p className="text-xs text-left text-black/80 group-hover:text-white">
          {truncateText(item.description)}...{" "}
          <span className="text-black group-hover:text-white">Đọc thêm</span>
        </p>
        <div className="w-full flex justify-end items-end mt-4">
          <Link
            // to={item.href}
            href={item.href}
            className="bg-background group-hover:bg-white group-hover:text-background text-white  py-1 shadow-xl px-4  text-sm w-max"
          >
            Tìm hiểu thêm
          </Link>
        </div>
      </div>
    </div>
  );
};

export const CtaCard2 = ({ item, flip }) => {
  return (
    <div
      className={cn(
        "w-full md:w-[520px] h-[220px] flex md:flex-row flex-col items-center relative ",
        flip ? "justify-end" : "justify-start"
      )}
    >
      <div className="w-full lg:w-[45%] ">
        <img
          src={item.image}
          alt={item.title}
          className={cn(
            "!h-[250px] w-full lg:h-[220px] bg-cover z-10 relative"
          )}
        />
      </div>
      <div
        className={cn(
          "px-8 w-full lg:w-[330px] h-[330px] lg:h-[236px] relative md:absolute lg:-ml-6 shadow-md  z-20 border-gray-100 backdrop-blur-3xl bg-opacity-10 bg-clip-padding backdrop-filter bg-gray-100 flex flex-col gap-2 py-5",
          flip ? "lg:left-2" : "-right-[30%] lg:-right-6"
        )}
      >
        <div className="flex flex-col justify-center r gap-0">
          <h5 className="text-4xl text-left text-highlight">{item.title}</h5>
          {/* <p className="text-sm text-left text-black/70">
            {truncateTextHeading(item.subtitle)}
          </p> */}
        </div>

        <p className="text-xs text-left text-black/80">
          {truncateText(item.description)}...{" "}
          <span className="text-black">Xem thêm</span>
        </p>
        <div className="w-full flex justify-end items-end mt-4">
          <Link
            // to={item.href}
            href={item.href}
            className="bg-background text-white py-1 shadow-xl px-4 rounded-md text-sm w-max"
          >
            Know More
          </Link>
        </div>
      </div>
    </div>
  );
};

export function truncateText(text) {
  const words = text.split(" ");
  return words.slice(0, 35).join(" ");
}
export function truncateTextHeading(text) {
  const words = text.split(" ");
  return words.slice(0, 9).join(" ");
}

const CtaDetails = [
  {
    id: 1,
    image: "Immigration",
    title: "Nhập cư",
    subtitle:
      "Exploring Canada for immigration is an exciting and life-altering choice.",
    labels: ["Express Entry Program", "Family Sponsorship"],
    description:
      "Với việc định cư tại Canada đạt mức cao kỷ lục, bây giờ là thời điểm lý tưởng để bắt đầu hành trình di cư của bạn. Có nhiều con đường để nhập cư vào Canada và đạt được quyền cư trú lâu dài. Mặc dù việc nhập cư vào Canada yêu cầu... ",
    href: "/immigration/dinh-cu-canada",
  },
  {
    id: 2,
    image: "work12",
    title: "Làm việc",
    subtitle:
      "Working in Canada offers a wide array of opportunities for skilled workers from around the world.",
    labels: ["Express Entry", "PR eligibility"],
    description:
      "Canada với nền kinh tế mạnh mẽ, chất lượng cuộc sống cao và xã hội hòa nhập, là điểm đến hấp dẫn cho những ai tìm kiếm sự phát triển nghề nghiệp và tiêu chuẩn sống cao cho gia đình của mình. Tuy nhiên, việc điều hướng quy trình nhập cư và.",
    href: "/immigration/nhap-canh-nhanh/cong-nhan-lanh-nghe-lien-bang",
  },
  {
    id: 3,
    title: "Kinh doanh",
    image: "business",
    subtitle:
      "Đầu tư và xây dựng doanh nghiệp của bạn trong khi đảm bảo quyền thường trú cho gia đình tại Canada. ",
    labels: ["Quebec Investor", "Start Up Visa"],
    description:
      "Các chương trình visa nhập cư doanh nghiệp tại Canada được thiết kế cho những cá nhân mong muốn nhập cư vào Canada để bắt đầu, đầu tư vào hoặc quản lý một doanh nghiệp. Các chương trình này nhằm thúc đẩy tăng trưởng kinh tế và tạo ra việc làm tại Canada.",
    href: "/immigration/viec-lam-dinh-cu",
  },
  {
    id: 4,
    title: "Học tập",
    image: "mom",
    subtitle:
      "Học tập tại Canada mang đến nền giáo dục hàng đầu, trải nghiệm văn hóa đa dạng và cơ hội tuyệt vời cho sự phát triển cá nhân và nghề nghiệp.",
    labels: ["High Quality Education", "Diverse Campuses and Programs"],
    description:
      "Canada nổi tiếng với các cơ sở giáo dục hàng đầu. Nhiều trường đại học và cao đẳng của Canada liên tục đứng trong danh sách những cơ sở giáo dục tốt nhất toàn cầu. Các bằng cấp và chứng chỉ của Canada được công nhận và tôn trọng trên toàn thế giới.",
    href: "/immigration/du-hoc-dinh-cu",
  },

  {
    id: 5,
    title: "Bảo lãnh gia đình",
    image: "family12",
    subtitle:
      "Chương trình cho phép các cá nhân đủ điều kiện bảo lãnh người thân gần gũi của họ để định cư lâu dài tại Canada.",
    labels: ["Sponsoring a spouse or partner", "Sponsoring dependent children"],
    description:
      "Ngoài các chương trình xin visa thông thường, mọi người cũng có thể nộp đơn xin visa hoặc thậm chí định cư vĩnh viễn dưới các chương trình bảo lãnh nhất định, cho phép các cá nhân đủ điều kiện bảo lãnh các thành viên gia đình gần gũi của họ để được định cư vĩnh viễn tại Canada.",
    href: "/immigration/family-sponsorship",
  },

  {
    id: 6,
    image: "not-sure",
    title: "Chưa chắc chắn?",
    subtitle:
      "Cảm thấy không chắc chắn về hành trình di cư của bạn? Đội ngũ dày dạn kinh nghiệm của ICAN sẵn sàng cung cấp hướng dẫn và hỗ trợ chuyên môn cho bạn!",
    labels: ["Why GTR Immigration?", "Reasonable cost guaranteed quality"],
    description:
      "Saskatchewan nổi bật là một tỉnh ở Canada với các chương trình di cư mở, phù hợp với nhiều cá nhân đang tìm kiếm cơ hội định cư tại quốc gia này..",
    href: "/book-appointment",
  },
];

export const CTADefault = ({
  title,
  subtitle,
  image,
  description,
  descriptionClassName,
}: {
  title?: string;
  subtitle?: string | React.ReactNode;
  image?: string;
  description?: string | React.ReactNode;
  descriptionClassName?: string;
}) => {
  const navigate = useRouter();
  return (
    <section className="relative w-full min-h-[420px] flex flex-col md:flex-row items-stretch justify-center bg-white overflow-hidden">
      {/* Large blurred highlight accent */}
   
      {/* Left: Content */}
      <div className="relative z-20 py-20 px-20 md:px-20 bg-white-50 w-[60%] flex flex-col items-start justify-start gap-6">
        {/* Subtitle badge */}
        {subtitle && (
          <span className="mb-2 bg-highlight/20 text-highlight font-bold px-4 py-1 rounded-full text-xs tracking-wide uppercase">
            {subtitle}
          </span>
        )}
        {/* Title with highlight underline */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#6B3F1D] leading-tight mb-2">
          {title}
          <span className="block w-16 h-1 bg-[#6B3F1D] mt-2 rounded-full" />
        </h2>
        {/* Description */}
        {typeof description === "string" ? (
          <p className={cn("text-base md:text-lg text-black leading-relaxed mb-4", descriptionClassName)}>
            {description}
          </p>
        ) : (
          <div className={cn("text-base md:text-lg text-black leading-relaxed mb-4", descriptionClassName)}>{description}</div>
        )}
        {/* CTA Button and Trust Badge */}
        <div className="flex flex-col sm:flex-row items-start justify-start gap-4 w-full mt-2">
          <Button
            onClick={() => navigate.push("/lien-he")}
            className="py-3 px-8 bg-highlight text-white font-bold rounded-lg shadow-md hover:bg-highlight/90 focus:outline-none focus:ring-2 focus:ring-highlight text-base flex gap-2 items-center justify-center"
           
          >
            <span className="text-[13px] flex gap-1 items-center">
              Đặt lịch hẹn tư vấn miễn phí
            </span>
          </Button>
          <Button className="flex items-center gap-1 text-highlight text-xs font-bold bg-highlight/10 px-3 py-1 rounded-md shadow hover:text-white">
            <Icon icon="mdi:shield-check" className="" /> Được chứng nhận RCIC
          </Button>
        </div>
      </div>
      {image && (
        <div className="relative w-[40%] h-[320px] md:h-auto min-h-[220px] max-h-[600px] md:max-h-none flex items-stretch justify-end mt-8 md:mt-0 overflow-hidden  shadow-xl group">
          <img
            src={image}
            alt="CTA"
            className="w-full h-full object-cover  transition-transform duration-1000 ease-in-out group-hover:scale-105"
          />
          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-l-2xl pointer-events-none" />
          {/* Floating badge (optional) */}
          {/* <div className="absolute bottom-4 right-4 bg-highlight text-white text-xs font-bold px-3 py-1 rounded shadow-lg flex items-center gap-1">
            <Icon icon="mdi:shield-check" className="inline" />
            RCIC Certified
          </div> */}
        </div>
      )}
    </section>
  );
};

export const CTAWithImage = ({
  subtitle,
  title,
  description,
  ctaAction,
  image,
  flip,
  desClassName,
  link = "/",
}: {
  subtitle?: string | React.ReactNode;
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  ctaAction?: string | React.ReactNode;
  image: string;
  flip?: boolean;
  link?: string;
  desClassName?: string;
}) => {
  const navigate = useRouter();
  // For demo, use the same image twice. You can pass a second image prop if needed.
  const image2 = image;
  return (
    <section
      className={cn(
        "relative w-full min-h-[480px] flex justify-center items-center overflow-hidden bg-white py-20 lg:py-20",
        flip ? "lg:flex-row-reverse" : ""
      )}
    >
      <div className="relative z-20 flex flex-col justify-center gap-5 lg:gap-6 px-8 py-12 w-full max-w-screen-lg lg:max-w-[640px] min-h-[340px]">
        {/* Accent line or icon above title */}
        <div className="mb-2 flex items-center gap-2">
          <span className="inline-block w-8 h-1 rounded-full bg-highlight" />
          <span className="text-xs text-highlight font-semibold tracking-widest uppercase">{subtitle}</span>
        </div>
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-highlight uppercase mb-4 leading-tight">
          {title}
        </h2>
        {/* Description */}
        {typeof description === "string" ? (
          <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-xl mb-4">
            {description}
          </p>
        ) : (
          <div
            className={cn(
              "max-w-xl text-gray-700 text-base leading-relaxed mb-4",
              desClassName
            )}
          >
            {description}
          </div>
        )}
        {/* Trust Signals */}
        <div className="flex items-center gap-4 mb-6">
          <span className="flex items-center gap-1 text-highlight text-xs font-semibold bg-white/80 px-3 py-1 rounded-full">
            <Icon icon="mdi:shield-check" className="text-highlight" /> Được chứng nhận RCIC
          </span>
          <span className="flex items-center gap-1 text-highlight text-xs font-semibold bg-white/80 px-3 py-1 rounded-full">
            <Icon icon="mdi:lock" className="text-highlight" /> Bảo mật & Riêng tư
          </span>
        </div>
        {/* CTA Button (Vietnamese, clean style) */}
        {link !== "/" && ctaAction && (
          <div className="mt-2">
            <button
              className="group flex gap-2 bg-highlight text-white text-sm font-bold py-3 px-8 rounded-lg shadow-md  sm:text-sm w-full sm:w-auto justify-center items-center transition-all duration-200 hover:bg-highlight/90 focus:outline-none focus:ring-2 focus:ring-highlight text-left"
              onClick={() => navigate.push(link)}
            >
              {ctaAction}
              <Icon icon={"simple-icons:aircanada"} className="ml-2 text-lg group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}
      </div>
      {/* Image Area with subtle divider */}
      <div className="relative w-full max-w-[520px] flex justify-center items-center mt-8 lg:mt-0 h-[340px] lg:h-[520px] ml-0 lg:ml-8">
        {/* Main image card (from props) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[340px] lg:w-[400px] lg:h-[520px] bg-white rounded-2xl shadow-2xl border-2 border-highlight z-10 overflow-hidden flex items-center justify-center">
          <MediaItem title={image} className="w-full h-full object-cover rounded-2xl" />
        </div>
        {/* Secondary image card (static image) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[160px] lg:w-[180px] lg:h-[240px] bg-white rounded-2xl shadow-xl border-2 border-white z-20 overflow-hidden flex items-center justify-center" style={{marginLeft: '150px', marginTop: '80px'}}>
          <img src="/immigration.png" alt="Immigration" className="w-full h-full object-cover rounded-2xl" />
        </div>
        {/* Vertical divider for large screens */}
        <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-1 h-2/3 bg-highlight opacity-60 rounded-full -ml-8" />
      </div>
    </section>
  );
};



