"use client";

import React from "react";
import Container from "./container";
import Glass from "@/lib/helpers";
import Title from "./Title";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

import { Autoplay } from "swiper/modules";
import dynamic from "next/dynamic";

// const DynamicSwiper = dynamic(() => import("swiper/react"), { ssr: false });
const DynamicSwiper = dynamic(
  () => import("swiper/react").then((mod) => mod.Swiper),
  { ssr: false }
);

const DynamicSwiperSlide = dynamic(
  () => import("swiper/react").then((mod) => mod.SwiperSlide),
  { ssr: false }
);
// import "swiper/swiper-bundle.min.css";

export default function Jobs() {
  return (
    <Container effect="slide-down" className="">
      <Glass className="flex flex-col gap-8 px-10 py-10">
        <Title
          subtitle="Looking a job in Canada?"
          title="We Are Hiring"
          cta="View and Apply Jobs"
        />

        <DynamicSwiper
          spaceBetween={50}
          slidesPerView={4}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          className="flex gap-2 overflow-hidden"
          style={{ width: "100%" }}
          modules={[Autoplay]}
        >
          {logo.map((item, index) => (
            <DynamicSwiperSlide key={index}>
              <img
                src={`${item}`}
                alt=""
                className="w-60 h-28 object-contain mix-blend-multiply"
              />
            </DynamicSwiperSlide>
          ))}
        </DynamicSwiper>
      </Glass>
    </Container>
  );
}

const logo = [
  "/logos/l1.png",
  "/logos/l2.png",
  "/logos/l3.jpg",
  "/logos/l4.png",
  "/logos/l5.png",
  "/logos/l6.png",
  "/logos/l7.png",
  "/logos/l8.png",
];
