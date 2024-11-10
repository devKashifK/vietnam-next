import { getDataBySlug } from "@/components/ui/dynamic-component";
import { DynamicComponent } from "@/components/ui/dynamic-component";
import React from "react";

export default async function EnvCanada({ slug }) {
  try {
    const pageData = await getDataBySlug("moi-truong-canada");

    // Validate that pageData exists and has the expected structure
    if (!pageData || !pageData.content || !Array.isArray(pageData.content)) {
      console.error("Invalid page data structure:", pageData);
      return <p>No components to display</p>;
    }

    return (
      <div className="flex flex-col gap-10">
        {pageData.content.map((componentData, index) => (
          <DynamicComponent key={index} data={componentData} />
        ))}
      </div>
    );
  } catch (error) {
    console.error("Failed to load page data:", error);
    return <p>Something went wrong while loading the content.</p>;
  }
}
