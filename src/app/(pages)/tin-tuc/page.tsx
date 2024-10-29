"use client";
import Container from "@/components/ui/container";
import MovingCardBorder from "@/components/ui/moving-card-border";
import Glass from "@/lib/helpers";
import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./style.css";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

export default function News() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await supabase.from("news").select("content");
        if (response.error) throw response.error;

        // Parse and sort data from newest to oldest based on &apos;Date&apos;
        const parsedData = response.data
          .map((row) => JSON.parse(row.content))
          .sort((a, b) => new Date(b.Date) - new Date(a.Date)); // Sort by date descending

        setData(parsedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <Container effect="none" className="w-[80%]">
      <VerticalTimeline layout={"2-columns"} className="w-full" animate>
        {data.map((item, index) => {
          const colors = ["#F2961B", "#007bff", "#28a745", "#ffc107"];
          const bgColor = colors[index % colors.length];
          const formattedDate = new Date(item.Date).toLocaleDateString(
            undefined,
            {
              year: "numeric",
              month: "long",
              day: "numeric",
            }
          );

          return (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--education"
              contentArrowStyle={{
                borderRight: `7px solid ${bgColor}`,
              }}
              date={formattedDate}
              contentStyle={{
                background: bgColor,
                color: "#fff",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
              }}
              iconStyle={{
                background: bgColor,
                color: "#fff",
              }}
              icon={
                <Icon icon={"material-symbols:compost"} className="w-5 h-5" />
              }
            >
              <Link
                href={`/tin-tuc/${item.ID}`}
                className="flex w-full flex-col"
              >
                <div className="flex gap-2 flex-col group">
                  <h3 className="text-left text-2xl tracking-wide">
                    {item.Title}
                  </h3>
                  <p className="text-left !text-xs text-white/90 tracking-wider">
                    {item.Content
                      ? item.Content.slice(0, 100)
                      : "No content available"}{" "}
                    <span className="text-black group-hover:underline">
                      Read More
                    </span>
                  </p>
                </div>

                <div className="flex w-full justify-between items-center gap-2 mt-4">
                  <div className="flex gap-2 items-center">
                    {item.Categories?.split(",").map((category, index) => (
                      <Badge key={index}>{category}</Badge>
                    ))}
                  </div>
                  <div className="flex justify-start items-center">
                    <p className="font-primary tracking-widest">
                      Author:{" "}
                      <span className="font-secondary text-white/90 tracking-normal">
                        {item["Author First Name"]} {item["Author Last Name"]}
                      </span>
                    </p>
                  </div>
                </div>
              </Link>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </Container>
  );
}
