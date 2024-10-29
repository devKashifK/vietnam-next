import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { IconPickerPanel } from "./icon-picker";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { ImageUploaderAndPicker } from "./image-picker";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const ComponentForm = ({ type, design, content, onChange }) => {
  const handleAddCard = () => {
    onChange({
      ...content,
      cards: [
        ...(content.cards || []),
        { title: "", description: "", icon: "" },
      ],
    });
  };

  const handleRemoveCard = (index) => {
    const newCards = [...content.cards];
    newCards.splice(index, 1);
    onChange({ ...content, cards: newCards });
  };

  const handleCardChange = (index, field, value) => {
    const newCards = [...content.cards];
    newCards[index] = { ...newCards[index], [field]: value };
    onChange({ ...content, cards: newCards });
  };

  const renderHeroForm = () => {
    return (
      <div className="space-y-4">
        <Input
          placeholder="Hero Title"
          value={content.title || ""}
          onChange={(e) => onChange({ ...content, title: e.target.value })}
        />
        <Textarea
          placeholder="Hero Description"
          value={content.description || ""}
          onChange={(e) =>
            onChange({ ...content, description: e.target.value })
          }
        />
        <Input
          placeholder="Button Text"
          value={content.buttonText || ""}
          onChange={(e) => onChange({ ...content, buttonText: e.target.value })}
        />
        <ImageUploaderAndPicker
          onChange={(imageUrl) => {
            onChange({ ...content, image: imageUrl });
            console.log(imageUrl);
          }}
        />
        {design === "hero2" && (
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                  onChange({ ...content, image: reader.result });
                };
                reader.readAsDataURL(file);
              }
            }}
          />
        )}
      </div>
    );
  };

  // const renderCardsForm = () => {
  //   switch (design) {
  //     case "HoverCard":
  //       return renderHoverCardForm();
  //     case "CardWithImage":
  //       return renderCardWithImageForm();
  //     default:
  //       return null;
  //   }
  // };

  const renderCardsForm = () => {
    return (
      <div className="space-y-4">
        <Input
          className="Title"
          placeholder="Title"
          onChange={(e) => onChange({ ...content, title: e.target.value })}
        />
        <Input
          placeholder="Subtitle"
          onChange={(e) => onChange({ ...content, subtitle: e.target.value })}
        />
        <Input
          placeholder="Description"
          onChange={(e) =>
            onChange({ ...content, description: e.target.value })
          }
        />
        {(content.cards || []).map((card, index) => (
          <div key={index} className="space-y-2 py-4 rounded-md">
            <Popover>
              <PopoverTrigger className="border">Select Icon</PopoverTrigger>
              <PopoverContent>
                <Suspense>
                  <IconPickerPanel
                    onChangeIcon={(icon) =>
                      handleCardChange(index, "icon", icon)
                    }
                  />
                </Suspense>
              </PopoverContent>
            </Popover>
            <Input
              placeholder={`Card ${index + 1} Title`}
              value={card.title || ""}
              onChange={(e) => handleCardChange(index, "title", e.target.value)}
            />
            <Textarea
              placeholder={`Card ${index + 1} Content`}
              value={card.description || ""}
              onChange={(e) =>
                handleCardChange(index, "description", e.target.value)
              }
            />
            <ImageUploaderAndPicker
              onChange={(imageUrl) =>
                handleCardChange(index, "image", imageUrl)
              }
            />
            <Button
              variant="destructive"
              onClick={() => handleRemoveCard(index)}
              className="text-white"
            >
              Remove Card {index + 1}
            </Button>
          </div>
        ))}
        <Button type="button" className="text-white" onClick={handleAddCard}>
          Add Card
        </Button>
      </div>
    );
  };

  const renderCardWithImageForm = () => {
    return (
      <div className="w-full flex justify-start items-center flex-col gap-4">
        <Input
          className="Title"
          placeholder="Title"
          onChange={(e) => onChange({ ...content, title: e.target.value })}
        />
        <Input
          placeholder="Subtitle"
          onChange={(e) => onChange({ ...content, subtitle: e.target.value })}
        />
        <Input
          placeholder="Description"
          onChange={(e) =>
            onChange({ ...content, description: e.target.value })
          }
        />
        {(content.cards || []).map((card, index) => (
          <div
            key={index}
            className="flex justify-start items-center flex-col gap-4 w-full border p-4 rounded-md"
          >
            <Input
              placeholder={`Card ${index + 1} Title`}
              value={card.title || ""}
              onChange={(e) => handleCardChange(index, "title", e.target.value)}
            />
            <Textarea
              placeholder={`Card ${index + 1} Content`}
              value={card.description || ""}
              onChange={(e) =>
                handleCardChange(index, "description", e.target.value)
              }
            />
            <ImageUploaderAndPicker
              onChange={(imageUrl) =>
                handleCardChange(index, "image", imageUrl)
              }
            />
            <div className="w-full flex justify-start">
              <Button
                variant="destructive"
                onClick={() => handleRemoveCard(index)}
                type="button"
                className="text-content "
              >
                Remove Card {index + 1}
              </Button>
            </div>
          </div>
        ))}
        <Button type="button" className="w-full" onClick={handleAddCard}>
          Add Card
        </Button>
      </div>
    );
  };

  // Form for the CTA section
  const renderCTAForm = () => {
    return (
      <div className="space-y-4">
        <Input
          placeholder="CTA Title"
          value={content.title || ""}
          onChange={(e) => onChange({ ...content, title: e.target.value })}
        />
        <Textarea
          placeholder="CTA Description"
          value={content.description || ""}
          onChange={(e) =>
            onChange({ ...content, description: e.target.value })
          }
        />
        <Input
          placeholder="Subtitle"
          value={content.subtitle || ""}
          onChange={(e) => onChange({ ...content, subtitle: e.target.value })}
        />
        <ImageUploaderAndPicker
          onChange={(e) => onChange({ ...content, image: e })}
        />
      </div>
    );
  };

  // Determine which form to render based on the type of section
  switch (type) {
    case "hero":
      return renderHeroForm();
    case "cards":
      return renderCardsForm();
    case "cta":
      return renderCTAForm();
    default:
      return null;
  }
};
