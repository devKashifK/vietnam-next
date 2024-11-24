import { albertaImmigrationAAIP } from "@/assets/data/alberta-nhap-cu-aaip";
import { FeatureSection, FeatureSection2 } from "@/components/ui/feature";
import { Feature } from "@/components/ui/cards-set";
import Container from "@/components/ui/container";
import { CTADefault, CTAWithImage } from "@/components/ui/cta";
import Title from "@/components/ui/Title";
import Glass from "@/lib/helpers";
import { Icon } from "@iconify/react/dist/iconify.js";
import TitleWithDoubleBorder from "@/components/ui/title-with-double-border";
import TitleWithBottomBorder from "@/components/ui/title-with-bottom-border";
import { ServicesCard } from "@/components/ui/services-card";

export default function Alberta() {
  return (
    <div className="flex flex-col gap-20 py-10">
      <Container>
        <Glass className="flex gap-2 px-10 py-10">
          <div className="flex-1 flex flex-col gap-2">
            <div className="relative w-max">
              <div className="px-3 py-1.5">
                <TitleWithDoubleBorder>
                  {pageData[0].section}
                </TitleWithDoubleBorder>
              </div>
            </div>
            <div className="flex flex-col justify-start gap-6">
              <h3 className="tracking-wide text-left text-4xl text-black/70">
                {pageData[0].title}
              </h3>

              <p className="text-sm text-black/60 text-left">
                {pageData[0].content}
              </p>
            </div>
          </div>
        </Glass>
      </Container>
      <Container className="flex flex-col gap-5 px-10">
        <TitleWithDoubleBorder>{pageData[1].section}</TitleWithDoubleBorder>
        <h4 className="text-4xl text-black/50">{pageData[1].title}</h4>
        <div className="py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {pageData[1]?.subsections.map((item, index) => {
            return (
              <ServicesCard
                key={index}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </div>
      </Container>
      <Container className="flex flex-col gap-5">
        <div className="flex flex-col gap-4">
          <TitleWithDoubleBorder>{pageData[2].section}</TitleWithDoubleBorder>
          <h4 className="text-4xl text-black/50">{pageData[2].title}</h4>
        </div>
        <div className="py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {pageData[2]?.subsections.map((item, index) => {
            return (
              <ServicesCard
                key={index}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </div>
      </Container>
      <Container className="flex flex-col gap-5">
        <div className="flex flex-col gap-4">
          <TitleWithDoubleBorder>{pageData[3].section}</TitleWithDoubleBorder>
          <h4 className="text-4xl text-black/50">{pageData[3].title}</h4>
        </div>
        <div className="py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {pageData[3]?.subsections.map((item, index) => {
            return (
              <Feature
                key={index}
                index={index}
                icon={
                  <Icon
                    icon="maki:religious-buddhist-11"
                    className="text-6xl"
                  />
                }
                title={item.title}
                description={item.description}
              />
            );
          })}
        </div>
      </Container>

      <CTAWithImage
        image="/canada.jpg"
        title={pageData[4].title}
        description={pageData[4].content}
        subtitle={pageData[4].section}
        ctaAction="Xem thêm"
      />
      <CTAWithImage
        flip
        image="/canada.jpg"
        title={pageData[5].title}
        description={pageData[5].content}
        subtitle={pageData[5].section}
        ctaAction="Xem thêm"
      />

      <CTADefault
        image="/business.jpg"
        subtitle="Chúng tôi có thể giúp bạn"
        description={
          <div className="flex flex-col gap-2 mt-4">
            <p className="text-lg text-white">
              iCan PR hiểu rằng di trú/ định cư tại Canada là một hành trình
              nhiều thay đổi và thách thức. Mục tiêu và nhiệm vụ của chúng tôi
              trở thành đối tác đáng tin cậy của bạn trong hành trình này.
            </p>
            <p className="text-lg text-white">
              Chúng tôi mong muốn giúp bạn hiện thực hóa ước mơ định cư Canada,
              sẳn sàng chào đón những cơ hội mới tại đây.
            </p>
          </div>
        }
      />
    </div>
  );
}

