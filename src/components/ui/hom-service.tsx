import React from "react";
import Container from "./container";
import Title from "./Title";
import Link from "next/link";
import { Heart, GraduationCap, Briefcase, MapPin, ArrowRight } from "lucide-react";

export default function OurService() {
  return (
    <section className="w-full py-12 bg-[#FAFAF8]">
      <Container>
        <div className="flex flex-col gap-10 px-4 md:px-6 mx-auto">
          <Title title="Dịch vụ nổi bật của ICanPR" className="text-left mb-4 text-3xl md:text-4xl font-extrabold text-[#6B3F1D]" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {ourService.map((service, index) => (
              <Link
                href={service.ctaLink}
                key={index}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center text-white text-2xl shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl bg-highlight"
                    >
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#6B3F1D] mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-base mb-4 flex-1">{service.description}</p>
                  <div className="flex items-center mt-auto">
                    <span className="text-highlight font-semibold text-sm mr-2 group-hover:underline">{service.ctaText}</span>
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#F3EDE7] text-[#6B3F1D] shadow transition group-hover:bg-[#e5dacb] group-hover:translate-x-1">
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

const ourService = [
  {
    id: "settle-in-canada",
    icon: <MapPin className="h-8 w-8" />,
    title: "Định cư Canada",
    description:
      "Chọn Canada để định cư là một quyết định thú vị và thay đổi cuộc đời. Canada nổi tiếng với chất lượng cuộc sống, sự đa dạng văn hóa và hứa hẹn nhiều cơ hội. Hãy cùng tìm kiếm lựa chọn định cư phù hợp nhất cho gia đình bạn!",
    ctaText: "Tìm hiểu thêm",
    ctaLink: "/immigration/dinh-cu-canada",
  },
  {
    id: "work-in-canada",
    title: "Làm việc tại Canada",
    icon: <Briefcase className="h-8 w-8" />,
    description:
      "Canada với nhiều cơ hội việc làm đa dạng, thúc đẩy sự phát triển nghề nghiệp và trải nghiệm toàn cầu. Là một quốc gia phồn thịnh và thân thiện đang chào đón các chuyên gia có kỹ năng và người lao động thời vụ.",
    ctaText: "Khám phá cơ hội",
    ctaLink: "/immigration/nhap-canh-nhanh/cong-nhan-lanh-nghe-lien-bang",
  },
  {
    id: "study-in-canada",
    icon: <GraduationCap className="h-8 w-8" />,
    title: "Du học tại Canada",
    description:
      "Học tập tại Canada chắc chắn mang đến cho bạn một giáo dục hàng đầu thế giới, sự đa dạng văn hóa phong phú và một lối đi tới tương lai đầy triển vọng, tất cả trong một môi trường thân thiện và mở cửa, đón nhận sự đa dạng.",
    ctaText: "Tìm hiểu chương trình",
    ctaLink: "/immigration/du-hoc-dinh-cu",
  },
  {
    id: "family-sponsorship",
    icon: <Heart className="h-8 w-8" />,
    title: "Bảo Lãnh",
    description:
      "Với kiến thức chuyên sâu về luật di trú và quy trình đoàn tụ gia đình tại Canada, chúng tôi cam kết hỗ trợ bạn trong việc kết nối và tái hợp với người thân yêu của mình, tạo nên những khoảnh khắc đáng trân trọng và ấm áp tại Canada.",
    ctaText: "Xem thêm chi tiết",
    ctaLink: "/immigration/family-sponsorship",
  },
];
