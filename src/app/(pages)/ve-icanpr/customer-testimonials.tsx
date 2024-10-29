import Container from "@/components/ui/container";
import { CustomerTestimonialsCard } from "@/components/ui/CustomerTestimonialsCard";
import React from "react";
export default function CustomerTestimonials() {
  return (
    <Container className="flex flex-col py-20 gap-14">
      {testimonial.map((item, index) => (
        <CustomerTestimonialsCard
          key={item.id}
          id={item.id}
          name={item.name}
          rating={item.rating}
          description={item.description}
        />
      ))}
    </Container>
  );
}
const testimonial = [
  {
    id: 1,
    name: "CH.DIVYA TEJA",
    description:
      "I am incredibly pleased to share my exceptional experience with GTR Immigration inc. As someone navigating the complex and often overwhelming process of immigration, their services have been an absolute game-changer .From the very beginning, demonstrated an impressive level of expertise and professionalism. Their team of consultants possesses an indepth understanding of immigration regulations, policies, and procedures, which immediately put my mind at ease. They not only guided me through every step of the process but also provided invaluable insights and strategic advice that proved instrumental in making informed decisions. One of the standout qualities of is their personalized approach. They took the time to understand my unique circumstances, aspirations, and concerns. This level of individual attention ensured that the solutions they offered were tailor-made to align perfectly with my goals .Communication was seamless and transparent throughout the entire journey. I never felt alone or in the dark, thanks to their consistent updates and willingness to address any queries I had promptly. It&apos;s evident that they prioritize client satisfaction and go the extra mile to ensure a smooth and stress-free experience. In conclusion, I wholeheartedly recommend to anyone seeking expert guidance and support in their immigration journey. Their expertise, personalized approach, and commitment to client satisfaction set them apart as a trusted partner in making dreams come true. With by your side, you&apos;re not just a client you&apos;re a step closer to a brighter future.",
    rating: 5,
  },
  {
    id: 2,
    name: "NEE NAY",
    description:
      "Superb experience!! I am very grateful for all the hard work GTR Immigration did on my file .I strongly recommend GTR Immigration to all because they are helpful, professional and their work is very detailed. I really like that client satisfaction is most important thing for them . Thank you for bringing me and family to Canada!! Really love your service !!! Aaron",
    rating: 5,
  },
  {
    id: 3,
    name: "SHAIJEEV MUTHAPPAN",
    description:
      "Thank you for your excellent service. The team is extremely professional and supportive on every step from documentation to PR processing. after I arrived in Regina SK I met a lot of people who used your consultancy service. your consultancy service is highly rated. during this, I had a wonderful experience with your team all are efficient. I highly recommend GreenTech to my friends who are looking for an excellent immigration consultant",
    rating: 5,
  },
  {
    id: 4,
    name: "VIKY DAIZ",
    description:
      "Work with GreenTech Resources Worldwide Canada is the best decision that i could took. They helped me with all the process until i got my Pr approved a couple of days ago, me and all my family are so grateful with them. I know that all this process could be scary but they are the best option.",
    rating: 5,
  },
  {
    id: 5,
    name: "ALMON SHARMA",
    description:
      "I would like to thank manoj and his staff for helping me out throughout my permanent residence journey. Their staff were really helpful and professionally handled the process. I would recommend everyone needing any professional immigration services to reach out to these folks as they know what they are doing. Thanks again guys.",
    rating: 5,
  },
  {
    id: 6,
    name: "RENELA KONDAPALLI",
    description:
      "My experience with GreenTech Resources Worldwide Canada is absolutely wonderful. Thank you Mr Manoj and team for your excellent service. I would recommend GreenTech to everyone those who need help with visas",
    rating: 5,
  },
  {
    id: 5,
    name: "ALMON SHARMA",
    description:
      "I would like to thank manoj and his staff for helping me out throughout my permanent residence journey. Their staff were really helpful and professionally handled the process. I would recommend everyone needing any professional immigration services to reach out to these folks as they know what they are doing. Thanks again guys.",
    rating: 5,
  },
];