const pageData = [
  {
    section: "Overview",
    title: "TỔNG QUAN CHƯƠNG TRÌNH",
    content: [
      "Chương Trình Di Trú Lợi Thế Alberta của tỉnh bang Alberta (Alberta Advantage Immigration Program AAIP) – trước đây được gọi là Chương trình Đề cử Nhập cư Alberta (AINP) – đã trở thành một trong những chương trình lao động định cư phổ biến nhất của Canada, cung cấp quyền thường trú nhân Canada cho các công nhân và doanh nhân nước ngoài có tay nghề cao.",
      "Thời gian xét duyệt đơn cũng đã giảm xuống đáng kể, chỉ còn 4 đến 6 tháng dưới hình thức nộp đơn thông qua cổng thông tin trực tuyến mới.",
      "Vào năm 2023, tỉnh bang Alberta có tỷ lệ có công ăn việc làm cao nhất trong số các tỉnh bang đồng thời việc làm toàn thời gian chiếm hơn 80% tổng số việc làm ở Alberta. Tình trạng thiếu hụt lao động vẫn còn tồn tại ở một số ngành và Chương Trình Di Trú Lợi Thế Alberta sẽ giúp hãng sở tìm được những người lao động mà họ cần.",
    ],
  },
  {
    section: "Skilled Immigration",
    title: "Các dòng nhập cư diện tay nghề",
    subsections: [
      {
        title: "Chương trình nhập cư ngành Du lịch và Dịch vụ",
        description:
          "Dành cho các ứng viên trong nhóm ngành Du lịch và Dịch vụ có lời mời làm việc và đang sinh sống tại tỉnh bang có thể nộp đơn xin để cử AAIP.",
      },
      {
        title: "Chương trình cơ hội nhập cư tại Alberta",
        description:
          "Ứng viên đủ tiêu chuẩn sống và làm việc tại Alberta và nhận được lời mời làm việc từ một chủ lao động ở Alberta có thể nộp đơn xin đề cử AAIP.",
      },
      {
        title: "Chương trình nhập cư Alberta thông qua Express Entry",
        description:
          "Chương trình này cho phép tỉnh bang Alberta đề cử một số lượng hạn chế các ứng cử viên từ hệ thống Express Entry Liên bang, phù hợp với các yêu cầu tối thiểu, các yếu tố làm tăng cơ hội lựa chọn và các ưu tiên về kinh tế, ngành và nghề nghiệp của tỉnh.",
      },
      {
        title: "Chương trình Đổi mới nông thôn",
        description:
          "Những người lao động nước ngoài tạm thời có lời mời làm việc từ một chủ lao động ở Alberta trong một cộng đồng được chỉ định và thư chứng thực từ một cộng đồng được chỉ định có thể nộp đơn xin đề cử AAIP.",
      },
    ],
  },
  {
    section: "Business Immigration",
    title: "Các dòng nhập cư diện doanh nhân đầu tư",
    subsections: [
      {
        title: "Chương trình doanh nhân nông thôn",
        description:
          "Các doanh nhân muốn bắt đầu kinh doanh hoặc mua một doanh nghiệp hiện có ở cộng đồng nông thôn ở Alberta có thể gửi Biểu hiện quan tâm – Expression of Interest (EOI).",
      },
      {
        title: "Chương trình doanh nhân tốt nghiệp",
        description:
          "Sinh viên tốt nghiệp quốc tế của các tổ chức sau trung học ở Alberta muốn bắt đầu kinh doanh hoặc mua một doanh nghiệp hiện có có thể gửi Biểu hiện quan tâm – Expression of Interest (EOI).",
      },
      {
        title: "Chương trình trang trại",
        description:
          "Những nông dân có kinh nghiệm dự định mua hoặc mở trang trại ở Alberta có thể nộp đơn xin đề cử.",
      },
      {
        title: "Chương trình doanh nhân tốt nghiệp nước ngoài",
        description:
          "Sinh viên tốt nghiệp nước ngoài có bằng cấp của một tổ chức sau trung học bên ngoài Canada và muốn thành lập một doanh nghiệp khởi nghiệp và kinh doanh đổi mới có thể làm việc với một cơ quan được chỉ định để gửi Biểu hiện quan tâm – Expression of Interest (EOI).",
      },
    ],
  },
  {
    section: "Eligibility",
    title: "Điều Kiện Tham Gia Chương Trình",
    subsections: [
      {
        title: "Diện Cơ hội Alberta",
        description:
          "Có giấy phép lao động hợp lệ; Làm việc trong một ngành nghề đủ điều kiện ở Alberta phù hợp với kinh nghiệm làm việc của bạn; Điểm benchmark ngôn ngữ CLB tối thiểu 4.0 hoặc 5.0 tùy thuộc vào nghề nghiệp.",
      },
      {
        title: "Diện Express Entry Alberta",
        description:
          "Bạn phải thuộc hệ thống Express Entry; Thể hiện sự quan tâm đến việc nhập cư vĩnh viễn vào Alberta; Làm việc trong một ngành nghề hỗ trợ sự phát triển và đa dạng hóa kinh tế của Alberta; Điểm CRS tối thiểu là 300.",
      },
      {
        title: "Diện Công Nghệ Tăng Tốc của Alberta",
        description:
          "Bạn phải có hồ sơ trong hệ thống Express Entry; Thể hiện sự quan tâm đến việc nhập cư vĩnh viễn vào Alberta; Điểm CRS tối thiểu là 300.",
      },
      {
        title: "Diện Đổi Mới Nông Thôn",
        description:
          "Có lời mời làm việc toàn thời gian hợp lệ hoặc hợp đồng lao động từ một chủ lao động ở Alberta để làm việc trong một nghề nghiệp đủ điều kiện trong một cộng đồng được chỉ định.",
      },
    ],
  },
  {
    section: "Why Alberta",
    title: "Vì sao Alberta là điểm đến lý tưởng cho gia đình bạn?",
    content: [
      "Alberta là một điểm đến lý tưởng cho dân nhập cư nhờ vào nền kinh tế phát triển mạnh mẽ, chất lượng cuộc sống cao và cảnh quan thiên nhiên tuyệt đẹp.",
      "Với các ngành công nghiệp chủ chốt như dầu mỏ, khí đốt, nông nghiệp và công nghệ, Alberta cung cấp nhiều cơ hội việc làm hấp dẫn.",
      "Các thành phố lớn như Calgary và Edmonton có cơ sở hạ tầng hiện đại, hệ thống giáo dục và y tế chất lượng, cùng với môi trường sống an toàn và thân thiện.",
    ],
  },
  {
    section: "Program Suitability",
    title: "Chương trình Alberta nào phù hợp cho gia đình bạn?",
    content: [
      "Tùy thuộc vào hoàn cảnh cụ thể, chúng tôi sẽ giúp bạn lựa chọn chương trình phù hợp nhất để đảm bảo một tương lai tốt đẹp tại Alberta.",
      "Nhìn chung, bạn cần đáp ứng các điều kiện tối thiểu tùy từng chương trình: Diện tay nghề: tối thiểu 1 năm kinh nghiệm, tiếng Anh CLB 4 trở lên. Diện doanh nghiệp đầu tư: đầu tư tối thiểu CAD 100K, có ít nhất 1 năm ở vị trí quản lý/ chủ doanh nghiệp.",
    ],
  },
];

export const featuresPage = [];
