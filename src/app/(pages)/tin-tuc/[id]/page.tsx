"use client";
import React, { useState, useEffect } from "react";
import Container from "@/components/ui/container";
import "../style.css";
import Glass from "@/lib/helpers";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Title from "@/components/ui/Title";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useParams } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function Post() {
  let postId = useParams();
  postId = postId.id;
  const [data, setData] = useState(null);
  const [recent, setRecent] = useState([]);
  const [nextPost, setNextPost] = useState(null);
  const [prevPost, setPrevPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the single post
        const postResponse = await supabase
          .from("news")
          .select("content")
          .eq("id", postId)
          .single();
        if (postResponse.data) {
          setData(JSON.parse(postResponse.data.content));
        }

        // Fetch recent posts
        const recentResponse = await supabase
          .from("news")
          .select("id, content")
          .order("created_at", { ascending: false })
          .limit(10);
        if (recentResponse.data) {
          setRecent(
            recentResponse.data.map((row) => ({
              ...JSON.parse(row.content),
              id: row.id,
            }))
          );
        }

        // Fetch the next post
        const nextResponse = await supabase
          .from("news")
          .select("content")
          .eq("id", Number(postId) + 1)
          .single();
        if (nextResponse.data) {
          setNextPost(JSON.parse(nextResponse.data.content));
        }

        // Fetch the previous post
        const prevResponse = await supabase
          .from("news")
          .select("content")
          .eq("id", Number(postId) - 1)
          .single();
        if (prevResponse.data) {
          setPrevPost(JSON.parse(prevResponse.data.content));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [postId]);

  if (!data) return <div>Loading...</div>;

  const formattedDate = new Date(data.Date).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Container className="text-left post flex gap-6 flex-row">
      <Glass className="px-14 w-[70%] py-10 flex flex-col gap-8">
        {data.image ? (
          <img
            src={data.image || getRandomImage()}
            alt="news"
            className="w-full rounded-2xl h-[400px] object-cover"
          />
        ) : (
          <img
            src={getRandomImage()}
            className="w-full rounded-2xl h-[400px] object-cover"
            alt=""
          />
        )}
        <div
          dangerouslySetInnerHTML={{ __html: data.Content }}
          className="text-sm"
        />
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-2">
            <Badge className="bg-yellow-400">{formattedDate}</Badge>
            <Badge className="bg-sky-400">Author: {data.creator}</Badge>
          </div>
          <div className="flex gap-2">
            {data.Categories?.split(",").map((category, index) => (
              <Badge
                key={index}
                className={cn(
                  "py-1 cursor-pointer",
                  index === 0 && "bg-red-400"
                )}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
        {/* 
        <div className="flex justify-between w-full gap-20 mt-10">
          <div className="w-full">
            {prevPost && (
              <HoverCard
                icon={"material-symbols:arrow-left-alt"}
                title={prevPost.Title}
                to={`/news/${Number(postId) - 1}`}
                subtitle="Previous Post"
                color="bg-sky-400"
              />
            )}
          </div>
          <div className="w-full">
            {nextPost && (
              <HoverCard
                icon="material-symbols:arrow-right-alt"
                to={`/news/${Number(postId) + 1}`}
                subtitle="Next Post"
                title={nextPost.Title}
                color="bg-yellow-400"
              />
            )}
          </div>
        </div> */}
      </Glass>
      <Glass className="w-[30%] px-8 flex flex-col gap-8 h-max">
        <div className="flex flex-col">
          <Title title={"Recent Posts"} />
          {/* <div className="bg-red-400 w-[90%] h-0.5"></div> */}
        </div>
        <div className="flex gap-2 flex-col">
          {recent.map((item) => (
            <Link
              className="flex text-xs gap-2"
              href={`/tin-tuc/${item.id}`}
              key={item.id}
            >
              <Icon icon="material-symbols:article" className="mt-1" />
              <div className="w-[90%]">{item.Title}</div>
            </Link>
          ))}
        </div>
      </Glass>
    </Container>
  );
}

function HoverCard({
  title,
  icon,
  color,
  className,
  to,
  subtitle,
}: {
  subtitle?: string;
  icon?: string | React.ReactNode;
  title?: string | React.ReactNode;
  color?: string;
  className?: string;
  to?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={cn(
        "group w-[300px] relative cursor-pointer overflow-hidden bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 border-gray-100 shadow-2xl rounded-2xl px-2 ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10 py-4",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span
        className={cn(
          "absolute left-[40px] w-full h-full top-10 z-0 rounded-full transition-all duration-300 group-hover:scale-[10]",
          isHovered && color
        )}
      ></span>

      <Link href={to} className="relative z-10 mx-auto h-20 w-full ">
        <p className="text-xs font-primary tracking-widest flex gap-2 items-center">
          <span>
            <Icon icon={icon} className="-mt-1" />
          </span>
          {subtitle}
        </p>
        <p className="truncate">{title}</p>
      </Link>
    </div>
  );
}

function getRandomImage() {
  const images = [
    "/aaa.jpg",
    "/about.png",
    "/alberta.jpg",
    "/british.jpg",
    "/canada.jpg",
    "/cost.jpg",
    "/business.jpg",
    "/experince.jpg",
    "/expressEntry.png",
    "/family.jpg",
    "/federalSkill.png",
    "/foru1.png",
    "/foru2.png",
    "immigrate.jpg",
    "immigration.png",
  ];
  return images[Math.floor(Math.random() * images.length)];
}
