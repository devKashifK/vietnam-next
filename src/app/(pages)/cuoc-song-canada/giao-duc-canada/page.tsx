import Container from "@/components/ui/container";
import { getDataBySlug } from "@/components/ui/dynamic-component";
import { DynamicComponent } from "@/components/ui/dynamic-component";
import React, { use } from "react";

// export default function Education({ slug }) {
//   const pageData = use(getDataBySlug("giao-duc-canada"));

//   // Check if pageData and pageData.content are available
//   if (!pageData) return <p>Loading...</p>;
//   if (!pageData.content || !Array.isArray(pageData.content)) {
//     console.error("No content array found in pageData:", pageData); // Log error details
//     return <p>No components to display</p>;
//   }

//   return (
//     <div className="flex flex-col gap-10">
//       {pageData.content.map(
//         (componentData, index) => (
//           console.log(componentData, "componentData"),
//           (<DynamicComponent key={index} data={componentData} />)
//         )
//       )}
//     </div>
//   );
// }

export default function Education() {
  return (
    <Container className="py-20">
      {studyInCanadaInfo.map((info, index) => (
        <div key={index} className="mb-8 flex flex-col gap-20">
          {Object.entries(info).map(([key, section]) => (
            <div key={key} className="mb-6 pl-4  border-l-4 border-highlight">
              <h2 className="text-3xl font-bold mb-4 text-left">
                {section.title}
              </h2>

              <p className="text-lg text-gray-700 mb-4 text-left">
                {section.content}
              </p>

              {section.subsections &&
                Object.entries(section.subsections).map(
                  ([subKey, subsection]) => (
                    <div key={subKey} className="">
                      <h3 className="text-2xl font-semibold mb-2 text-left">
                        {subsection.title}
                      </h3>
                      <p className="text-lg text-gray-600 text-left">
                        {subsection.content}
                      </p>
                    </div>
                  )
                )}
            </div>
          ))}
        </div>
      ))}
    </Container>
  );
}

const studyInCanadaInfo = [
  {
    WhyStudyInCanada: {
      title: "Tại sao học đại học tại Canada?",
      content:
        "Hầu hết đại học tại Canada cung cấp chương trình Co-op, hỗ trợ học sinh lấy được kinh nghiệm làm việc xen kẻ với năm học để có thể học ngoài lớp học. Khác với các chương trình thực tập, chương trình Co-op là một liên kết giữa trường học, công ty, và sinh viên, giúp sinh viên có thể tìm kiếm kinh nghiệm dễ dàng hơn mà không làm ảnh hưởng tới năm học, với bằng cấp Co-op đặc biệt khi tốt nghiệp. Ngoài ra, với một môi trường thân thiện và văn hoá đa dạng, sinh viên quốc tế tại Canada có thể dễ dàng thích nghi với môi trường mới và kết nối với nhiều người đến từ nhiều nơi khác nhau.",
    },
    EducationSystem: {
      title:
        "Điều gì về hệ thống giáo dục tại Canada đã thu hút hơn 1,000,000 học sinh quốc tế?",
      content:
        "Tuy nhiên trách nhiệm giáo dục thuộc về các tỉnh và lãnh thổ riêng, với một số khác biệt giữa các hệ thống giáo dục tại các vùng khác nhau, Canada có một số tiêu chuẩn về giáo dục đã được đưa ra ở toàn quốc, và nó bao gồm các tiêu chuẩn dành cho giáo dục mầm non, tiểu học, trung học, và sau trung học. Canada nhấn mạnh một nền giáo dục toàn diện, từ các môn học thuật đến các môn phi học thuật, khuyến khích học sinh tham gia vào một cộng đồng lớn và giành được tư duy phản biện. Với một nền văn hoá đa dạng và con người thân thiện, tăng cường chất lượng cuộc sống của học sinh, Canada là một nơi được lựa chọn bởi nhiều học sinh quốc tế vì môi trường dễ thích nghi của đất nước.",
      subsections: {
        Ranking: {
          title: "Bảng xếp hạng",
          content:
            "Bảng xếp hạng US News and Report đã cho rằng Canada là một trong bốn những quốc gia có hệ thống giáo dục tốt nhất thế giới, và hiện nay có hơn 1,000,000 học sinh quốc tế đang tìm kiếm cơ hội học tập tại đây.",
        },
      },
    },
    VietnameseStudentAssociation: {
      title: "Vietnamese Student Association (VSA)",
      content:
        "Ở các trường đại học tại Canada, các sinh viên người Việt, bao gồm cả học sinh quốc tế và học sinh trong nước, thường tụ tập tại câu lạc bộ trường được gọi là Vietnamese Student Association. VSA thường sẽ tổ chức các sự kiện để sinh viên có thể giao tiếp và kết bạn với những sinh viên người Việt khác , cũng như tổ chức sự kiện vào các ngày lễ Việt Nam để họ có thể kết nối lại với truyền thống nước nhà.",
    },
    InternationalStudentCommunity: {
      title: "Cộng Đồng Học Sinh Quốc Tế",
      content:
        "Canada đứng hạng 3 trên thế giới là điểm đến nhiều nhất của các học sinh quốc tế. Với hơn 1 triệu học sinh quốc tế, cộng đồng học sinh quốc tế tại Canada vô cùng đa dạng, với nhiều người có nguồn gốc từ khắp mọi nơi trên thế giới, bao gồm cả Ấn Độ, Trung Quốc, Philippines, Pháp, Nigeria, Iran, Hàn Quốc, Việt Nam, Mexico, và Mỹ.",
    },
  },
];
