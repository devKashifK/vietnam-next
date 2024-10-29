import Container from "@/components/ui/container";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import Title from "@/components/ui/Title";

import React from "react";

export default function Page() {
  return (
    <>
      <Container className="flex flex-col py-10 gap-10">
        <Title title="Worker Permit" subtitle="Work in Canada" />

        <div className="h-max relative p-6    grid grid-cols-1  lg:grid-cols-3  items-center justify-center ">
          {dummyWorkerPermit.map((item, index) => (
            <DirectionAwareHover
              imageUrl={item.url}
              key={item.id}
              className="p-8 rounded-lg "
            >
              <p className="font-bold text-xl">{item.title}</p>
              <p className="font-normal text-sm">{item.title2}</p>
            </DirectionAwareHover>
          ))}
        </div>
      </Container>

      <Container className="flex flex-col py-10 gap-10">
        <Title title="SINP Nomination" subtitle="PNP" />

        <div className="h-max relative p-6   grid grid-cols-1  lg:grid-cols-3  items-center justify-center ">
          {dummysinp.map((item, index) => (
            <DirectionAwareHover
              imageUrl={item.url}
              key={item.id}
              className="p-8 rounded-lg "
            >
              <p className="font-bold text-xl">{item.title}</p>
              <p className="font-normal text-sm">{item.title2}</p>
            </DirectionAwareHover>
          ))}
        </div>
      </Container>
      <Container className="flex flex-col py-10 gap-10">
        <Title
          title="Study Visa, Study Permit, Study Permit Extension"
          subtitle="STUDY IN CANADA"
        />

        <div className="h-max relative p-6   grid grid-cols-1  lg:grid-cols-3  items-center justify-center ">
          {dummystudy.map((item, index) => (
            <DirectionAwareHover
              key={index}
              imageUrl={item.url}
              className="p-8 rounded-lg "
            >
              <p className="font-bold text-xl">{item.title}</p>
              <p className="font-normal text-sm">{item.title2}</p>
            </DirectionAwareHover>
          ))}
        </div>
      </Container>
      <Container className="flex flex-col py-10 gap-10">
        <Title
          title="PEI Nomination and Visitor Visa"
          subtitle="PNP AND VISITOR VISA"
        />

        <div className="h-max relative p-6   grid grid-cols-1  lg:grid-cols-3  items-center justify-center ">
          {dummypinpVisitor.map((item, index) => (
            <DirectionAwareHover
              imageUrl={item.url}
              key={item.id}
              className="p-8 rounded-lg "
            >
              <p className="font-bold text-xl">{item.title}</p>
              <p className="font-normal text-sm">{item.title2}</p>
            </DirectionAwareHover>
          ))}
        </div>
      </Container>
    </>
  );
}
const dummystudy = [
  {
    id: 1,
    url: "/customers/WorkPermit21.jpg",
    title: "STUDY VISA",
    title2: "2024-04-18 Study Permit Extension Approval",
  },
  {
    id: 2,
    url: "/customers/WorkPermit22.png",
    title: "STUDY VISA",
    title2: "2024-12-02 Study permit extension",
  },
  {
    id: 3,
    url: "/customers/WorkPermit23.jpg",
    title: "STUDY VISA",
    title2: "2024-03-21 Indian Client Study Permit Approval",
  },
  {
    id: 4,
    url: "/customers/WorkPermit24.jpg",
    title: "STUDY VISA",
    title2: "2023-12-14 Indian Client",
  },
];

const dummypinpVisitor = [
  {
    id: 1,
    url: "/customers/WorkPermit7.jpg",
    title: "PEI Nomination",
    title2: "2024-05-14 Vietnamese client",
  },
  {
    id: 2,
    url: "/customers/WorkPermit24.jpg",
    title: "Visitor Visa",
    title2: "2024-01-30 Visitor Visa Approval",
  },
];

const dummysinp = [
  {
    id: 1,
    url: "/customers/WorkPermit8.jpg",
    title: "SINP Nomination",

    title2: "2024-05-14 Nepal client",
  },
  {
    id: 2,
    url: "/customers/WorkPermit9.jpg",
    title: "SINP Nomination",

    title2: "2024-05-14 Zimbabwe client",
  },
  {
    id: 3,
    url: "/customers/WorkPermit10.jpg",
    title: "SINP Nomination",

    title2: "2024-05-14 India client",
  },
  {
    id: 4,
    url: "/customers/WorkPermit11.jpg",
    title: "SINP Nomination",

    title2: "2024-21-02 Indian client",
  },
  {
    id: 5,
    url: "/customers/WorkPermit12.jpg",
    title: "SINP Nomination",

    title2: "2024-01-25 Philippines Client",
  },
  {
    id: 6,
    url: "/customers/WorkPermit13.jpg",
    title: "SINP Nomination",

    title2: "2024-01-19 Indian Client",
  },
  {
    id: 7,
    url: "/customers/WorkPermit14.jpg",
    title: "SINP Nomination",

    title2: "2023-09-24 Indian Client",
  },
  {
    id: 8,
    url: "/customers/WorkPermit15.jpg",
    title: "SINP Nomination",

    title2: "2023-11-13 Indian Client",
  },
  {
    id: 9,
    url: "/customers/WorkPermit16.jpg",
    title: "SINP Nomination",

    title2: "2023-12-11 Zimbabwe Client",
  },
  {
    id: 10,
    url: "/customers/WorkPermit17.jpg",
    title: "SINP Nomination",

    title2: "2023-11-28 Bangladesh Client",
  },
  {
    id: 11,
    url: "/customers/WorkPermit18.jpg",
    title: "SINP Nomination",

    title2: "2023-11-20 Indian Client",
  },
  {
    id: 12,
    url: "/customers/WorkPermit19.jpg",
    title: "SINP Nomination",

    title2: "2023-10-12 Nepal Client",
  },
  {
    id: 13,
    url: "/customers/WorkPermit20.jpg",
    title: "SINP Nomination",
    title2: "2024-01-15 Pakistan Client",
  },
];
const dummyWorkerPermit = [
  {
    id: 1,
    url: "/customers/WorkVisa1.jpeg",
    title: "Work Permit",
    title2: "2024-02-12 Worker Visa for Singapore client",
  },
  {
    id: 2,
    url: "/customers/WorkPermit2.jpg",
    title: "Work Permit",
    title2: "2024-05-01 Work Permit – Bangladesh client",
  },
  {
    id: 3,
    url: "/customers/WorkPermit3.jpg",
    title: "Work Permit",
    title2: "2024-05-01 Work Permit – Bangladesh client",
  },
  {
    id: 4,
    url: "/customers/WorkPermit4.jpg",
    title: "Work Permit",
    title2: "09-05 2024 Zimbawa Client",
  },
  {
    id: 5,
    url: "/customers/WorkPermit5.jpg",
    title: "Work Permit",
    title2: "2024-05-14 Nepal client",
  },
  {
    id: 6,
    url: "/customers/WorkPermit6.jpg",
    title: "Work Permit",
    title2: "2024-05-14 Zimbabwe client",
  },
];
