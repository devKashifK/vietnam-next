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
import { IconPickerPanel } from "../icon-picker";
import { Popover, PopoverContent } from "@/components/ui/popover";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { Textarea } from "@/components/ui/textarea";

const LAYOUT_COMPONENTS = [];

const isVisibleComponent = (component: any) => {
  return !LAYOUT_COMPONENTS.includes(component.component);
};

const ComponentHeader = ({ component, onDelete }) => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-2">
        <span className="font-medium">{component.component}</span>
      </div>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Icon icon="lucide:trash-2" className="h-4 w-4 text-red-500" />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete this
              component.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => onDelete(component.id)}
              className="bg-red-500 hover:bg-red-600"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
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

      // Make sure we have the required data
      if (!selectedPage) {
        throw new Error("No page selected");
      }

      // Update the database
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

      setLocalChanges({});

      if (onUpdate) {
        onUpdate(updatedData);
      }
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

  const renderFields = (component) => {
    const { id, props = {}, component: componentType } = component;
    const changes = localChanges[id] || {};

    const renderNestedComponents = (children) => {
      return children.map((child, index) => (
        <div key={index}>{renderFields(child)}</div>
      ));
    };

    switch (componentType) {
      case "CardWithImage":
        console.log(props, "checkProps");
        return (
          <div className="flex flex-col gap-2">
            <div className="px-2 flex flex-col gap-1  rounded-lg">
              <img src={changes.image ?? (props.image || "")} />
              <ImageUploaderAndPicker
                onChange={(e) => handleUpdate(id, "image", e)}
              />
            </div>
            <div className="px-2 w-full  rounded-lg">
              <Label className="block mb-2">Title</Label>
              <Input
                value={changes.title ?? (props.title || "")}
                onChange={(e) => handleUpdate(id, "title", e.target.value)}
                placeholder="Enter title..."
              />
            </div>
            <div className="px-2 w-full  rounded-lg">
              <Label className="block mb-2">Description</Label>
              <Textarea
                value={changes.description ?? (props.description || "")}
                onChange={(e) =>
                  handleUpdate(id, "description", e.target.value)
                }
              />
            </div>
          </div>
        );

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
                <Textarea
                  value={changes.description ?? (props.description || "")}
                  onChange={(e) =>
                    handleUpdate(id, "description", e.target.value)
                  }
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
              <IconSelector
                handleUpdate={handleUpdate}
                id={id}
                icon={props.icon}
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
              <Textarea
                value={changes.description ?? (props.description || "")}
                onChange={(e) =>
                  handleUpdate(id, "description", e.target.value)
                }
                placeholder="Enter description..."
              />
              {/* <Input
                value={changes.description ?? (props.description || "")}
                onChange={(e) =>
                  handleUpdate(id, "description", e.target.value)
                }
                placeholder="Enter description..."
              /> */}
            </div>
          </div>
        );

      case "CTAWithImage":
      case "CTADefault":
        return (
          <div className="space-y-4">
            {props.image !== undefined && (
              <div className="px-2 flex felx-col gap-1  rounded-lg">
                <img src={changes.image ?? (props.image || "")} />
                <ImageUploaderAndPicker
                  onChange={(e) => handleUpdate(id, "image", e)}
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
                <Textarea
                  value={changes.description ?? (props.description || "")}
                  onChange={(e) =>
                    handleUpdate(id, "description", e.target.value)
                  }
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
      case "ServicesCard":
        return (
          <div className="space-y-4 w-full">
            {props.title?.props?.children && (
              <div className="px-2 w-full rounded-lg">
                {props.title.props.children.map((child, index) => {
                  if (child.component === "TitleWithBottomBorder") {
                    return (
                      <div key={index} className="mb-4">
                        <Label className="block mb-2">Title with Border</Label>
                        <Input
                          value={
                            changes[`title_border_${index}`] ??
                            (child.props.children || "")
                          }
                          onChange={(e) =>
                            handleUpdate(
                              id,
                              `title_border_${index}`,
                              e.target.value
                            )
                          }
                          placeholder="Enter title..."
                        />
                      </div>
                    );
                  }
                  if (child.component === "h5") {
                    return (
                      <div key={index} className="mb-4">
                        <Label className="block mb-2">Subtitle</Label>
                        <Input
                          value={
                            changes[`title_h5_${index}`] ??
                            (child.props.children || "")
                          }
                          onChange={(e) =>
                            handleUpdate(
                              id,
                              `title_h5_${index}`,
                              e.target.value
                            )
                          }
                          placeholder="Enter subtitle..."
                        />
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            )}
            {props.description !== undefined && (
              <div className="px-2 rounded-lg">
                <Label className="block mb-2">Description</Label>
                <Textarea
                  value={changes.description ?? (props.description || "")}
                  onChange={(e) =>
                    handleUpdate(id, "description", e.target.value)
                  }
                />
              </div>
            )}
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

  const handleDeleteComponent = async (componentId: string) => {
    setIsSaving(true);
    setError(null);

    try {
      const deleteComponent = (data: any): any => {
        if (!data) return data;

        // Handle arrays
        if (Array.isArray(data)) {
          return data
            .filter((item) => item.id !== componentId)
            .map((item) => deleteComponent(item));
        }

        // Handle objects
        if (typeof data === "object") {
          // If this component has children, process them
          if (data.props?.children) {
            return {
              ...data,
              props: {
                ...data.props,
                children: deleteComponent(data.props.children),
              },
            };
          }
        }

        return data;
      };

      const updatedData = deleteComponent(pageData);

      // Update preview immediately
      if (onLocalUpdate) {
        onLocalUpdate(updatedData);
      }

      // Make sure we have the required data
      if (!selectedPage) {
        throw new Error("No page selected");
      }

      // Update the database
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

      // Update parent component
      if (onUpdate) {
        onUpdate(updatedData);
      }

      console.log("Component deleted successfully");
    } catch (err) {
      setError(err.message);
      console.error("Error deleting component:", {
        error: err,
        message: err.message,
        details: err.details,
      });
    } finally {
      setIsSaving(false);
    }
  };

  const renderComponent = (component) => {
    if (!component || !component.id) return null;

    return (
      <AccordionItem
        key={component.id}
        value={component.id}
        className="border-b rounded-none px-0"
      >
        <AccordionTrigger className="hover:bg-gray-50 py-2 px-4 border-b rounded-none">
          <ComponentHeader
            component={component}
            onDelete={handleDeleteComponent}
          />
        </AccordionTrigger>
        <AccordionContent className="px-0 pb-4 mt-4">
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

const IconSelector = ({ icon, id, handleUpdate }) => {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="border w-full flex gap-2 justify-start items-center">
        <span>Change Icon</span>
        <Icon icon={icon} />
      </PopoverTrigger>
      <PopoverContent>
        <IconPickerPanel
          onChangeIcon={(icon) => {
            handleUpdate(id, "icon", icon), setOpen(!open);
          }}
        />
      </PopoverContent>
    </Popover>
  );
};
