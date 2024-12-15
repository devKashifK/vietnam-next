import { CardWithImage } from "@/components/ui/card-with-image";
import Container from "@/components/ui/container";
import { CTADefault, CTAWithImage } from "@/components/ui/cta";
import Title from "@/components/ui/Title";
import Glass from "@/lib/helpers";
import React from "react";

export default function YukonP() {
  return (
    <>
      <Container>
        <Glass>
          <Title
            // title={"Montréal"}
            subtitle={"Yukon"}
            description={
              "Yukon, một lãnh thổ nằm ở phía tây Canada, là vùng đất có phần lớn là vùng hoang dã hoang sơ, với những ngọn núi gồ ghề và các cao nguyên rộng lớn. Hơn ¼ dân số là người thổ địa, và phần dân số còn lại bao gồm những người nhập cư gốc Châu Âu."
            }
          />
        </Glass>
      </Container>
      <Container>
        <CTAWithImage
          title={"Thiên Nhiên tại Yukon"}
          subtitle={"Yukon"}
          description={
            <div className="flex flex-col gap-2 justify-start items-start">
              <p className="text-left">
                Yukon tự hào khi có những cảnh quan ngoạn mục, từ những ngọn núi
                cao chót vót và những khu rừng rộng lớn đến những dòng sông
                hoang sơ và hồ nước thanh bình, mang đến cơ hội vô tận cho những
                chuyến phiêu lưu ngoài trời. Yukon chính là nơi có các công viên
                tuyệt đẹp như Công viên Quốc gia Kluane và Công viên Lãnh thổ
                Tombstone.
              </p>
              <p className="text-left">
                Công viên và Khu bảo tồn Quốc gia Kluane, một Di sản Thế giới
                được UNESCO công nhận, có đỉnh núi cao nhất Canada, Núi Logan,
                và là nơi hoàn hảo để đi bộ, leo núi và ngắm động vật hoang dã
                giữa sông băng và đồng cỏ núi cao. Công viên Tombstone
                Territorial, được biết đến với những đỉnh núi gồ ghề và vùng
                lãnh nguyên sôi động, cung cấp một số con đường mòn đi bộ đường
                dài tốt nhất với phong cảnh nổi bật và hệ động thực vật độc đáo.
                Các con sông và hồ nguyên sơ của Yukon khiến nơi đây trở thành
                nơi lý tưởng để câu cá và chèo thuyền, trong khi vùng hoang dã
                rộng lớn của nó mang lại cơ hội ngắm nhìn động vật hoang dã
                tuyệt vời. Cư dân có thể trải nghiệm Bắc cực quang và Mặt trời
                lúc nửa đêm, tạo nên một phong cách sống độc đáo và sôi động gắn
                liền với thiên nhiên.
              </p>
              <p className="text-left">
                Không khí trong lành, không gian rộng mở, và một cộng đồng thân
                thiện khiến Yukon trở thành nơi sinh sống lý tưởng cho những ai
                yêu thích không gian ngoài trời tuyệt vời.
              </p>
            </div>
          }
          image="yukon-a"
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
    image: "/province/yukon/a.png",
    title: "Nai Sừng Tấm tại Yukon Wildlife Preserve",
    description:
      "Yukon Wildlife Preserve là khu bảo tồn động vật hoang dã của Yukon, với các động vật như cáo, linh miêu, nai sừng tấm, v.v. Khách du lịch có thể mua vé để tham quan khu vực này và xem động vật hoang dã trong môi trường tự nhiên của nó qua đường bộ hoặc đường xe buýt dài 5km.",
  },
  {
    id: 2,
    image: "/province/yukon/b.png",
    title: "Linh Miêu tại Yukon Wildlife Preserve",
    description:
      "Wildlife Preserve là khu bảo tồn động vật hoang dã của Yukon, với các động vật như cáo, linh miêu, nai sừng tấm, v.v. Khách du lịch có thể mua vé để tham quan khu vực này và xem động vật hoang dã trong môi trường tự nhiên của nó qua đường bộ hoặc đường xe buýt dài 5km.",
  },
  {
    id: 3,
    image: "/province/yukon/c.png",
    title: "Yukon",
    description: "Chèo Thuyền",
  },
  {
    id: 4,
    image: "/province/yukon/d.png",
    title: "Lake",
    description: "Ngắm Mặt Trời Giữa Đêm",
  },
  {
    id: 5,
    image: "/province/yukon/e.png",
    title: "Lake",
    description: "Công Viên Quốc Gia Kluane",
  },
  {
    id: 6,
    image: "/province/yukon/f.png",
    title: "Kluane",
    description: "Hồ Sông Băng tại Công Viên Quốc Gia Kluane",
  },
  {
    id: 7,
    image: "/province/yukon/g.png",
    title: "Công Viên Tombstone Territorial",
    description:
      "Công viên Tombstone Territorial, được biết đến với những đỉnh núi gồ ghề và vùng lãnh nguyên sôi động, cung cấp một số con đường mòn đi bộ đường dài tốt nhất với phong cảnh nổi bật và hệ động thực vật độc đáo.",
  },
  {
    id: 8,
    image: "/province/yukon/h.png",
    title: "Historic Site",
    description: "Ngắm Cực Quang",
  },
];
