import { CardWithImage } from "@/components/ui/card-with-image";
import Container from "@/components/ui/container";
import { CTADefault, CTAWithImage } from "@/components/ui/cta";
import Title from "@/components/ui/Title";
import Glass from "@/lib/helpers";
import React from "react";

export default function NunavutP() {
  return (
    <>
      <Container>
        <Glass>
          <Title
            subtitle="Nunavut"
            description={
              "Nunavut, với tên mang nghĩa là “đất của chúng tôi trong tiếng Inuktitut, chính là lãnh thổ mới nhất của nước, nằm ở phía Bắc Canada, và cũng là một trong những nơi đẹp nhất để ngắm cực quang. Tỉnh Nunavut phủ qua đất đai truyền thống của người Inuit, và dân số của họ chỉ bao gồm một số người dân tộc bản địa của Bắc Cực. Do đó, văn hóa địa phương cổ xưa được khắc sâu vào những cảnh quan lạnh lẽo, đông đặc bao quanh tỉnh."
            }
          />
        </Glass>
      </Container>
      <Container>
        <CTAWithImage
          title={"Văn Hoá Người Dân"}
          subtitle={"Nunavut"}
          description={
            <div className="flex flex-col gap-2 justify-start items-start">
              <p className="text-left">
                Là lãnh thổ với dân số chính là người Inuit, Inuktitut là ngôn
                ngữ được dùng nhiều nhất trong tỉnh, và người dân còn giữ các
                nghệ thuật truyền thống như khắc đá xà phòng, hát cổ họng, và
                nhảy múa theo nhịp trống cổ đại. Tuy nhiên, người Inuit sống tại
                Nunavut cũng có tập đoàn phát thanh truyền hình riêng, và cũng
                mở rộng sang các phương tiện truyền thông hiện đại. Nunavut đã
                trở thành nơi mà các công nghệ của thế kỷ 21 bắt gặp tư duy và
                văn hoá lâu đời của người Inuit, tạo nên một cuộc sống hiện đại
                trong một môi trường cổ xưa.
              </p>
              <p className="text-left">
                Là một tỉnh đầy băng lạnh, Nunavut là nơi tràn đầy thách thức từ
                môi trường, và văn hoá của người Inuit cũng xây quanh việc thích
                nghi với môi trường xung quanh họ. Thu hoạch, săn bắn, và dữ
                hành chính là trọng tâm của văn hoá và lối sống của họ, đến từ
                sự cân thiết của việc cùng nhau đảm bảo sự sống và sự an toàn
                của người khác.
              </p>
            </div>
          }
          image="nunavut-a"
        />
      </Container>

      <Container>
        <Title
          subtitle="Các Điểm Đến Nổi Tiếng"
          description={
            "Nunavut là một nơi để trốn thoát khỏi cuộc sống sôi động của các thành phố lớn và quay trở lại một trái đất không có sự ảnh hưởng của con người— đầy phong cảnh thiên nhiên đẹp đẽ và sự sống của động vật hoang dã. Tại Nunavut có 5 khu bảo tồn hoang dã, bảo vệ tất cả các động vật hoang dã và môi trường sống của chúng, bao gồm các động vật như gấu bắc cực, tuần lộc, sói bắc cực, cáo bắc cực, hải cẩu, kỳ lân biển, cá voi beluga, và các loài chim. Nunavut là một nơi thích hợp để đi xem các động vật hoang dã trong môi trường tự nhiên của nó."
          }
        />
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
    image: "/province/nunavut/a.png",
    title: "National Park",
    description: "Ukkusiksalik National Park",
  },
  {
    id: 2,
    image: "/province/nunavut/b.png",
    title: "National Park",
    description: "Qausuittuq National Park",
  },
  {
    id: 3,
    image: "/province/nunavut/c.png",
    title: "National Park",
    description: "Quttinirpaaq National Park",
  },
  {
    id: 4,
    image: "/province/nunavut/d.png",
    title: "National Park",
    description: "Sirmilik National Park",
  },
  {
    id: 5,
    image: "/province/nunavut/e.png",
    title: "National Park",
    description: "Auyuittuq National Park",
  },
  {
    id: 6,
    image: "/province/nunavut/f.png",
    title: "Islands",
    description: "Baffin Islands",
  },
  {
    id: 7,
    image: "/province/nunavut/g.png",
    title: "Kỳ Lân Biển",
    description: "Kỳ Lân Biển, chụp tại Nunavut",
  },
  {
    id: 8,
    image: "/province/nunavut/h.png",
    title: "Iqaluit",
    description: "Thành Phố Iqaluit",
  },
];
