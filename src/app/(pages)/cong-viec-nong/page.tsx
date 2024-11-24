// import NewsShowcase from "../../news.tsx/news-showcase";

// import { getDataBySlug } from "@/components/ui/dynamic-component";
// import { DynamicComponent } from "@/components/ui/dynamic-component";
// import { use } from "react";

// export default function HotJob({ slug }) {
//   const pageData = use(getDataBySlug("hot-job"));

//   // Check if pageData and pageData.content are available
//   if (!pageData) return <p>Loading...</p>;
//   if (!pageData.content || !Array.isArray(pageData.content)) {
//     console.error("No content array found in pageData:", pageData); // Log error details
//     return <p>No components to display</p>;
//   }

//   return (
//     <div className="flex flex-col gap-10">
//       {pageData.content.map(
//         (componentData, index) => (
//           console.log(componentData, "componentData"),
//           (<DynamicComponent key={index} data={componentData} />)
//         )
//       )}
//     </div>
//   );
// }

import React from "react";

export default function CongViceNong() {
  return (
    <div>
      <div className="w-full px-4 ">
        <iframe
          title="GTR Sask Report_V1.3"
          width="100%"
          height="600px"
          src="https://app.powerbi.com/view?r=eyJrIjoiZDkwNGJlMjItODRlYi00YzExLWEwNzEtYTE4NGEwZDY2YzE1IiwidCI6Ijg5ZTUzNjdhLTQ4ZTUtNGQzYy05ZTEzLWZmNTA4OTZlNDJlMCJ9"
          frameborder="0"
          allowFullScreen={true}
        ></iframe>
      </div>
    </div>
  );
}
