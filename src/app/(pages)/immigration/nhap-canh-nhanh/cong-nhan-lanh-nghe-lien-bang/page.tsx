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
import { workersList } from "../thuong-mai-co-tay-nghe-lien-bang/page";
export default function FedralSkilledWorker() {
  return (
    <>
      <Container effect="none" className="flex flex-col gap-10 py-10">
        {fswpData.map((section, index) => (
          <div key={index} className="px-6">
            {/* Section Title */}
            <h2 className="text-2xl font-bold text-black mb-4">
              {section.section}
            </h2>

            {/* Section Content */}
            <div className="flex flex-col gap-6">
              {/* Title */}
              <h3 className="text-xl font-semibold text-black/70">
                {section.title}
              </h3>

              {/* Content */}
              {section.content && (
                <div className="flex flex-col gap-4">
                  {section.content.map((item, i) => (
                    <p key={i} className="text-sm text-black/60">
                      {item}
                    </p>
                  ))}
                </div>
              )}

              {/* Subsections */}
              {section.subsections &&
                section.subsections.map((sub, subIndex) => (
                  <div
                    key={subIndex}
                    className="border-t pt-4 mt-4 flex flex-col gap-2"
                  >
                    <h4 className="text-lg font-semibold text-black/80">
                      {sub.title}
                    </h4>
                    <p className="text-sm text-black/60">{sub.description}</p>

                    {sub.details && (
                      <ul className="list-disc list-inside text-sm text-black/60 mt-2">
                        {sub.details.map((detail, detailIndex) => (
                          <li key={detailIndex}>{detail}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}

              {/* Points Table */}
              {section.table && (
                <table className="w-full text-sm text-black/60 border mt-4">
                  <thead>
                    <tr>
                      <th className="border px-4 py-2">Factor</th>
                      <th className="border px-4 py-2">Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    {section.table.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        <td className="border px-4 py-2">{row.factor}</td>
                        <td className="border px-4 py-2">{row.points}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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

const fswpData = [
  {
    section: "Program Overview",
    title: "Federal Skilled Worker Program (FSWP)",
    content: [
      "The FSWP (Federal Skilled Worker Program) is a program for skilled foreign workers who wish to become permanent residents of Canada.",
      "The FSWP is operated and operated by the Express Entry system. This program is aimed at people who can utilize their education, work experience, language ability and other factors to build a career in Canada.",
      "This is the first immigration program in the world to use a points system to evaluate candidates. This method has also been successfully applied by Australia and New Zealand.",
    ],
  },
  {
    section: "Conditions of Participation",
    title: "Eligibility Requirements for FSWP",
    subsections: [
      {
        title: "Work Experience",
        description:
          "Have at least one year of full-time or equivalent paid work experience for 10 years in an occupation classified under the National Occupational Classification (NOC) level 0, A or B.",
        details: [
          "NOC 0: Management position",
          "NOC A: Jobs that typically require a college degree",
          "NOC B: Occupations requiring specialization",
        ],
      },
      {
        title: "Education",
        description:
          "Applicants must have completed at least high school in Canada or abroad. If studies were completed abroad, applicants are required to have an Educational Credential Assessment (ECA).",
      },
      {
        title: "Language Requirements",
        description:
          "Workers must complete a standardized language test and achieve a minimum CLB of 7 in English or French in all four skills (Listening, Speaking, Reading, Writing).",
      },
      {
        title: "Proof of Financial Resources",
        description:
          "Applicants must demonstrate that they have sufficient savings to support themselves and any dependents while they are in Canada. The required funds vary based on the number of people being supported.",
      },
      {
        title: "Health Check",
        description:
          "Applicants and their dependents must complete a medical examination and submit a police certificate to prove their admissibility into Canada.",
      },
    ],
  },
  {
    section: "Points System",
    title: "FSWP Points Scale",
    content: [
      "Candidates are assessed on criteria such as language, work experience, age, job placement, and adaptability (e.g., having siblings or family in Canada).",
      "To qualify, candidates need at least 67/100 points. The breakdown is as follows:",
    ],
    table: [
      { factor: "Education", points: "Maximum 25 points" },
      { factor: "Language proficiency", points: "Maximum 28 points" },
      { factor: "Work experience", points: "Maximum 15 points" },
      { factor: "Job placement", points: "Maximum 10 points" },
      { factor: "Adaptability", points: "Maximum 10 points" },
      { factor: "Age", points: "Maximum 12 points" },
    ],
  },
  {
    section: "Application Processing Time",
    title: "FSWP Application Process",
    content: [
      "Candidates assess whether they meet the basic requirements of the program. If eligible, they can upload their application to the IRCC website.",
      "Once the application is complete, candidates receive a CRS ranking score. Candidates with higher scores are more likely to receive an invitation to apply (ITA) for permanent residence.",
      "After receiving an ITA, candidates have 60 days to submit their application. It usually takes about 6 months for a candidate to process their application from the time they submit a complete application.",
    ],
  },
];
