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
