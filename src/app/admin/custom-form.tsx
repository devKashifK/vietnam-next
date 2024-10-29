import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export function CustomSectionForm({ onSubmit, sectionIndex }) {
  const [customSection, setCustomSection] = useState({
    title: "",
    subtitle: "",
    description: "",
    image: "",
    imagePosition: "top", // Default position
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomSection((prev) => ({ ...prev, [name]: value }));
  };

  const handleImagePositionChange = (value) => {
    setCustomSection((prev) => ({ ...prev, imagePosition: value }));
  };

  const handleSubmit = () => {
    onSubmit(customSection, sectionIndex); // Passing custom section data and index
  };

  return (
    <div className="space-y-4 z-50 realat">
      <Input
        name="title"
        placeholder="Section Title"
        value={customSection.title}
        onChange={handleInputChange}
      />
      <Input
        name="subtitle"
        placeholder="Section Subtitle"
        value={customSection.subtitle}
        onChange={handleInputChange}
      />
      <Textarea
        name="description"
        placeholder="Section Description"
        value={customSection.description}
        onChange={handleInputChange}
      />
      <Input
        name="image"
        placeholder="Section Image URL"
        value={customSection.image}
        onChange={handleInputChange}
      />
      <Select
        onValueChange={handleImagePositionChange}
        value={customSection.imagePosition}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select Image Position" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="top">Top</SelectItem>
          <SelectItem value="left">Left</SelectItem>
          <SelectItem value="right">Right</SelectItem>
          <SelectItem value="bottom">Bottom</SelectItem>
        </SelectContent>
      </Select>
      <Button onClick={handleSubmit}>Add Custom Section</Button>
    </div>
  );
}
