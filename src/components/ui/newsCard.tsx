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
}: {
  image?: string;
  title?: string;
  subTitle?: string;
  date?: string;
  description?: string;
  id?: string;
  slug?: string;
}) => {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col hover:shadow-xl transition-all duration-150 ease-in-out border border-slate-400 cursor-pointer">
        <div className="relative ">
          <img
            src={image ? image : getRandomImage()}
            className="object-cover w-full h-52"
            alt={title}
          />

          {/* <span className="bg-red-600 text-slate-50 h-14 w-14 flex flex-col justify-center items-center rounded-full text-wrap absolute right-4 top-4 text-sm font-bold">
            <span>14</span>
            <span className="">AUG</span>
          </span> */}
        </div>
        <div className="px-10 flex flex-col gap-6 h-[280px] py-8 bg-content  ">
          <p className="text-2xl text-black/60 font-semibold text-left">
            {truncateTextHeading(title)}
          </p>
          {/* {subTitle && (
            <h5 className="text-lg font-normal text-red-600 text-left pb-3">
              {subTitle}
            </h5>
          )} */}
          {description && (
            <p
              dangerouslySetInnerHTML={{
                __html: truncateTextHeading(description, 40),
              }}
              className="text-sm font-normal text-left pb-5 h-[100px] text-stone-700"
            />
          )}
          <div className="flex flex flex-col gap-2 text-stone-500 pb-4 text-xs">
            <div className="flex gap-1 ">
              <Icon
                icon={"carbon:time"}
                className="text-center text-black/60 mt-0.5"
              />
              <span className="text-black/60">{date}</span>
            </div>
            {/* <Icon
                icon={"carbon:chat"}
                className="text-center text-black/60 mt-0.5"
              />
              <span className="text-black/60">Author : {author}</span>
            </div> */}
            <div className="pb-6">
              <Link
                href={`/tin-tuc/${slug}`}
                className="bg-background flex justify-center items-center text-slate-50 px-3 py-1 text-sm text-left w-[50%]"
              >
                Read More
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
    "/federalSkill.png",
    "/foru1.png",
    "/foru2.png",
    "immigrate.jpg",
    "immigration.png",
  ];
  return images[Math.floor(Math.random() * images.length)];
}
