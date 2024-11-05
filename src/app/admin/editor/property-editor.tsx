"use client";

import React, { useState } from "react";
import { ImageUploaderAndPicker } from "../image-picker";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icon } from "@iconify/react";
import { supabase } from "@/supabaseClient";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const LAYOUT_COMPONENTS = ["Container", "Glass"];

const isVisibleComponent = (component: any) => {
  return !LAYOUT_COMPONENTS.includes(component.component);
};

const ComponentHeader = ({ component }) => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-2">
        <span className="font-medium">{component.component}</span>
        {/* <span className="text-sm text-gray-500">({component.id})</span> */}
      </div>
    </div>
  );
};

export default function PropertyEditor({
  pageData,
  selectedPage,
  onUpdate,
  onLocalUpdate,
}) {
  const [localChanges, setLocalChanges] = useState({});
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState(null);

  // Add the applyLocalChanges function
  const applyLocalChanges = (data: any, changes: any) => {
    if (!data) return data;

    // Create a deep copy of the data
    const cloneData = JSON.parse(JSON.stringify(data));

    const updateComponent = (component: any) => {
      if (!component) return component;

      // Handle arrays
      if (Array.isArray(component)) {
        return component.map((item) => updateComponent(item));
      }

      // Handle objects
      if (typeof component === "object") {
        // If this component has changes
        if (component.id && changes[component.id]) {
          const componentChanges = changes[component.id];

          // Special handling for ServicesCard
          if (component.component === "ServicesCard" && component.props.title) {
            const updatedProps = { ...component.props };

            // Update title structure
            if (updatedProps.title?.props?.children) {
              updatedProps.title.props.children =
                updatedProps.title.props.children.map(
                  (child: any, index: number) => {
                    if (
                      child.component === "TitleWithBottomBorder" &&
                      componentChanges[`title_border_${index}`]
                    ) {
                      return {
                        ...child,
                        props: {
                          ...child.props,
                          children: componentChanges[`title_border_${index}`],
                        },
                      };
                    }
                    if (
                      child.component === "h5" &&
                      componentChanges[`title_h5_${index}`]
                    ) {
                      return {
                        ...child,
                        props: {
                          ...child.props,
                          children: componentChanges[`title_h5_${index}`],
                        },
                      };
                    }
                    return child;
                  }
                );
            }

            // Update description if changed
            if (componentChanges.description !== undefined) {
              updatedProps.description = componentChanges.description;
            }

            return {
              ...component,
              props: updatedProps,
            };
          }

          // Handle regular components
          return {
            ...component,
            props: {
              ...component.props,
              ...componentChanges,
            },
          };
        }

        // Recursively update children
        if (component.props?.children) {
          return {
            ...component,
            props: {
              ...component.props,
              children: updateComponent(component.props.children),
            },
          };
        }
      }

      return component;
    };

    return updateComponent(cloneData);
  };

  const handleUpdate = (componentId: string, key: string, value: any) => {
    setLocalChanges((prev) => {
      const newChanges = {
        ...prev,
        [componentId]: {
          ...prev[componentId],
          [key]: value,
        },
      };

      // Create updated data with local changes
      const updatedData = applyLocalChanges(pageData, newChanges);

      // Update preview
      if (onLocalUpdate) {
        onLocalUpdate(updatedData);
      }

      return newChanges;
    });
  };

  // Updated handleSaveChanges function with better error handling
  const handleSaveChanges = async () => {
    setIsSaving(true);
    setError(null);

    try {
      const updatedData = applyLocalChanges(pageData, localChanges);

      // Log the data being sent
      console.log("Saving updated data:", {
        selectedPage,
        updatedData,
      });

      // Make sure we have the required data
      if (!selectedPage) {
        throw new Error("No page selected");
      }

      // Update the database
      console.log("Updating database", updatedData);
      const { data, error: supabaseError } = await supabase
        .from("pages")
        .update({
          content: updatedData,
        })
        .eq("slug", selectedPage)
        .select();

      if (supabaseError) {
        throw supabaseError;
      }

      // Clear local changes after successful save
      setLocalChanges({});

      // Update parent component
      if (onUpdate) {
        onUpdate(updatedData);
      }

      // Show success message (you might want to add a toast notification here)
      console.log("Changes saved successfully");
    } catch (err) {
      setError(err.message);
      console.error("Error saving changes:", {
        error: err,
        message: err.message,
        details: err.details,
      });
    } finally {
      setIsSaving(false);
    }
  };

  //   const renderFields = (component) => {
  //     const { id, props = {}, component: componentType } = component;
  //     const changes = localChanges[id] || {};

  //     switch (componentType) {
  //       case "ServicesCard":
  //         return (
  //           <div className="space-y-4">
  //             <div className="p-4 border rounded-lg">
  //               <Label className="block mb-2">Title Components</Label>
  //               {props.title?.props?.children?.map((child, index) => (
  //                 <div key={index} className="ml-4 border-l-2 pl-4 mt-2">
  //                   {child.component === "TitleWithBottomBorder" && (
  //                     <div className="mb-2">
  //                       <Label className="block mb-1 text-sm">Border Title</Label>
  //                       <Input
  //                         value={
  //                           changes[`title_border_${index}`] ??
  //                           child.props.children
  //                         }
  //                         onChange={(e) =>
  //                           handleUpdate(
  //                             id,
  //                             `title_border_${index}`,
  //                             e.target.value
  //                           )
  //                         }
  //                       />
  //                     </div>
  //                   )}
  //                   {child.component === "h5" && (
  //                     <div className="mb-2">
  //                       <Label className="block mb-1 text-sm">Heading</Label>
  //                       <Input
  //                         value={
  //                           changes[`title_h5_${index}`] ?? child.props.children
  //                         }
  //                         onChange={(e) =>
  //                           handleUpdate(id, `title_h5_${index}`, e.target.value)
  //                         }
  //                       />
  //                     </div>
  //                   )}
  //                 </div>
  //               ))}
  //             </div>
  //             <div className="p-4 border rounded-lg">
  //               <Label className="block mb-2">Description</Label>
  //               <Input
  //                 value={changes.description ?? (props.description || "")}
  //                 onChange={(e) =>
  //                   handleUpdate(id, "description", e.target.value)
  //                 }
  //                 placeholder="Enter description..."
  //               />
  //             </div>
  //           </div>
  //         );

  //       case "TitleWithDoubleBorder":
  //       case "TitleWithBottomBorder":
  //         return (
  //           <div className="space-y-4">
  //             <div className="p-4 border rounded-lg">
  //               <Label className="block mb-2">Content</Label>
  //               <Input
  //                 value={changes.children ?? (props.children || "")}
  //                 onChange={(e) => handleUpdate(id, "children", e.target.value)}
  //                 placeholder="Enter content..."
  //               />
  //             </div>
  //           </div>
  //         );

  //       case "h2":
  //       case "h5":
  //       case "p":
  //         return (
  //           <div className="space-y-4">
  //             <div className="p-4 border rounded-lg">
  //               <Label className="block mb-2">Content</Label>
  //               <Input
  //                 value={changes.children ?? (props.children || "")}
  //                 onChange={(e) => handleUpdate(id, "children", e.target.value)}
  //                 placeholder="Enter content..."
  //               />
  //             </div>
  //             {props.className && (
  //               <div className="p-4 border rounded-lg">
  //                 <Label className="block mb-2">Class Name</Label>
  //                 <Input
  //                   value={changes.className ?? (props.className || "")}
  //                   onChange={(e) =>
  //                     handleUpdate(id, "className", e.target.value)
  //                   }
  //                   placeholder="Enter class name..."
  //                 />
  //               </div>
  //             )}
  //           </div>
  //         );

  //       case "div":
  //         return (
  //           <div className="space-y-4">
  //             {props.className && (
  //               <div className="p-4 border rounded-lg">
  //                 <Label className="block mb-2">Class Name</Label>
  //                 <Input
  //                   value={changes.className ?? (props.className || "")}
  //                   onChange={(e) =>
  //                     handleUpdate(id, "className", e.target.value)
  //                   }
  //                   placeholder="Enter class name..."
  //                 />
  //               </div>
  //             )}
  //           </div>
  //         );

  //       default:
  //         return null;
  //     }
  //   };

  // ... previous imports and code ...

  const renderFields = (component) => {
    const { id, props = {}, component: componentType } = component;
    const changes = localChanges[id] || {};

    switch (componentType) {
      case "Title":
        return (
          <div className="space-y-4 w-full">
            {props.title !== undefined && (
              <div className="px-2 w-full  rounded-lg">
                <Label className="block mb-2">Title</Label>
                <Input
                  value={changes.title ?? (props.title || "")}
                  onChange={(e) => handleUpdate(id, "title", e.target.value)}
                  placeholder="Enter title..."
                />
              </div>
            )}
            {props.subtitle !== undefined && (
              <div className="px-2  rounded-lg">
                <Label className="block mb-2">Subtitle</Label>
                <Input
                  value={changes.subtitle ?? (props.subtitle || "")}
                  onChange={(e) => handleUpdate(id, "subtitle", e.target.value)}
                  placeholder="Enter subtitle..."
                />
              </div>
            )}
            {props.description !== undefined && (
              <div className="px-2  rounded-lg">
                <Label className="block mb-2">Description</Label>
                <Input
                  value={changes.description ?? (props.description || "")}
                  onChange={(e) =>
                    handleUpdate(id, "description", e.target.value)
                  }
                  placeholder="Enter description..."
                />
              </div>
            )}
          </div>
        );

      case "HoverCard":
        return (
          <div className="space-y-4">
            <div className="p-4  rounded-lg">
              <Label className="block mb-2">Icon</Label>
              <Input
                value={changes.icon ?? (props.icon || "")}
                onChange={(e) => handleUpdate(id, "icon", e.target.value)}
                placeholder="Enter icon name..."
              />
            </div>
            <div className="px-2  rounded-lg">
              <Label className="block mb-2">Color</Label>
              <Input
                value={changes.color ?? (props.color || "")}
                onChange={(e) => handleUpdate(id, "color", e.target.value)}
                placeholder="Enter color class..."
              />
            </div>
            <div className="px-2  rounded-lg">
              <Label className="block mb-2">Title</Label>
              <Input
                value={changes.title ?? (props.title || "")}
                onChange={(e) => handleUpdate(id, "title", e.target.value)}
                placeholder="Enter title..."
              />
            </div>
            <div className="px-2  rounded-lg">
              <Label className="block mb-2">Description</Label>
              <Input
                value={changes.description ?? (props.description || "")}
                onChange={(e) =>
                  handleUpdate(id, "description", e.target.value)
                }
                placeholder="Enter description..."
              />
            </div>
          </div>
        );

      case "CTAWithImage":
      case "CTADefault":
        return (
          <div className="space-y-4">
            {props.image !== undefined && (
              <div className="px-2  rounded-lg">
                <Label className="block mb-2">Image</Label>
                <Input
                  value={changes.image ?? (props.image || "")}
                  onChange={(e) => handleUpdate(id, "image", e.target.value)}
                  placeholder="Enter image URL..."
                />
              </div>
            )}
            {props.title !== undefined && (
              <div className="px-2  rounded-lg">
                <Label className="block mb-2">Title</Label>
                <Input
                  value={changes.title ?? (props.title || "")}
                  onChange={(e) => handleUpdate(id, "title", e.target.value)}
                  placeholder="Enter title..."
                />
              </div>
            )}
            {props.subtitle !== undefined && (
              <div className="px-2  rounded-lg">
                <Label className="block mb-2">Subtitle</Label>
                <Input
                  value={changes.subtitle ?? (props.subtitle || "")}
                  onChange={(e) => handleUpdate(id, "subtitle", e.target.value)}
                  placeholder="Enter subtitle..."
                />
              </div>
            )}
            {props.ctaAction !== undefined && (
              <div className="px-2 rounded-lg">
                <Label className="block mb-2">CTA Action</Label>
                <Input
                  value={changes.ctaAction ?? (props.ctaAction || "")}
                  onChange={(e) =>
                    handleUpdate(id, "ctaAction", e.target.value)
                  }
                  placeholder="Enter CTA text..."
                />
              </div>
            )}
            {props.description !== undefined && (
              <div className="px-2  rounded-lg">
                <Label className="block mb-2">Description</Label>
                <Input
                  value={changes.description ?? (props.description || "")}
                  onChange={(e) =>
                    handleUpdate(id, "description", e.target.value)
                  }
                  placeholder="Enter description..."
                />
              </div>
            )}
          </div>
        );

      case "TitleWithDoubleBorder":
      case "TitleWithBottomBorder":
      case "p":
      case "li":
        return (
          <div className="space-y-4">
            <div className="px-2  rounded-lg">
              <Label className="block mb-2">Content</Label>
              <Input
                value={changes.children ?? (props.children || "")}
                onChange={(e) => handleUpdate(id, "children", e.target.value)}
                placeholder="Enter content..."
              />
            </div>
            {props.className && (
              <div className="px-2  rounded-lg">
                <Label className="block mb-2">Class Name</Label>
                <Input
                  value={changes.className ?? (props.className || "")}
                  onChange={(e) =>
                    handleUpdate(id, "className", e.target.value)
                  }
                  placeholder="Enter class name..."
                />
              </div>
            )}
          </div>
        );

      case "Icon":
        return (
          <div className="space-y-4">
            <div className="px-2  rounded-lg">
              <Label className="block mb-2">Icon Name</Label>
              <Input
                value={changes.icon ?? (props.icon || "")}
                onChange={(e) => handleUpdate(id, "icon", e.target.value)}
                placeholder="Enter icon name..."
              />
            </div>
            {props.className && (
              <div className="px-2 rounded-lg">
                <Label className="block mb-2">Class Name</Label>
                <Input
                  value={changes.className ?? (props.className || "")}
                  onChange={(e) =>
                    handleUpdate(id, "className", e.target.value)
                  }
                  placeholder="Enter class name..."
                />
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  // ... rest of your component code ...

  const renderComponent = (component) => {
    if (!component || !component.id) return null;

    return (
      <AccordionItem
        key={component.id}
        value={component.id}
        className="border-b rounded-none px-0"
      >
        <AccordionTrigger className="hover:bg-gray-50 py-2 px-4 border-b rounded-none">
          <ComponentHeader component={component} />
        </AccordionTrigger>
        <AccordionContent className="px-0.5 pb-4 mt-4">
          {renderFields(component)}
          {component.props?.children &&
            Array.isArray(component.props.children) && (
              <div className="mt-4">
                {renderNestedComponents(component.props.children)}
              </div>
            )}
        </AccordionContent>
      </AccordionItem>
    );
  };

  const renderNestedComponents = (data) => {
    if (!data) return null;

    const processComponent = (component) => {
      if (!component) return null;

      // Handle arrays
      if (Array.isArray(component)) {
        return component.map((item, index) => processComponent(item));
      }

      // Skip Container but process its children
      if (component.component === "Container") {
        return component.props?.children
          ? processComponent(component.props.children)
          : null;
      }

      // For div components with children, process them
      if (component.component === "div" && component.props?.children) {
        return processComponent(component.props.children);
      }

      // Render visible components
      if (!LAYOUT_COMPONENTS.includes(component.component)) {
        return renderComponent(component);
      }

      return null;
    };

    return processComponent(data);
  };

  return (
    <div className="space-y-6">
      {error && (
        <div
          className="bg-red-50 border border-red-200 text-red-700 px-2 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Error saving changes: </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      )}

      {Object.keys(localChanges).length > 0 && (
        <div className="sticky top-0 z-10 bg-white p-4 border-b shadow-sm">
          <Button
            onClick={handleSaveChanges}
            disabled={isSaving}
            className="w-full"
          >
            {isSaving ? (
              <span className="flex items-center gap-2">
                <Icon icon="eos-icons:loading" />
                Saving...
              </span>
            ) : (
              "Save Changes"
            )}
          </Button>
        </div>
      )}

      <Accordion type="multiple" className="w-full px-0">
        {renderNestedComponents(pageData)}
      </Accordion>
    </div>
  );
}
