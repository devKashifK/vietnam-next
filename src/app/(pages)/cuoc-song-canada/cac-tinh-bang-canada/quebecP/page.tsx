import { CardWithImage } from "@/components/ui/card-with-image";
import Container from "@/components/ui/container";
import { CTADefault, CTAWithImage } from "@/components/ui/cta";
import Title from "@/components/ui/Title";
import Glass from "@/lib/helpers";
import React from "react";

export default function QuebecP() {
  return (
    <>
      <Container>
        <Glass>
          <Title
            title={"Montréal"}
            subtitle={"Québec"}
            description={
              "Thành phố Montreal, thành phố lớn nhất Quebec, nằm trên một hòn đảo trên sông Saint Lawrence. Với lịch sử phong phú của thành phố, những con đường tại trung tâm lịch sử được gọi là Old Montreal mang một góc nhìn vào kiến trúc và đường xá từ thế kỷ 16 tới nay. Hầu hết người dân sống tại Montreal là người Canada gốc Pháp, và nó được cho là thành phố nói tiếng Pháp lớn thứ hai thế giới. Hiện nay, Montreal đã thành điểm đến của nhiều người nhập cư, và đã trở thành một trong những thành phố quốc tế nhất Bắc Mỹ."
            }
          />
        </Glass>
      </Container>
      <Container>
        <CTAWithImage
          title={"Hệ Thống Giáo Dục"}
          subtitle={"Quebec"}
          description={
            <div className="flex flex-col gap-2 justify-start items-start">
              <p className="text-left">
                Tất cả học sinh trường công ở các cấp mầm non, tiểu học, và
                trung học tại Quebec đều được giảng dạy bằng tiếng Pháp, với
                ngoại lệ cho các học sinh đủ điều kiện để học tiếng Anh. Cả
                tiếng Anh và tiếng Pháp đều được sử dụng ở cấp đại học và cao
                đẳng, với ngôn ngữ giảng dạy tuỳ thuộc vào ngôn ngữ hoạt động
                của trường.
              </p>
            </div>
          }
          image="quebec-a"
        />
        <CTAWithImage
          flip={true}
          title={"McGill University"}
          subtitle={"Québec"}
          description={
            <div className="flex flex-col gap-2 justify-start items-start">
              <p className="text-left">
                McGill University là đại học đứng top 2 Canada và top 30 thế
                giới, theo bảng xếp hạng QS World Rankings. Là một đại học
                nghiên cứu chuyên sâu, McGill có hơn 50 trung tâm nghiên cứu và
                hơn 400 chương trình khác nhau. Là đại học y khoa hàng đầu
                Canada, đạt được hạng nhất trong bảng xếp hạng theo ngành của
                MacLeans, McGill University được biết đến về các ngành trong
                những lĩnh vực y khoa, sinh học, và hoá học. Ngoài ra, McGill
                cũng có một trong những chương trình đứng hàng đầu nước và thế
                giới trong các ngành luật, kỹ thuật, công nghệ thông tin, và
                nghệ thuật và nhân văn.
              </p>
            </div>
          }
          image="quebec-b"
        />
        <CTAWithImage
          title={"Université de Montréal"}
          subtitle={"Québec"}
          description={
            <div className="flex flex-col gap-2 justify-start items-start">
              <p className="text-left">
                Université de Montréal (UdeM) được giảng dạy hoàn toàn bằng
                tiếng Pháp, và là đại học nghiên cứu lớn nhất tỉnh, thành viên
                của nhóm U15 Đại Học Nghiên Cứu Canada. Đạt được hạng 111 trên
                bảng xếp hạng thế giới của Times Higher Education, UdeM là một
                trong những trường dẫn đầu trong các lĩnh vực khoa học máy tính,
                luật, y khoa, kinh doanh và tài chính, và giáo dục.
              </p>
            </div>
          }
          image="quebec-a"
        />
      </Container>
      <Container>
        <Glass>
          <Title
            title={"Québec City"}
            subtitle="Québec"
            description={
              "Thành phố Quebec, thủ phủ của tỉnh Quebec, là thành phố lâu đời được thành lập vào năm 1608. Lịch sử lâu dài của thành phố đã được khắc sâu vào những kiến trúc cổ xưa và những con đường được lấp đá, mang theo dấu vết mà tổ tiên người Pháp để lại. Theo lời của Charles Dickens vào năm 1842, thành phố Quebec, với kiến trúc và phong cảnh của nó, chính là “Gibraltar của Bắc Mỹ”. Ngoài việc là một điểm thu hút du lịch, Quebec còn là một trung tâm hành chính và thành phố cảng dành cho thương mại xuyên Đại Tây Dương."
            }
          />
        </Glass>
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
    image: "/province/quebec/a.png",
    title: "Quebec City",
    description: "Khách Sạn Fairmont Le Châtaeu Frontenac, Québec City",
  },
  {
    id: 2,
    image: "/province/quebec/b.png",
    title: "Garden",
    description: "Montréal Botanical Garden",
  },
  {
    id: 3,
    image: "/province/quebec/c.png",
    title: "Park",
    description: "Mount Royal Park, Montréal",
  },
  {
    id: 4,
    image: "/province/quebec/d.png",
    title: "Montreal",
    description: "Old Montréal",
  },
  {
    id: 5,
    image: "/province/quebec/e.png",
    title: "Basilica",
    description: "Notre-Dame Basilica of Montreal",
  },
  {
    id: 6,
    image: "/province/quebec/f.png",
    title: "Montreal",
    description: "Notre-Dame Basilica of Montréal",
  },
  {
    id: 7,
    image: "/province/quebec/g.png",
    title: "Montreal",
    description: "Musée des beaux-arts de Montréal",
  },
  {
    id: 8,
    image: "/province/quebec/h.png",
    title: "Historic Site",
    description: "'The Thinker' trong Musée des beaux-arts de Montréal",
  },
];
