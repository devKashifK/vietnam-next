"use client";
import Container from "@/components/ui/container";
import CTA, { CTAWithImage, CTADefault } from "@/components/ui/cta";
import Footer from "@/components/ui/footer";
import Hero from "@/components/ui/hero";
import PnpProgramSlider from "@/components/ui/pnpProgramSlider";
import Sidebar from "@/components/ui/sidebar-main";
import { InfiniteMovingCardsDemo } from "@/components/ui/testimonial";
import WhyChooseUs from "@/components/ui/why-choose-us";
import Glass from "@/lib/helpers";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import CountUp from "react-countup";
import NewsShowcase from "./(pages)/news.tsx/news-showcase";
import Title from "@/components/ui/Title";
import OurService from "@/components/ui/hom-service";
import { CardWithImage } from "@/components/ui/card-with-image";

export default function Home() {
  console.log("home");
  return (
    <>
      <Hero />
      <div className="py-10 sm:py-10 flex flex-col gap-12">
        {/* <CTA /> */}
        <NewsShowcase />
        {/* <WhyChooseUs /> */}
        <Container className="gap-10">
          <Title
            subtitle="Chúng tôi tự tin có thể giúp giấc mơ Canada của gia đình bạn thành sự thật"
            title="Các chương trình định cư phù hợp cho người Việt"
            description={
              <div className="flex flex-col gap-3 mt-2">
                <p className="text-black/50 text-center">
                  Canada có nhiều chương trình định cư, nhưng phù hợp và lộ
                  trình nhanh nhất cho người Việt là các chương trình AINP
                  (Alberta Immigrant Nominee Program) của tỉnh bang Alberta và
                  SINP (Saskatchewan Immigrant Nominee Program) của tỉnh bang
                  Saskatchewan dành cho lao động lành nghề.
                </p>
                <p className="text-black/50 text-center">
                  Bên cạnh đó, chương trình C11 mở ra cánh cửa nhập cư cho doanh
                  nhân, chủ doanh nghiệp với vốn đầu tư tối thiểu chỉ CAD
                  100.000.
                </p>
              </div>
            }
          />
          {/* <PnpProgramSlider /> */}
          <div className="flex  flex-wrap gap-5">
            {provinceConfig.map((item) => (
              <CardWithImage
                image={item.image}
                title={item.title}
                key={item.id}
                description={item.des}
              />
            ))}
          </div>
        </Container>

        <OurService />
        {/* <Container>
          <Glass
            className="flex-col  gap-8 py-20 justify-center items-center bg-cover bg-center relative"
            style={{
              backgroundImage: `url(/immigration.png)`,
            }}
          >
            <div className=" h-full absolute top-0 left-0 w-full"></div>

            <div className="md:flex-row flex-col flex z-10 gap-4 justify-start items-start w-[80%]">
              <div className="flex w-full md:flex-1 justify-center items-center  flex-col gap-4 text-white/60 bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border-gray-100 px-6 py-4 h-56">
                <Icon
                  icon={"mdi:checkbox-marked-outline"}
                  className="text-5xl cursor-pointer  rounded-full py-2 px-2"
                />
                <div className="flex gap-2 justify-center items-center">
                  <CountUp
                    enableScrollSpy={true}
                    end={100}
                    className="text-6xl"
                  />
                  <span className="text-4xl">+</span>
                </div>
                <span className="uppercase text-lg font-primary tracking-widest">
                  Visa Thành Công Năm 2023
                </span>
              </div>
              <div className="flex w-full md:flex-1 justify-center items-center  flex-col gap-4 text-white/60 bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border-gray-100 px-6 py-4 h-56">
                <Icon
                  icon={"icon-park-outline:message-success"}
                  className="text-5xl cursor-pointer  rounded-full py-2 px-2"
                />

                <div className="flex gap-2 justify-center items-center">
                  <CountUp
                    enableScrollSpy={true}
                    end={14}
                    className="text-6xl"
                  />
                </div>
                <span className="uppercase text-lg font-primary tracking-widest">
                  Visa Khởi Nghiệp Thành Công
                </span>
              </div>
              <div className="flex w-full md:flex-1 justify-center items-center  flex-col gap-4 text-white/60 bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border-gray-100 px-6 py-4 h-56">
                <Icon
                  icon={"cil:happy"}
                  className="text-5xl cursor-pointer  rounded-full py-2 px-2"
                />
                <div className="flex gap-2 justify-center items-center">
                  <CountUp
                    enableScrollSpy={true}
                    end={95}
                    className="text-6xl"
                  />
                  <span className="text-4xl"> %</span>
                </div>

                <span className="uppercase text-lg font-primary tracking-widest">
                  Khách hàng hài lòng
                </span>
              </div>
              <div className="flex w-full md:flex-1 justify-center items-center  flex-col gap-4 text-white/60 bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border-gray-100 px-6 py-4 h-56">
                <Icon
                  icon={"game-icons:trophy-cup"}
                  className="text-5xl cursor-pointer rounded-full py-2 px-2"
                />
                <div className="flex gap-2 flex-col  justify-center items-center">
                  <CountUp
                    enableScrollSpy={true}
                    end={3}
                    className="text-6xl"
                  />
                </div>
                <span className="uppercase text-lg font-primary tracking-widest">
                  Nhà tư vấn
                </span>
              </div>
            </div>
          </Glass>
        </Container> */}
        <CTAWithImage
          flip={true}
          title={
            "Chúng tôi luôn sẵn sàng hiện thực hóa giấc mở nhập cư của bạn"
          }
          subtitle={"Hãy tin tưởng công ty chúng tôi"}
          description={
            <div className="flex flex-col gap-2 justify-start items-start">
              <p className="text-left">
                Cùng ICanPR hành trình định cư Canada của gia đình bạn sẽ trở
                nên dễ dàng hơn.
              </p>
              <p className="text-left">
                Đội ngũ chuyên gia kinh nghiệm của chúng tôi cam kết đồng hành
                cùng sự thành công của bạn. Chúng tôi cung cấp hướng dẫn theo
                từng hồ sơ, cập nhật thông tin và hỗ trợ không ngừng trong suốt
                quá trình di trú của bạn. Với bề dầy kinh nghiệm, chúng tôi đảm
                bảo cho bạn một hành trình di trú nhanh chóng, thuận lợi và
                thành công đưa bạn đến cuộc sống mới tại Canada..
              </p>
            </div>
          }
          image="graduate"
          ctaAction={
            "Hãy cùng bắt đầu hành trình thay đổi cuộc sống này cùng nhau nào!"
          }
          link="/ve-icanpr"
        />

        <Container effect="none" className="flex flex-col gap-10">
          <Title
            cta="All News & Events"
            subtitle="Tin Tức Di Trú"
            title="Tin Tức & Sự Kiện Mới Nhất"
            to="/news"
          />
        </Container>
        <CTADefault
          image="/service.jpg"
          title="Chúng tôi có thể giúp bạn"
          description={
            <div className="flex flex-col gap-2 mt-4">
              <p className="text-lg text-white">
                iCan PR hiểu rằng di trú/ định cư tại Canada là một hành trình
                nhiều thay đổi và thách thức. Mục tiêu và nhiệm vụ của chúng tôi
                trở thành đối tác đáng tin cậy của bạn trong hành trình này.
              </p>
              <p className="text-lg text-white">
                Chúng tôi mong muốn giúp bạn hiện thực hóa ước mơ định cư
                Canada, sẳn sàng chào đón những cơ hội mới tại đây.
              </p>
            </div>
          }
        />

        <InfiniteMovingCardsDemo />

        {/* <Jobs /> */}
      </div>
      <Footer />
    </>
  );
}
const provinceConfig = [
  {
    id: 1,
    image: "/alberta.png",
    title: "Alberta",
    des: "Nổi bật với chương trình Alberta Rural Renewal, mang lại cơ hội xin PR trực tiếp từ Việt Nam cho lao động lành nghề",
    href: "/de-cu-tinh-bang-pnp/alberta-nhap-cu-aaip",
  },
  {
    id: 2,
    image: "/saskatchewan.jpg",
    title: "Saskatchewan",
    des: "Lộ trình Saskatchewan Experience cho phép người lao động xin đề cử tỉnh bang & PR sau 6 tháng làm việc. Xin PR từ Việt Nam với JAL",
    href: "/de-cu-tinh-bang-pnp/saskatchewan-sinp",
  },
  {
    id: 3,
    image: "/atlantic.png",
    title: "Atlantic",
    des: "Lộ trình Atlantic Experience cho phép người lao động xin đề cử tỉnh bang & PR sau 6 tháng làm việc. Xin PR từ Việt Nam với JAL",
    href: "/de-cu-tinh-bang-pnp/atlantic-aipp",
  },

  {
    id: 4,
    image: "/british.jpg",
    title: "British Columbia",
    des: "British Columbia (BC) là một tỉnh bang ở phía tây Canada, nổi tiếng với cảnh quan thiên nhiên tuyệt đẹp và đa dạng. Thủ phủ của tỉnh là Victoria, nằm trên đảo Vancouver, trong khi thành phố lớn nhất là Vancouver, nằm trên đất liền. ",
    href: "/de-cu-tinh-bang-pnp/british-columbia-bcpnp",
  },
  {
    id: 5,
    image: "/ontario.png",
    title: "Ontario",
    des: "Chương trình Đề cử tỉnh bang Ontario (OINP) là chương trình nhập cư chính của tỉnh bang Ontario. Chương trình này nhằm thu hút những người lao động có kỹ năng, doanh nhân và nhà đầu tư đến sinh sống và làm việc tại Ontario, góp phần phát triển nền kinh tế của tỉnh bang.Thông qua chương trình này, những ứng viên được tỉnh bang Ontario đề cử có thể nộp đơn xin thường trú tại Canada.",
    href: "/de-cu-tinh-bang-pnp/ontario-oinp",
  },
  {
    id: 6,
    image: "/manitoba.png",
    title: "Manitoba",
    des: "Chương trình đề cử tỉnh bang Manitoba (MPNP) là chương trình nhập cư chính của tỉnh bang Manitoba. Chương trình này được đưa ra để giúp phát triển nền kinh tế của tỉnh bang, dựa trên nhu cầu kinh tế và thị trường lao động.Thông qua chương trình này, những người nhập cư tương lai với các kỹ năng và kinh nghiệm được tỉnh bang chọn có thể nhận được giấy đề cử tỉnh bang của Manitoba.",
    href: "/de-cu-tinh-bang-pnp/manitoba-mpnp",
  },

  {
    id: 7,
    image: "/newbrunswick.png",
    title: "New Brunswick",
    des: "Chương trình Đề cử Tỉnh bang New Brunswick (NBPNP) nhằm thu hút và giữ chân những người lao động lành nghề, doanh nhân và sinh viên tốt nghiệp có khả năng hội nhập thành công vào thị trường lao động và cộng đồng của tỉnh bang này.Nếu thành công trong việc đăng ký NBPNP, ứng viên sẽ nhận được chứng nhận Đề cử tỉnh bang, chứng nhận này sẽ hỗ trợ cho đơn xin thường trú với Chính phủ Canada.",
    href: "/de-cu-tinh-bang-pnp/new-brunswick-nbpnp",
  },

  {
    id: 8,
    image: "/province/prince/a.png",
    title: "Prince Edward Island",
    des: "Prince Edward Island (Đảo hoàng tử) là một tỉnh bang nhỏ nằm ở phía Đông của Canada. Đây cũng là tỉnh bang nhỏ nhất và cũng xanh nhất của Canada với thiên nhiên tươi đẹp, nước và không khí cực kì trong lành.. Nông nghiệp, ngư nghiệp và du lịch là lĩnh vực phát triển trọng tâm của nền kinh tế đảo hoàng tử Edward",
    href: "/de-cu-tinh-bang-pnp/prince-edward-island-peipnp",
  },
  {
    id: 9,
    image: "/yukon.jpg",
    title: "Yukon",
    des: "Yukon (YNP) là một tỉnh bang nhỏ nằm ở phía Đông của Canada. Đây cũng là tỉnh bang nhỏ nhất và cũng xanh nhất của Canada với thiên nhiên tươi đẹp, nước và không khí cực kì trong lành.. Nông nghiệp, ngư nghiệp và du lịch là lĩnh vực phát triển trọng tâm của nền kinh tế đảo hoàng tử Edward",
    href: "/de-cu-tinh-bang-pnp/yukon-ynp",
  },
  {
    id: 10,
    image: "/province/newfoundland/a.png",
    title: "New Foundland",
    des: "New Foundland là một tỉnh bang nhỏ nằm ở phía Đông của Canada. Đây cũng là tỉnh bang nhỏ nhất và cũng xanh nhất của Canada với thiên nhiên tươi đẹp, nước và không khí cực kì trong lành.. Nông nghiệp, ngư nghiệp và du lịch là lĩnh vực phát triển trọng tâm của nền kinh tế đảo hoàng tử Edward",
    href: "/de-cu-tinh-bang-pnp/new-foundland-nlpnp",
  },
  {
    id: 11,
    image: "/novaScotia.jpg",
    title: "NovaScotia",
    des: "Nova Scotia là một tỉnh bang nhỏ nằm ở phía Đông của Canada. Đây cũng là tỉnh bang nhỏ nhất và cũng xanh nhất của Canada với thiên nhiên tươi đẹp, nước và không khí cực kì trong lành.. Nông nghiệp, ngư nghiệp và du lịch là lĩnh vực phát triển trọng tâm của nền kinh tế đảo hoàng tử Edward",
    href: "/de-cu-tinh-bang-pnp/nova-scotia-nsnp",
  },
  {
    id: 12,
    image: "/province/quebec/a.png",
    title: "Quebec",
    des: "Quebec là một tỉnh bang nhỏ nằm ở phía Đông của Canada. Đây cũng là tỉnh bang nhỏ nhất và cũng xanh nhất của Canada với thiên nhiên tươi đẹp, nước và không khí cực kì trong lành.. Nông nghiệp, ngư nghiệp và du lịch là lĩnh vực phát triển trọng tâm của nền kinh tế đảo hoàng tử Edward",
    href: "/de-cu-tinh-bang-pnp/quebec-qswp",
  },
];
