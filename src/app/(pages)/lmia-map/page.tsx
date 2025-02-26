// import NewsShowcase from "../../news.tsx/news-showcase";

// import { getDataBySlug } from "@/components/ui/dynamic-component";
// import { DynamicComponent } from "@/components/ui/dynamic-component";
// import { use } from "react";

// export default function Lmia({ slug }) {
//   const pageData = use(getDataBySlug("lmia-map"));

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

export default function Lmia() {
  return (
    <div>
      <iframe
        src="https://app.powerbi.com/view?r=eyJrIjoiOGMxMThiMGYtNDRmMi00MzU1LThiNTItYWNjNzFkYzYyOTA0IiwidCI6Ijg5ZTUzNjdhLTQ4ZTUtNGQzYy05ZTEzLWZmNTA4OTZlNDJlMCJ9"
        width="100%"
        height="600px"
        frameBorder="0"
        allowFullScreen={true}
        title="Power BI Report"
      ></iframe>
    </div>
  );
}
