import { CardWithImage } from "@/components/ui/card-with-image";
import Container from "@/components/ui/container";
import { CTADefault, CTAWithImage } from "@/components/ui/cta";
import Title from "@/components/ui/Title";
import Glass from "@/lib/helpers";
import React from "react";

export default function ManitobaP() {
  return (
    <>
      <Container>
        <Glass>
          <Title
            title={"Winnipeg"}
            subtitle="Manitoba"
            description={
              "Winnipeg, thủ phủ của Manitoba, chính là trung tâm kinh tế và văn hoá của tỉnh, với khu vực đô thị đông dân nhất miền trung Canada. Thành phố Winnipeg chính là khu vực khai thác mỏ ở phía bắc, và hiện là một trong những trung tâm công nghiệp, tài chính, và thương mại lớn nhất Canada. Với một nền kinh tế đa dạng, bao gồm các hoạt động chính trong các ngành thực phẩm, tài chính, viễn thông, in ấn, sản xuất quần áo, vận tải, và các công nghệ vũ trụ. Đây cũng chính là trụ sở của Royal Canadian Mint, nơi sản xuất tất cả tiền xu của đất nước."
            }
          />
        </Glass>
      </Container>
      <Container>
        <CTAWithImage
          title={"Hệ Thống Giáo Dục"}
          subtitle={"Manitoba"}
          description={
            <div className="flex flex-col gap-2 justify-start items-start">
              <p className="text-left">
                Tại Manitoba, tất cả trẻ em từ 6 tuổi trở lên đều có quyền đi
                học cho đến khi nhận bằng tốt nghiệp hoặc tới cuối tháng 6 năm
                họ tròn 21 tuổi. Trường công tại Manitoba được quản lý bởi các
                phân khu trường học theo quy chế, quy định, và chính sách của
                tỉnh. Học phí dành cho học sinh sống tại Manitoba (dân cư hoặc
                nhập cư) được tài trở trực tiếp từ tỉnh và từ các khoản thuế đặc
                biệt. Ngoài ra, Manitoba cũng có một số trường độc lập có thể
                nhận tài trợ từ tỉnh nếu giảng dạy theo chương trình của
                Manitoba và đáp ứng các yêu cầu bổ sung.
              </p>
            </div>
          }
          image="manitoba-c"
        />
        <CTAWithImage
          flip={true}
          title={"University of Manitoba"}
          subtitle={"Manitoba"}
          description={
            <div className="flex flex-col gap-2 justify-start items-start">
              <p className="text-left">
                University of Manitoba là đại học nghiên cứu duy nhất của tỉnh
                Manitoba và cũng là một trong những đại học hàng đầu Canada,
                thành viên của nhóm U15 Đại Học Nghiên Cứu Canada. Xếp hạng
                trong top 16 của đất nước theo bảng xếp hạng Times Higher
                Education, UManitoba được biết đến với sự xuất sắc trong nghiên
                cứu và giảng dạy các ngành khoa học sức khỏe, kỹ thuật, nghiên
                cứu về dân tộc bản địa, và môi trường. Với hơn 100 bằng cấp, văn
                bằng, và chứng chỉ khác nhau, bao gồm hơn 60 chương trình ở bậc
                đại học trong các ngành chuyên như luật, y khoa, và kỹ thuật,
                UManitoba tạo nên một cộng đồng học thuật đa dạng và sôi động.
              </p>
            </div>
          }
          image="manitoba-d"
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
    image: "/province/manitoba/a.png",
    title: "The Leaf",
    description: "Vườn Hoa The Leaf",
  },
  {
    id: 2,
    image: "/province/manitoba/b.png",
    title: "Aviation Museum",
    description: "Royal Aviation Museum of Western Canada",
  },
  {
    id: 3,
    image: "/province/manitoba/c.png",
    title: "Mint",
    description: "Royal Canadian Mint",
  },
  {
    id: 4,
    image: "/province/manitoba/d.png",
    title: "Park Zoo",
    description: "Assiniboine Park Zoo",
  },
  {
    id: 5,
    image: "/province/manitoba/e.png",
    title: "Park",
    description: "Assiniboine Park",
  },
  {
    id: 6,
    image: "/province/manitoba/f.png",
    title: "Museum",
    description: "Canadian Museum for Human Rights",
  },
  {
    id: 7,
    image: "/province/manitoba/g.png",
    title: "Cathedral",
    description: "Saint Boniface Cathedral",
  },
  {
    id: 8,
    image: "/province/manitoba/h.png",
    title: "Sculpture",
    description: "Leo Mol Sculpture Garden",
  },
];
