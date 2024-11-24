import Container from "@/components/ui/container";
import CTA, { CTADefault, CTAWithImage } from "@/components/ui/cta";
import Title from "@/components/ui/Title";
import Glass from "@/lib/helpers";
import React from "react";
import { FAQ } from "../express-entry/federal-skilled-worker";
import { ServicesCard } from "@/components/ui/services-card";
import { truncateTextHeading } from "@/components/ui/newsCard";

export default function CanadaImmigration() {
  return (
    <>
      <Container>
        {/* <Glass className="flex gap-2 px-10 py-10"> */}
        <div className="flex-1 flex flex-col gap-4">
          <Title
            className="px-2 text-left lg:justify-start lg:items-start"
            title={
              <h3 className="tracking-wide text-left text-4xl text-black/70">
                Vì sao Canada là sự lựa chọn của nhiều gia đình
              </h3>
            }
            description={
              "Định cư là một trong những cách để tìm kiếm môi trường lý tưởng và phù hợp hơn cho cuộc sống của gia đình và con cái. Ngoài Mỹ, Úc và các nước châu Âu, thì Canada là một đất nước được nhiều gia đình chọn để định cư. Môi trường trong lành, tỉ lệ thất nghiệp thấp, phúc lợi xã hội tốt là một trong những điều khiến Canada trở thành điểm đến hấp dẫn. Tuy nhiên, đất nước lá phong Canada còn có những ưu thế hấp dẫn khác để đứng đầu trong những lựa chọn của họ."
            }
            descriptionClassName="lg:w-full lg:text-left"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {canadaChoice.map((item, index) => (
              <ServicesCard
                key={index}
                title={item.title}
                description={truncateTextHeading(item.description, 120)}
              />
            ))}
          </div>
        </div>
        {/* </Glass> */}
      </Container>

      <CTAWithImage
        flip={true}
        title={"Du học - Định cư Canada"}
        description={
          <div className="flex flex-col gap-2 justify-start items-start">
            <p className="text-left">
              Du học tại Canada không chỉ mang lại cơ hội học tập tại các trường
              đại học hàng đầu thế giới mà còn mở ra con đường định cư cho sinh
              viên quốc tế.
            </p>
            <p className="text-left">
              Sau khi tốt nghiệp, bạn có thể xin Giấy phép làm việc sau tốt
              nghiệp (Post-Graduation Work Permit – PGWP), cho phép bạn làm việc
              tại Canada từ 1 đến 3 năm, tùy thuộc vào độ dài của chương trình
              học.
            </p>
            <p className="text-left">
              Sau khi có đủ kinh nghiệm làm việc tại Canada, bạn có thể nộp đơn
              xin thường trú thông qua các chương trình định cư như Express
              Entry hoặc Provincial Nominee Program (PNP)
            </p>
          </div>
        }
        image="/aaa.jpg"
        ctaAction={"Du HOC DINH CU CANADA"}
        link="/immigration/du-hoc-dinh-cu"
      />
      <CTAWithImage
        flip={false}
        title={"Làm việc và định cư Canada"}
        description={
          <div className="flex flex-col gap-2 justify-start items-start">
            <p className="text-left">
              Canada được biết đến như một điểm đến lý tưởng cho những người
              muốn tìm kiếm cơ hội việc làm và định cư. Với nền kinh tế phát
              triển, chính sách nhập cư thân thiện và môi trường sống chất
              lượng, Canada hấp dẫn hàng triệu người lao động từ khắp nơi trên
              thế giới.
            </p>
            <p className="text-left">
              Canada có nhu cầu lớn về lao động trong nhiều lĩnh vực, từ công
              nghệ thông tin, y tế, tài chính, giáo dục, đến nông nghiệp và xây
              dựng. Điều này mở ra nhiều cơ hội việc làm cho người lao động quốc
              tế.
            </p>
          </div>
        }
        image="/about.png"
        ctaAction={"Việc làm định cư Canada"}
        link="/immigration/express-entry/federal-skilled-worker"
      />
      <CTAWithImage
        flip={true}
        title={"Định cư Canada diện doanh nghiệp"}
        description={
          <div className="flex flex-col gap-2 justify-start items-start">
            <p className="text-left">
              Canada là một trong những quốc gia lý tưởng cho việc khởi nghiệp
              và kinh doanh. Với môi trường kinh doanh thân thiện, hệ thống thuế
              minh bạch, và nhiều chương trình hỗ trợ từ chính phủ, Canada cung
              cấp nhiều cơ hội cho doanh nhân quốc tế muốn phát triển sự nghiệp
              và định cư.
            </p>
            <p className="text-left">
              Canada cũng cung cấp các chương trình định cư cho doanh nhân và
              nhà đầu tư muốn khởi nghiệp và phát triển kinh doanh tại Canada:
            </p>
            <p className="text-left">
              Startup Visa Program: Dành cho những doanh nhân muốn khởi nghiệp
              tại Canada và có sự hỗ trợ từ một tổ chức đầu tư, quỹ đầu tư mạo
              hiểm hoặc vườn ươm doanh nghiệp tại Canada. Yêu cầu có ý tưởng
              kinh doanh sáng tạo và khả năng tạo việc làm cho người dân Canada.
            </p>
          </div>
        }
        image="/service.jpg"
        ctaAction={"Chương trình SUV"}
        link="/immigration/start-up-visa"
      />
      <CTAWithImage
        flip={false}
        title={"Bảo lãnh người thân"}
        description={
          <div className="flex flex-col gap-2 justify-start items-start">
            <p className="text-left">
              Canada có một chính sách nhập cư cởi mở, cho phép công dân và
              thường trú nhân bảo lãnh người thân đến định cư.
            </p>
            <p className="text-left">
              Bên cạnh đó, một số tỉnh bang có thể cộng điểm cho ứng viên nếu họ
              có thân nhân đang sống tại tỉnh bang đó. Việc có thân nhân tại
              Canada có thể gián tiếp giúp bạn trong quá trình định cư, đặc biệt
              là thông qua các chương trình Provincial Nominee Program (PNP)
              hoặc khi bạn cần hỗ trợ về cuộc sống và công việc tại Canada.
            </p>
          </div>
        }
        image="/vietnamese-people-a-culture-of-hospitality.jpg"
        ctaAction={"Chương trình SUV"}
        link="/immigration/start-up-visa"
      />
      <CTADefault
        title="Chúng tôi có thể giúp bạn"
        description="iCan PR hiểu rằng di trú/ định cư tại Canada là một hành trình nhiều thay đổi và thách thức. Mục tiêu và nhiệm vụ của chúng tôi trở thành đối tác đáng tin cậy của bạn trong hành trình này."
        image="/service.jpg"
        descriptionClassName="text-white text-center"
      />
    </>
  );
}

