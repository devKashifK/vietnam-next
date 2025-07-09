"use client";
import { useState, useEffect, use } from "react";
import Navbar from "./navbar";
import { Button } from "./custom";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import { Icon } from "@iconify/react/dist/iconify.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from "next/navigation";
import { List, UL } from "./list";
import MediaItem from "./media-item";

export default function Hero() {
  const images = ["homepage-hero", "hero-2", "hero-3"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [slide, setSlide] = useState(true);
  const navigate = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide(false);

      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setNextImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setSlide(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);


  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="w-full mx-auto   shadow-md flex justify-start items-start flex-col overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-bg-[rgba(0, 0, 0, 0.2)]"></div>

        <div className="flex flex-col w-full  h-full relative ">
          <Navbar type={"hero"} />
          <div className="flex flex-col  md:flex-row  h-full">
          <VideoFrame text={"IcanPr"} /> 

            {/* <div className="w-[104px]"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}


const VideoFrame = ({text , video = "/video/banner.mp4"}) => {
  return (
    <div className="relative w-full" style={{ height: "80vh" }}>
      <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
      <video 
        src={video}
        autoPlay
        muted
        className="w-full h-full object-cover"
        preload="auto"
        loop
        playsInline
        webkit-playsinline="true"
        x5-playsinline="true"
        style={{ width: "100%", height: "100%" }}
      />
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <AnimatedText text={text}/>
      </div>
    </div>
  )
}

export function AnimatedText({text}) {
  return (
    <div className="relative">
      {/* Outline text */}
      <h2
        className="absolute tracking-wider left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] text-transparent"
        style={{ WebkitTextStroke: '2px #EFF6FF' }}
      >
        {text}
      </h2>

      {/* Animated fill text */}
      <h2
        className="absolute left-1/2 top-1/2 tracking-wider -translate-x-1/2 -translate-y-1/2 text-[10rem] text-blue-50 animate-textClip"
      >
        {text}
      </h2>
      {/* Custom keyframes for clip-path animation */}
      <style>{`
        @keyframes clipPathAnim {
          0%, 100% {
            clip-path: polygon(
              0% 45%, 16% 44%, 33% 50%, 54% 60%,
              70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%
            );
          }
          50% {
            clip-path: polygon(
              0% 60%, 15% 65%, 34% 66%, 51% 62%,
              67% 50%, 84% 45%, 100% 46%, 100% 100%, 0% 100%
            );
          }
        }

        .animate-textClip {
          animation: clipPathAnim 4s ease-in-out infinite;
        }
      `}</style>
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
