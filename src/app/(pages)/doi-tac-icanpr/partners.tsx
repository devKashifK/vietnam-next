import Container from "@/components/ui/container";
import { CTADefault } from "@/components/ui/cta";
import Title from "@/components/ui/Title";
import Glass from "@/lib/helpers";
import React from "react";

export default function Partners() {
  return (
    <div>
      <Container>
        <Glass className="flex flex-col gap-6">
          <Title
            title="Study Abroad"
            subtitle="iCANPR"
            description="Khi nói đến du học, Canada là một trong những điểm đến hàng đầu với hệ thống giáo dục đẳng cấp thế giới và môi trường sống an toàn, thân thiện. Để mang đến cơ hội học tập tốt nhất cho sinh viên quốc tế, chúng tôi không ngừng tìm kiếm và xây dựng các mối quan hệ đối tác là các trường, cơ sở đào tạo uy tín."
          />
          <div className="h-56 overflow-y-auto pretty-scroll">
            {patnersConfig.map((partner, index) => (
              <div
                className="py-1 px-2 border border-background/60 text-left"
                key={index}
              >
                {partner}
              </div>
            ))}
          </div>
        </Glass>
      </Container>
      <CTADefault
        image="/service.jpg"
        subtitle="Chúng tôi có thể giúp bạn"
        description={
          <div className="flex flex-col gap-2 mt-4">
            <p className="text-lg text-white">
              iCan PR hiểu rằng di trú/ định cư tại Canada là một hành trình
              nhiều thay đổi và thách thức. Mục tiêu và nhiệm vụ của chúng tôi
              trở thành đối tác đáng tin cậy của bạn trong hành trình này.
            </p>
            <p className="text-lg text-white">
              Chúng tôi mong muốn giúp bạn hiện thực hóa ước mơ định cư Canada,
              sẳn sàng chào đón những cơ hội mới tại đây.
            </p>
          </div>
        }
      />
    </div>
  );
}

const patnersConfig = [
  "Acadia University",
  "Portage College",
  "Acsenda School of Management",
  "Selkirk College",
  "College of Rockies",
  "Seneca College",
  "Conestoga College",
  "St. Clair College",
  "Durham College",
  "Suncrest College",
  "Eton College",
  "Taylor Pro College",
  "Fleming College Toronto",
  "Toronto School of Management",
  "Georgian College",
  "Trent University",
  "Lakeland College",
  "Trinity Western University",
  "Niagara College Toronto",
  "University Canada West",
  "Nipissing University",
  "Wilfrid Laurier University",
  "Northern Lights College",
];