const canadaChoice = [
  {
    id: "multiculturalism-in-canada",
    title: "Canada Theo Chủ Nghĩa Đa Văn Hóa",
    description:
      "Canada mỗi năm có thêm khoảng 250.000 nhập cư mới. Đây cũng là quốc gia có tỉ lệ nhập cư vĩnh viễn cao nhất thế giới. Trên thực tế, cứ 5 người Canada thì có một người là người nhập cư. Điều này giải quyết rất nhiều vấn đề liên quan đến mối quan hệ giữa người nhập cư và người bản xứ. Và khi sang Canada thì người Việt có thể phần nào yên tâm rằng người Canada rất hòa nhã và thân thiện với người nhập cư. Do đó, bất kể bạn đến từ đâu và nền văn hóa của bạn là gì, bạn sẽ được sống trong hòa thuận và yên bình ở Canada. Canada có hơn 30 cộng đồng sắc tộc với hơn 100.000 người. Trong đó, Toronto là thành phố đa văn hóa nhất trên thế giới.",
    ctaText: "Tìm hiểu thêm",
    ctaLink: "/da-van-hoa-canada",
  },
  {
    id: "wealth-and-progress",
    title: "Canada Là Một Quốc Gia Giàu Mạnh Và Tiến Bộ",
    description:
      "Canada có nền kinh tế lớn thứ 11 trên thế giới, là thành viên của G-7 đồng thời là một trong những đất nước có nền kinh tế ổn định nhất. Canada cũng được xem là một quốc gia tự do và khoan dung. Trong Chỉ số Tiến triển Xã hội 2016, Canada đứng ở vị trí thứ 2 trên toàn thế giới. Đây cũng là quốc gia đứng thứ 8 trên thế giới theo Chỉ số Hòa bình Toàn cầu. The Worldwide Governance đã đánh giá Canada 84% cho sự ổn định chính trị, không có bạo lực hoặc khủng bố. Chính phủ của Canada cũng được đánh giá 97% đối với việc hoạt động và điều hành hiệu quả.",
    ctaText: "Khám phá kinh tế Canada",
    ctaLink: "/giau-manh-tien-bo",
  },
  {
    id: "excellent-healthcare",
    title: "Hệ Thống Y Tế Tuyệt Vời",
    description:
      "Canada được biết đến với chất lượng dịch vụ chăm sóc sức khỏe tuyệt vời. Họ cho phép những người đến định cư ở Canada và có tình trạng cư trú hợp pháp được hưởng hệ thống chăm sóc sức khỏe như người dân của mình. Hệ thống chăm sóc sức khỏe của Canada là một trong những hệ thống toàn diện và phát triển nhất trên thế giới. Hệ thống này cho phép người dân được truy cập miễn phí vào các dịch vụ chăm sóc sức khỏe cần thiết về mặt y tế cho tất cả công dân và thường trú nhân Canada. Hệ thống y tế quốc gia đảm bảo rằng không công dân Canada hoặc thường trú nhân nào bị từ chối chăm sóc y tế. Tại Canada, thu nhập không phải là yếu tố xác định một cá nhân có được điều trị y tế hay không.",
    ctaText: "Tìm hiểu dịch vụ y tế",
    ctaLink: "/y-te-tuyet-voi",
  },
  {
    id: "immigration-benefits",
    title: "Chính Sách Ưu Đãi Cho Người Nhập Cư",
    description:
      "Hàng năm, Canada chi khoảng 1,7 tỉ đô Can cho các chương trình và chính sách hỗ trợ những người mới đến. Điều này nhằm giúp họ có thể hòa nhập và ổn định cuộc sống tại xứ sở lá phong. Người nhập cư có thể tham khảo các dịch vụ hỗ trợ của Bộ Nhập cư, Người tị nạn và Quốc tịch Canada (IRCC) và Bộ Nhập cư, Phan sinh và Hội nhập (MIFI). Hầu hết, các dịch vụ định cư được tài trợ nhiều ở cấp chính phủ. Ở cấp liên bang cũng có các dịch vụ và được cập nhật thường xuyên trên trang web của họ.",
    ctaText: "Tìm hiểu chính sách nhập cư",
    ctaLink: "/chinh-sach-nhap-cu",
  },
  {
    id: "safety-and-security",
    title: "Quốc Gia Của Sự An Toàn",
    description:
      "Sự an ninh xã hội ở Canada luôn được đánh giá cao trên thế giới. Theo Chính sách hòa bình toàn cầu năm 2018, Canada được đánh giá ở vị trí thứ 6 trên bảng xếp hạng các quốc gia hòa bình. Bên cạnh sự an ninh xã hội, Canada còn có một hệ thống chính trị ổn định. Canada được biết đến là nước có nền dân chủ rất ổn định. Canada được xếp thứ 5 trên thế giới về chỉ số dân chủ của Economist Intelligence Unit vào năm 2020, cao hơn tất cả các quốc gia Bắc Mỹ.",
    ctaText: "Khám phá sự an toàn tại Canada",
    ctaLink: "/su-an-toan",
  },
  {
    id: "world-class-education",
    title: "Hệ Thống Giáo Dục Đẳng Cấp",
    description:
      "Theo báo cáo của US News, Canada là quốc gia thứ 7 có môi trường tốt để nuôi dạy trẻ em, và đứng thứ 4 về quốc gia có nền giáo dục tốt nhất. Hệ thống giáo dục công lập là một trong những hệ thống giáo dục tốt nhất trên thế giới. Canada cũng là cái nôi của các trường đại học hàng đầu thế giới, như Đại học Toronto, Đại học British Columbia và Đại học McGill. Các trường đại học này nằm trong số 100 cơ sở học tập hàng đầu thế giới. Chính phủ Canada mỗi năm cũng cung cấp nhiều học bổng giá trị cũng như nhiều chính sách để hỗ trợ toàn bộ hoặc một phần học phí cho học sinh và sinh viên.",
    ctaText: "Tìm hiểu giáo dục Canada",
    ctaLink: "/giao-duc-dang-cap",
  },
];
