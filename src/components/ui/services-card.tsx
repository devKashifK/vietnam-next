import Glass from "@/lib/helpers";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/iconify.js";

export const ServicesCard = ({
  title,
  description,
  readMore = false,
}: {
  title?: string | React.ReactNode;
  description?: string;
  readMore?: boolean;
}) => {
  return (
    <Glass className="flex flex-col px-10 gap-3 ">
      <div className="flex flex-col ">
        {typeof title === "string" ? (
          <h5 className="text-2xl text-left text-background">{title}</h5>
        ) : (
          title
        )}
        {/* <p className="text-sm text-left text-black/70">
            {truncateTextHeading(item.subtitle)}
          </p> */}
      </div>
      <p className="text-sm text-left text-black/80">
        {description}
        {readMore && <span className="text-black"> ...read more</span>}
      </p>
      {/* <div className="w-full flex justify-start items-start mt-4">
        <div
          // to={item.href}
          className="flex flex-row gap-2 bg-background text-white py-1 shadow-xl px-4 text-xs rounded-md w-max"
        >
          Find Out More
          <Icon icon={"carbon:arrow-right"} className="mt-1" />
        </div>
      </div> */}
    </Glass>
  );
};
