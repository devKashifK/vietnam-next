import Container from "@/components/ui/container";
import { CTADefault } from "@/components/ui/cta";
import { truncateTextHeading } from "@/components/ui/newsCard";
import { ServicesCard } from "@/components/ui/services-card";
import Title from "@/components/ui/Title";
import React from "react";

export default function StudyAbroadSettlement() {
  return (
    <div className="flex flex-col gap-10 py-8">
      <Container>
        <Title
          title="Vì sao bạn nên đi du học định cư ở Canada?"
          description="Một trong những lý do chính khiến cho chương trình du học Canada trở nên hấp dẫn và thu hút số lượng lớn du học sinh trên toàn thế giới chính là quyền lợi ở lại làm việc sau tốt nghiệp cùng cơ hội định cư một khi bạn đã có đủ năng lực và tay nghề làm việc cao."
        />

        <div className="grid grid-cols-2 gap-8">
          {studyAbroad.map((item, index) => (
            <ServicesCard
              key={index}
              id={item.id}
              title={item.title}
              description={truncateTextHeading(item.description, 30)}
            />
          ))}
        </div>
      </Container>

      <Container className="gap-10">
        <Title
          subtitle="Chương trình"
          title="Các Chính Sách Định Cư Dành Cho Sinh Viên Quốc Tế Sau Tốt Nghiệp"
          description="Chương trình Express Entry là một hệ thống chấm điểm định cư được sử dụng để quản lý những hồ sơ xin thường trú nhân tại Canada. Hệ thống Express Entry có 3 chương trình định cư bao gồm:"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {studyAbroad2.map((item, index) => (
            <ServicesCard
              id={item.id}
              key={index}
              title={item.title}
              description={truncateTextHeading(item.description, 30)}
            />
          ))}
        </div>
      </Container>
      <Container className="gap-10">
        <Title
          subtitle="Chương trình"
          title="Chương trình Provincial Nominee Program (PNP)"
          description="Chương trình định cư phổ biến thứ hai khi du học Canada là Provincial Nomination Program. Chương trình này cho phép mỗi tỉnh bang có những tiêu chí khác nhau để lựa chọn những cá nhân phù hợp, có kỹ năng đáp ứng được nhu cầu từ thị trường lao động địa phương."
        />

        <div className="grid grid-cols-2 gap-8">
          {studyAbroad3.map((item, index) => (
            <ServicesCard
              key={index}
              id={item.id}
              title={item.title}
              description={truncateTextHeading(item.description, 30)}
            />
          ))}
        </div>
      </Container>
      <CTADefault
        image="/immigration.png"
        title="Chúng tôi có thể giúp bạn"
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

const studyAbroad = [
  {
    id: 1,
    title: "Chi phí hợp lý",
    description:
      "Canada nổi tiếng với chất lượng giảng dạy và cuộc sống chất lượng hàng đầu thế giới, nhưng học phí lại vô cùng hợp lý cho một bằng cấp được chấp nhận trên toàn cầu. Trung bình, học phí sẽ dao động trong khoảng 17.000 – 40.000 CAD/năm, tương đương với khoảng 304 – 702 triệu VNĐ/năm.",
  },
  {
    id: 2,
    title: "Nền giáo dục tiên tiến",
    description:
      "Canada được biết đến là một quốc gia cung cấp các cơ hội nghiên cứu và giáo dục chất lượng cao. Bên cạnh đó, Chính phủ Canada luôn sẵn sàng hỗ trợ cho nhiều nghiên cứu trong các lĩnh vực Y học, Khoa học môi trường, Công nghệ - Kỹ thuật, Quản trị kinh doanh.",
  },
  {
    id: 3,
    title: "Chất lượng cuộc sống cao",
    description:
      "Canada luôn đứng đầu danh sách những quốc gia đáng sống trên thế giới. Khi theo học tại Canada, bạn sẽ được hưởng tất cả các quyền lợi như người dân Canada – tôn trọng nhân quyền, bình đẳng, được tiếp cận các dịch vụ chăm sóc sức khỏe và giáo dục của đất nước này",
  },
  {
    id: 3,
    title: "Chính sách định cư dành cho du học sinh",
    description:
      "Canada có rất nhiều chính sách khuyến khích du học sinh quốc tế ở lại làm việc và định cư ở Canada lâu dài sau khi tốt nghiệp.",
  },
];

const studyAbroad2 = [
  {
    id: 1,
    title:
      "Canadian Experience Class (Chương trình Kinh nghiệm làm việc Liên Bang)",
    description:
      "Chương trình dành cho những công nhân lành nghề có kinh nghiệm làm việc tại Canada và muốn trở thành thường trú nhân. Bạn phải có 3 năm kinh nghiệm làm việc vào thời điểm nộp đơn.",
  },
  {
    id: 2,
    title: "Công nhân lành nghề liên bang Program (Tay nghề kỹ năng Liên bang)",
    description:
      "Chương trình dành cho những lao động lành nghề có kinh nghiệm làm việc ở nước ngoài muốn nhập cư vào Canada lâu dài.",
  },
  {
    id: 3,
    title:
      "Thương mại tay nghề liên bangs Program (Tay nghề nhóm thợ Liên bang)",
    description:
      "Chương trình dành cho những công dân lao động tay nghề cao trong một ngành thương mại lành nghề mong muốn trở thành thường trú nhân tại Canada.",
  },
];

const studyAbroad3 = [
  {
    id: 1,
    title: "Chính sách định cư diện du học bang Alberta",
    description:
      "Chương trình đề cử người nhập cư Ontario (OINP) là chương trình nhập cư dành cho những người có kỹ năng và kinh nghiệm ở bang Ontario. Đây là chương trình dành cho cá nhân lao động nước ngoài, du học sinh quốc tế và những cá nhân có trình độ học vấn, kinh nghiệm phù hợp.",
  },
  {
    id: 2,
    title: "Chính sách định cư diện du học bang Saskatchewan",
    description:
      "Saskatchewan là một trong những tỉnh bang tại Canada có chính sách định cư hấp dẫn, điển hình là Chương trình đề cử nhập cư Saskatchewan (SINP). Chương trình này dành cho những ứng viên tiềm năng có kinh nghiệm và tay nghề cao nộp đơn xin thường trú nhân tại Canada. Thời gian và tỉ lệ xét duyệt hồ sơ cũng cao hơn so với những chương trình khác.",
  },
  {
    id: 3,
    title: "Chính sách định cư diện du học bang Ontario",
    description:
      "Chương trình nhập cư Alberta Advantage Immigration Program (AAIP) là một chương trình đề cử định cư cho những cá nhân thường trú tại Alberta. Cũng như các tỉnh bang khác, Alberta mong muốn thu hút nguồn nhân lực từ nhiều quốc gia khác và cả du học sinh quốc tế nhằm đáp ứng nhu cầu phát triển kinh tế của tỉnh bang.",
  },
  {
    id: 4,
    title: "Chương trình nhập cư Đại tây dương (Atlantic Immigration Program)",
    description:
      "Chương trình Nhập cư Đại Tây Dương (Atlantic Immigration Program) dành cho những người lao động nước ngoài có tay nghề cao và sinh viên quốc tế tốt nghiệp từ một trường Đại học tại 4 tỉnh New Brunswick, Nova Scotia, Prince Edward Island và Newfoundland - Labrador.",
  },
];
