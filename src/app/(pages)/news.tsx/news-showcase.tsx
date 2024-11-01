"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { supabase } from "./../../supabaseClient";
import { Autoplay } from "swiper/modules";
import { NewsFeedCard } from "@/components/ui/newsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function NewsShowcase() {
  const { data } = useQuery({
    queryKey: ["showCasePost"],
    queryFn: async () => {
      const response = await supabase.from("News").select("*").limit(6);
      return response.data;
    },
  });
  return (
    <Swiper
      spaceBetween={30}
      // slidesPerView={2}
      breakpoints={{
        // When the viewport is >= 768px
        768: {
          slidesPerView: 2,
        },

        // When the viewport is >= 320px
        320: {
          slidesPerView: 1,
        },
      }}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      className="flex flex-row"
      style={{ width: "100%" }}
    >
      {data &&
        data.map((item, index) => {
          const formattedDate = new Date(item.pub_date).toLocaleDateString(
            undefined,
            {
              year: "numeric",
              month: "long",
              day: "numeric",
            }
          );
          return (
            <SwiperSlide key={index} className="w-[480px]">
              <NewsFeedCard
                title={item.title}
                subTitle={item.subTitle}
                author={item.creator.toUpperCase()}
                date={formattedDate}
                description={item.description}
                image={item.image}
                key={item.id}
                id={item.id}
              />
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
}
