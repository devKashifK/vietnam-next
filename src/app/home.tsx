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
import { Title } from "@radix-ui/react-toast";
import React from "react";
import CountUp from "react-countup";
import NewsShowcase from "./(pages)/news.tsx/news-showcase";

export default function Home() {
  return (
    <>
      {/* <Sidebar /> */}
      <Hero />
      <div className="py-10 sm:py-10 flex flex-col gap-12">
        <CTA />

        <WhyChooseUs />

        <Container className="gap-10">
          <Title
            subtitle="Chúng tôi tự tin có thể giúp giấc mơ Canada của gia đình bạn thành sự thật"
            title="Các chương trình định cư phù hợp cho người Việt"
            description={
              <div className="flex flex-col gap-3 mt-2">
                <p className="text-black/50">
                  Canada có nhiều chương trình định cư, nhưng phù hợp và lộ
                  trình nhanh nhất cho người Việt là các chương trình AINP
                  (Alberta Immigrant Nominee Program) của tỉnh bang Alberta và
                  SINP (Saskatchewan Immigrant Nominee Program) của tỉnh bang
                  Saskatchewan dành cho lao động lành nghề.
                </p>
                <p className="text-black/50">
                  Bên cạnh đó, chương trình C11 mở ra cánh cửa nhập cư cho doanh
                  nhân, chủ doanh nghiệp với vốn đầu tư tối thiểu chỉ CAD
                  100.000.
                </p>
              </div>
            }
          />
          <PnpProgramSlider />
        </Container>
        <Container>
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
        </Container>
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
          image="/aaa.jpg"
          ctaAction={
            "Hãy cùng bắt đầu hành trình thay đổi cuộc sống này cùng nhau nào!"
          }
        />

        <Container effect="slide-up" className="flex flex-col gap-10">
          <Title
            cta="All News & Events"
            subtitle="Tin Tức Di Trú Canada"
            title="Tin Tức & Sự Kiện Mới Nhất"
            to="/news"
          />
          <NewsShowcase />
        </Container>
        <CTADefault
          image="/service.jpg"
          subtitle="Chúng tôi có thể giúp bạn"
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
