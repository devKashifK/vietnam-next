import { CTADefault, CTAWithImage } from "@/components/ui/cta";
import React from "react";

export default function Medical() {
  return (
    <div className="flex flex-col gap-10 py-10">
      <CTAWithImage
        title="Medicare— một trong những lý dó Canada có một trong những chất lượng cuộc sống cao nhất thế giới."
        image="med"
        description={
          <div className="flex flex-col gap-2">
            <p>
              Một trong những điều mà đã giúp Canada trở thành một trong những
              quốc gia có chất lượng cuộc sống tốt nhất chính là hệ thống chăm
              sóc sức khỏe toàn dân của nó. Hệ thống chăm sóc sức khỏe tại
              Canada, Medicare, được tài trợ thông qua thuế và điều này có nghĩa
              là tất cả người dân (citizen) và thường trú dân (permanent
              resident) có quyền truy cập hệ thống này khi cần hỗ trợ y tế.{" "}
            </p>
            <p>
              Các chương trình bảo hiểm y tế người dân có thể đăng ký tuỳ thuộc
              vào tỉnh, nhưng tất cả chương trình bảo hiểm phải đạt mức tiêu
              chuẩn được đưa ra bởi chính phủ liên bang. Theo tiêu chuẩn, bảo
              hiểm bao gồm tất cả các yêu cầu chăm sóc sức khỏe chung của bạn,
              và bạn có thể được điều trị bởi bác sĩ, phòng khám, hoặc bệnh
              viện, mà không cần trả phí. Điều này bao gồm khám sức khỏe định
              kỳ, điều trị khẩn cấp, xét nghiệm, và những lần điều trị khác nếu
              chúng cần thiết về mặt y tế.
            </p>
          </div>
        }
      />
      <CTAWithImage
        flip
        title="Bảo Hiểm Học Sinh Quốc Tế."
        image="med2"
        description={
          <div className="flex flex-col gap-2">
            <p>
              Vì học sinh quốc tế không đống thuế, hoặc chỉ đống một phần thuế
              khi làm việc thêm, họ cần đăng ký từ một dịch vụ tư nhân để có thể
              truy cập hệ thống. Với bảo hiểm y tế tư nhân, bạn sẽ nhận được một
              thẻ y tế cho phép bạn truy cập các hỗ trợ y tế theo bảo hiểm miễn
              phí. Ngoài ra, sẽ có một số hệ thống trường học và một số đại học
              sẽ được tự động đăng ký bảo hiểm sức khoẻ dành cho học sinh quốc
              tế khi ghi danh. Ví dụ, tại Ontario, tất cả các sinh viên đại học
              quốc tế sẽ được đăng ký vào University Health Insurance Program
              (UHIP), một chương trình bảo hiểm phi lợi nhuận do các trường đại
              học của Ontario tạo ra.
            </p>
          </div>
        }
      />

      <CTADefault
        image="business"
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
