import Glass from "@/lib/helpers";
import { Icon } from "@iconify/react/dist/iconify.js";

export const InfoCard = ({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) => {
  return (
    <Glass className="flex flex-col px-10 gap-3  ">
      <div className="flex flex-col ">
        <h5 className="text-4xl text-left text-background">{title}</h5>
      </div>
      <p className="text-xs text-left text-black/80">
        {description}
        <span className="pl-1 text-highlight">Xem thêm ...</span>
      </p>
      <div className="w-full flex justify-start items-start mt-4">
        <div className=" flex flex-row gap-2 bg-highlight text-white py-1 shadow-xl px-4 rounded-md text-sm w-max">
          Find Out More
          <Icon icon={"carbon:arrow-right"} className="mt-1" />
        </div>
      </div>
    </Glass>
  );
};
