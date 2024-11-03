import { CTAWithImage } from "./cta";
import { CTADefault } from "./cta";
import HoverCard from "./hover-card";
import { List, UL } from "./list";
import TitleWithBottomBorder from "./title-with-bottom-border";
import Glass from "@/lib/helpers";
import TitleWithDoubleBorder from "./title-with-double-border";
import Title from "./Title";
import { Icon } from "@iconify/react/dist/iconify.js";
import { supabase } from "@/supabaseClient";
import { cache } from "react";
import Container from "./container";

export const getDataBySlug = cache(async function getDataBySlug(slug: string) {
  const { data, error } = await supabase
    .from("pages")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) throw error;
  return data;
});

export function DynamicComponent({ data }) {
  if (!data || typeof data !== "object") return null;

  const { component, props = {} } = data;
  const children = data.children || props.children;
  console.log(
    "Rendering component:",
    component,
    "Props:",
    props,
    "Children:",
    children
  );

  // Enhanced renderChildren function to handle various cases
  const renderChildren = () => {
    if (!children) return null;
    if (typeof children === "string") return children;

    if (!Array.isArray(children)) {
      return <DynamicComponent data={children} />;
    }

    return children.map((child, index) => {
      if (typeof child === "string") return child;
      return <DynamicComponent key={index} data={child} />;
    });
  };

  switch (component) {
    case "Container":
      return <Container {...props}>{renderChildren()}</Container>;
    case "CTADefault":
      return <CTADefault {...props} />;
    case "CTAWithImage":
      return <CTAWithImage {...props} />;
    case "HoverCard":
      console.log("Rendering HoverCard:", props);
      return (
        <HoverCard
          icon={props.icon}
          color={props.color}
          title={props.title}
          description={props.description}
        />
      );
    case "List":
      return <List {...props}>{renderChildren()}</List>;
    case "UL":
      return <UL {...props}>{renderChildren()}</UL>;
    case "Title":
      return <Title {...props} />;
    case "TitleWithBottomBorder":
      return <TitleWithBottomBorder {...props} />;
    case "TitleWithDoubleBorder":
      return <TitleWithDoubleBorder {...props} />;
    case "Glass":
      return <Glass {...props}>{renderChildren()}</Glass>;
    case "Icon":
      if (!props.icon) {
        console.warn("Missing icon property in Icon component", props);
        return null;
      }
      return <Icon {...props} />;
    case "div":
      return <div className={props.className}>{renderChildren()}</div>;
    default:
      console.warn(`Unrecognized component: ${component}`);
      return <div {...props}>{renderChildren()}</div>;
  }
}
