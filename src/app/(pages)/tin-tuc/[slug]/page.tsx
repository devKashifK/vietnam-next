"use client";
import Container from "@/components/ui/container";
import Glass from "@/lib/helpers";
import { Badge } from "lucide-react";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import "./style.css";
import { LoadingAnimation } from "../page";

export default function Post() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [mediaUrl, setMediaUrl] = useState("/default.jpg"); // Default image
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `https://icanpr.vn/wp-json/wp/v2/posts?slug=${slug}`
        );
        if (!response.ok) throw new Error("Failed to fetch post");

        const data = await response.json();
        const postData = data[0]; // API returns an array
        setPost(postData);

        // Fetch the featured image
        if (postData?.featured_media) {
          const mediaResponse = await fetch(
            `https://icanpr.vn/wp-json/wp/v2/media/${postData.featured_media}`
          );
          if (mediaResponse.ok) {
            const mediaData = await mediaResponse.json();
            setMediaUrl(mediaData.source_url);
          }
        }
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) return <LoadingAnimation />;
  if (!post) return <div>Post not found.</div>;

  const formattedDate = new Date(post.date).toLocaleDateString();

  return (
    <Container
      effect="none"
      className="text-left post flex gap-6 flex-row px-0"
    >
      <Glass className="w-full lg:w-[70%]   flex flex-col gap-8">
        <img
          src={mediaUrl}
          alt={post.title.rendered}
          style={{ width: "100%", height: "auto" }}
        />
        <div className="flex flex-col gap-8 px-4 lg:px-14 py-5">
          <div
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            className="text-sm dangerouHtml"
          />
          <div className="flex justify-between items-center w-full">
            <div className="flex gap-2">
              <Badge className="bg-yellow-400">{formattedDate}</Badge>
            </div>
          </div>
        </div>
      </Glass>
    </Container>
  );
}
