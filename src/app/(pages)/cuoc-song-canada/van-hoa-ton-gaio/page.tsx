// Import your dynamic component and data fetching function
import { getDataBySlug } from "@/components/ui/dynamic-component";
import { DynamicComponent } from "@/components/ui/dynamic-component";

export default async function CultureReligion({ params }) {
  // Fetch the data for the page based on slug
  const pageData = await getDataBySlug("van-hoa-ton-gaio");

  // Check if pageData and pageData.content are available
  if (!pageData) return <p>Loading...</p>;
  if (!pageData.content || !Array.isArray(pageData.content)) {
    console.error("No content array found in pageData:", pageData); // Log error details
    return <p>No components to display</p>;
  }

  return (
    <div className="flex flex-col gap-10">
      {pageData.content.map((componentData, index) => (
        <DynamicComponent key={index} data={componentData} />
      ))}
    </div>
  );
}
