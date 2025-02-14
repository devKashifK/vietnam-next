import { Feature } from "@/components/ui/cards-set";
import Container from "@/components/ui/container";
import { CTADefault } from "@/components/ui/cta";
import { FAQ } from "@/components/ui/faq";
import { truncateTextHeading } from "@/components/ui/newsCard";
import { ServicesCard } from "@/components/ui/services-card";
import Title from "@/components/ui/Title";
import Glass from "@/lib/helpers";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

export default function ImmigrationWork() {
  return (
    <div className="flex flex-col gap-10">
      <Container>
        <Glass className="flex gap-2 px-10 py-10">
          <div className="flex-1 flex flex-col gap-2">
            <div className="relative w-max">
              <div className="absolute top-0 left-0 w-6 h-0.5 bg-background rounded-md"></div>
              <div className="absolute top-[12px] transform rotate-90 -left-[12px] w-6 h-0.5 bg-background rounded-md"></div>

              <div className="px-3 py-1.5">
                <h5 className="tracking-widest text-xl">
                  Canada Immigration Program
                </h5>
              </div>

              <div className="absolute bottom-0 right-0 w-6 h-0.5 bg-background rounded-md"></div>
              <div className="absolute bottom-[12px] transform rotate-90 -right-[12px] w-6 h-0.5 bg-background rounded-md"></div>
            </div>
            <div className="flex flex-col justify-start gap-6">
              <h3 className="tracking-wide text-left text-4xl text-black/70">
                Express Entry
              </h3>

              <p className="text-sm text-black/60 text-left">
                Chương trình định cư Canada diện tay nghề Liên bang (Express
                Entry) được thiết kế nhằm thu hút những người lao động nước
                ngoài có kỹ năng và kinh nghiệm làm việc trong một số ngành nghề
                cụ thể mà Canada đang có nhu cầu. Hệ thống Express Entry bao gồm
                3 chương trình:
              </p>
            </div>
          </div>
        </Glass>
      </Container>
      <Container>
        <div className="flex-1 flex flex-col gap-4">
          <Title
            description="Chương trình định cư Canada diện tay nghề Liên bang (Express Entry) được thiết kế nhằm thu hút những người lao động nước ngoài có kỹ năng và kinh nghiệm làm việc trong một số ngành nghề cụ thể mà Canada đang có nhu cầu. Hệ thống Express Entry bao gồm 3 chương trình:"
            title={
              "Chương trình định cư Canada diện tay nghề Liên bang (Express Entry)"
            }
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {expressEntry.map((item, index) => (
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
        <div className="flex-1 flex flex-col gap-8">
          <Title
            title={
              "Chương trình định cư diện tay nghề Tỉnh Bang (Provincial Nominee Program)"
            }
            description={
              "Chương trình đề cử tỉnh bang (PNP) là một lựa chọn cho các ứng viên lao động tay nghề muốn nhập cư Canada và nhận thường trú nhân (PR). Chương trình này nhằm thúc đẩy nền kinh tế các tỉnh bang và vùng lãnh thổ, thông qua việc cho phép các tỉnh bang và vùng lãnh thổ tự lựa chọn các ứng viên có thể đáp ứng nhu cầu lao động của khu vực. Nếu được chọn, các ứng viên có thể nhận được thư bảo lãnh tỉnh bang (Nomination), và dùng thư này để hỗ trợ cho hồ sơ xin thường trú nhân (PR) mà không cần phải đáp ứng các điều kiện tính điểm khắt khe của hệ thống Xếp hạng toàn diện (CRS)."
            }
          />
          <div className="grid grid-cols-2 gap-8">
            {provincial.map((item, index) => (
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

      <CTADefault
        image="/novaScotia.jpg"
        title="Chúng tôi có thể giúp bạn"
        description={
          <div className="flex flex-col gap-2 mt-4">
            <p className="text-lg text-white">
              iCan PR hiểu rằng di trú/ định cư tại Canada là một hành trình
              nhiều thay đổi và thách thức. Mục tiêu và nhiệm vụ của chúng tôi
              trở thành đối tác đáng tin cậy của bạn trong hành trình này.
            </p>
            <p className="text-lg text-white">
              Chúng tôi mong muốn giúp bạn hiện thực hóa ước mơ định cư Canada,
              sẳn sàng chào đón những cơ hội mới tại đây.
            </p>
          </div>
        }
      />
    </div>
  );
}

const expressEntry = [
  {
    id: 1,
    title: "Công nhân lành nghề liên bang (FSW)",
    description:
      "Lao động Tay nghề Liên bang - Dành cho những ứng viên có tay nghề và trình độ chuyên môn cao đến từ mọi quốc gia trên thế giới.",
  },
  {
    id: 2,
    title: "Thương mại tay nghề liên bangs (FST)",
    description:
      "Nhóm thợ Lành nghề Liên bang - Phù hợp với ứng viên có thời gian làm việc ít nhất 2 năm trong 5 năm gần nhất ở một lĩnh vực kỹ thuật với chứng chỉ chuyên môn theo danh sách quy định.",
  },
  {
    id: 3,
    title: "Canadian Experience Class (CEC)",
    description:
      "Chương trình kinh nghiệm làm việc Liên bang – Phù hợp với những ứng viên đã có kinh nghiệm làm việc tại Canada ít nhất 1 năm.",
  },
];

const provincial = [
  {
    id: 1,
    title: "Chương Trình Đề Cử Tỉnh Bang (PNP)",
    description:
      "Chương trình đề cử tỉnh bang – Provincial Nominee Program (PNP) hiện là là nhóm chương trình nhập cư có điều kiện tương đối dễ và thu hút hơn 60% người Việt lựa chọn để định cư lâu dài tại Canada. Chương trình này cho phép chính phủ các tỉnh bang đề cử những cá nhân hoặc gia đình lao động nước ngoài, đang có nguyện vọng định cư tại Canada và đáp ứng đủ các tiêu chí mà tỉnh bang đề ra. Dựa trên từng tỉnh bang mà có các tiêu chí khác nhau về: kỹ năng, trình độ học vấn khả năng đóng góp cho địa phương,...",
  },
  {
    id: 2,
    title: "Chương Trình Thí Điểm",
    description:
      "Đây là các chương trình định cư Canada được xây dựng riêng cho các vùng lãnh thổ có vị trí địa lý khá hẻo lánh và dân cư không đông đúc. Dành cho các du học sinh quốc tế hoặc những người lao động nước ngoài theo diện tay nghề được chính thức nhập quốc tịch Canada. Họ sẽ chung tay cùng dân địa phương và chính phủ tỉnh bang góp phần xây dựng và phát triển kinh tế ở những khu vực này.",
  },
];
