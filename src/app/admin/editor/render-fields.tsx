import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const renderField = (component, localChanges, handleUpdate) => {
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
              onChange={(e) => handleUpdate(id, "description", e.target.value)}
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
                onChange={(e) => handleUpdate(id, "ctaAction", e.target.value)}
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
                onChange={(e) => handleUpdate(id, "className", e.target.value)}
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
                onChange={(e) => handleUpdate(id, "className", e.target.value)}
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
