import Container from "@/components/ui/container";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import Title from "@/components/ui/Title";
import React from "react";
export default function CertificateMembership() {
  return (
    <Container className="flex flex-col py-20 gap-20">
      <Title title="Certificate and Membership" />
      <div className="">
        <div className="h-max md:h-[75rem] relative p-6 gap-x-16  grid-cols-1  grid md:grid-cols-3  items-center justify-center ">
          {dummyCertificate.map((item, index) => (
            <DirectionAwareHover
              imageUrl={item.url}
              key={item.id}
              className="w-full p-8 rounded-lg "
            >
              <p className="font-bold text-xl">{item.title}</p>
              {/* <p className="font-normal text-sm"></p> */}
            </DirectionAwareHover>
          ))}
        </div>
      </div>
    </Container>
  );
}
export const dummyCertificate = [
  {
    id: 1,
    url: "/certifications/certificate1.jpg",
    title: "Change Management Certificate",
  },
  {
    id: 2,
    url: "/certifications/certificate2.jpg",
    title: "Canadian Risk Management",
  },
  {
    id: 3,
    url: "/certifications/certificate3.jpg",
    title: "Six Sigma Green Belt Certification",
  },
  {
    id: 4,
    url: "/certifications/certificate4.jpg",
    title: "Lean Management Certification",
  },
  {
    id: 5,
    url: "/certifications/certificate5.jpg",
    title: "ISM CPSM",
  },
  {
    id: 6,
    url: "/certifications/certificate6.jpg",
    title: "SCMP – Manoj Goswami Certificate",
  },
  {
    id: 7,
    url: "/certifications/certificate7.jpg",
    title: "Risk Management",
  },
  {
    id: 8,
    url: "/certifications/certificate8.jpg",
    title: "Project Management",
  },
  {
    id: 9,
    url: "/certifications/certificate9.jpg",
    title: "Saskatchewan Institute of Agrology",
  },
];
