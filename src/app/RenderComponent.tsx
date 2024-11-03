import React from "react";
import { componentMap } from "./componentMap";
import { Icon } from "@iconify/react";

const RenderComponent = ({ config }) => {
  if (!config) return null;

  const Component = componentMap[config.component];
  if (!Component) {
    console.warn(`Component ${config.component} not found in componentMap.`);
    return null;
  }

  // Helper function to handle single child rendering
  const renderSingleChild = (child) => {
    if (!child) return null;
    if (typeof child === "string") return child; // Return text as is
    if (child.component) return <RenderComponent config={child} />; // Render component recursively
    return null;
  };

  // Helper function to handle array of children
  const renderChildren = (children) => {
    if (!children) return null;
    if (!Array.isArray(children)) return renderSingleChild(children); // Handle single object
    return children.map((child, index) => renderSingleChild(child)); // Handle array
  };

  // Render each component based on its specific structure
  switch (config.component) {
    case "Container": {
      // Render only the children of Container, skipping the Container itself
      const { children } = config.props || {};
      return <>{renderChildren(children)}</>;
    }

    case "HoverCard": {
      console.log("HoverCard", config);
      const { icon, color, title, description } = config.props || {};
      return (
        <Component
          icon={icon ? <Icon icon={icon} /> : null}
          color={color}
          title={title}
          description={renderSingleChild(description)} // Handle description
        />
      );
    }

    case "Title": {
      const { title, subtitle, description } = config.props || {};
      return (
        <Component
          title={title}
          subtitle={subtitle}
          description={renderSingleChild(description)} // Handle description
        />
      );
    }

    case "UL": {
      const { className, children } = config.props || {};
      return (
        <Component className={className}>{renderChildren(children)}</Component>
      );
    }

    case "List": {
      const { icon, text, className } = config.props || {};
      return (
        <Component
          icon={icon ? <Icon icon={icon} /> : null}
          text={text}
          className={className}
        />
      );
    }

    case "CTAWithImage": {
      const { image, title, subtitle, ctaAction, description, flip } =
        config.props || {};
      return (
        <Component
          image={image}
          title={title}
          subtitle={subtitle}
          ctaAction={ctaAction}
          description={renderChildren(description)} // Handle description as array or single child
          flip={flip}
        />
      );
    }

    case "Glass": {
      const { effect, children, className } = config.props || {};
      return (
        <Component effect={effect} className={className}>
          {renderChildren(children)}
        </Component>
      );
    }

    default: {
      // Default case for any component not explicitly handled
      return <Component {...config.props} />;
    }
  }
};

export default RenderComponent;
