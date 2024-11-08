"use client";
import { Badge } from "@/components/ui/badge";
import Container from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Glass from "@/lib/helpers";
import { cn } from "@/lib/utils";
import { supabase } from "@/supabaseClient";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { ImageUploaderAndPicker } from "../../image-picker";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function NewsEditor() {
  const [news, setNews] = useState(null);
  const [editedNews, setEditedNews] = useState(null);
  const [hasChanges, setHasChanges] = useState(false);
  const { slug } = useParams();

  useEffect(() => {
    async function fetchNews() {
      const { data, error } = await supabase
        .from("news")
        .select("*")
        .eq("slug", slug)
        .single();

      if (error) {
        console.error("Error fetching news:", error);
      } else {
        setNews(data);
        setEditedNews(data); // Initialize editedNews with the fetched data
      }
    }
    fetchNews();
  }, [slug]);

  const formattedDate =
    news &&
    new Date(news.created_at).toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  const handleSave = async () => {
    const { data, error } = await supabase
      .from("news")
      .update({
        title: editedNews.title,
        author: editedNews.author,
        category: editedNews.category,
        content: editedNews.content,
        image: editedNews.image,
      })
      .eq("id", news.id);

    if (error) {
      console.error("Error saving news:", error);
    } else {
      setNews(editedNews); // Update the original news with the edited data after saving
      setHasChanges(false); // Disable the save button after saving
      console.log("News saved successfully", data);
    }
  };

  const handleInputChange = (field, value) => {
    setEditedNews({ ...editedNews, [field]: value });
    setHasChanges(true); // Enable the save button
  };

  return (
    news && (
      <div>
        <Container className="text-left post flex gap-6 flex-col">
          <div className="w-[70%] px-14 mx-auto">
            <h2 className="text-2xl">Preview</h2>
          </div>
          <Glass className="px-14 w-[70%] py-10 flex flex-col gap-8">
            {editedNews.image ? (
              <img
                src={editedNews.image || "/no-image.jpg"}
                alt={editedNews.title}
                className="w-full rounded-2xl h-[400px] object-cover"
              />
            ) : (
              <img
                src={editedNews.image || "/no-image.jpg"}
                className="w-full rounded-2xl h-[400px] object-cover"
                alt={editedNews.title}
              />
            )}
            <div
              dangerouslySetInnerHTML={{ __html: editedNews.content }}
              className="text-sm dangerouHtml"
            />
            <div className="flex justify-between items-center w-full">
              <div className="flex gap-2">
                <Badge className="bg-yellow-400">{formattedDate}</Badge>
                <Badge className="bg-sky-400">
                  Author: {editedNews.author}
                </Badge>
              </div>
              <div className="flex gap-2">
                {editedNews.categories?.split(",").map((category, index) => (
                  <Badge
                    key={index}
                    className={cn(
                      "py-1 cursor-pointer",
                      index === 0 && "bg-red-400"
                    )}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </Glass>
        </Container>
        <div className="px-10">
          <Card>
            <CardHeader>
              <CardTitle>Editor</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    placeholder="Title"
                    value={editedNews.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="author">Author</Label>
                  <Input
                    id="author"
                    placeholder="Author Name"
                    value={editedNews.author}
                    onChange={(e) =>
                      handleInputChange("author", e.target.value)
                    }
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="category">Category</Label>
                  <Input
                    id="category"
                    placeholder="Category"
                    value={editedNews.category}
                    onChange={(e) =>
                      handleInputChange("category", e.target.value)
                    }
                  />
                </div>
              </div>
              <Separator />
              <div className="grid gap-2">
                <Label>Image</Label>
                <ImageUploaderAndPicker
                  onChange={(image) => handleInputChange("image", image)}
                />
              </div>
              <Separator />
              <div className="grid gap-2">
                <Label>Content</Label>
                <ReactQuill
                  value={editedNews.content}
                  onChange={(content) => handleInputChange("content", content)}
                  className="h-64"
                />
              </div>
              <Button
                onClick={handleSave}
                disabled={!hasChanges}
                className="w-full"
              >
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  );
}
