import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Feature } from "@/components/ui/cards-set";
import Container from "@/components/ui/container";
import Title from "@/components/ui/Title";
import Glass from "@/lib/helpers";
import { Icon } from "@iconify/react/dist/iconify.js";
import { truncateTextHeading } from "@/components/ui/newsCard";
import { ServicesCard } from "@/components/ui/services-card";
import { Button } from "@/components/ui/custom";
import { workersList } from "../federal-skilled-trade/page";
export default function FedralSkilledWorker() {
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
                Công nhân lành nghề liên bang
              </h3>
              <p className="text-sm text-black/60 text-left">
                Chương trình này không yêu cầu kết nối với Canada, khiến nó một
                lựa chọn nhập cư lý tưởng cho công dân nước ngoài sống bên ngoài
                của Canada. Bạn không cần phải hiện đang sống ở Canada, có thành
                viên gia đình trực tiếp cư trú ở trong nước, cũng không có kinh
                nghiệm làm việc hoặc giáo dục trước đây ở Canada.
              </p>
              <p className="text-sm text-black/60 text-left">
                Tuy nhiên, chương trình này có yêu cầu cao về kinh nghiệm làm
                việc, trình độ học vấn, độ tuổi và trình độ ngoại ngữ ở Tiếng
                Anh/Pháp. Tất cả những người nộp đơn cho Công nhân lành nghề
                Liên bang Chương trình (FSW) phải có ít nhất một năm kinh nghiệm
                làm việc trong một lĩnh vực chuyên môn
              </p>
            </div>
          </div>
        </Glass>
      </Container>
      <Container>
        {/* <Glass className="flex gap-2 px-10 py-10"> */}
        <div className="flex-1 flex flex-col gap-4">
          <Title
            className="px-2 text-left lg:justify-start lg:items-start"
            subtitle="Nhập cảnh nhanh"
            title={
              <h3 className="tracking-wide text-left text-4xl text-black/70">
                Các yếu tố làm tăng cơ hội nhận được Lời mời nộp hồ sơ (ITA)
                trong Chương trình Express Entry
              </h3>
            }
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {workersList.map((item, index) => (
              <ServicesCard
                key={index}
                id={index}
                title={item.title}
                description={truncateTextHeading(item.description, 30)}
              />
            ))}
          </div>
        </div>
        {/* </Glass> */}
      </Container>
      <CTA />

      <Container className="flex flex-col md:flex-row gap-16 py-10 justify-center items-center">
        <div className="flex-1 relative">
          <div className="absolute top-0 left-0 w-full h-full bg-gray-50 bg-opacity-20"></div>
          <img src="/work.jpg" className="rounded-md" alt="work" />
        </div>
        <div className="flex-1 flex flex-col lg:justify-start lg:items-start gap-4">
          <Title
            className="px-4 text-left lg:justify-start lg:items-start"
            titleClassName="lg:justify-start lg:items-start text-left"
            subtitle="FAQ"
            descriptionClassName="lg:text-left lg:w-full"
            title={"How to apply for a Work Permit"}
            description="Applying for a work permit in Canada can be a multi-step process, depending on your situation and the type of work permit you require. Here are the general steps to follow"
          />
          {/* <FAQ /> */}
        </div>
      </Container>
    </>
  );
}

export const FAQ = ({
  title,
  description,
}: {
  title?: string;
  description?: void;
}) => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full px-2 md:px-0 flex flex-col gap-2"
    >
      <AccordionItem value="item-1" className="w-full ">
        <AccordionTrigger className="text-base text-left">
          {title}
        </AccordionTrigger>
        <AccordionContent className="">
          <div className="flex flex-col gap-2 my-2">{description}</div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

function CTA() {
  return (
    <Container className="">
      <div className="flex gap-2">
        {/* <div className="relative">
              <div className="absolute top-0 left-0 bg-gradient-to-r from-blue-100/40 to-cyan-300/40 rounded-md w-[450px] h-full"></div>
              <img
                src="/aaa.jpg"
                alt=""
                className="w-[450px] h-full rounded-md"
              />
            </div> */}
        <div className="flex-1 flex flex-col gap-2 pt-8 justify-center items-center">
          <Title
            subtitle="Nhập cảnh nhanh"
            title="Chúng tôi có thể giúp gì cho bạn?"
            description="GTR Worldwide có thể hỗ trợ bạn tăng điểm Hệ thống xếp hạng toàn diện (CRS) cho Express Entry theo nhiều cách:"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-2 max-w-full mx-auto">
            {features.map((feature, index) => (
              <Feature key={feature.title} {...feature} index={index} />
            ))}
          </div>

          <Title
            className="justify-center items-center mt-4"
            title={
              <p className="text-2xl text-black/50 w-full text-center">
                Thực hiện bước đầu tiên hướng tới giấc mơ Canada của gia đình
                bạn
              </p>
            }
            description={
              <p className="text-center  text-black/50 w-[70%]">
                Để được hỗ trợ cá nhân và hướng dẫn chuyên môn, hãy liên hệ
                GreenTech Resources Worldwide Canada để các chuyên gia của chúng
                tôi có thể giúp bạn điều hướng quá trình xin giấy phép lao động
                và đảm bảo diễn ra suôn sẻ chuyển sang làm việc tại Canada
              </p>
            }
          />
          <Button
            className="py-3 px-6 mt-3"
            icon={
              <div className="flex gap-2 justify-center items-center text-xs ">
                <Icon icon={"mdi:phone"} />
                <span>+1855 477 9797</span>
              </div>
            }
          >
            <span className="text-sm">Đặt một cuộc hẹn</span>
          </Button>
        </div>
      </div>
    </Container>
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
