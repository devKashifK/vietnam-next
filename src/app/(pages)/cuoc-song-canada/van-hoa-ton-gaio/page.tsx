import { getDataBySlug } from "@/components/ui/dynamic-component";
import { DynamicComponent } from "@/components/ui/dynamic-component";

export async function getStaticProps() {
  // Fetch data during build time
  const pageData = await getDataBySlug("van-hoa-ton-gaio");

  if (!pageData) {
    return {
      notFound: true, // Return 404 if no data found
    };
  }

  return {
    props: {
      pageData,
    },
  };
}

export default function CultureReligion({ pageData }) {
  // Check if pageData and pageData.content are available
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
