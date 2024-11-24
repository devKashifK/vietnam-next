import Container from "@/components/ui/container";
import Title from "@/components/ui/Title";
import Glass from "@/lib/helpers";
import { ServicesCard } from "@/components/ui/services-card";
import { truncateTextHeading } from "@/components/ui/newsCard";
import { workersList } from "../thuong-mai-co-tay-nghe-lien-bang/page";

export default function CanadianExperienceClass() {
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
                Lớp trải nghiệm Canada (CEC)
              </h3>

              <p className="text-sm text-black/60 text-left">
                Canadian Experience Class (CEC) là chương trình nhập cư kinh tế
                chương trình yêu cầu kinh nghiệm làm việc ở Canada. Ứng viên
                phải có tối thiểu 12 tháng kinh nghiệm làm việc toàn thời gian ở
                một doanh nghiệp nghề nghiệp có tay nghề cao ở Canada trong vòng
                3 năm qua.
              </p>
              <p className="text-sm text-black/60 text-left">
                Chương trình CEC Express Entry là sự lựa chọn phổ biến của người
                nước ngoài những người lao động đã tích lũy kinh nghiệm làm việc
                ở Canada và sinh viên quốc tế đã tìm được việc làm ở Canada sau
                tốt nghiệp, tất cả đều mong muốn hoàn thành sứ mệnh Canada của
                mình giấc mơ nhập cư Chương trình này không phù hợp với người
                nước ngoài công dân không có kinh nghiệm làm việc trước đây ở
                Canada
              </p>
            </div>
          </div>
        </Glass>
      </Container>
      <Container>
        <Glass className="flex gap-2 px-10 py-10">
          <div className="flex-1 flex flex-col gap-4">
            <Title
              className="px-2 text-left lg:justify-start lg:items-start"
              subtitle="Lớp trải nghiệm Canada"
              title={
                <p className="text-4xl text-black/50 w-full text-left pt-3">
                  Tiêu chí tối thiểu
                </p>
              }
            />

            <div className="flex flex-col justify-start gap-6">
              <p className="text-sm text-black/60 text-left">
                Để đủ điều kiện, bạn phải đáp ứng tất cả các yêu cầu tối thiểu
              </p>
              <p className="text-sm text-black/60 text-left">
                Trước khi nộp đơn, ứng viên nên xem kỹ chương trình yêu cầu và
                đảm bảo họ đáp ứng được các tiêu chuẩn cần thiết. Ngoài ra, các
                cá nhân trong các ngành nghề có tay nghề cao cũng có thể xem xét
                tìm kiếm việc làm thông qua Chương trình đề cử cấp tỉnh (PNP)
                nếu một tỉnh cụ thể có nhu cầu về kỹ năng của họ.
              </p>
            </div>
          </div>
        </Glass>
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
      </Container>
    </>
  );
}
