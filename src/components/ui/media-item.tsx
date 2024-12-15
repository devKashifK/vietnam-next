import React, { useState, useEffect } from "react";
import NextImage from "next/image";
import { useMediaByExactTitle } from "./use-media";
import { cn } from "@/lib/utils";

const MediaItem = ({ title, className = "", height = "" }) => {
  const { data: media, isLoading, isError } = useMediaByExactTitle(title);
  const [isImageLoading, setIsImageLoading] = useState(true);

  console.log(media, "checkMedia");

  useEffect(() => {
    if (media && media.sourceUrl) {
      const img = new window.Image();
      img.src = media.sourceUrl;
      img.onload = () => setIsImageLoading(false);
      img.onerror = () => setIsImageLoading(false);
    }
  }, [media]);

  const shimmer = (w, h) => `
    <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="g">
          <stop stop-color="#f3f4f6" offset="20%" />
          <stop stop-color="#e5e7eb" offset="50%" />
          <stop stop-color="#f3f4f6" offset="70%" />
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="#f3f4f6" />
      <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
      <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
    </svg>
  `;

  const toBase64 = (str) =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);

  if (isError) {
    return (
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert"
      >
        Error loading image
      </div>
    );
  }

  // const isLoading = isLoading || isImageLoading;

  return (
    <div className={`relative  overflow-hidden ${className}`}>
      {isLoading && (
        <div
          className={cn(
            "absolute inset-0 w-full h-full animate-pulse",
            className
          )}
          style={{
            backgroundImage: `url(data:image/svg+xml;base64,${toBase64(
              shimmer(700, 475)
            )})`,
            backgroundSize: "400% 100%",
          }}
        />
      )}
      {media && media.sourceUrl && (
        <img
          src={media.sourceUrl}
          alt={media.altText || media.title || ""}
          style={{ objectFit: "cover" }}
          className={`transition-opacity duration-300 w-full h-full ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
        />
      )}
    </div>
  );
};

export default MediaItem;
