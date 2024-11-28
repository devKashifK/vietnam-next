import Container from "@/components/ui/container";
import { List, UL } from "@/components/ui/list";
import Title from "@/components/ui/Title";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { join } from "path";
import React from "react";

export default function page() {
  return (
    <Container>
      <Link
        href={job.link}
        key={job.id}
        className={cn(
          " rounded-lg shadow-lg overflow-hidden",
          "bg-gradient-to-br from-blue-100 to-purple-200"
        )}
      >
        <div className="p-6 flex flex-col gap-3">
          <div className="flex items-center mb-4">
            <div className="flex flex-col gap-2">
              {/* <span className="text-xl font-semibold ml-4">
                {job.translation}
              </span> */}
              <span className="text-highlight">Việc làm tại Canada</span>
              <h3 className="text-xl font-semibold ">{job.title}</h3>
              <p>{job.details.description}</p>
              <p>
                Chúng tôi đang tuyển dụng 10 Đầu Bếp Món Âu có kinh nghiệm để
                gia nhập đội ngũ của chúng tôi. Ứng viên lý tưởng cần có kinh
                nghiệm chế biến đa dạng các món ăn kiểu Âu, đảm bảo tiêu chuẩn
                chất lượng cao và duy trì một gian bếp sạch sẽ, hiệu quả.
              </p>
              <span>
                <strong>Kinh Nghiệm:</strong> Tối thiểu 1 năm kinh nghiệm làm
                Đầu Bếp Món Âu.
              </span>
              <span>
                <strong> Trình Độ Tiếng Anh: </strong> Tương đương CLB 4 trở
                lên.
              </span>
              <span>
                <strong> Lộ Trình Định Cư: </strong> Vị trí này mang lại cơ hội
                xin thường trú cho ứng viên và gia đình thông qua Chương trình
                Đề cử Tỉnh bang Saskatchewan (SINP).
              </span>
              <span>Việc làm thật! Hãy liên hệ iCanPR để được tư vấn thêm</span>
            </div>
          </div>
        </div>
      </Link>
    </Container>
  );
}

const job = {
  id: 1,
  link: "https://icanpr.zohorecruit.com/jobs/Careers/777018000000521548/63200-Cooks-Th%E1%BB%A3-n%E1%BA%A5u-%C4%83n-b%E1%BA%BFp?source=CareerSite",
  title: "Đầu Bếp Món Âu (Continental Cooks)",
  locations: ["Moose Jaw", "Regina", "Saskatoon"],
  program: "Chương Trình Đề Cử Tỉnh Bang SINP",
  details: {
    description:
      "Nếu bạn có 1 năm kinh nghiệm, tiếng anh tương đương CLB 5, hãy nộp hồ sơ. Chúng tôi sẽ liên hệ bạn nếu hồ sơ bạn được chọn qua vòng sơ khảo.",
    hiring:
      "Chúng tôi đang tuyển dụng 10 Đầu Bếp Món Âu có kinh nghiệm để gia nhập đội ngũ của chúng tôi.",
    responsibilities: [
      "Chế biến đa dạng các món ăn kiểu Âu.",
      "Đảm bảo tiêu chuẩn chất lượng cao.",
      "Duy trì một gian bếp sạch sẽ, hiệu quả.",
    ],
  },
  requirements: [
    "Tối thiểu 1 năm kinh nghiệm làm Đầu Bếp Món Âu.",
    "Tương đương CLB 4 trở lên.",
  ],
  benefits: [
    "Vị trí này mang lại cơ hội xin thường trú cho ứng viên và gia đình thông qua Chương trình Đề cử Tỉnh bang Saskatchewan (SINP).",
  ],
  contact: "Hãy liên hệ iCanPR để được tư vấn thêm.",
  vacancies: 10,
  authenticJob: true,
};
