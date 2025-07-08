"use client";
import { cn } from "@/lib/utils";
import TitleWithBottomBorder from "./title-with-bottom-border";
import Link from "next/link";

export function CardWithImage({
  image,
  title,
  description,
  href = "/",
}: {
  title?: string;
  description?: React.ReactNode | string;
  image?: string;
  href?: string;
}) {
  return (
    <div className="w-full max-w-2xl bg-white rounded-2xl    flex flex-row overflow-hidden">
      {/* Image section */}
      <div className="min-w-[180px] max-w-[220px] h-full flex-shrink-0 flex items-center justify-center bg-gray-100">
        {image && (
          <img
            src={image}
            alt={title || "Card image"}
            className="object-cover w-full h-full rounded-l-2xl"
          />
        )}
      </div>
      {/* Content section */}
      <div className="flex flex-col justify-center px-8 py-6 flex-1">
        <div className="text-2xl font-bold text-[#6B3A1A] mb-4">
          {title}
        </div>
      
        {/* Description (optional, only show if present) */}
        {description && (
          <div className=" text-gray-700 text-sm line-clamp-4">
            {typeof description === "string" ? ( 
              <p>{description}</p>
            ) : (
              description
            )}
          </div>
        )}
        {/* Optional link */}
        {href !== "/" && (
          <div className="mt-4">
            <Link
              href={href}
              className="inline-block px-4 py-2 bg-[#6B3A1A] text-white rounded-md text-sm font-semibold hover:bg-[#54301a] transition"
            >
              Xem thêm
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
