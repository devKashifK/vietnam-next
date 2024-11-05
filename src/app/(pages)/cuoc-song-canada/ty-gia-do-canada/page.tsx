// import NewsShowcase from "../../news.tsx/news-showcase";

import { getDataBySlug } from "@/components/ui/dynamic-component";
import { DynamicComponent } from "@/components/ui/dynamic-component";
import { use } from "react";

export default function ExchangeRate({ slug }) {
  const pageData = use(getDataBySlug("ty-gia-do-canada"));

  // Check if pageData and pageData.content are available
  if (!pageData) return <p>Loading...</p>;
  if (!pageData.content || !Array.isArray(pageData.content)) {
    console.error("No content array found in pageData:", pageData); // Log error details
    return <p>No components to display</p>;
  }

  return (
    <div className="flex flex-col gap-10">
      {pageData.content.map(
        (componentData, index) => (
          console.log(componentData, "componentData"),
          (<DynamicComponent key={index} data={componentData} />)
        )
      )}
    </div>
  );
}
