import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Edit, Trash2 } from "lucide-react";

export const PageList = ({ pages, onEdit, onDelete }) => (
  <div className="space-y-4">
    {pages.map((page) => (
      <Card key={page.id}>
        <CardContent className="flex items-center justify-between p-4">
          <div>
            <h3 className="text-lg font-semibold">{page.title}</h3>
            <p className="text-sm text-gray-500">Created: {page.createdAt}</p>
          </div>
          <div>
            <Button
              variant="outline"
              size="icon"
              onClick={() => onEdit(page.id)}
              className="mr-2"
            >
              <Edit className="h-4 w-4" />
            </Button>
            <Button
              variant="destructive"
              size="icon"
              onClick={() => onDelete(page.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
);
