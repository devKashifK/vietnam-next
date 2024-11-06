"use client";

import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2, Upload, Image as ImageIcon } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/iconify.js";

const supabaseService = createClient(
  "https://etsnyvijvhklcwfnczkq.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV0c255dmlqdmhrbGN3Zm5jemtxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyOTMyMjU1MCwiZXhwIjoyMDQ0ODk4NTUwfQ.RH9ZTS6PFXNSK4jpxH3JI_LdCSUSrSGgI4SUG_EvnXE"
);

async function uploadImage(file: File) {
  const { data, error } = await supabaseService.storage
    .from("images")
    .upload(`public/${file.name}`, file);

  if (error) {
    throw new Error(error.message);
  }
  return supabaseService.storage
    .from("images")
    .getPublicUrl(`public/${file.name}`).data.publicUrl;
}

async function fetchImages() {
  const { data, error } = await supabaseService.storage
    .from("images")
    .list("public");

  console.log(data);

  if (error) {
    throw new Error(error.message);
  }

  return Promise.all(
    data.map(async (item) => ({
      name: item.name,
      url: supabaseService.storage
        .from("images")
        .getPublicUrl(`public/${item.name}`).data.publicUrl,
    }))
  );
}

export function ImageUploaderAndPicker({
  onChange,
}: {
  onChange: (image: string) => void;
}) {
  const [images, setImages] = useState<{ name: string; url: string }[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("uploaded");
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const imageData = await fetchImages();
        setImages(imageData);
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to load images. Please try again.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };
    loadImages();
  }, []);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const imageUrl = await uploadImage(file);
      setImages((prevImages) => [
        ...prevImages,
        { name: file.name, url: imageUrl },
      ]);
      setSelectedImage(imageUrl);
      setActiveTab("uploaded");
      toast({
        title: "Success",
        description: "Image uploaded successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to upload image. Please try again.",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  const handleImageSelect = (image: string) => {
    setSelectedImage(image);
    onChange(image);
    setDialogOpen(false);
  };

  async function deleteImage(imageName) {
    const { error } = await supabaseService.storage
      .from("images") // Replace "images" with your actual bucket name if different
      .remove([`public/${imageName}`]); // Use the correct folder path if you have one

    if (error) {
      throw new Error(error.message);
    }
  }

  return (
    <div className="space-y-6 w-full">
      <div className="flex w-full items-center space-x-4">
        <Input
          type="text"
          placeholder="No image selected"
          value={selectedImage ? selectedImage.split("/").pop() : ""}
          readOnly
          className="flex-grow"
        />
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen} modal>
          <DialogTrigger asChild>
            <Button variant="outline" className="px-2 w-40 py-1 text-content">
              Choose Image
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-content sm:max-w-[725px]">
            <DialogHeader>
              <DialogTitle>Select an Image</DialogTitle>
            </DialogHeader>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="uploaded">Uploaded Images</TabsTrigger>
                <TabsTrigger value="upload">Upload from Computer</TabsTrigger>
              </TabsList>
              <TabsContent value="uploaded">
                {loading ? (
                  <div className="flex justify-center items-center h-64">
                    <Loader2 className="h-8 w-8 animate-spin" />
                  </div>
                ) : (
                  <div className="grid grid-cols-3 gap-4 max-h-[350px] pretty-scroll overflow-y-auto">
                    {images.map((image) => (
                      <Card
                        key={image.name}
                        className={`cursor-pointer hover:shadow-md transition-shadow `}
                        onClick={() => setSelectedImage(image.url)}
                      >
                        <CardContent className="p-0 relative">
                          <img
                            src={image.url}
                            alt={image.name}
                            className={cn(
                              "w-full h-32 object-cover rounded-md",
                              selectedImage === image.url
                                ? "border-2 border-highlight transition-all duration-300 ease-in-out"
                                : ""
                            )}
                          />
                          {selectedImage === image.url && (
                            <div className="absolute top-0 right-0 bg-black/50 w-full h-full flex items-center justify-center gap-3">
                              <div
                                className="p-1 rounded-full hover:bg-highlight transition-colors duration-300 ease-in-out"
                                onClick={() => {
                                  handleImageSelect(selectedImage || ""),
                                    setDialogOpen(false);
                                }}
                              >
                                <Icon
                                  icon={"material-symbols:add-2"}
                                  className="text-content text-2xl"
                                />
                              </div>
                              <div
                                className="p-1 rounded-full hover:bg-highlight transition-colors duration-300 ease-in-out"
                                onClick={async () =>
                                  await deleteImage(image.name)
                                }
                              >
                                <Icon
                                  icon={"material-symbols:delete"}
                                  className="text-content text-2xl "
                                />
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </TabsContent>
              <TabsContent value="upload">
                <div className="flex items-center justify-center h-64 border-2 border-dashed rounded-lg">
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <div className="flex flex-col items-center">
                      <Upload className="h-8 w-8 mb-2" />
                      <span>Click to upload or drag and drop</span>
                    </div>
                    <input
                      id="file-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                </div>
              </TabsContent>
            </Tabs>
            <div className="flex justify-end mt-4">
              <Button
                className="bg-highlight"
                onClick={() => {
                  handleImageSelect(selectedImage || ""), setDialogOpen(false);
                }}
              >
                Add Image
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
