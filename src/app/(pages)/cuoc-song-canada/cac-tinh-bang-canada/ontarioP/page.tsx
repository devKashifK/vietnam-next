import { CardWithImage } from "@/components/ui/card-with-image";
import Container from "@/components/ui/container";
import { CTADefault, CTAWithImage } from "@/components/ui/cta";
import Title from "@/components/ui/Title";
import Glass from "@/lib/helpers";
import React from "react";

export default function OntarioP() {
  return (
    <>
      <Container>
        <Glass>
          <Title
            title={"Toronto"}
            subtitle="Ontario"
            description={
              "Toronto, thủ phủ của tỉnh Ontario, nằm ở bờ tây bắc của hồ Ontario, là trung tâm tài chính và thương mại của Canada. Là thành phố đông dân nhất nước, Toronto được Liên Hợp Quốc và BBC công nhận là một trong những thành phố đa văn hóa nhất thế giới, với hơn 190 ngôn ngữ được sử dụng tại đây. Dù với sự phát triển của nên kinh tế, dựng lên những khu phố nhiều toà cao tầng như Financial District, Toronto vẫn giữ những toà kiến trúc xưa, tạo nên một cửa sổ quay lại thời gian trong một thành phố náo nhiệt."
            }
          />
        </Glass>
      </Container>
      <Container>
        <CTAWithImage
          title={"Hệ Thống Giáo Dục"}
          subtitle={"Ontario"}
          description={
            <div className="flex flex-col gap-2 justify-start items-start">
              <p className="text-left">
                Giáo dục tại Toronto được chia thành 3 phân đoạn— mầm non dành
                cho trẻ em từ sơ sinh tới 6 tuổi, trường tiểu học dành cho học
                sinh từ mẫu giáo tới lớp 8, và trường trung học, dành cho học
                sinh từ lớp 9 tới 12. Học sinh có sự lựa chọn trong 4 hội đồng
                trường ở Ontario, đó là trường công tiếng Anh, trường công tiếng
                Pháp, trường Công giáo tiếng Anh, và trường Công giáo tiếng
                Pháp. Toronto District School Board (TDSB), là hội đồng trường
                công tiếng Anh tại Toronto. TDSB có hơn 600 trường tiểu học và
                trung học, và cũng chính là hội đồng trường lớn nhất Canada.
              </p>
            </div>
          }
          image="ontario-a"
        />
        <CTAWithImage
          flip={true}
          title={"University of Toronto"}
          subtitle={"Ontario"}
          description={
            <div className="flex flex-col gap-2 justify-start items-start">
              <p className="text-left">
                University of Toronto (UofT), với khuôn viên Saint George nằm
                tại trung tâm Toronto, là là đại học chuyên sâu về nghiên cứu
                nằm trong Nhóm U15 Trường Đại học Nghiên cứu tại Canada. UofT
                đứng đầu thế giới với hạng top 10 trong các môn điều dưỡng, giải
                phẫu và sinh lý học, khoa học máy tính, và giáo dục. Chương
                trình MBA của Trường Quản lý Rotman của UofT cũng nằm trong top
                12 thế giới trên bảng xếp hạng QS. Tại UofT, học sinh có thể vào
                chương trình Co-op, nơi sinh viên có thể tham gia các chương
                trình học tập trải nghiệm, kết nối với các nhà tuyển dụng tiềm
                năng và tham gia các sự kiện tuyển dụng, gặp gỡ cựu sinh viên,
                giảng viên và nhân viên.
              </p>
            </div>
          }
          image="ontario-b"
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
    image: "/province/ontario/a.png",
    title: "Square",
    description: "Nathan Phillips Square",
  },
  {
    id: 2,
    image: "/province/ontario/b.png",
    title: "Castle",
    description: "Lâu Đài Cổ Casa Loma",
  },
  {
    id: 3,
    image: "/province/ontario/c.png",
    title: "Art Gallery",
    description: "Art Gallery of Ontario",
  },
  {
    id: 4,
    image: "/province/ontario/d.png",
    title: "Museum",
    description: "Royal Ontario Museum",
  },
  {
    id: 5,
    image: "/province/ontario/e.png",
    title: "Toronto",
    description: "CN Tower",
  },
  {
    id: 6,
    image: "/province/ontario/f.png",
    title: "Aquarium",
    description: "Ripley's Aquarium",
  },
  {
    id: 7,
    image: "/province/ontario/g.png",
    title: "Wonderland",
    description: "Canada's Wonderland",
  },
  {
    id: 8,
    image: "/province/ontario/h.png",
    title: "Historic Site",
    description: "Distillery Historic District",
  },
];
