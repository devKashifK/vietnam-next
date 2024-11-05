import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import Glass from "@/lib/helpers";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  // <Glass className="w-full h-max py-0 px-0 rounded-md my-1">
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      "w-full rounded-md data-[state=open]:border-highlight",
      className
    )}
    {...props}
  />
  // </Glass>
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex rounded-none">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all duration-150 ease-in-out hover:underline [&[data-state=open]>svg]:rotate-180 hover:bg-highlight hover:text-black/80 rounded-t-md group ",
        className
      )}
      {...props}
    >
      {children}
      <div className="bg-secondary/60 px-2 py-1 text-white rounded-md">
        <ChevronDownIcon className="h-4 w-4 shrink-0  transition-transform duration-200" />
      </div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden flex flex-col justify-start items-start text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down text-left px-4 rounded-md text-black/60 "
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
