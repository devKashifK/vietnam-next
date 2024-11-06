"use client";
import React, { useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";
import { NewsFeedCard } from "@/components/ui/newsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { supabase } from "@/supabaseClient";

export default function NewsShowcase() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      const { data: dd } = await supabase.from("news").select("*").limit(6);
      console.log(dd, "checkDD");
      setData(dd);
    };
    fetchNews();
  }, []);

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
          const formattedDate = new Date(item.created_at).toLocaleDateString(
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
                author={item.author && item.author.toUpperCase()}
                date={formattedDate}
                description={item.content}
                image={item.image}
                key={item.id}
                id={item.id}
                slug={item.slug}
              />
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
}
