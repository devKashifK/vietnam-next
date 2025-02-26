"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Edit, Trash2, X } from "lucide-react";
import React, { useEffect, useState } from "react";

import { ImageUploaderAndPicker } from "./image-picker";

import { supabase } from "@/supabaseClient";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import Link from "next/link";

// async function pushToSupabase(data) {
//   try {
//     const insertions = data.map((dd) =>
//       supabase.from("news").insert({
//         title: dd.Title,
//         image: dd.image,
//         content: dd.Content,
//         author: dd["Author First Name"],
//         category: dd.Categories,
//         slug: dd.Slug,
//         created_at: dd.Date,
//       })
//     );

//     const results = await Promise.all(insertions);

//     // Check if any insertion had an error
//     const errors = results.filter((result) => result.error);
//     if (errors.length > 0) {
//       console.error("Insert errors:", errors);
//       return { success: false, errors };
//     }

//     return { success: true, data: results.map((result) => result.data) };
//   } catch (error) {
//     console.error("Unexpected error:", error);
//     return { success: false, error };
//   }
// }

export const NewsForm = ({ initialData = {} }) => {
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };
  const [formData, setFormData] = useState({
    title: initialData.title || "",
    image: initialData.image || null,
    author: initialData.author || "",
    category: initialData.category || "",
    content: initialData.content || "",

    slug: initialData.slug || generateSlug(initialData.title || ""),
  });

  const handleTitleChange = (e) => {
    const title = e.target.value;
    setFormData((prev) => ({
      ...prev,
      title: title,
      slug: generateSlug(title),
    }));
  };

  const handleImageChange = (e) => {
    setFormData((prev) => ({ ...prev, image: e }));
  };
  const handleChange = (value) => {
    setFormData((prev) => ({ ...prev, content: value }));
  };
  const handleCategoryChange = (e) => {
    setFormData((prev) => ({ ...prev, category: e.target.value }));
  };
  const handleAuthorChange = (e) => {
    setFormData((prev) => ({ ...prev, author: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Insert data into Supabase
    const { data, error } = await supabase.from("news").insert([
      {
        title: formData.title,
        image: formData.image,
        author: formData.author,
        category: formData.category,
        content: formData.content,

        slug: formData.slug,
      },
    ]);

    if (error) {
      console.error("Error adding news:", error);
      return;
    }

    console.log("News added successfully:", data);
    // Reset form fields if submission is successful
    setFormData({
      title: "",
      image: null,
      author: "",
      category: "",
      content: "",

      slug: "",
    });

    // onSubmit(formData);
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

      <div className="space-y-4">
        <Label htmlFor="newsImage" className="block text-sm font-medium mb-2">
          Upload Image
        </Label>
        <div className="flex items-center space-x-4">
          <ImageUploaderAndPicker
            value={formData.image}
            onChange={handleImageChange}
          />
        </div>
        <div>
          <Label htmlFor="newsImage" className="block text-sm font-medium mb-2">
            Author name
          </Label>
          <div className="flex items-center space-x-4">
            <Input
              id="author"
              type="text"
              value={formData.author}
              onChange={handleAuthorChange}
              placeholder="Author name"
              className="w-auto"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="newsImage" className="block text-sm font-medium mb-2">
            News Category
          </Label>
          <div className="flex items-center space-x-4">
            <Input
              id="category"
              type="text"
              value={formData.category}
              onChange={handleCategoryChange}
              placeholder="News Category"
              className="w-auto"
            />
          </div>
        </div>
        <div>
          <Label htmlFor="newsImage" className="block text-sm font-medium mb-2">
            News Content
          </Label>
          <div className="flex items-center space-x-4">
            <ReactQuill
              value={formData.content}
              onChange={handleChange}
              placeholder="Enter your content here..."
            />
          </div>
        </div>
        <div>
          <Label htmlFor="slug" className="block text-sm font-medium mb-2">
            Slug
          </Label>
          <Input
            id="slug"
            name="slug"
            value={formData.slug}
            readOnly
            className="w-full"
          />
        </div>
      </div>

      <Button type="submit">
        {initialData.id ? "Update News" : "Add News"}
      </Button>
    </form>
  );
};

export const NewsList = ({ onEdit, onDelete }) => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      const { data, error } = await supabase.from("news").select("*");
      if (error) {
        console.error("Error fetching news:", error);
        return;
      }
      setNews(data);
    };
    fetchNews();
  }, []);

  return (
    <div className="space-y-4">
      {news.map((article) => (
        <Card key={article.id}>
          <CardContent className="flex items-center justify-between p-4">
            <div>
              <h3 className="text-lg font-semibold">{article.title}</h3>
              <p className="text-sm text-gray-500">Author: {article.author}</p>
            </div>
            <div className="flex gap-2 justify-center items-center">
              <Link
                href={`/admin/news-editor/${article.slug}`}
                className="mr-2"
              >
                <Edit className="h-4 w-4 text-black" />
              </Link>
              <Button
                variant="destructive"
                size="icon"
                onClick={() => onDelete(article.id)}
              >
                <Trash2 className="h-4 w-4 text-content" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
