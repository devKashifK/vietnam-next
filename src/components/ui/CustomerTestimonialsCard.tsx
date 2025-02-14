import Glass from "@/lib/helpers";
import { Icon } from "@iconify/react/dist/iconify.js";
// import { Link } from "react-router-dom";
export const CustomerTestimonialsCard = ({
  name,
  rating,
  description,
}: {
  // title?: string;
  name?: string;
  rating?: number;
  description?: string;
}) => {
  return (
    <Glass className="flex flex-col px-10  py-12 relative ">
      <div className="flex flex-col ">
        <div className="absolute -top-7 left-10 w-14 h-14 rounded-full border bg-white flex justify-center items-center">
          <Icon icon={"carbon:quotes"} className=" text-highlight text-3xl " />
        </div>
        <div className="flex flex-row gap-1">
          <h5 className="text-4xl text-left text-highlight pr-5">{name}</h5>
          <Icon
            icon={"carbon:star-filled"}
            className="mt-1.5 text-highlight shadow-xl "
          />
          <Icon
            icon={"carbon:star-filled"}
            className="mt-1.5 text-highlight shadow-xl "
          />
          <Icon
            icon={"carbon:star-filled"}
            className="mt-1.5 text-highlight shadow-xl "
          />
          <Icon
            icon={"carbon:star-filled"}
            className="mt-1.5 text-highlight shadow-xl "
          />
          <Icon
            icon={"carbon:star-filled"}
            className="mt-1.5 text-highlight shadow-xl "
          />
        </div>
        {/* <p className="text-sm text-left text-black/70">
              {truncateTextHeading(item.subtitle)}
            </p> */}
      </div>
      <p className="text-xs text-left text-black/80">
        {description}
        <span className="text-black">Xem thêm</span>
      </p>
      <div className="w-full flex justify-start items-start mt-4"></div>
      <div className="absolute -bottom-6 right-10 rotate-180 w-14 h-14 rounded-full border bg-white flex justify-center items-center">
        <Icon icon={"carbon:quotes"} className=" text-highlight text-3xl " />
      </div>
    </Glass>
  );
};
