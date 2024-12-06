import Container from "@/components/ui/container";
import { CTADefault } from "@/components/ui/cta";
import React from "react";
import Glass from "@/lib/helpers";
import Title from "@/components/ui/Title";

export default function FamilySponsorship() {
  return (
    <>
      <Container>
        <Glass className="flex gap-2 px-10 py-10">
          <div className="flex-1 flex flex-col gap-2">
            <div className="relative w-max">
              <div className="absolute top-0 left-0 w-6 h-0.5 bg-background rounded-md"></div>
              <div className="absolute top-[12px] transform rotate-90 -left-[12px] w-6 h-0.5 bg-background rounded-md"></div>

              <div className="px-3 py-1.5">
                <h5 className="tracking-widest text-xl">
                  Chương trình nhập cư Canada
                </h5>
              </div>

              <div className="absolute bottom-0 right-0 w-6 h-0.5 bg-background rounded-md"></div>
              <div className="absolute bottom-[12px] transform rotate-90 -right-[12px] w-6 h-0.5 bg-background rounded-md"></div>
            </div>
            <div className="flex flex-col justify-start gap-6">
              <h3 className="tracking-wide text-left text-4xl text-black/70">
                Bảo trợ gia đình
              </h3>

              <p className="text-sm text-black/60 text-left">
                Canada, nổi tiếng với những cảnh quan ngoạn mục, những thành phố
                sôi động, và bầu không khí chào đón, đã trở thành một xu hướng
                ngày càng phổ biến điểm đến của khách du lịch trên toàn thế
                giới. Nếu bạn đang xem xét một thăm Great White North, bạn có
                thể cần làm quen bản thân bạn trong quá trình xin Visa du lịch
                Canada, còn được gọi là Visa tạm trú (TRV)
              </p>
              <Title subtitle="Tìm hiểu về Visa du lịch Canada" />
              <p className="text-sm text-black/60 text-left">
                Visa du lịch Canada được thiết kế dành cho những cá nhân mong
                muốn nhập cảnh tạm thời vào nước này để du lịch, thăm gia đình
                hoặc mục đích kinh doanh. Điều cần thiết là phải phân biệt giữa
                một thị thực du lịch và các loại thị thực khác, chẳng hạn như
                làm việc hoặc học tập giấy phép, vì chúng phục vụ các mục đích
                khác nhau.
              </p>
              <Title subtitle="Xin Visa du lịch Canada" />

              <p className="text-sm text-black/60 text-left">
                Quá trình xin Visa du lịch Canada bao gồm một số bước quan
                trọng. Đầu tiên, người nộp đơn cần xác định xem liệu họ yêu cầu
                thị thực để vào Canada dựa trên quốc tịch của họ. Nếu cần có thị
                thực, bước tiếp theo là thu thập các thông tin cần thiết tài
                liệu, thường bao gồm hộ chiếu hợp lệ, bằng chứng về hỗ trợ tài
                chính, thư mời (nếu có) và hành trình du lịch. Người nộp đơn
                cũng có thể cần phải cung cấp bằng chứng về ràng buộc với đất
                nước của họ, chẳng hạn như việc làm, tài sản, hoặc kết nối gia
                đình, để chứng minh ý định quay trở lại của họ.
              </p>
              <p className="text-sm text-black/60 text-left">
                Sau khi chuẩn bị đầy đủ hồ sơ, người nộp đơn có thể điền vào mẫu
                đơn xin thị thực trực tuyến thông qua trang web chính thức của
                Bộ Di trú, Người tị nạn và Quốc tịch Canada (IRCC). các mẫu đơn
                sẽ nhắc các cá nhân nhập thông tin cá nhân thông tin, chi tiết
                về chuyến đi của họ và các thông tin liên quan khác thông tin.
                Điều quan trọng là phải đảm bảo tính chính xác trong ứng dụng,
                vì bất kỳ sự khác biệt nào cũng có thể dẫn đến sự chậm trễ hoặc
                những lời phủ nhận.
              </p>
              <p className="text-sm text-black/60 text-left">
                Sau khi nộp đơn, người nộp đơn sẽ được yêu cầu nộp lệ phí thị
                thực cần thiết. Thời gian xử lý khác nhau, nhưng ứng viên nên
                nộp đơn sớm trước thời gian dự kiến ngày du lịch. Nếu đơn được
                chấp thuận, thị thực sẽ được cấp đóng dấu vào hộ chiếu, cho phép
                cá nhân đi du lịch đến Canada trong khoảng thời gian quy định.
              </p>
            </div>
          </div>
        </Glass>
      </Container>
      <Container>
        <CTADefault
          title="KẾ HOẠCH THAM QUAN CANADA"
          subtitle={
            <p className="text-4xl text-white/90">
              Hãy cùng ICANPR <br />
              hỗ trợ bạn!
            </p>
          }
          image={"/service.jpg"}
        />
      </Container>
    </>
  );
}
