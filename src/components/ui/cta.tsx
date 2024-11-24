"use client";
import React from "react";
import { Button } from "./custom";
import { Icon } from "@iconify/react/dist/iconify.js";
// import { Link } from "react-router-dom";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import Title from "./Title";
import Container from "./container";
import Glass from "@/lib/helpers";
import TitleWithBottomBorder from "./title-with-bottom-border";
import Link from "next/link";

export default function CTA() {
  return (
    <>
      <Container
        effect="none"
        className="flex flex-col mx-auto  md:flex-row relative z-[10000]"
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
          <div className="flex-1 items-center justify-center grid grid-cols-1 md:grid-cols-2 gap-10  relative z-50">
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
        <img src={item.image} alt={item.title} className="w-full" />
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
          className={cn("h-[330px] w-full md:h-[220px] bg-cover z-10 relative")}
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
          <span className="text-black">Read More</span>
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
    image: "/ao-dai-traditional-dress-vietnam.jpg",
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
    image: "/work12.jpg",
    title: "Làm việc",
    subtitle:
      "Working in Canada offers a wide array of opportunities for skilled workers from around the world.",
    labels: ["Express Entry", "PR eligibility"],
    description:
      "Canada với nền kinh tế mạnh mẽ, chất lượng cuộc sống cao và xã hội hòa nhập, là điểm đến hấp dẫn cho những ai tìm kiếm sự phát triển nghề nghiệp và tiêu chuẩn sống cao cho gia đình của mình. Tuy nhiên, việc điều hướng quy trình nhập cư và.",
    href: "/immigration/express-entry/federal-skilled-worker",
  },
  {
    id: 3,
    title: "Kinh doanh",
    image: "/business.jpg",
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
    image: "/mom.jpg",
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
    image: "/hero-25.jpg",
    subtitle:
      "Chương trình cho phép các cá nhân đủ điều kiện bảo lãnh người thân gần gũi của họ để định cư lâu dài tại Canada.",
    labels: ["Sponsoring a spouse or partner", "Sponsoring dependent children"],
    description:
      "Ngoài các chương trình xin visa thông thường, mọi người cũng có thể nộp đơn xin visa hoặc thậm chí định cư vĩnh viễn dưới các chương trình bảo lãnh nhất định, cho phép các cá nhân đủ điều kiện bảo lãnh các thành viên gia đình gần gũi của họ để được định cư vĩnh viễn tại Canada.",
    href: "/immigration/family-sponsorship",
  },

  {
    id: 6,
    image: "/vietnamese-people-a-culture-of-hospitality.jpg",
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
    <Container>
      <Glass
        className="flex-col  gap-8 py-20 justify-center items-center bg-cover bg-center relative"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="flex absolute left-0 top-0 w-full h-full bg-black/60"></div>
        <div className="flex flex-col justify-center items-center gap-8 md:gap-3 relative z-10 px-8">
          <h4 className="text-4xl tracking-wider text-center text-white ">
            {title}
          </h4>
          {typeof subtitle === "string" ? (
            <p className="text-lg text-white/90">{subtitle}</p>
          ) : (
            subtitle
          )}
          {typeof description === "string" ? (
            <p className={cn("text-sm", descriptionClassName)}>{description}</p>
          ) : (
            description
          )}
          <Button
            onClick={() => navigate.push("/lien-he")}
            className="py-3 w-[190px]"
            icon={
              <div className="flex gap-2 text-[10px] justify-center items-center">
                <Icon icon={"mdi:phone"} />
                <span>+84 869967809</span>
              </div>
            }
          >
            <span className="text-[10px] relative flex gap-1 justify-start items-center">
              Đặt lịch hẹn tư vấn miễn phí
            </span>
          </Button>
        </div>
      </Glass>
    </Container>
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
  return (
    <Container
      className={cn(
        "flex bg-content py-0 shadow-2xl  ",
        flip ? "flex-col lg:flex-row-reverse" : " flex-col lg:flex-row"
      )}
    >
      <div
        className="flex-1 relative h-auto lg:h-[590px]"

        // style={{
        //   backgroundImage: `url(/hero-3.jpg)`,
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        // }}
      >
        <div className="bg-[rgba(0, 0, 0, 0.2)] absolute top-0 left-0 z-10 w-full bg-opacity-80 h-auto lg:h-[590px]"></div>
        <img
          src={image}
          className="relative w-full object-cover h-full"
          alt={title}
        />
      </div>
      <div className="flex-1 bg-white border-t  border-b border-black/5  flex flex-col gap-6 py-10 px-8">
        <TitleWithBottomBorder titleClass="">{subtitle}</TitleWithBottomBorder>
        <h2 className="text-4xl text-left uppercase">{title}</h2>

        {typeof description === "string" ? (
          <p className="text-left">{description}</p>
        ) : (
          <div
            className={cn(
              "h-64 overflow-y-auto text-left pretty-scroll",
              desClassName
            )}
          >
            {description}
          </div>
        )}

        {ctaAction && (
          <button
            className="flex gap-2 bg-background text-text w-full lg:w-max justify-center items-center rounded-none"
            onClick={() => navigate.push(link)}
          >
            {ctaAction}
            <Icon icon={"simple-icons:aircanada"} className="" />
          </button>
        )}
      </div>
    </Container>
  );
};
