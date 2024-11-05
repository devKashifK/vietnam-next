import React from "react";
import { CTADefault, CTAWithImage } from "@/components/ui/cta";
import Container from "@/components/ui/container";
import Title from "@/components/ui/Title";
import { CardWithImage } from "@/components/ui/card-with-image";
import { ServicesCard } from "@/components/ui/services-card";
import HoverCard from "@/components/ui/hover-card";
import { Icon } from "@iconify/react/dist/iconify.js";
import Glass from "@/lib/helpers";
import { List, UL } from "@/components/ui/list";
import { ImageUploaderAndPicker } from "../image-picker";
import { cn } from "@/lib/utils";

// Move createUpdatedProps outside of handleTextChange
const createUpdatedProps = (currentProps, propPath, newValue) => {
  const props = { ...currentProps };

  if (propPath.includes("[")) {
    const [arrayProp, indexStr] = propPath.split("[");
    const index = parseInt(indexStr.replace("]", ""));

    if (Array.isArray(props[arrayProp])) {
      const newArray = [...props[arrayProp]];
      newArray[index] = newValue;
      props[arrayProp] = newArray;
    }
  } else if (typeof props[propPath] === "object" && props[propPath] !== null) {
    if (props[propPath].props) {
      props[propPath] = {
        ...props[propPath],
        props: {
          ...props[propPath].props,
          children: newValue,
        },
      };
    } else {
      props[propPath] = newValue;
    }
  } else {
    props[propPath] = newValue;
  }

  return props;
};

