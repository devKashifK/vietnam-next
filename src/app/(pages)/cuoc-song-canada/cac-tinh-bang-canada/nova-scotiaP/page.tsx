import { CardWithImage } from "@/components/ui/card-with-image";
import Container from "@/components/ui/container";
import { CTADefault, CTAWithImage } from "@/components/ui/cta";
import Title from "@/components/ui/Title";
import Glass from "@/lib/helpers";
import React from "react";

export default function NovaScotiaP() {
  return (
    <>
      <Container>
        <Glass>
          <Title
            title={"Halifax"}
            subtitle="Nova Scotia"
            description={
              "Halifax, Nova Scotia, là một thành phố được thành lập từ sự sáp nhập của thành phố Halifax, thành phố Dartmouth, thị trấn Bedford, và Halifax County Municipality. Halifax năm trên một trong những cảng tự nhiên không băng lớn nhất và sâu nhất thế giới, và qua thời gian đã trở thành một trong những cảng thương mại quan trọng nhất Canada trên bờ biển Đại Tây Dương."
            }
          />
        </Glass>
      </Container>
      <Container>
        <CTAWithImage
          title={"Hệ Thống Giáo Dục"}
          subtitle={"Northwest Territories"}
          description={
            <div className="flex flex-col gap-2 justify-start items-start">
              <p className="text-left">
                Giáo dục công lập tại Nova Scotia miễn học phí dành cho tất cả
                trẻ em học từ mẫu giáo tới lớp 12, với sự tài trợ của thuế và
                tỉnh. Các trường học hoạt động khoảng 5 tiếng một ngày, và được
                giảng dạy bằng hầu hết là tiếng Anh, với sự lựa chọn dành cho
                các học sinh muốn học tiếng Pháp. Tại Nova Scotia, tất cả trẻ em
                học Anh ngữ từ lớp 4 đến lớp 9 đều được học tiếng Pháp trong
                trường. Khi học trung học phổ thông, học sinh sẽ có lựa chọn học
                hoặc không học tiếng Pháp.
              </p>
            </div>
          }
          image="nova-a"
        />
        <CTAWithImage
          flip={true}
          title={"Dalhousie University"}
          subtitle={"Nova Scotia"}
          description={
            <div className="flex flex-col gap-2 justify-start items-start">
              <p className="text-left">
                Nằm trong nhóm U15 của Canada, Dalhousie University là một trong
                những đại học nghiên cứu chuyên sâu đứng đầu Canada. Dalhousie
                cung cấp hơn 200 chương trình đào tạo trong 13 khoa học khác
                nhau và đứng trong top 10 đất nước trong các lĩnh vực nông
                nghiệp và lâm nghiệp, sinh học, y học, y dược, khoa học trái
                đất, môi trường, đại lý, và luật.
              </p>
            </div>
          }
          image="nova-b"
        />
      </Container>

      <Container>
        <Title subtitle="Các Điểm Đến Nổi Tiếng" />
        <div className="flex  flex-wrap gap-5">
          {maniConfig.map((item) => (
            <CardWithImage
              image={item.image}
              title={item.title}
              key={item.id}
              description={item.description}
            />
          ))}
        </div>
      </Container>
      <CTADefault
        title="Chúng tôi có thể giúp bạn"
        subtitle={
          <p className="text-lg text-white/90">
            iCan PR hiểu rằng di trú/ định cư tại Canada là một hành trình nhiều
            thay đổi và thách thức.
            <br /> Mục tiêu và nhiệm vụ của chúng tôi trở thành đối tác đáng tin
            cậy của bạn trong hành trình này. Chúng tôi mong <br />
            muốn giúp bạn hiện thực hóa ước mơ định cư Canada, sẳn sàng chào đón
            những cơ hội mới tại đây.
          </p>
        }
        image={"/service.jpg"}
      />
    </>
  );
}
const maniConfig = [
  {
    id: 1,
    image: "/province/nova/a.png",
    title: "Town",
    description: "Truro Town",
  },
  {
    id: 2,
    image: "/province/nova/b.png",
    title: "Island",
    description: "Cape Breton Island",
  },
  {
    id: 3,
    image: "/province/nova/c.png",
    title: "Bay",
    description: "Bay of Fundy, Nova Scotia",
  },
  {
    id: 4,
    image: "/province/nova/d.png",
    title: "Three Sisters",
    description: "Three Sisters, Cape Chignecto Provincial Park",
  },
  {
    id: 5,
    image: "/province/nova/e.png",
    title: "Citadel",
    description: "Halifax Citadel National Historic Site",
  },
  {
    id: 6,
    image: "/province/nova/f.png",
    title: "Lunenberg",
    description: "Lunenberg, Nova Scotia",
  },
  {
    id: 7,
    image: "/province/nova/g.png",
    title: "Light House",
    description: "Peggys Cove Lighthouse",
  },
  {
    id: 8,
    image: "/province/nova/h.png",
    title: "Gardens",
    description: "Halifax Public Gardens",
  },
];
