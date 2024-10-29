import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Edit, Trash2, X } from "lucide-react";
import { useState } from "react";

export const NewsForm = ({ onSubmit, initialData = {} }) => {
  const [formData, setFormData] = useState({
    title: initialData.title || "",
    sections: initialData.sections || [],
    image: initialData.image || null,
  });

  const handleTitleChange = (e) => {
    setFormData((prev) => ({ ...prev, title: e.target.value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddSection = () => {
    setFormData((prev) => ({
      ...prev,
      sections: [...prev.sections, { title: "", elements: [] }],
    }));
  };

  const handleSectionTitleChange = (index, title) => {
    setFormData((prev) => ({
      ...prev,
      sections: prev.sections.map((section, i) =>
        i === index ? { ...section, title } : section
      ),
    }));
  };

  const handleAddElement = (sectionIndex, type) => {
    setFormData((prev) => ({
      ...prev,
      sections: prev.sections.map((section, i) =>
        i === sectionIndex
          ? {
              ...section,
              elements: [...section.elements, { type, content: "" }],
            }
          : section
      ),
    }));
  };

  const handleElementContentChange = (sectionIndex, elementIndex, content) => {
    setFormData((prev) => ({
      ...prev,
      sections: prev.sections.map((section, i) =>
        i === sectionIndex
          ? {
              ...section,
              elements: section.elements.map((element, j) =>
                j === elementIndex ? { ...element, content } : element
              ),
            }
          : section
      ),
    }));
  };

  const handleRemoveElement = (sectionIndex, elementIndex) => {
    setFormData((prev) => ({
      ...prev,
      sections: prev.sections.map((section, i) =>
        i === sectionIndex
          ? {
              ...section,
              elements: section.elements.filter((_, j) => j !== elementIndex),
            }
          : section
      ),
    }));
  };

  const handleRemoveSection = (index) => {
    setFormData((prev) => ({
      ...prev,
      sections: prev.sections.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        name="title"
        placeholder="News Title"
        value={formData.title}
        onChange={handleTitleChange}
        required
      />
      <div>
        <Label htmlFor="newsImage" className="block text-sm font-medium mb-2">
          Upload Image
        </Label>
        <div className="flex items-center space-x-4">
          <Input
            id="newsImage"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-auto"
          />
          {formData.image && (
            <img
              className="h-12 w-12 object-cover rounded"
              src={formData.image}
              alt="Uploaded"
            />
          )}
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Sections</h3>
          <Button type="button" onClick={handleAddSection}>
            Add Section
          </Button>
        </div>
        <Accordion type="multiple" className="w-full">
          {formData.sections.map((section, sectionIndex) => (
            <AccordionItem key={sectionIndex} value={`section-${sectionIndex}`}>
              <AccordionTrigger className="text-left">
                <Input
                  value={section.title}
                  onChange={(e) =>
                    handleSectionTitleChange(sectionIndex, e.target.value)
                  }
                  placeholder="Section Title"
                  className="mr-2"
                />
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div className="flex space-x-2">
                    <Button
                      type="button"
                      onClick={() => handleAddElement(sectionIndex, "h1")}
                    >
                      Add H1
                    </Button>
                    <Button
                      type="button"
                      onClick={() => handleAddElement(sectionIndex, "h2")}
                    >
                      Add H2
                    </Button>
                    <Button
                      type="button"
                      onClick={() => handleAddElement(sectionIndex, "p")}
                    >
                      Add Paragraph
                    </Button>
                    <Button
                      type="button"
                      onClick={() => handleAddElement(sectionIndex, "img")}
                    >
                      Add Image
                    </Button>
                  </div>
                  {section.elements.map((element, elementIndex) => (
                    <Card key={elementIndex}>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center mb-2">
                          <Label className="capitalize">{element.type}</Label>
                          <Button
                            variant="destructive"
                            size="icon"
                            onClick={() =>
                              handleRemoveElement(sectionIndex, elementIndex)
                            }
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                        {element.type === "img" ? (
                          <Input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                              const file = e.target.files[0];
                              if (file) {
                                const reader = new FileReader();
                                reader.onloadend = () => {
                                  handleElementContentChange(
                                    sectionIndex,
                                    elementIndex,
                                    reader.result
                                  );
                                };
                                reader.readAsDataURL(file);
                              }
                            }}
                          />
                        ) : (
                          <Textarea
                            value={element.content}
                            onChange={(e) =>
                              handleElementContentChange(
                                sectionIndex,
                                elementIndex,
                                e.target.value
                              )
                            }
                            placeholder={`Enter ${element.type} content`}
                          />
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <Button type="submit">
        {initialData.id ? "Update News" : "Add News"}
      </Button>
    </form>
  );
};

export const NewsList = ({ news, onEdit, onDelete }) => (
  <div className="space-y-4">
    {news.map((article) => (
      <Card key={article.id}>
        <CardContent className="flex items-center justify-between p-4">
          <div>
            <h3 className="text-lg font-semibold">{article.title}</h3>
            <p className="text-sm text-gray-500">
              Published: {article.publishedAt}
            </p>
          </div>
          <div>
            <Button
              variant="outline"
              size="icon"
              onClick={() => onEdit(article.id)}
              className="mr-2"
            >
              <Edit className="h-4 w-4" />
            </Button>
            <Button
              variant="destructive"
              size="icon"
              onClick={() => onDelete(article.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
);
