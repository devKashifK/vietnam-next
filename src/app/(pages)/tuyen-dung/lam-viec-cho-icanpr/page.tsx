import Container from "@/components/ui/container";
import { List, UL } from "@/components/ui/list";
import Title from "@/components/ui/Title";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function WorkFor() {
  return (
    <Container>
      <Title
        titleClassName="lg:text-left text-left"
        descriptionClassName="lg:text-center lg:w-full"
        subtitle="Tuyển dụng"
        title="iCanPR đang cần tuyển nhiều vị trí"
        description="Nếu bạn có 3 năm kinh nghiệm, giao tiếp tốt bằng tiếng Anh & tiếng Việt, hãy nộp hồ sơ và gia nhập gia đình iCanPR. Cùng nhau, chúng ta sẽ giúp nhiều gia định Việt Nam hiện thực giấc mơ đến Canada sinh sống, làm việc, học tập, trở thành thường trú dân Canada & công dân Canada theo lộ trình nhanh chóng và an toàn nhất"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
        {positions.map((position, index) => (
          <Link
            href={position.link}
            key={position.id}
            className={cn(
              " rounded-lg shadow-lg overflow-hidden",
              getLightGradientClass(index)
            )}
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold ml-4">
                    {position.title}
                  </h3>
                  <h3 className="text-xl font-semibold ml-4">
                    {position.translation}
                  </h3>
                </div>
              </div>
              <UL className="flex flex-col gap-2">
                {position.responsibilities.map((responsibility, index) => (
                  <List key={index} className="text-sm">
                    {responsibility}
                  </List>
                ))}
              </UL>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
}

function getLightGradientClass(index) {
  const lightGradients = [
    "bg-gradient-to-br from-blue-100 to-purple-200",
    "bg-gradient-to-br from-green-100 to-teal-200",
    "bg-gradient-to-br from-yellow-100 to-orange-200",
    "bg-gradient-to-br from-pink-100 to-red-200",
    "bg-gradient-to-br from-indigo-100 to-cyan-200",
    "bg-gradient-to-br from-lime-100 to-emerald-200",
  ];
  return lightGradients[index % lightGradients.length];
}

const positions = [
  {
    id: 1,
    link: "https://icanpr.zohorecruit.com/jobs/Careers/777018000000537001/Senior-Document-Processing---Nh%C3%A2n-vi%C3%AAn-x%E1%BB%AD-l%C3%BD-h%E1%BB%93-s%C6%A1-di-tr%C3%BA-c%C3%B3-kinh-nghi%E1%BB%87m?source=Website",
    title: "Senior Document Processing",
    translation: "Chuyên viên xử lý hồ sơ di trú",
    responsibilities: [
      "Tiếp nhận, kiểm tra và xử lý hồ sơ di trú cho khách hàng theo các chương trình di trú của Canada.",
      "Hỗ trợ khách hàng trong quá trình chuẩn bị tài liệu và hoàn thiện các biểu mẫu liên quan đến các chương trình di trú.",
      "Theo dõi tiến trình hồ sơ, phối hợp với các bên liên quan để đảm bảo hồ sơ được xử lý đúng thời hạn.",
      "Cập nhật và tư vấn cho khách hàng về các chính sách và quy định di trú mới nhất của Canada.",
      "Xây dựng và duy trì mối quan hệ tốt với khách hàng, hỗ trợ khách hàng trong suốt quá trình di trú.",
      "Phối hợp với các chuyên gia di trú và luật sư để xử lý các trường hợp phức tạp.",
    ],
  },
  {
    id: 2,
    link: "https://jobs.icanpr.vn/jobs/Careers/777018000000501372/iCanPR---Senior-Immigration-Consultant---Chuy%C3%AAn-vi%C3%AAn-t%C6%B0-v%E1%BA%A5n-kh%C3%A1ch-h%C3%A0ng?source=CareerSite&_gl=1*1sjs1t4*_gcl_au*MTczMTExMTU1LjE3MzI0MzY4Mjg.*_ga*MTQ3MzA1NTgxMi4xNzMyNDM2ODI4*_ga_TX3KMBH1DT*MTczMjc3ODgyOC43LjEuMTczMjc4MDA1MS4wLjAuMA..",
    title: "Senior Sales Consultation",
    translation: "Chuyên viên tư vấn khách hàng",
    responsibilities: [
      "Tư vấn cho khách hàng về các chương trình di trú, điều kiện và quy trình nộp hồ sơ.",
      "Giải đáp thắc mắc và cung cấp thông tin chính xác cho khách hàng.",
      "Tìm kiếm và tiếp cận khách hàng tiềm năng thông qua các kênh khác nhau như mạng xã hội, sự kiện, hội thảo, và đối tác liên kết.",
      "Duy trì và phát triển mối quan hệ với khách hàng hiện tại và khách hàng tiềm năng.",
      "Hỗ trợ khách hàng trong quá trình chuẩn bị hồ sơ di trú.",
      "Đảm bảo hồ sơ của khách hàng được nộp đúng hạn và theo dõi tiến độ xử lý hồ sơ.",
      "Đề xuất các biện pháp cải thiện quy trình làm việc và nâng cao chất lượng dịch vụ.",
    ],
  },
  {
    id: 3,
    link: "https://icanpr.zohorecruit.com/jobs/Careers/777018000000617036/iCanPR---Business-Development-Manager-%E2%80%93-HCMC?source=CareerSite",
    title: "Business Development Manager",
    translation: "Quản lý phát triển thị trường - phía Nam",
    responsibilities: [
      "Phát triển và thực hiện chiến lược kinh doanh nhằm mở rộng mạng lưới khách hàng và đối tác tại khu vực phía Nam Việt Nam.",
      "Xây dựng và quản lý mối quan hệ với các đối tác, doanh nghiệp, và khách hàng tiềm năng.",
      "Nghiên cứu thị trường, phân tích xu hướng và đưa ra các chiến lược phát triển sản phẩm và dịch vụ phù hợp với nhu cầu của thị trường.",
      "Đề xuất các phương án phát triển kinh doanh mới, xác định các cơ hội hợp tác chiến lược với đối tác địa phương.",
      "Quản lý và đào tạo đội ngũ kinh doanh, đảm bảo hiệu quả làm việc và hoàn thành chỉ tiêu doanh thu.",
      "Phối hợp chặt chẽ với các phòng ban liên quan để triển khai các chiến dịch marketing, PR và bán hàng.",
      "Theo dõi và đánh giá kết quả kinh doanh, lập báo cáo định kỳ và đưa ra giải pháp cải thiện khi cần thiết.",
    ],
  },
  {
    id: 4,
    link: "https://icanpr.zohorecruit.com/jobs/Careers/777018000000617007/iCanPR---Business-Development-intern-%E2%80%93-HCMC?source=CareerSite",
    title: "Business Development Intern",
    translation: "Thực tập phòng Phát triển thị trường",
    locations: ["Hà Nội", "Hồ Chí Minh"],
    responsibilities: [
      "Nghiên cứu, phân tích thị trường định cư tại các quốc gia ngoài Canada.",
      "Xây dựng danh sách các đối tác tiềm năng, cơ hội kinh doanh và đề xuất phương án phát triển thị trường.",
      "Hỗ trợ lên kế hoạch và thực hiện các chiến lược tiếp cận thị trường mới.",
      "Tạo và duy trì mối quan hệ với các đối tác, khách hàng tiềm năng.",
      "Tham gia xây dựng, phát triển các chương trình marketing, quảng bá dịch vụ định cư quốc tế.",
      "Báo cáo định kỳ kết quả nghiên cứu, tình hình phát triển thị trường và các đề xuất cải tiến.",
    ],
  },
  {
    id: 5,
    link: "https://icanpr.zohorecruit.com/jobs/Careers/777018000000537001/Senior-Document-Processing---Nh%C3%A2n-vi%C3%AAn-x%E1%BB%AD-l%C3%BD-h%E1%BB%93-s%C6%A1-di-tr%C3%BA-c%C3%B3-kinh-nghi%E1%BB%87m?source=Website",
    title: "Digital Marketing",
    translation: "Chuyên viên tiếp thị số",
    responsibilities: [
      "Lên kế hoạch, triển khai và tối ưu hóa các chiến dịch digital marketing trên các kênh trực tuyến như SEO, SEM, Google Ads, Facebook Ads, LinkedIn Ads, YouTube và Email Marketing.",
      "Phân tích hiệu quả chiến dịch thông qua các công cụ phân tích dữ liệu như Google Analytics, Facebook Insights, và báo cáo kết quả cho cấp quản lý.",
      "Xây dựng và quản lý nội dung trên các kênh truyền thông xã hội, website và blog của công ty, đảm bảo tối ưu hóa SEO để thu hút lưu lượng truy cập tự nhiên.",
      "Phối hợp với các bộ phận liên quan để tạo ra các chiến dịch truyền thông tích hợp và sáng tạo nhằm tăng cường sự nhận diện thương hiệu và chuyển đổi khách hàng tiềm năng.",
      "Theo dõi và phân tích xu hướng thị trường, hành vi người dùng và hiệu suất của các kênh tiếp thị để đưa ra những điều chỉnh phù hợp và tối ưu hóa chiến lược tiếp thị.",
      "Đề xuất các phương án cải thiện trải nghiệm người dùng trên website và các nền tảng trực tuyến khác của công ty.",
      "Quản lý ngân sách cho các chiến dịch digital marketing, đảm bảo đạt được kết quả tối ưu trong giới hạn ngân sách.",
    ],
  },
];
