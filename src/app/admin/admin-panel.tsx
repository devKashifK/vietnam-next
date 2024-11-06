"use client";
import { useEffect, useState } from "react";
import { PlusCircle, FileText, Newspaper } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NewPageForm } from "./new-page";
import { PageList } from "./exsisting-page";
import { NewsForm, NewsList } from "./news-admin";
import Analytics from "./analytics";
import { useCheckSession } from "@/auth";

const Sidebar = ({ activeTab, setActiveTab, pages, news }) => (
  <div className="w-64 bg-gray-100 h-screen over p-4">
    <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
    <Tabs orientation="vertical" value={activeTab} onValueChange={setActiveTab}>
      <TabsList className="flex flex-col items-stretch h-auto">
        <TabsTrigger value="analytics" className="justify-start">
          <FileText className="mr-2 h-4 w-4" />
          Analytics
        </TabsTrigger>
        <TabsTrigger value="pages" className="justify-start">
          <FileText className="mr-2 h-4 w-4" />
          Pages
        </TabsTrigger>
        <TabsTrigger value="new" className="justify-start">
          <PlusCircle className="mr-2 h-4 w-4" />
          New Page
        </TabsTrigger>
        <TabsTrigger value="news" className="justify-start">
          <Newspaper className="mr-2 h-4 w-4" />
          News
        </TabsTrigger>
      </TabsList>
    </Tabs>
  </div>
);

export default function AdminPanel() {
  const session = useCheckSession();
  const [activeTab, setActiveTab] = useState("pages");
  const [pages, setPages] = useState([
    { id: 1, title: "Home Page", createdAt: "2023-05-15" },
    { id: 2, title: "About Us", createdAt: "2023-05-16" },
  ]);

  const [news, setNews] = useState([
    {
      id: 1,
      title: "New Feature Launch",
      publishedAt: "2023-05-20",
      sections: [],
    },
    {
      id: 2,
      title: "Company Milestone Achieved",
      author: "2023-05-22",
      content: "",
      sections: [],
    },
  ]);
  const [editingNews, setEditingNews] = useState(null);

  const handleNewPage = (pageData) => {
    const newPage = {
      id: pages.length + 1,
      title: pageData.title,
      createdAt: new Date().toISOString().split("T")[0],
      ...pageData,
    };

    setPages([...pages, newPage]);
    setActiveTab("pages");
  };

  const handleAddNews = (newsData) => {
    const newArticle = {
      id: news.length + 1,
      publishedAt: new Date().toISOString().split("T")[0],
      ...newsData,
    };
    setNews([...news, newArticle]);
    setEditingNews(null);
  };

  const handleEditNews = (id) => {
    const articleToEdit = news.find((article) => article.id === id);
    setEditingNews(articleToEdit);
  };

  const handleUpdateNews = (updatedData) => {
    setNews(
      news.map((article) =>
        article.id === updatedData.id ? { ...article, ...updatedData } : article
      )
    );
    setEditingNews(null);
  };

  const handleDeleteNews = (id) => {
    setNews(news.filter((article) => article.id !== id));
  };

  return (
    <div className="flex h-screen overflow-hidden bg-white">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        pages={pages}
        news={news}
      />
      <main className="w-full overflow-y-scroll pretty-scroll p-8">
        <Tabs value={activeTab}>
          <TabsContent value="pages">
            <h2 className="text-2xl font-bold mb-4">Pages</h2>
            <PageList />
          </TabsContent>
          <TabsContent value="new">
            <h2 className="text-2xl font-bold mb-4">Create New Page</h2>
            <NewPageForm onSubmit={handleNewPage} />
          </TabsContent>

          <TabsContent value="news">
            <h2 className="text-2xl font-bold mb-4">News Management</h2>
            <div className="mt-8 mb-8">
              <h3 className="text-xl font-semibold mb-4">
                Existing News Articles
              </h3>
              <NewsList
                news={news}
                onEdit={handleEditNews}
                onDelete={handleDeleteNews}
              />
            </div>
            {editingNews ? (
              <>
                <h3 className="text-xl font-semibold mb-4">
                  Edit News Article
                </h3>
                <NewsForm
                  // onSubmit={handleUpdateNews}
                  initialData={editingNews}
                />
              </>
            ) : (
              <>
                <h3 className="text-xl font-semibold mb-4">Add New</h3>
                <NewsForm onSubmit={handleAddNews} />
              </>
            )}
          </TabsContent>
          <TabsContent value="analytics">
            <h2 className="text-2xl font-bold mb-4">Analytics</h2>
            <Analytics />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
