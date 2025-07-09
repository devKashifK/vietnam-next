import React, { useEffect, useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './tabs';
import { NewsFeedCard } from './newsCard';
import { Icon } from '@iconify/react';
import Container from './container';

const CATEGORIES = [
  { label: 'Tất cả', value: 'all' },
  { label: 'Câu chuyện thành công', value: 'success' },
  { label: 'Sự kiện', value: 'event' },
  { label: 'Sự kiện nổi bật', value: 'highlight' },
  { label: 'Tin định cư', value: 'settlement' },
  { label: 'Tin du học', value: 'study' },
];

export default function NewsShowcase() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('study'); // Default to 'Tin du học' as in screenshot
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('all');

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          'https://icanpr.vn/wp-json/wp/v2/posts?per_page=30&orderby=date&order=desc&_embed'
        );
        if (!response.ok) throw new Error('Failed to fetch news');
        const posts = await response.json();
        const formatted = posts.map((post) => ({
          id: post.id,
          title: post.title.rendered,
          subTitle: post.excerpt.rendered,
          content: post.excerpt.rendered,
          author: post.author,
          date: post.date,
          slug: post.slug,
          image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/default.jpg',
          categories: post.categories || [],
          categoryNames: post._embedded?.['wp:term']?.[0]?.map((cat) => cat.name) || [],
        }));
        setNews(formatted);
      } catch (e) {
        setNews([]);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  // Map tab value to category name for filtering
  const categoryMap = {
    all: null,
    success: 'Câu chuyện thành công',
    event: 'Sự kiện',
    highlight: 'Sự kiện nổi bật',
    settlement: 'Tin định cư',
    study: 'Tin du học',
  };

  const filteredNews = news.filter((item) => {
    if (activeTab === 'all') return true;
    // Try to match category name
    return item.categoryNames.some((cat) =>
      cat.toLowerCase().includes(categoryMap[activeTab]?.toLowerCase() || '')
    );
  }).filter((item) => {
    if (!search) return true;
    return (
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.subTitle.toLowerCase().includes(search.toLowerCase())
    );
  }).slice(0, 6); // Only show 6 cards per category

  return (
    <Container effect='bg' className="w-full max-w-[1400px] mx-auto px-2 md:px-8">
      <h1 className="text-4xl md:text-5xl font-bold text-left text-highlight mb-2 mt-4">Tin tức khác</h1>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="bg-transparent p-0 gap-3 border-b border-gray-200 rounded-none border-none">
            {CATEGORIES.map((cat) => (
              <TabsTrigger
                key={cat.value}
                value={cat.value}
                className="relative px-3 py-2 text-base font-medium border-b text-black data-[state=active]:text-white  data-[state=active]:border-highlight bg-transparent rounded-none"
              >
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        
      </div>
      <Tabs value={activeTab}>
        {CATEGORIES.map((cat) => (
          <TabsContent key={cat.value} value={cat.value}>
            {loading ? (
              <div className="min-h-[400px] flex items-center justify-center">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 border-4 border-primary/20 rounded-full relative">
                    <div className="w-12 h-12 border-4 border-[#B33D3D] border-t-transparent rounded-full animate-spin absolute top-0 left-0" />
                  </div>
                  <span className="text-[#B33D3D] font-medium">Đang tải tin tức...</span>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredNews.length === 0 ? (
                  <div className="col-span-full text-center text-gray-400 py-20 text-lg">Không có tin tức phù hợp.</div>
                ) : (
                  filteredNews.map((item) => (
                    <NewsFeedCard
                      key={item.id}
                      image={item.image}
                      title={item.title}
                      subTitle={item.subTitle}
                      date={new Date(item.date).toLocaleDateString('vi-VN')}
                      description={item.content}
                      id={item.id}
                      slug={item.slug}
                      variant="showcase" // Pass a prop to style the card for showcase
                    />
                  ))
                )}
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </Container>
  );
}
