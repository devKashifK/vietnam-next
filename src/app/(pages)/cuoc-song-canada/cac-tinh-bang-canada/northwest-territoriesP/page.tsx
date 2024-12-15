import { CardWithImage } from "@/components/ui/card-with-image";
import Container from "@/components/ui/container";
import { CTADefault, CTAWithImage } from "@/components/ui/cta";
import Title from "@/components/ui/Title";
import Glass from "@/lib/helpers";
import React from "react";

export default function NorthwestTerritoriesP() {
  return (
    <>
      <Container>
        <Glass>
          <Title
            title={"Yellowknife"}
            subtitle="Northwest Territories"
            description={
              "Northwest Territories, thuộc vùng bắc và tây bắc của Canada, bao gồm một khu vực lớn là rừng và lãnh nguyên. Ngành khai thác mỏ là ngành công nghiệp chính của Northwest Territories— ví dụ như vàng, bạch kim, radium, uranium, đồng, v.v. Họ đã phát hiện kimberlite chứa kim cương đầu tiên của Canada tại Lac de Gras ở Northwest Territories, dẫn đến một cơn sốt đào mỏ vàng và việc phát hiện ra nhiều loại kim cương thương mại quan trọng."
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
                Các trường từ lớp mẫu giáo tới lớp 12 tại Northwest Territories
                (NWT) cung cấp ba chương trình giáo dục khác nhau: tiếng Anh,
                tiếng Pháp, và chương trình song ngữ Anh-Pháp. Các trường Pháp
                ngữ là dành cho các học sinh nói tiếng Pháp là tiếng đầu tiêng,
                còn chương trình song ngữ hoàn toàn giảng dạy bằng tiếng Pháp
                dành cho các học sinh không nói tiếng Pháp. Như các tỉnh và lãnh
                thổ khác tại Canada, tất cả người dân Canada sống tại NWT đều
                được miễn học phí. Hiện nay, NWT đã hộp tác với Bộ Giáo Dục
                British Columbia để bắt đầu sử dụng chương trình học tập của
                B.C. trong các trường NWT, với một số điều chỉnh để có thể đảm
                bảo sự phù hợp của chương trình với cộng đồng, văn hoá, ngôn
                ngữ, và xã hội của lãnh thổ.
              </p>
            </div>
          }
          image="northwest-b"
        />
        <CTAWithImage
          flip={true}
          title={"Aurora College"}
          subtitle={"Northwest Territories"}
          description={
            <div className="flex flex-col gap-2 justify-start items-start">
              <p className="text-left">
                Aurora College chính là trường cao đẳng duy nhất của vùng
                Northwest Territories, với khuông viên tại các thành phố Inuvik,
                Fort Smith, và Yellowknife. Nó được công nhận là một trong top
                30 những cao đẳng nghiên cứu tốt nhất Canada vào năm 2023, và
                hiện đang trong hành trình chuyển đổi thành đại học bách khoa,
                với mục tiêu khai giảng vào năm 2025.
              </p>
            </div>
          }
          image="northwest-a"
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
    image: "/province/northwest/a.png",
    title: "National Park",
    description: "Nahanni National Park",
  },
  {
    id: 2,
    image: "/province/northwest/b.png",
    title: "Waterfall",
    description: "Cameron Falls",
  },
  {
    id: 3,
    image: "/province/northwest/c.png",
    title: "Lake",
    description: "Vee Lake, Yellowknife",
  },
  {
    id: 4,
    image: "/province/northwest/d.png",
    title: "Lake",
    description: "Great Slave Lake, Yellowknife",
  },
  {
    id: 5,
    image: "/province/northwest/e.png",
    title: "Heritage Museum",
    description: "Prince of Wales Northern Heritage Museum",
  },
  {
    id: 6,
    image: "/province/northwest/f.png",
    title: "Museum",
    description: "Prince of Wales Northern Heritage Museum",
  },
  {
    id: 7,
    image: "/province/northwest/g.png",
    title: "Northern Lights",
    description: "Cực Quang",
  },
  {
    id: 8,
    image: "/province/northwest/h.png",
    title: "Yellowknife",
    description: "Cực Quang tại Yellowknife",
  },
];
