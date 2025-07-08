"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";

export default function Container({
  children,
  className,
  effect = "slide-left",
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
  effect?: string;
} & React.HTMLProps<HTMLDivElement>) {
  if (effect === "fade") {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={cn(
          "flex flex-col lg:gap-4 gap-0  py-6 w-[94%] lg:w-[90%]  mr-auto ml-auto m mt-2 mb-2",
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  } else if (effect === "slide-left") {
    return (
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ amount: 0.1 }}
        className={cn(
          "flex flex-col lg:gap-4 gap-0 py-6 w-[94%] lg:w-[80%]  mr-auto ml-auto m mt-2 mb-2",
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  } else if (effect === "scale") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className={cn(
          "flex flex-col lg:gap-4 gap-0 py-6 w-[94%] lg:w-[80%]  mr-auto ml-auto m mt-2 mb-2",
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  } else if (effect === "slide-right") {
    return (
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ amount: 0.1 }}
        className={cn(
          "flex flex-col lg:gap-4 gap-0 py-6 w-[94%] lg:w-[80%]  mr-auto ml-auto m mt-2 mb-2",
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  } else if (effect === "slide-up") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ amount: 0.1 }}
        className={cn(
          "flex flex-col lg:gap-4 gap-0 py-6 w-[94%] lg:w-[80%]  mr-auto ml-auto m mt-2 mb-2",
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  } else if (effect === "slide-down") {
    return (
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ amount: 0.1 }}
        className={cn(
          "flex flex-col lg:gap-4 gap-0 py-6 w-[94%] lg:w-[80%]  mr-auto ml-auto m mt-2 mb-2",
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  } else if (effect === "bg") {
    return (
      <div
        className={cn(
          "flex flex-col lg:gap-4 gap-0 py-28 w-full lg:w-full px-40 bg-white",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
}
