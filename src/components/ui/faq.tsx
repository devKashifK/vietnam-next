import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";

export const FAQ = ({
  title,
  description,
}: {
  title?: string;
  description?: void;
}) => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full px-2 md:px-0 flex flex-col gap-2"
    >
      <AccordionItem value="item-1" className="w-full ">
        <AccordionTrigger>{title}</AccordionTrigger>
        <AccordionContent className="">
          <div className="flex flex-col gap-2 my-2">{description}</div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
