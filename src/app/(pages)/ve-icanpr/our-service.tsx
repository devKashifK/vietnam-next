import Container from "@/components/ui/container";
import { CTADefault } from "@/components/ui/cta";
import { ServicesCard } from "@/components/ui/services-card";
import Title from "@/components/ui/Title";
export default function OurService() {
  return (
    <Container className="flex flex-col py-20 gap-20">
      {/* <Title /> */}
      <Title
        //         subtitle="Our goal is to provide customers with the best service, for us to help customers
        // overcome their barriers and obtain Permanent Residensy in Canada"
        subtitle="We provide what"
        title={
          <p className="text-4xl text-black/50 w-full text-left">
            Recruitment, Immigration and Settlement Services
          </p>
        }
        to=""
      />
      <div className="grid  grid-cols-1 md:grid-cols-3 gap-8">
        {dummyservices.map((item, index) => (
          <ServicesCard
            id={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
      <CTADefault
        title="We Provide The Best Service"
        subtitle={
          <p className="text-4xl text-white/90">
            Book a session today and <br />
            start changing your life!
          </p>
        }
        image={"/service.jpg"}
      />
    </Container>
  );
}

export const dummyservices = [
  {
    id: 1,
    title: "Work in Canada",
    description:
      "Canada offers diverse work opportunities, fostering career growth and global experiences in a vibrant, welcoming country for skilled professionals and temporary workers.",
  },
  {
    id: 2,
    title: "Study in Canada",
    description:
      "Canada provides world-class education with diverse programs and cultural experiences, making it an ideal destination for international students.",
  },
  {
    id: 3,
    title: "Immigrate to Canada",
    description:
      "Canada's immigration policies welcome skilled workers, families, and refugees, offering a pathway to citizenship and a new life in a thriving nation.",
  },
  {
    id: 4,
    title: "Visit Canada",
    description:
      "Canada's stunning landscapes, vibrant cities, and friendly people make it a top destination for travelers seeking adventure, culture, and natural beauty.",
  },
  {
    id: 5,
    title: "Invest in Canada",
    description:
      "Canada's stable economy, skilled workforce, and innovation-friendly environment provide lucrative opportunities for investors and entrepreneurs.",
  },
  {
    id: 6,
    title: "Live in Canada",
    description:
      "Canada offers a high quality of life, excellent healthcare, and a safe, welcoming environment for families and individuals looking to settle.",
  },
];
