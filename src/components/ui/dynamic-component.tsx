import React from "react";
import { CTAWithImage } from "./cta";
import { CTADefault } from "./cta";
import HoverCard from "./hover-card";
import { List, UL } from "./list";
import TitleWithBottomBorder from "./title-with-bottom-border";
import Glass from "@/lib/helpers";
import TitleWithDoubleBorder from "./title-with-double-border";
import { supabase } from "@/supabaseClient";
import Title from "./Title";
import { Icon } from "@iconify/react/dist/iconify.js";
import Container from "./container";
import { CardWithImage } from "./card-with-image";
import { ServicesCard } from "./services-card";

export async function getDataBySlug(slug) {
  const { data, error } = await supabase
    .from("pages")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) throw error;
  return data;
}

// Recursive function to render components dynamically
export function DynamicComponent({ data }) {
  if (!data || typeof data !== "object") return null;

  const { component, props = {} } = data;
  const children = props.children;

  // Helper function to recursively render nested components
  const renderNestedComponent = (nestedData) => {
    if (typeof nestedData === "string" || typeof nestedData === "number") {
      return nestedData;
    }

    if (Array.isArray(nestedData)) {
      return nestedData.map((item, index) => (
        <DynamicComponent key={index} data={item} />
      ));
    }

    if (nestedData && typeof nestedData === "object" && nestedData.component) {
      return <DynamicComponent data={nestedData} />;
    }

    return null;
  };

  // Render function for children elements or other nested properties
  const renderChildren = () => renderNestedComponent(children);

  // Handling for components that may have nested `description` or `title` properties
  const renderProp = (prop) => {
    if (Array.isArray(prop)) {
      return prop.map((item, index) => renderNestedComponent(item));
    }
    if (prop && typeof prop === "object" && prop.component) {
      return <DynamicComponent data={prop} />;
    }
    return prop;
  };

  switch (component) {
    case "Container":
      return <Container {...props}>{renderChildren()}</Container>;
    case "TitleWithDoubleBorder":
      return <TitleWithDoubleBorder {...props} />;
    case "HoverCard":
      return <HoverCard {...props} />;
    case "List":
      return <List {...props}>{renderChildren()}</List>;
    case "UL":
      return <UL {...props}>{renderChildren()}</UL>;
    case "ServicesCard":
      return (
        <ServicesCard
          title={renderProp(props.title)} // Handle nested title if needed
          description={props.description}
        />
      );
    case "CTAWithImage":
      return (
        <CTAWithImage
          {...props}
          description={renderProp(props.description)} // Handle nested description
        />
      );
    case "CTADefault":
      return (
        <CTADefault
          {...props}
          description={renderProp(props.description)} // Handle nested description
        />
      );
    case "CardWithImage":
      return <CardWithImage {...props} />;
    case "Title":
      return <Title {...props} />;
    case "TitleWithBottomBorder":
      return <TitleWithBottomBorder {...props} />;
    case "Glass":
      return <Glass {...props}>{renderChildren()}</Glass>;
    case "Icon":
      return <Icon {...props} />;
    case "iframe": // Adding iframe support
      return <iframe {...props} />;

    // Standard HTML elements
    case "div":
      return <div className={props.className}>{renderChildren()}</div>;
    case "p":
      return <p {...props}>{renderChildren()}</p>;
    case "h5":
      return <h5 {...props}>{renderChildren()}</h5>;
    case "h1":
      return <h1 {...props}>{renderChildren()}</h1>;
    case "h2":
      return <h2 {...props}>{renderChildren()}</h2>;
    case "ul":
      return <ul {...props}>{renderChildren()}</ul>;
    case "li":
      return <li {...props}>{renderChildren()}</li>;
    case "img":
      return <img {...props} />;
    case "button":
      return <button {...props}>{renderChildren()}</button>;
    case "input":
      return <input {...props} />;
    default:
      console.warn(`Unrecognized component: ${component}`);
      return <div {...props}>{renderChildren()}</div>;
  }
}
