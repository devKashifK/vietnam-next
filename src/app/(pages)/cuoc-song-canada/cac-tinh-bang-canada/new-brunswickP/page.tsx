import { CardWithImage } from "@/components/ui/card-with-image";
import Container from "@/components/ui/container";
import { CTADefault, CTAWithImage } from "@/components/ui/cta";
import Title from "@/components/ui/Title";
import Glass from "@/lib/helpers";
import React from "react";

export default function NewBrunswickP() {
  return (
    <>
      <Container>
        <Glass>
          <Title
            title={"Fredericton"}
            subtitle="New Brunswick"
            description={
              "Fredericton chính là thủ phủ của bang New Brunswick, và ngoài việc làm trung tâm chính phủ và giáo dục, nó cũng là trung tâm mua sắm và phân phối của New Brunswick, với các doanh nghiệp trong các lĩnh vật gỗ, nhà di động, và phần mềm máy tính. Hiện nay, Fredericton đã trở thành một trong những thành phố phát triển mạnh nhất ở vùng Đại Tây Dương Canada."
            }
          />
        </Glass>
      </Container>
      <Container>
        <CTAWithImage
          title={"Hệ Thống Giáo Dục"}
          subtitle={"New Brunswick"}
          description={
            <div className="flex flex-col gap-2 justify-start items-start">
              <p className="text-left">
                Hệ thống giáo dục tại New Brunswick được tài trợ bởi tỉnh bang,
                và vì New Brunswick là tỉnh song ngữ duy nhất ở Canada, các lớp
                từ mẫu giáo tới lớp 12 được cung cấp qua các trường tiếng Anh và
                tiếng Pháp. Với hệ thống song ngữ này, khoảng 33% những người
                sống tại New Brunswick có thể nói cả tiếng Anh và tiếng Pháp.
              </p>
            </div>
          }
          image="newbrunswick-b"
        />
        <CTAWithImage
          flip={true}
          title={"University of New Brunswick"}
          subtitle={"Manitoba"}
          description={
            <div className="flex flex-col gap-2 justify-start items-start">
              <p className="text-left">
                University of New Brunswick (UNB) được thành lập vào năm 1785 và
                chính là đại học tiếng Anh lâu đời nhất của Canada. Với danh
                tiếng tốt, UNB nằm trong top 30 trường đại học tốt nhất tại
                Canada. UNB là một trong những trung tâm dẫn đầu thế giới về
                công nghệ MRI, hỗ trợ các công ty năng lượng tìm và khai thác
                các mỏ dầu mới. Ngoài ra, Canadian Rivers Institute là một viện
                có trụ sở tại UNB, hoạt động để tìm hiểu, bảo vệ, và duy trì các
                tài nguyên nước của đất nước.
              </p>
            </div>
          }
          image="newbrunswick-c"
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
    image: "/province/newbrun/a.png",
    title: "Hopewell Rocks",
    description: "Hopewell Rocks, New Brunswick",
  },
  {
    id: 2,
    image: "/province/newbrun/b.png",
    title: "Legislative Building",
    description: "New Brunswick Legislative Building",
  },
  {
    id: 3,
    image: "/province/newbrun/c.png",
    title: "Park",
    description: "Irving Nature Park, Saint John",
  },
  {
    id: 4,
    image: "/province/newbrun/d.png",
    title: "NB",
    description: "Thành Phố Moncton, NB",
  },
  {
    id: 5,
    image: "/province/newbrun/e.png",
    title: "Saint John",
    description: "Thành Phố Saint John, NB",
  },
  {
    id: 6,
    image: "/province/newbrun/f.png",
    title: "National Park",
    description: "Fundy National Park of Canada",
  },
  {
    id: 7,
    image: "/province/newbrun/g.png",
    title: "Art Gallery",
    description: "Beaverbrook Art Gallery, Fredericton",
  },
  {
    id: 8,
    image: "/province/newbrun/h.png",
    title: "Park",
    description: "Odell Park, Fredericton",
  },
];
