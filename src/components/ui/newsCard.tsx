import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
// import { Link } from "react-router-dom";

export function truncateTextHeading(text, count = 2) {
  const words = text.split(" ");
  return words.slice(0, count).join(" ");
}

export const NewsFeedCard = ({
  image,
  title,
  subTitle,
  date,
  description,
  id,
  slug,
  variant,
}: {
  image?: string;
  title?: string;
  subTitle?: string;
  date?: string;
  description?: string;
  id?: string;
  slug?: string;
  variant?: 'showcase';
}) => {
  if (variant === 'showcase') {
    return (
      <div className="w-full h-full">
        <div className="relative rounded-xl overflow-hidden group shadow-lg h-[450px] flex flex-col justify-end">
          <img
            src={image ? image : getRandomImage()}
            className="object-cover w-full h-full absolute inset-0 z-0 group-hover:scale-105 transition-transform duration-300"
            alt={title}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black-40 z-10" />
          {/* Top-right arrow button */}
          <Link
            href={`/tin-tuc/${slug}`}
            className="absolute top-4 right-4 z-20 bg-white rounded-xl p-2 shadow-md hover:bg-[#B33D3D] hover:text-white transition-colors"
            aria-label="Xem chi tiết"
          >
            <Icon icon="mdi:arrow-top-right" className="text-2xl" />
          </Link>
          {/* Content at bottom */}
          <div className="relative z-20 p-6 flex flex-col gap-3">
            <h2 className="text-white text-lg font-semibold leading-tight mb-2 line-clamp-2 drop-shadow-lg">
              {title}
            </h2>
            {/* Date */}
            <div className="flex items-center gap-2 text-white/90 text-base">
              <Icon icon="mdi:calendar" className="text-lg" />
              <span>{date}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default style
  return (
    <div className="w-full h-full">
      <div className="flex flex-col hover:shadow-xl transition-all duration-150 ease-in-out border border-slate-400 cursor-pointer">
        <div className="relative ">
          <img
            src={image ? image : getRandomImage()}
            className="object-cover w-full h-52"
            alt={title}
          />
        </div>
        <div
          className="px-10 flex flex-col gap-6 h-[320px] py-8 bg-content justify-between 
        "
        >
          <div>
            {" "}
            <p className="text-2xl text-wrap text-black/60 font-semibold text-left line-clamp-2">
              {title}
            </p>
            {description && (
              <p
                dangerouslySetInnerHTML={{
                  __html: truncateTextHeading(description, 40),
                }}
                className="text-sm font-normal mt-4 text-left pb-5 h-[100px] text-stone-700"
              />
            )}
          </div>
          <div className="flex  flex-col gap-2 text-stone-500 pb-4 text-xs ">
            <div className="flex gap-1 ">
              <Icon
                icon={"carbon:time"}
                className="text-center text-black/60 mt-0.5"
              />
              <span className="text-black/60">{date}</span>
            </div>
            <div className="pb-6">
              <Link
                href={`/tin-tuc/${slug}`}
                className="bg-background flex justify-center items-center text-slate-50 px-3 py-1 text-sm text-left w-[50%]"
              >
                Xem thêm
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

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
    "/federalSkill.jpg",
    "/foru1.png",
    "/foru2.png",
    "immigrate.jpg",
    "immigration.png",
  ];
  return images[Math.floor(Math.random() * images.length)];
}
