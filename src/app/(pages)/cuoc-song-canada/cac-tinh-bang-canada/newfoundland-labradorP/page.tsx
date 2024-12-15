import { CardWithImage } from "@/components/ui/card-with-image";
import Container from "@/components/ui/container";
import { CTADefault, CTAWithImage } from "@/components/ui/cta";
import Title from "@/components/ui/Title";
import Glass from "@/lib/helpers";
import React from "react";

export default function NewfoundlandLabradorP() {
  return (
    <>
      <Container>
        <Glass>
          <Title
            title={"St. John's"}
            subtitle="Newfoundland and Labrador"
            description={
              "St. John's là một trong những thành phố lâu đời nhất Bắc Mỹ, nằm ở phía đông của Canada. St. John's là trung tâm thương mại và công nghiệp của đảo Newfoundland, với cảng biển lớn và cũng là trung tâm đánh cá chính của tỉnh. Những ngành công nghiệp đa dạng của thành phố bao gồm đánh cá, nấu rượu bia, thuộc da, sản xuất quần áo, động cơ hàng hải, sơn và nội thất."
            }
          />
        </Glass>
      </Container>
      <Container>
        <CTAWithImage
          title={"Hệ Thống Giáo Dục"}
          subtitle={"New Foundland and Labrador"}
          description={
            <div className="flex flex-col gap-2 justify-start items-start">
              <p className="text-left">
                Hệ thống giáo dục tại Newfoundland và Labrador được chia thành
                các giai đoạn tiểu học, trung học cơ sở, và trung học phổ thông,
                bắt đầu từ lúc học sinh 5 tuổi và thường kết thúc lúc học sinh
                lên 17 tuổi. Hầu hết học sinh trong tỉnh là một phần của hệ
                thống trường công được tài trợ bởi tỉnh, với một số học sinh lựa
                chọn học một trong bồn trường tư thúc trong tỉnh. Các trường tại
                Newfoundland và Labrador thường được giảng dạy chính bằng tiếng
                Anh (với chỉ 5 trường Pháp ngữ), nhưng nhiều trường tiếng Anh có
                cung cấp chương trình học tiếng Pháp.
              </p>
            </div>
          }
          image="newfoundland-a"
        />
        <CTAWithImage
          flip={true}
          title={"Memorial University of Newfoundland"}
          subtitle={"Newfoundland and Labrador"}
          description={
            <div className="flex flex-col gap-2 justify-start items-start">
              <p className="text-left">
                Là trường đại học duy nhất tại Newfoundland, Memorial University
                là một trường đại học được công nhận tại Canada, đứng hàng đầu
                nước trong lĩnh vực kỹ sư hải dương và sinh học hải dương. Khuôn
                viên của Memorial University bao gồm các trung tâm nghiên cứu về
                tài nguyên đại dương, lịch sử hàng hải và kinh tế chính trị.
              </p>
            </div>
          }
          image="newfoundland-b"
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
        image={"service"}
      />
    </>
  );
}
const maniConfig = [
  {
    id: 1,
    image: "/province/newfoundland/a.png",
    title: "Historic Site",
    description: "Signal Hill National Historic Site",
  },
  {
    id: 2,
    image: "/province/newfoundland/b.png",
    title: "Lighthouse",
    description: "Cape Spear Lighthouse",
  },
  {
    id: 3,
    image: "/province/newfoundland/c.png",
    title: "Lighthouse",
    description: "Cape Spear Lighthouse",
  },
  {
    id: 4,
    image: "/province/newfoundland/d.png",
    title: "Meadows",
    description: "L'Anse aux Meadows, Newfoundland",
  },
  {
    id: 5,
    image: "/province/newfoundland/e.png",
    title: "Meadows",
    description: "L'Anse aux Meadows",
  },
  {
    id: 6,
    image: "/province/newfoundland/f.png",
    title: "National Park",
    description: "Gros Morne National Park",
  },
  {
    id: 7,
    image: "/province/newfoundland/g.png",
    title: "National Park",
    description: "Torngat Mountains National Park",
  },
  {
    id: 8,
    image: "/province/newfoundland/h.png",
    title: "Island",
    description: "Fogo Island, Newfoundland",
  },
];
