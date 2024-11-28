import React from "react";
import Container from "./container";
import Title from "./Title";
import HoverCard from "./hover-card";

// export default function OurService() {
//   return (
//     <Container>
//       <Title title={"Dịch vụ nổi bật của ICanPR"} />
//       <div className="flex flex-col gap-1 lg:flex-row lg:gap-2 ">
//         {ourService.map((item, index) => (
//           <HoverCard
//             className=""
//             title={item.title}
//             description={item.description}
//             key={index}
//           />
//         ))}
//       </div>
//     </Container>
//   );
// }

import { Heart, GraduationCap, Briefcase, MapPin } from "lucide-react";
import Link from "next/link";

// const services = [
//   {
//     icon: <MapPin className="h-8 w-8 text-white" />,
//     title: "Định cư Canada",
//     description: "Chọn Canada để định cư là một quyết định thay đổi cuộc đời. Canada nổi tiếng với chất lượng cuộc sống, sự đa dạng văn hóa và hứa hẹn nhiều cơ hội. Hãy cùng tìm kiếm lựa chọn phù hợp nhất cho gia đình bạn."
//   },
//   {
//     icon: <Briefcase className="h-8 w-8 text-white" />,
//     title: "Làm việc tại Canada",
//     description: "Canada với nhiều cơ hội việc làm đa dạng, thúc đẩy sự phát triển nghề nghiệp và trải nghiệm toàn cầu. Là một quốc gia phồn thịnh và thân thiện đang chào đón các chuyên gia có kỹ năng và người lao động thời vụ."
//   },
//   {
//     icon: <GraduationCap className="h-8 w-8 text-white" />,
//     title: "Du học tại Canada",
//     description: "Học tập tại Canada chắc chắn mang đến cho bạn một giáo dục hàng đầu thế giới, sự đa dạng văn hóa phong phú và một lối đi tới tương lai đầy triển vọng, tất cả trong một môi trường thân thiện và mở cửa, đón nhận sự đa dạng."
//   },
//   {
//     icon: <Heart className="h-8 w-8 text-white" />,
//     title: "Bảo Lãnh",
//     description: "Với kiến thức chuyên sâu về luật di trú và quy trình đoàn tụ gia đình tại Canada, chúng tôi cam kết hỗ trợ bạn trong việc kết nối với người thân yêu của mình, tạo nên những khoảnh khắc đáng trân trọng và ấm áp tại Canada."
//   }
// ]

export default function OurService() {
  return (
    <Container effect="none" className="w-full py-16 ">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Dịch vụ nổi bật của ICanPR
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ourService.map((service, index) => (
            <Link
              href={service.ctaLink}
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div
                    className={`w-16 h-16 rounded-lg flex items-center justify-center ${getGradientClass(
                      index
                    )}`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold ml-4">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
}

function getGradientClass(index) {
  const gradients = [
    "bg-gradient-to-br from-blue-500 to-purple-600",
    "bg-gradient-to-br from-green-500 to-teal-600",
    "bg-gradient-to-br from-yellow-500 to-orange-600",
    "bg-gradient-to-br from-pink-500 to-red-600",
  ];
  return gradients[index % gradients.length];
}

const ourService = [
  {
    id: "settle-in-canada",
    icon: <MapPin className="h-8 w-8 text-white" />,
    title: "Định cư Canada",
    description:
      "Chọn Canada để định cư là một quyết định thú vị và thay đổi cuộc đời. Canada nổi tiếng với chất lượng cuộc sống, sự đa dạng văn hóa và hứa hẹn nhiều cơ hội. Hãy cùng tìm kiếm lựa chọn định cư phù hợp nhất cho gia đình bạn!",
    ctaText: "Tìm hiểu thêm",
    ctaLink: "/immigration/dinh-cu-canada",
  },
  {
    id: "work-in-canada",
    title: "Làm việc tại Canada",
    icon: <Briefcase className="h-8 w-8 text-white" />,
    description:
      "Canada với nhiều cơ hội việc làm đa dạng, thúc đẩy sự phát triển nghề nghiệp và trải nghiệm toàn cầu. Là một quốc gia phồn thịnh và thân thiện đang chào đón các chuyên gia có kỹ năng và người lao động thời vụ.",
    ctaText: "Khám phá cơ hội",
    ctaLink: "/immigration/nhap-canh-nhanh/cong-nhan-lanh-nghe-lien-bang",
  },
  {
    id: "study-in-canada",
    icon: <GraduationCap className="h-8 w-8 text-white" />,
    title: "Du học tại Canada",
    description:
      "Học tập tại Canada chắc chắn mang đến cho bạn một giáo dục hàng đầu thế giới, sự đa dạng văn hóa phong phú và một lối đi tới tương lai đầy triển vọng, tất cả trong một môi trường thân thiện và mở cửa, đón nhận sự đa dạng.",
    ctaText: "Tìm hiểu chương trình",
    ctaLink: "/immigration/du-hoc-dinh-cu",
  },
  {
    id: "family-sponsorship",
    icon: <Heart className="h-8 w-8 text-white" />,
    title: "Bảo Lãnh",
    description:
      "Với kiến thức chuyên sâu về luật di trú và quy trình đoàn tụ gia đình tại Canada, chúng tôi cam kết hỗ trợ bạn trong việc kết nối và tái hợp với người thân yêu của mình, tạo nên những khoảnh khắc đáng trân trọng và ấm áp tại Canada.",
    ctaText: "Xem thêm chi tiết",
    ctaLink: "/immigration/family-sponsorship",
  },
];