export function EditorDynamicComponent({
  data,
  onComponentSelect,
  selectedComponent,
}) {
  if (Array.isArray(data)) {
    return (
      <>
        {data.map((item, index) => (
          <EditorDynamicComponent
            key={index}
            data={item}
            onComponentSelect={onComponentSelect}
            selectedComponent={selectedComponent}
          />
        ))}
      </>
    );
  }

  if (!data || typeof data !== "object") return null;

  const { component, props = {} } = data;

  const handleClick = (e) => {
    e.stopPropagation();
    console.log("Component clicked:", data);
    onComponentSelect(data);
  };

  const handleTextChange = (e, propName) => {
    e.stopPropagation();
    const updatedContent = e.target.innerText;

    // Create new component with updated content
    const updatedComponent = {
      ...data,
      id: data.id,
      props: createUpdatedProps(data.props, propName, updatedContent),
      isEditing: true,
    };

    console.log("Updating component:", updatedComponent);
    onComponentSelect(updatedComponent);
  };

  const makeEditable = (content, propName) => {
    if (!content) return null;

    // Handle regular text content
    if (typeof content === "string") {
      return (
        <span
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => handleTextChange(e, propName)}
          onClick={(e) => e.stopPropagation()}
          className="outline-none focus:ring-2 focus:ring-blue-500 rounded px-1"
          data-component-id={data.id}
        >
          {content}
        </span>
      );
    }

    // Handle nested components
    if (content && typeof content === "object") {
      if ("component" in content || "props" in content) {
        return (
          <EditorDynamicComponent
            data={content}
            onComponentSelect={onComponentSelect}
            selectedComponent={selectedComponent}
          />
        );
      }
    }

    return String(content); // Convert any other content to string
  };

  const renderChildren = () => {
    if (!props.children) return null;

    if (Array.isArray(props.children)) {
      return props.children.map((child, index) => {
        // If child is a string or number, make it editable
        if (typeof child === "string" || typeof child === "number") {
          return (
            <React.Fragment key={index}>
              {makeEditable(child, `children[${index}]`)}
            </React.Fragment>
          );
        }
        // If child is an object (component), render it
        if (child && typeof child === "object") {
          return (
            <EditorDynamicComponent
              key={index}
              data={child}
              onComponentSelect={onComponentSelect}
              selectedComponent={selectedComponent}
            />
          );
        }
        return null;
      });
    }

    // If children is a string or number, make it editable
    if (
      typeof props.children === "string" ||
      typeof props.children === "number"
    ) {
      return makeEditable(props.children, "children");
    }

    // If children is an object (component), render it
    if (props.children && typeof props.children === "object") {
      return (
        <EditorDynamicComponent
          data={props.children}
          onComponentSelect={onComponentSelect}
          selectedComponent={selectedComponent}
        />
      );
    }

    return null;
  };

  switch (component) {
    case "Container":
      return (
        <Container {...props} onClick={handleClick}>
          {renderChildren()}
        </Container>
      );

    case "CTAWithImage":
      return (
        <CTAWithImage
          {...props}
          onClick={handleClick}
          image={props.image}
          flip={props.flip}
          title={makeEditable(props.title, "title")}
          description={makeEditable(props.description, "description")}
          data-component-id={data.id}
        />
      );

    case "CTADefault":
      return (
        <CTADefault
          {...props}
          onClick={handleClick}
          image={props.image}
          subtitle={makeEditable(props.subtitle, "subtitle")}
          description={makeEditable(props.description, "description")}
        />
      );

    case "TitleWithDoubleBorder":
    case "TitleWithBottomBorder":
      return (
        <div {...props} onClick={handleClick}>
          {typeof props.children === "string"
            ? makeEditable(props.children, "children")
            : renderChildren()}
        </div>
      );

    case "h1":
    case "h2":
    case "h3":
    case "h4":
    case "h5":
    case "p":
    case "div":
    case "span":
      const Element = component;
      return (
        <Element {...props} onClick={handleClick} className={props.className}>
          {renderChildren()}
        </Element>
      );

    case "Title":
      return (
        <Title
          {...props}
          onClick={handleClick}
          title={makeEditable(props.title, "title")}
          subtitle={makeEditable(props.subtitle, "subtitle")}
          description={makeEditable(props.description, "description")}
        />
      );

    case "img":
      const isSelected = selectedComponent?.id === data.id;

      return (
        <div
          className="relative"
          onClick={(e) => {
            e.stopPropagation();
            onComponentSelect({
              ...data,
              component: "img",
            });
          }}
        >
          <img
            src={props.src}
            alt=""
            className={cn(
              props.className,
              "cursor-pointer",
              isSelected && "ring-2 ring-blue-500"
            )}
          />

          {isSelected && (
            <div className="absolute top-2 right-2 bg-white rounded-md shadow-lg p-2 z-10">
              <ImageUploaderAndPicker
                onChange={(newImage) => {
                  const updatedComponent = {
                    ...data,
                    component: "img",
                    props: {
                      ...props,
                      src: newImage,
                    },
                  };
                  console.log("Updating image component:", updatedComponent);
                  onComponentSelect(updatedComponent);
                }}
              />
            </div>
          )}
        </div>
      );

    case "ServicesCard":
      return (
        <ServicesCard
          {...props}
          onClick={handleClick}
          title={
            props.title && typeof props.title === "object" ? (
              <div className={props.title.props?.className}>
                {props.title.props?.children?.map((child, index) => (
                  <React.Fragment key={index}>
                    {child.component === "TitleWithBottomBorder" ? (
                      <div>
                        {makeEditable(
                          child.props.children,
                          `title_border_${index}`
                        )}
                      </div>
                    ) : child.component === "h5" ? (
                      <h5 className={child.props.className}>
                        {makeEditable(
                          child.props.children,
                          `title_h5_${index}`
                        )}
                      </h5>
                    ) : (
                      makeEditable(child, `title_${index}`)
                    )}
                  </React.Fragment>
                ))}
              </div>
            ) : (
              makeEditable(props.title, "title")
            )
          }
          description={makeEditable(props.description, "description")}
          icon={props.icon}
          data-component-id={data.id}
        />
      );

    case "CardWithImage":
      return (
        <CardWithImage
          {...props}
          onClick={handleClick}
          image={props.image}
          title={
            typeof props.title === "string"
              ? makeEditable(props.title, "title")
              : props.title
          }
          description={
            typeof props.description === "string"
              ? makeEditable(props.description, "description")
              : props.description
          }
          link={props.link}
          data-component-id={data.id}
        />
      );

    case "HoverCard":
      return (
        <HoverCard
          {...props}
          onClick={handleClick}
          title={
            typeof props.title === "string"
              ? makeEditable(props.title, "title")
              : props.title
          }
          description={
            typeof props.description === "string"
              ? makeEditable(props.description, "description")
              : props.description
          }
          icon={props.icon}
          data-component-id={data.id}
        >
          {renderChildren()}
        </HoverCard>
      );

    case "List":
      return (
        <List {...props} onClick={handleClick}>
          {renderChildren()}
        </List>
      );

    case "UL":
      return (
        <UL {...props} onClick={handleClick}>
          {renderChildren()}
        </UL>
      );

    case "li":
      return (
        <li {...props} onClick={handleClick} className={props.className}>
          {makeEditable(props.children, "children")}
        </li>
      );

    case "Glass":
      return (
        <Glass {...props} onClick={handleClick}>
          {renderChildren()}
        </Glass>
      );

    case "Icon":
      return (
        <div onClick={handleClick}>
          <Icon {...props} className={cn(props.className, "cursor-pointer")} />
        </div>
      );

    case "a":
      return (
        <a
          {...props}
          onClick={(e) => {
            e.preventDefault();
            handleClick(e);
          }}
          className={cn(props.className, "cursor-pointer")}
        >
          {renderChildren()}
        </a>
      );

    case "button":
      return (
        <button
          {...props}
          onClick={handleClick}
          className={cn(props.className, "cursor-pointer")}
        >
          {renderChildren()}
        </button>
      );

    default:
      const DefaultElement = component || "div";
      return (
        <DefaultElement {...props} onClick={handleClick}>
          {renderChildren()}
        </DefaultElement>
      );
  }
}
