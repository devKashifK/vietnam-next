import { CardWithImage } from "@/components/ui/card-with-image";
import Container from "@/components/ui/container";
import { CTADefault, CTAWithImage } from "@/components/ui/cta";
import Title from "@/components/ui/Title";
import Glass from "@/lib/helpers";
import React from "react";

export default function BrcolumbiaP() {
  return (
    <>
      <Container>
        {" "}
        <Glass>
          <Title
            title={"British Columbia (BC PNP)"}
            subtitle="British Columbia"
            description={
              "British Columbia (BC) là một tỉnh bang ở phía tây Canada, nổi tiếng với cảnh quan thiên nhiên tuyệt đẹp và đa dạng. Thủ phủ của tỉnh là Victoria, nằm trên đảo Vancouver, trong khi thành phố lớn nhất là Vancouver, nằm trên đất liền. BC được biết đến với các dãy núi hùng vĩ, rừng rậm, và bờ biển dài. Đây là điểm đến lý tưởng cho các hoạt động ngoài trời như leo núi, trượt tuyết, và chèo thuyền. Ngoài ra, BC còn có nền văn hóa đa dạng và phong phú, với sự hòa quyện của các dân tộc bản địa, châu Âu, và châu Á. Kinh tế của tỉnh chủ yếu dựa vào các ngành công nghiệp tài nguyên như lâm sản, khai thác khoáng sản, và năng lượng, cùng với du lịch và công nghệ."
            }
          />
        </Glass>
      </Container>
      <Container>
        <CTAWithImage
          title={"Hệ Thống Giáo Dục"}
          subtitle={"British Columbia"}
          description={
            <div className="flex flex-col gap-2 justify-start items-start">
              <p className="text-left">
                Hệ thống trường công tại British Columbia được chia thành những
                trường tiếng Anh và trường tiếng Pháp. Ngoài ra, British
                Columbia cũng có các trường công giáo, trường tư, và gia đình
                cũng có thể có lựa chọn học tại nhà. Hệ thống trường công được
                chia thành 60 quận trường, và những người dân sống tại British
                Columbia có thể học trường công hoàn toàn miễn phí. Hệ thống
                trường của Vancouver là Vancouver School Board (VSB), với 111
                trường học và hơn 50,000 học sinh, và trong đó có 3 trường trung
                học cung cấp chương trình IB.
              </p>
            </div>
          }
          image="br-c"
        />
        <CTAWithImage
          flip={true}
          title={"University of British Columbia"}
          subtitle={"British Columbia"}
          description={
            <div className="flex flex-col gap-2 justify-start items-start">
              <p className="text-left">
                University of British Columbia (UBC) là một trong ba những
                trường đại học danh tiếng tại Canada, và cũng là một thành viên
                của Nhóm U15 Trường Đại Học Nghiên Cứu tại Canada. Là một trong
                những trường top 40 thế giới, UBC có tiêu chuẩn học thuật rất
                cao và danh tiếng cao về việc tạo ra các nghiên cứu xuất sắc.
                UBC được biết đến tại Canada trong các lĩnh vực địa chất học,
                sinh học, toán học, vật lý, và công nghệ.
              </p>
            </div>
          }
          image="br-a"
        />
      </Container>
      <Container>
        <Glass>
          <Title
            title={"Vancouver"}
            subtitle="British Columbia"
            description={
              "Vancouver là thành phố lớn nhất bang British Columbia, và cũng là trung tâm đo thị chính của vùng miền tây Canada. Ngoài ra, Vancouver là một thành phố thu hút không chỉ khách du lịch, mà nhiều người nhập cư, được biết đến vì khung cảnh đẹp, không khí trong lành, và người dân thân thiện. Với hơn 52% dân số có một ngôn ngữ ngoài tiếng Anh là ngôn ngữ mẹ đẻ, Vancouver cũng là một trong những thành phố đa văn hoá nhất Canada."
            }
          />
        </Glass>
      </Container>
      <Container>
        <Title subtitle="Các Điểm Đến Nổi Tiếng" />
        <div className="flex  flex-wrap gap-5">
          {brConfig.map((item) => (
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

const brConfig = [
  {
    id: 1,
    image: "/province/br/a.png",
    title: "Lake",
    description: "Emerald Lake, British Columbia",
  },
  {
    id: 2,
    image: "/province/br/b.png",
    title: "Garden",
    description: "Dr. Sun Yat-Sen Garden, Vancouver",
  },
  {
    id: 3,
    image: "/province/br/c.png",
    title: "Capilano",
    description: "Capilano Suspension Bridge",
  },
  {
    id: 4,
    image: "/province/br/d.png",
    title: "Science World",
    description: "Vancouver Science World",
  },
  {
    id: 5,
    image: "/province/br/e.png",
    title: "UBC",
    description: "UBC Asian Centre",
  },
  {
    id: 6,
    image: "/province/br/f.png",
    title: "Aquarium",
    description: "Vancouver Aquarium",
  },
  {
    id: 7,
    image: "/province/br/g.png",
    title: "Museum",
    description: "Museum of Vancouver",
  },
  {
    id: 8,
    image: "/province/br/h.png",
    title: "Vancouver",
    description: "Bloedel Conservatory, Vancouver",
  },
];
