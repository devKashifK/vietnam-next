import Container from "@/components/ui/container";
import Title from "@/components/ui/Title";
import React from "react";

export default function FaqUseful() {
  return (
    <Container className="py-10 flex flex-col gap-20 justify-start items-start">
      {immigrationProgramsConfig.map((program, index) => (
        <div key={index} className="mb-8">
          <Title className="text-3xl font-bold mb-4" title={program.title} />
          <div className="flex flex-col gap-2 mt-2">
            {program.content.map((line, idx) => (
              <p key={idx} className="text-lg text-left text-gray-700 mb-2">
                {line}
              </p>
            ))}
          </div>
        </div>
      ))}
    </Container>
  );
}

const immigrationProgramsConfig = [
  {
    title: "Những chương trình định cư phổ biến tại Canada",
    content: [
      "Canada có nhiều chương trình định cư khác nhau, bao gồm:",
      "- **Express Entry**: Chương trình dành cho lao động có kỹ năng cao, bao gồm ba diện chính là Công nhân lành nghề liên bang, Thương mại tay nghề liên bangs, và Canadian Experience Class.",
      "- **Provincial Nominee Program (PNP)**: Chương trình đề cử tỉnh bang, cho phép các tỉnh bang và vùng lãnh thổ đề cử những ứng viên đáp ứng nhu cầu kinh tế và lao động của họ.",
      "- **Family Sponsorship**: Chương trình bảo lãnh gia đình, cho phép công dân và thường trú nhân Canada bảo lãnh người thân sang định cư.",
      "- **Startup Visa Program**: Dành cho những doanh nhân có ý tưởng kinh doanh sáng tạo và nhận được sự hỗ trợ từ các tổ chức được chỉ định tại Canada.",
      "Và nhiều chương trình khác.",
    ],
  },
  {
    title: "Điều kiện để tham gia chương trình Express Entry là gì?",
    content: [
      "- **Tuổi tác**: Không có giới hạn tuổi tác nhưng điểm số sẽ giảm nếu bạn trên 30 tuổi.",
      "- **Trình độ học vấn**: Phải có bằng cấp từ một tổ chức giáo dục được công nhận.",
      "- **Kinh nghiệm làm việc**: Tối thiểu một năm kinh nghiệm làm việc toàn thời gian trong ngành nghề thuộc danh sách NOC (National Occupational Classification).",
      "- **Kỹ năng ngôn ngữ**: Phải đạt điểm tối thiểu trong các kỳ thi ngôn ngữ (IELTS, CELPIP cho tiếng Anh; TEF, TCF cho tiếng Pháp).",
      "- **Tình trạng tài chính**: Phải chứng minh có đủ tài chính để sinh sống tại Canada trong thời gian đầu.",
    ],
  },
  {
    title: "Quá trình bảo lãnh gia đình như thế nào?",
    content: [
      "- **Người bảo lãnh phải là công dân hoặc thường trú nhân Canada**: Có thể bảo lãnh vợ/chồng, con cái phụ thuộc, cha mẹ, ông bà.",
      "- **Chứng minh tài chính**: Người bảo lãnh phải chứng minh có đủ khả năng tài chính để hỗ trợ người được bảo lãnh.",
      "- **Nộp đơn bảo lãnh**: Gồm hai phần, đơn bảo lãnh của người bảo lãnh và đơn xin thường trú của người được bảo lãnh.",
      "- **Chờ xét duyệt**: Quá trình xét duyệt có thể kéo dài từ vài tháng đến vài năm tùy thuộc vào loại hồ sơ và quốc gia của người được bảo lãnh.",
    ],
  },
  {
    title: "Các chi phí liên quan đến việc định cư tại Canada?",
    content: [
      "- **Lệ phí nộp hồ sơ**: Lệ phí xử lý hồ sơ di trú, thường dao động từ vài trăm đến vài ngàn CAD.",
      "- **Chi phí dịch thuật và chứng nhận giấy tờ**: Bao gồm chi phí dịch thuật và chứng nhận các giấy tờ cần thiết.",
      "- **Chi phí khám sức khỏe**: Yêu cầu khám sức khỏe theo quy định của IRCC.",
      "- **Chi phí sinh hoạt ban đầu**: Phải chứng minh có đủ tài chính để sinh sống trong thời gian đầu tại Canada, số tiền này phụ thuộc vào số lượng thành viên trong gia đình.",
    ],
  },
  {
    title: "Thời gian xử lý hồ sơ định cư là bao lâu?",
    content: [
      "- **Express Entry**: Thường từ 6 đến 12 tháng.",
      "- **PNP**: Thời gian có thể từ 12 đến 18 tháng hoặc hơn.",
      "- **Family Sponsorship**: Thường từ 12 đến 24 tháng.",
    ],
  },
  {
    title:
      "Sau khi trở thành thường trú nhân, bao lâu tôi có thể xin quốc tịch Canada?",
    content: [
      "- **Là thường trú nhân**: Phải giữ tư cách thường trú nhân.",
      "- **Sinh sống tại Canada**: Đã sống tại Canada ít nhất 3 trong 5 năm trước khi nộp đơn xin quốc tịch.",
      "- **Đáp ứng các yêu cầu khác**: Bao gồm kiến thức về Canada, tiếng Anh hoặc tiếng Pháp, và không vi phạm pháp luật.",
    ],
  },
  {
    title: "RCIC là gì và vai trò của RCIC trong quá trình định cư?",
    content: [
      "RCIC (Regulated Canadian Immigration Consultant) là những chuyên gia tư vấn di trú Canada đã được cấp phép và quy định bởi Hội đồng Tư vấn Di trú Canada (CICC). Vai trò của RCIC trong quá trình định cư bao gồm:",
      "- **Tư vấn**: Cung cấp thông tin và tư vấn về các chương trình định cư phù hợp với hồ sơ của bạn.",
      "- **Hỗ trợ nộp hồ sơ**: Giúp bạn chuẩn bị và nộp hồ sơ đúng cách, đảm bảo tuân thủ các quy định của Bộ Di trú, Tị nạn và Quốc tịch Canada (IRCC).",
      "- **Theo dõi hồ sơ**: Theo dõi tình trạng hồ sơ và làm việc với IRCC thay mặt bạn.",
      "- **Giải quyết vấn đề**: Giúp giải quyết các vấn đề phát sinh trong quá trình xử lý hồ sơ.",
    ],
  },
  {
    title: "Tôi có cần một RCIC để nộp hồ sơ định cư không?",
    content: [
      "Không bắt buộc phải có RCIC để nộp hồ sơ định cư Canada. Tuy nhiên, việc sử dụng RCIC có thể giúp bạn:",
      "- **Tiết kiệm thời gian và công sức**: RCIC có kinh nghiệm và kiến thức chuyên môn để xử lý hồ sơ nhanh chóng và hiệu quả.",
      "- **Giảm nguy cơ sai sót**: RCIC đảm bảo hồ sơ của bạn được nộp đúng cách và đầy đủ, giảm nguy cơ bị từ chối do thiếu sót hoặc sai sót.",
      "- **Hỗ trợ chuyên môn**: RCIC có thể giải quyết các vấn đề phức tạp và đưa ra các giải pháp tốt nhất cho trường hợp của bạn.",
    ],
  },
];
