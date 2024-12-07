import { Feature } from "@/components/ui/cards-set";
import Container from "@/components/ui/container";
import { truncateTextHeading } from "@/components/ui/newsCard";
import { ServicesCard } from "@/components/ui/services-card";
import Title from "@/components/ui/Title";
import Glass from "@/lib/helpers";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function FedralSkilledTrade() {
  return (
    <>
      <Container effect="none" className="flex flex-col gap-10 py-10">
        {fstData.map((section, index) => (
          <div key={index} className="px-6">
            {/* Section Title */}
            <h2 className="text-2xl font-bold text-black mb-4">
              {section.section}
            </h2>

            {/* Section Content */}
            <div className="flex flex-col gap-6">
              <h3 className="text-xl font-semibold text-black/70">
                {section.title}
              </h3>

              {section.content && (
                <div className="flex flex-col gap-4">
                  {section.content.map((item, i) => (
                    <p key={i} className="text-sm text-black/60">
                      {item}
                    </p>
                  ))}
                </div>
              )}

              {/* Handle Subsections */}
              {section.subsections && (
                <>
                  {section.section === "Các Tỉnh Bang Nhập Cư" ? (
                    <div className="grid grid-cols-3 gap-6 justify-start items-center mb-10">
                      {section.subsections.map((sub, subIndex) => (
                        <div
                          key={subIndex}
                          className="flex border flex-col bg-white shadow-xl py-4 rounded-sm items-center text-center gap-2 "
                        >
                          {/* Icon */}
                          <Icon
                            icon={"ic:outline-star-purple500"}
                            className="w-10 h-10 text-highlight"
                          />
                          {/* Title */}
                          <div className="text-lg text-black/70">
                            {sub.title}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : section.section ===
                    "Chương Trình Lao Động Tay Nghề Liên Bang" ? (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {section.subsections.map((sub, subIndex) => (
                        <ServicesCard
                          key={subIndex}
                          title={sub.title}
                          description={sub.description || ""}
                          readMore={false}
                        />
                      ))}
                    </div>
                  ) : (
                    section.subsections.map((sub, subIndex) => (
                      <div
                        key={subIndex}
                        className="border-t pt-4 mt-4 flex flex-col gap-2"
                      >
                        <h4 className="text-lg font-semibold text-black/80">
                          {sub.title}
                        </h4>
                        {sub.description && (
                          <p className="text-sm text-black/60">
                            {sub.description}
                          </p>
                        )}
                      </div>
                    ))
                  )}
                </>
              )}
            </div>
          </div>
        ))}
      </Container>

      <Container>
        <Glass className="flex gap-2 px-10 py-10">
          <div className="flex-1 flex flex-col gap-2">
            <div className="relative w-max">
              <div className="absolute top-0 left-0 w-6 h-0.5 bg-highlight rounded-md"></div>
              <div className="absolute top-[12px] transform rotate-90 -left-[12px] w-6 h-0.5 bg-highlight rounded-md"></div>

              <div className="px-3 py-1.5">
                <h5 className="tracking-widest text-xl">Nhập cảnh nhanh</h5>
              </div>

              <div className="absolute bottom-0 right-0 w-6 h-0.5 bg-highlight rounded-md"></div>
              <div className="absolute bottom-[12px] transform rotate-90 -right-[12px] w-6 h-0.5 bg-highlight rounded-md"></div>
            </div>
            <div className="flex flex-col justify-start gap-6">
              <h3 className="tracking-wide text-left text-4xl text-black/70">
                Giao dịch tay nghề liên bang
              </h3>

              <p className="text-sm text-black/60 text-left">
                Để đủ điều kiện tham gia Chương trình Giao dịch Tay nghề Liên
                bang (FST) , ứng viên phải có tối thiểu hai năm kinh nghiệm làm
                việc trong một ngành nghề lành nghề trong vòng năm năm qua.
                Ngoài ra , ứng viên có thể được yêu cầu phải có giao dịch giấy
                chứng nhận do một tỉnh hoặc vùng lãnh thổ của Canada cấp.
              </p>
            </div>
          </div>
        </Glass>
      </Container>
      <Container>
        <div className="flex-1 flex flex-col gap-4">
          <Title
            className="px-2 text-left lg:justify-start lg:items-start"
            subtitle="Giao dịch tay nghề liên bang​"
            title={
              <p className="text-4xl text-black/50 w-full text-left pt-3">
                Tiêu chí tối thiểu
              </p>
            }
          />

          <div className="flex flex-col justify-start gap-6">
            <p className="text-sm text-black/60 text-left">
              Để đủ điều kiện, bạn phải đáp ứng tất cả các yêu cầu tối thiểu về
              kinh nghiệm làm việc, lời mời làm việc hoặc giấy chứng nhận về
              trình độ chuyên môn và khả năng ngôn ngữ
            </p>
            <p className="text-sm text-black/60 text-left">
              Trước khi nộp đơn, ứng viên nên xem kỹ chương trình yêu cầu và đảm
              bảo họ đáp ứng được các tiêu chuẩn cần thiết. Ngoài ra, các cá
              nhân trong các ngành nghề có tay nghề cao cũng có thể xem xét tìm
              kiếm việc làm thông qua Chương trình đề cử cấp tỉnh (PNP) nếu một
              tỉnh cụ thể có nhu cầu về kỹ năng của họ.
            </p>
          </div>

          <div className="mt-8">{/* <FAQ /> */}</div>
        </div>
      </Container>
      <Container>
        <div className="flex-1 flex flex-col gap-4">
          <Title
            className="px-2 text-left lg:justify-start lg:items-start"
            subtitle="Nhập cảnh nhanh"
            title={
              <p className="text-4xl text-black/50 w-full text-left pt-3">
                Các yếu tố làm tăng cơ hội nhận được Lời mời nộp hồ sơ (ITA)
                trong Chương trình Express Entry
              </p>
            }
          />

          <div className="flex flex-col justify-start gap-6">
            <p className="text-sm text-black/60 text-left">
              Thông qua Express Entry, ứng viên và gia đình họ có thể tham gia
              và cạnh tranh giành điểm để nhận ITA – Lời mời đăng ký từ chính
              phủ Canada để nhập cư và làm việc tại nước này.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {workersList.map((item, index) => (
              <ServicesCard
                key={index}
                id={item.id}
                title={item.title}
                description={truncateTextHeading(item.description, 30)}
              />
            ))}
          </div>
        </div>
      </Container>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-2 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </Container>
    </>
  );
}

const features = [
  {
    id: 1,
    title: "Đánh giá hồ sơ",
    description:
      "RCIC và nhóm chuyên gia của chúng tôi có thể đánh giá trình độ chuyên môn, kinh nghiệm làm việc và hoàn cảnh cá nhân của bạn để xác định công việc và nhà tuyển dụng tiềm năng của bạn ở Canada.",
    icon: <Icon icon="ooui:user-active" className="text-6xl w-[54px]" />,
  },
  {
    id: 2,
    title: "Chương trình đề cử cấp tỉnh (PNP)",
    description:
      "Chúng tôi có thể tư vấn về PNP và giúp bạn chuẩn bị cho các đề cử cấp tỉnh phù hợp với kinh nghiệm của bạn.",

    icon: (
      <Icon
        icon="material-symbols-light:qr-code-2-rounded"
        className="text-6xl w-[54px]"
      />
    ),
  },
  {
    id: 3,
    title: "Đảm bảo một lời mời làm việc",
    description:
      "Chúng tôi có thể hỗ trợ tìm kiếm việc làm ở Canada. Chúng tôi cũng có thể giúp bạn hiểu các yêu cầu để có được lời mời làm việc hợp lệ, chuẩn bị sơ yếu lý lịch và huấn luyện phỏng vấn.",
    icon: <Icon icon="oui:ml-regression-job" className="text-6xl w-[54px]" />,
  },
  {
    id: 4,
    title: "Đánh giá chứng chỉ giáo dục",
    description:
      "Chúng tôi có thể giúp bạn điều hướng quá trình lấy ECA cho thông tin giáo dục nước ngoài của bạn,",
    icon: (
      <Icon
        icon="streamline:quality-education-solid"
        className="text-6xl w-[54px]"
      />
    ),
  },
];

export const workersList = [
  {
    id: 1,
    title: " Làm việc cho một công ty hoặc tổ chức",
    description:
      "Một lời mời làm việc có thể giúp bạn kiếm thêm điểm trong Hệ thống xếp hạng toàn diện (CRS). Nếu bạn nhận được lời mời làm việc từ một công ty hoặc tổ chức ở Canada, bạn có thể được cộng thêm điểm và tăng khả năng được mời tham gia chương trình",
  },
  {
    id: 2,
    title: "Đề cử từ một tỉnh hoặc vùng lãnh thổ",
    description:
      "Nếu bạn nhận được đề cử từ một tỉnh hoặc vùng lãnh thổ thông qua Chương trình đề cử cấp tỉnh (PNP), điểm CRS của bạn sẽ tăng đáng kể, giúp bạn được ưu tiên nhận lời mời tham gia Express Entry",
  },
  {
    id: 3,
    title: "Lợi thế tiếng Pháp",
    description:
      "Trình độ thông thạo tiếng Pháp, ngoài tiếng Anh, được Canada đánh giá cao. Thể hiện kỹ năng tiếng Pháp vững vàng thông qua các bài kiểm tra được công nhận có thể kiếm thêm điểm trong Hệ thống xếp hạng toàn diện (CRS). Điều này giúp tăng cơ hội nhận được Lời mời đăng ký (ITA) để thường trú tại Canada",
  },
];

const fstData = [
  {
    section: "Tổng Quan Chương Trình FST",
    title: "Chương Trình Lao Động Tay Nghề Liên Bang (FST)",
    content: [
      "Lao động tay nghề (Skilled Worker) nhập cư vào Canada là một chương trình nhập cư của Canada nhằm vào những lao động có trình độ học vấn cao hoặc tay nghề cao, có khả năng giao tiếp bằng tiếng Anh hoặc tiếng Pháp.",
      "Đây là một chương trình nhập cư hấp dẫn, đảm bảo quyền lợi của người lao động với thời gian xét duyệt hồ sơ nhanh chóng.",
      'Năm 2023, Bộ Di trú Canada (IRCC) đã tiếp nhận khoảng 645.420 người nhập cư mỗi năm trong giai đoạn 2021 - 2023. Trong đó, nhóm nhập cư kinh tế chiếm gần 60% tổng số. Các chương trình nhập cư Canada dựa trên kỹ năng chiếm hơn 70% nhóm "Kinh tế".',
      "Theo ông Sean Fraser - Bộ trưởng Bộ Di trú Canada, dự kiến trong năm 2024, Canada sẽ chào đón 465.000 lao động nước ngoài và con số này sẽ tăng lên 500.000 người vào năm 2025. Nỗ lực của Canada nhằm giải quyết tình trạng thiếu hụt lao động nghiêm trọng và đối phó với xu hướng dân số già của quốc gia này.",
    ],
  },
  {
    section: "Nhập Cư Canada Bằng Lao Động Tay Nghề",
    title: "Canada Có Bao Nhiêu Loại Lao Động Tay Nghề?",
    content: [
      "Hiện nay, nhập cư lao động tay nghề Canada được chia thành 3 loại:",
    ],
    subsections: [
      {
        title: "Nhóm Lao Động Tay Nghề Liên Bang",
        description:
          "Chương trình này dành cho các ứng viên có trình độ kỹ thuật cao với chứng chỉ chuyên môn theo danh sách quy định.",
      },
      {
        title: "Nhóm Lao Động Tay Nghề Của Tỉnh Bang Canada",
        description:
          "Chương trình này dành cho các ứng viên không có kinh nghiệm trước đó nhưng có kỹ năng ngôn ngữ ở mức giao tiếp hoặc cao hơn, cùng với khả năng đáp ứng các yêu cầu công việc của nhà tuyển dụng.",
      },
      {
        title: "Chương Trình Tay Nghề Của Riêng Tỉnh Quebec",
        description:
          "Chương trình này có yêu cầu cơ bản như: ít nhất 1 năm kinh nghiệm làm việc trong 3 năm gần đây, công việc phải thuộc ngành nghề chỉ định trong danh mục NOC và trình độ ngôn ngữ tối thiểu CLB *4.",
      },
    ],
  },
  {
    section: "Chương Trình Lao Động Tay Nghề Liên Bang",
    title: "Hệ Thống Express Entry Quản Lý",
    subsections: [
      {
        title: "Federal Skilled Worker Program (FSWP)",
        description:
          "Phù hợp với các ứng viên có trình độ cao và kỹ năng đến từ khắp nơi trên thế giới.",
      },
      {
        title: "Federal Skilled Trades Program (FSTP)",
        description:
          "Dành cho ứng viên có ít nhất 2 năm kinh nghiệm làm việc trong 5 năm gần đây trong một lĩnh vực kỹ thuật với chứng chỉ chuyên môn.",
      },
      {
        title: "Chương Trình Canadian Experience Class (CEC)",
        description:
          "Dành cho các ứng viên có ít nhất 1 năm kinh nghiệm làm việc tại Canada.",
      },
    ],
  },
  {
    section: "Chương Trình Đề Cử Tỉnh Bang (PNP)",
    title: "Canada Provincial Nominee Program",
    content: [
      "Chương trình Đề cử Tỉnh Bang (PNP) là một lựa chọn dành cho lao động tay nghề muốn nhập cư vào Canada và nhận thường trú nhân (PR).",
      "Chương trình này được thiết kế để thúc đẩy kinh tế của các tỉnh bang bằng cách cho phép họ chọn ra các ứng viên có thể đáp ứng nhu cầu lao động. Nếu được chọn, ứng viên có thể nhận đề cử tỉnh bang, hỗ trợ hồ sơ xin PR mà không cần đáp ứng các yêu cầu khắt khe về điểm CRS.",
    ],
  },
  {
    section: "Các Tỉnh Bang Nhập Cư",
    title: "Chương Trình Nhập Cư Tỉnh Bang",
    subsections: [
      { title: "Nhập cư Canada Alberta", icon: "map-pin" },
      { title: "Nhập cư Canada Nova Scotia", icon: "navigation" },
      { title: "Nhập cư Canada Saskatchewan", icon: "map" },
      { title: "Nhập cư Canada Manitoba", icon: "compass" },
      { title: "Nhập cư Canada British Columbia", icon: "globe" },
      { title: "Nhập cư Canada Ontario", icon: "building" },
    ],
  },
  {
    section: "Chương Trình Nhập Cư Khác",
    title: "Các Chương Trình Nhập Cư Đặc Biệt",
    subsections: [
      {
        title: "Chương Trình Nhập Cư Đại Tây Dương",
        description:
          "Áp dụng cho 4 tỉnh: Newfoundland and Labrador, New Brunswick, Đảo Hoàng Tử Edward, và Nova Scotia.",
      },
      {
        title: "Chương Trình Thí Điểm Nhập Cư Nông Thôn Và Miền Bắc (RNIP)",
        description:
          "Áp dụng tại các khu vực thuộc 5 tỉnh: Ontario, Manitoba, Saskatchewan, và British Columbia.",
      },
    ],
  },
];
