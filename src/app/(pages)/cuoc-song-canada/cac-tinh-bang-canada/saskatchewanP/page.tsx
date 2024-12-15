import { CardWithImage } from "@/components/ui/card-with-image";
import Container from "@/components/ui/container";
import { CTADefault, CTAWithImage } from "@/components/ui/cta";
import Title from "@/components/ui/Title";
import Glass from "@/lib/helpers";
import React from "react";

export default function SaskatchewanP() {
  return (
    <>
      <Container>
        <Glass>
          <Title
            title={"Saskatoon"}
            subtitle={"Saskatchewan"}
            description={
              "Thành phố Saskatoon ở tỉnh Saskatchewan lấy tên từ chữ Mis-sask-quah-toomina, tên của một loài dâu trong tiếng Cree. Là một thành phố lớn thuộc vùng phát triển nông nghiệp, Saskatoon là trung tâm phân phối và dịch vụ cho lúa mì, lúa mạch, yến mạch và các loại cây trồng khác. Khai thác khoáng sản cũng là một phần quan trọng của nền kinh tế Saskatoon, và khu vực này nằm trong số những nhà sản xuất uranium và kali hàng đầu thế giới."
            }
          />
        </Glass>
      </Container>
      <Container>
        <CTAWithImage
          title={"Hệ Thống Giáo Dục"}
          subtitle={"Saskatchewan"}
          description={
            <div className="flex flex-col gap-2 justify-start items-start">
              <p className="text-left">
                Theo luật lệ ở Saskatchewan, tất cả trẻ em từ 7-16 tuổi bắt buộc
                phải nhập học. Trường tiểu học hoạt động từ Mẫu giáo tới lớp 8,
                và trường trung học từ lớp 9 tới 12. Hệ thống trường công tại
                Saskatchewan hoàn toàn miễn phí dành cho công dân, người thường
                trú, và người tị nạn. Saskatoon Public Schools là hệ thống
                trường công lớn nhất Saskatchewan, nằm trong vùng của thành phố
                Saskatoon, với hơn 49 trường tiểu học và 10 trường trung học.
                Ngoài ra, Saskatchewan còn có 26 hệ thống trường khác, bao gồm
                cả hệ thống trường Công giáo và trường Pháp ngữ.
              </p>
            </div>
          }
          image="saskatchewan-b"
        />
        <CTAWithImage
          flip={true}
          title={"University of Saskatchewan"}
          subtitle={"Saskatchewan"}
          description={
            <div className="flex flex-col gap-2 justify-start items-start">
              <p className="text-left">
                University of Saskatchewan (USask) là một trường đứng top 17
                trong đất nước, và cũng là một thành viên của U15 Group, gồm các
                trường đại học nghiên cứu chuyên sâu ở Canada. USask là một
                trong những trường dẫn đầu thế giới về an ninh nước và lương
                thực, phát triển vắc-xin và các bệnh truyền nhiễm, cũng như sức
                khỏe con người, động vật và môi trường.
              </p>
            </div>
          }
          image="saskatchewan-a"
        />
      </Container>
      <Container>
        <Glass>
          <Title
            title={"Regina"}
            subtitle="Saskatchewan"
            description={
              "Thành phố Regina là thủ phủ của Saskatchewan, và cũng là trung tâm thương mại của miền nam tỉnh. Tên Regina, có nguồn gốc từ chữ Regina trong tiếng Latin mang nghĩa Nữ Hoàng, được đặt bởi Công Chúa Louise để tôn vinh Nữ Hoàng Victoria của Anh. Kể từ khu định cư ban đầu, có tên “Pile O' Bones” vào những năm 1800, thành phố Regina đã trở thành một khu đô thị giàu văn hoá, được biết đến vì những con đường rợp bóng cây, với sự đa dạng về nghệ thuật, văn hoá, cũng như nền kinh tế phát triển mạnh và các cơ hội làm việc tốt."
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
    image: "/province/saskat/a.png",
    title: "Conservatory Area",
    description: "Beaver Creek Conservatory Area, Saskatoon",
  },
  {
    id: 2,
    image: "/province/saskat/b.png",
    title: "Bassborough Hotel",
    description: "Khách Sạn Bessborough, Saskatoon",
  },
  {
    id: 3,
    image: "/province/saskat/c.png",
    title: "Valley",
    description: "Meewasin Valley",
  },
  {
    id: 4,
    image: "/province/saskat/d.png",
    title: "Museum",
    description: "Saskatoon Museum of Western Development",
  },
  {
    id: 5,
    image: "/province/saskat/e.png",
    title: "Saskatoon",
    description: "Optimist Hill, Saskatoon",
  },
  {
    id: 6,
    image: "/province/saskat/f.png",
    title: "Legislative Building",
    description: "Legislative Building, Regina",
  },

  {
    id: 7,
    image: "/province/saskat/g.png",
    title: "Park",
    description: "Wascana Centre Park, Regina",
  },
  {
    id: 8,
    image: "/province/saskat/h.png",
    title: "Theatre",
    description: "Regina Globe Theatre",
  },
];
