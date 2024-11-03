import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { supabase } from "@/supabaseClient";
import { Edit, Trash2 } from "lucide-react";
import { cache, use, useEffect, useState } from "react";

export const getPageList = cache(async () => {
  const { data: pages, error } = await supabase.from("pages").select("*");
  return pages;
});

export function PageList({}) {
  const [pages, setPages] = useState([]);
  useEffect(() => {
    const fetchPages = async () => {
      const pages = await getPageList();
      setPages(pages);
    };
    fetchPages();
  }, []);
  const handleDelete = async (id) => {
    const { error } = await supabase.from("pages").delete().eq("id", id);

    if (error) {
      console.error("Error deleting page:", error.message);
    } else {
      console.log("Page deleted successfully");
    }
  };
  return (
    <div className="space-y-4">
      {pages.map((page) => (
        <Card key={page.id}>
          <CardContent className="flex items-center justify-between p-4">
            <div>
              <h3 className="text-lg font-semibold">{page.name}</h3>
              <p className="text-sm text-gray-500">
                Created: {page.created_at}
              </p>
            </div>
            <div>
              <Button
                variant="outline"
                size="icon"
                className="mr-2 text-content"
              >
                <Edit className="h-4 w-4" />
              </Button>
              <Button
                variant="destructive"
                size="icon"
                className="text-content"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
