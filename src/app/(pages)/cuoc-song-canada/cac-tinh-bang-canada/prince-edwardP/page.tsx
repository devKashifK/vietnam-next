import { CardWithImage } from "@/components/ui/card-with-image";
import Container from "@/components/ui/container";
import { CTADefault, CTAWithImage } from "@/components/ui/cta";
import Title from "@/components/ui/Title";
import Glass from "@/lib/helpers";
import React from "react";

export default function PrinceEdwardP() {
  return (
    <>
      <Container>
        <Glass>
          <Title
            title={"Charlottetown"}
            subtitle="Prince Edward Island"
            description={
              "Charlottetown, thủ phủ của Prince Edward Island, từng là khu định cư Pháp vào những năm 1720, sau này được đổi tên để vinh danh Nữ hoàng Charlotte của Anh, vợ của Vua George III. Charlottetown là trung tâm thương mại của tỉnh, với các hoạt động kinh tế tập trung vào du lịch, kinh doanh của chính phủ, thuỷ sản, và nông nghiệp. Được gọi là nơi sinh của liên bang, Charlottetown chính là nơi thảo luận ban đầu của các đại biểu từ Nova Scotia, New Brunswick, P.E.I., và Canada. Với lịch sử lâu dài, dấu ấn của thời gian đã được khắc sâu vào từng con đường và toà nhà trong thành phố."
            }
          />
        </Glass>
      </Container>
      <Container>
        <CTAWithImage
          title={"Hệ Thống Giáo Dục"}
          subtitle={"Prince Edward Island"}
          description={
            <div className="flex flex-col gap-2 justify-start items-start">
              <p className="text-left">
                Hệ thống trường công lập tại P.E.I., như ở các tỉnh khác, hoàn
                toàn miễn học phí cho cư dân và người tị nạn, với 62 trưởng
                giảng dạy từ mẫu giáo tới khi tốt nghiệp lớp 12 trong tiếng Anh
                hoặc tiếng Pháp. Có hai trường tại P.E.I. cung cấp chương trình
                International Baccalaureate (IB), là trường trung học Colonel
                Gray và trường trung học Charlottetown.
              </p>
            </div>
          }
          image="edward-b"
        />
        <CTAWithImage
          flip={true}
          title={"University of Prince Edward Island"}
          subtitle={"Prince Edward Island"}
          description={
            <div className="flex flex-col gap-2 justify-start items-start">
              <p className="text-left">
                University of Prince Edward Island (UPEI) là một đại học với
                lịch sử lâu đời, bắt nguồn từ Prince of Wales College và St.
                Dunstan’s University, hai trường được thành lập vào những năm
                1800. Ngày nay, UPEI là một trường có danh tiếng tốt trong
                nghiên cứu và học thuật. UPEI có bốn khoa (giáo dục, nghệ thuật,
                khoa học, thú y) và hai trường (kinh doanh, điều dưỡng), và đạt
                được hạng top 4 trong nước và top 50 toàn cầu trong ngành thú y.
              </p>
            </div>
          }
          image="edward-a"
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
    image: "/province/prince/a.png",
    title: "Basilica",
    description: "St. Dunstan's Basilica, Charlottetown",
  },
  {
    id: 2,
    image: "/province/prince/b.png",
    title: "Charlottetown",
    description: "Đường Phố Charlottetown",
  },
  {
    id: 3,
    image: "/province/prince/c.png",
    title: "Charlottetown",
    description: "Nhà Cổ Beaconsfield, Charlottetown",
  },
  {
    id: 4,
    image: "/province/prince/d.png",
    title: "Charlottetown",
    description: "Nhà Cổ Beaconsfield, Charlottetown",
  },
  {
    id: 5,
    image: "/province/prince/e.png",
    title: "Park",
    description: "Confederation Landing Park, Charlottetown",
  },
  {
    id: 6,
    image: "/province/prince/f.png",
    title: "Bridge",
    description: "Confederation Bridge, cây cầu kết nối New Brunswick và PEI",
  },
  {
    id: 7,
    image: "/province/prince/g.png",
    title: "Heritage Place",
    description:
      "Green Gables Heritage Place, Cavendish, nơi trong truyện Anne of Green Gables",
  },
  {
    id: 8,
    image: "/province/prince/h.png",
    title: "Historic Site",
    description: "Tinh House National Historic Site, nơi sinh của liên bang",
  },
];
