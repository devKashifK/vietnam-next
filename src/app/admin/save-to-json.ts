import { supabase } from "../../supabaseClient";

// const data = {
//   title: "sdc",
//   description: "rfc",
//   url: "https://www.rfce.com",
//   section: [
//     {
//       type: "hero",
//       design: "hero1",
//       content: {
//         title: "vdfsvd",
//         description: "svfv",
//         buttonText: "svfdvdv",
//       },
//     },
//     {
//       type: "cards",
//       design: "HoverCard",
//       content: {
//         cards: [
//           {
//             title: "acsdc",
//             description: "scds",
//             icon: "ic:baseline-account-balance-wallet",
//           },
//           {
//             title: "scdc",
//             description: "scdcs",
//             icon: "",
//           },
//         ],
//       },
//     },
//     {
//       type: "cta",
//       design: "cta1",
//       content: {
//         title: "sdcds",
//         description: "dcsd",
//         buttonText: "svcdsc",
//       },
//     },
//     {
//       type: "cards",
//       design: "CardWithImage",
//       content: {
//         cards: [
//           {
//             title: "dscs",
//             description: "acsdc",
//             icon: "",
//           },
//         ],
//       },
//     },
//   ],
// };

export function saveToJSOn(data) {
  console.log(data, "checkingData");

  const transformedSections = [];

  data.sections.forEach((section) => {
    const { design, content, type } = section;

    // If content has an array (like "cards"), render each item as a separate component
    if (content.cards && Array.isArray(content.cards)) {
      console.log(content, "checkingContentCards");
      const cards = content.cards.map((card) => ({
        component: design.charAt(0).toUpperCase() + design.slice(1), // PascalCase the design name
        props: card, // Use individual card as props
      }));

      // Wrap cards in Container component
      transformedSections.push({
        component: "Container",
        title: content.title,
        subtitle: content.subtitle,
        description: content.description,
        props: {
          children: cards,
        },
      });
    } else {
      // Handle non-array content (like hero or cta)
      const sectionComponent = {
        component: design.charAt(0).toUpperCase() + design.slice(1),
        props: content,
      };

      // Wrap in Container only if the section is not a hero
      if (type !== "hero" && type !== "cta") {
        transformedSections.push({
          component: "Container",
          props: {
            children: [sectionComponent],
          },
        });
      } else {
        transformedSections.push(sectionComponent);
      }
    }
  });

  return {
    title: data.title,
    description: data.description,
    slug: data.slug,
    image: data.image,
    sections: transformedSections,
  };
}

export async function saveToDatabase(data) {
  const transformedData = saveToJSOn(data);

  const { data: insertedData, error } = await supabase.from("pages").insert([
    {
      name: transformedData.title,
      description: transformedData.description,
      slug: transformedData.slug,
      image: transformedData.image,
      content: JSON.stringify(transformedData.sections),
      url: data.url,
    },
  ]);

  if (error) {
    console.error("Error inserting data:", error);
  } else {
    console.log("Data inserted successfully:", insertedData);
  }
}
