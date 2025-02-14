"use client";
import React, { useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";
import { NewsFeedCard } from "@/components/ui/newsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { supabase } from "@/supabaseClient";

export default function NewsShowcase() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  function formatDate(isoString) {
    const date = new Date(isoString);
    return date
      .toLocaleString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
      .replace(/\//g, "-"); // Replace / with - for desired format
  }

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // Fetch the 12 most recent posts
        const response = await fetch(
          "https://icanpr.vn/wp-json/wp/v2/posts?per_page=12&orderby=date&order=desc&_embed"
        );
        if (!response.ok) throw new Error("Failed to fetch news");

        const posts = await response.json();
        // Format the posts
        const formattedPosts = posts.map((post) => ({
          id: post.id,
          title: post.title.rendered,
          subTitle: post.excerpt.rendered,
          content: post.excerpt.rendered,
          author: post.author,
          date: formatDate(post.date),
          slug: post.slug,
          image:
            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
            "/default.jpg",
        }));

        setData(formattedPosts);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading)
    return (
      <div className="min-h-[450px] w-full flex items-center justify-center">
        <div className="relative flex flex-col items-center gap-4">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-primary/20 rounded-full" />
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin absolute top-0 left-0" />
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-primary font-medium">Loading news</span>
            <span className="flex gap-1">
              <span className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]" />
              <span className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]" />
              <span className="w-2 h-2 rounded-full bg-primary animate-bounce" />
            </span>
          </div>
        </div>
      </div>
    );
  return (
    <div className="w-full py-8">
      <Swiper
        spaceBetween={30}
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          320: {
            slidesPerView: 1,
          },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay]}
        className="flex flex-row"
        style={{ width: "100%", height: "100%" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.map((item, index) => (
            <SwiperSlide
              key={index}
              className="h-full flex items-stretch"
              style={{
                minHeight: "450px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <NewsFeedCard
                title={item.title}
                subTitle={item.subTitle}
                date={item.date}
                description={item.content}
                image={item.image}
                key={item.id}
                id={item.id}
                slug={item.slug}
                className="h-full flex flex-col"
              />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
}

const fetchMedia = async (mediaId) => {
  try {
    const res = await fetch(`https://icanpr.vn/wp-json/wp/v2/media/${mediaId}`);
    if (!res.ok) throw new Error("Failed to fetch media");
    const media = await res.json();
    return media.source_url;
  } catch (error) {
    console.error("Error fetching media:", error);
    return "/default.jpg";
  }
};
