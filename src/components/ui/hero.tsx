"use client";

import { useState, useEffect } from "react";
import Navbar from "./navbar";
import { Button } from "./custom";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import { Icon } from "@iconify/react/dist/iconify.js";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Hero() {
  const images = ["/aaa.jpg", "/hero-2.jpg", "/hero-3.jpg"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [slide, setSlide] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide(false);

      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setNextImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setSlide(true);
      }, 500); // Slide animation duration
    }, 5000); // Duration between image changes

    return () => clearInterval(interval);
  }, [images.length]);

  console.log(images);

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="w-full mx-auto   md:h-[500px] shadow-md flex justify-start items-start flex-col overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-bg-[rgba(0, 0, 0, 0.2)]"></div>

        <div className="flex flex-col w-full  h-full relative ">
          <Navbar type={"hero"} />
          <div className="flex flex-col  md:flex-row  h-full">
            <div className="md:w-[50%] w-[100%]">
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                className="flex gap-2 py-0 w-full h-full overflow-hidden"
                style={{ width: "100%" }}
                modules={[Autoplay]}
              >
                {images.map((item, index) => (
                  <SwiperSlide className="!py-0 !px-0" key={index}>
                    <img src={`${item}`} alt="" className="w-full h-full " />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="px-6 lg:px-20 pb-14 lg:pb-20 pt-10 flex-1 h-full bg-white flex gap-8 flex-col justify-center items-center">
              <div className="flex gap-1 flex-col justify-center items-start w-full relative">
                <p className="lg:text-4xl text-3xl text-left text-black">
                  {/* Achieve your family Canada */}
                  Đạt được gia đình của bạn Canada <br />
                  <strong className="text-background ">
                    {/* dreams with us */}
                    ước mơ cùng chúng tôi
                  </strong>
                  <br />
                </p>
              </div>

              <p className="text-left w-full text-black">
                Chúng tôi hỗ trợ các công ty trong quá trình chuyển đổi kỹ thuật{" "}
                <br /> số bằng cách tạo ra các công cụ nội bộ và cung cấp tư vấn{" "}
                <br /> phát triển phần mềm.
              </p>
              <div className="flex w-full justify-start items-start">
                <Button
                  className="py-3 -mt-4 w-[190px] bg-background"
                  icon={
                    <div className="flex gap-2 text-[10px] justify-center items-center">
                      <Icon icon={"mdi:phone"} />
                      <span>+84 869967809</span>
                    </div>
                  }
                >
                  <span className="text-[10px] relative flex gap-1 justify-start items-center">
                    <Icon
                      icon={"teenyicons:appointments-outline"}
                      className="-mt-0.5"
                    />
                    Đặt một cuộc hẹn
                  </span>
                </Button>
              </div>
            </div>

            {/* <div className="w-[104px]"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* Current Image */
}
{
  /* <div
          className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out ${
            slide ? "translate-x-0" : "-translate-x-full"
          }`}
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div> */
}

{
  /* Next Image */
}
{
  /* <div
          className={`absolute top-0 left-full w-full h-full transition-transform duration-500 ease-in-out ${
            slide ? "-translate-x-full" : "translate-x-0"
          }`}
          style={{
            backgroundImage: `url(${images[nextImageIndex]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div> */
}
