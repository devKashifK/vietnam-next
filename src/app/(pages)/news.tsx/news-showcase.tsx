"use client";
import React, { useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";
import { NewsFeedCard } from "@/components/ui/newsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { supabase } from "@/supabaseClient";
import { LoadingAnimation } from "../tin-tuc/page";

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

  if (loading) return <LoadingAnimation />;
  return (
    <Swiper
      spaceBetween={30}
      // slidesPerView={2}
      breakpoints={{
        // When the viewport is >= 768px
        768: {
          slidesPerView: 3,
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
          // const formattedDate = new Date(item.created_at).toLocaleDateString(
          //   undefined,
          //   {
          //     year: "numeric",
          //     month: "long",
          //     day: "numeric",
          //   }
          // );
          return (
            <SwiperSlide key={index} className="w-[480px]">
              <NewsFeedCard
                title={item.title}
                subTitle={item.subTitle}
                // author={item.author && item.author.toUpperCase()}
                date={item.date}
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
