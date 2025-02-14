import Container from "@/components/ui/container";
import { CTADefault, CTAWithImage } from "@/components/ui/cta";
import HoverCard from "@/components/ui/hover-card";
import { List, UL } from "@/components/ui/list";
import Title from "@/components/ui/Title";
import Glass from "@/lib/helpers";
import { title } from "process";
import React from "react";

export default function VisaBusiness() {
  return (
    <div className="py-10 flex flex-col gap-10">
      <CTAWithImage
        desClassName="text-left h-68"
        image="hero-2"
        title="Tổng Quan Chương Trình"
        description={
          <div className="flex flex-col gap-2 text-left">
            <p>
              Giấy Phép Làm Việc C11 hướng đến người nước ngoài muốn thành lập
              công ty và kinh doanh tại Canada có thể đầu tư vào Canada một cách
              hợp pháp.
            </p>
            <p>
              Chương trình giấy phép làm việc C11 được xem là chương trình đóng
              góp đáng kể vào nền kinh tế Canada. Người nắm giữ Visa C11 sẽ được
              miễn LMIA và được cấp Work Permit để làm việc và kinh doanh tại
              Canada.
            </p>
            <p>
              Với visa C11, doanh nhân có thể định cư lâu dài tại Canada thông
              qua các chương trình thường trú nhân. Chương trình C11 được chia
              thành 3 diện nhỏ là Lợi ích kinh tế, Lợi ích văn hóa và lợi ích xã
              hội.
            </p>
          </div>
        }
      />

      <Container>
        <Glass>
          <Title
            title="LỢI ÍCH CỦA CHƯƠNG TRÌNH"
            description={
              <div className="mt-5">
                <UL>
                  <List>
                    Bạn và gia đình có thể sống và làm việc tại Canada
                  </List>
                  <List>
                    Con cái của bạn có thể học miễn phí tại các trường phổ thông
                    công lập ở Canada.
                  </List>
                  <List>
                    Bạn có thể nhận được giấy phép lao động để làm việc tại
                    Canada mà không cần phải chứng minh kiến ​​thức của bạn về
                    ngôn ngữ tiếng Anh hoặc tiếng Pháp. Yêu cầu tối thiểu 1 năm
                    kinh nghiệm quản lý đối với các vị trí quản lý.
                  </List>
                  <List>
                    Bạn sẽ đủ điều kiện nhận bảo hiểm sức khỏe y tế miễn phí tại
                    Canada.
                  </List>
                  <List>
                    Bạn không bắt buộc phải cư trú toàn thời gian ở Canada và có
                    thể tiếp tục công việc kinh doanh của mình ở nước sở tại.
                  </List>
                  <List>
                    Bạn sẽ được tiếp cận thị trường Canada và Hoa Kỳ để mở rộng
                    hoạt động kinh doanh, hệ thống ngân hàng an toàn và ổn định,
                    nguồn vốn tài trợ và các cơ hội kinh doanh.
                  </List>
                  <List>
                    Bạn sẽ đủ điều kiện để nộp đơn xin thường trú nhân Canada
                  </List>
                  <List>
                    Sau khi sống ở Canada 3 năm với tư cách thường trú nhân, bạn
                    có thể nộp đơn xin nhập quốc tịch Canada và có được một
                    trong những hộ chiếu đáng mơ ước nhất trên thế giới.
                  </List>
                  <List>
                    Bạn có thể đưa những người lao động chủ chốt từ đất nước của
                    bạn sang làm việc cho công ty của bạn ở Canada.
                  </List>
                </UL>
              </div>
            }
          />
        </Glass>
      </Container>
      <Container>
        <Glass>
          <Title
            title="Điều Kiện Để Một Doanh Nhân Đủ Điều Kiện Được Cấp Giấy Phép Làm Việc"
            description={
              <div className="mt-5">
                <UL>
                  <List>
                    Đáp ứng các yêu cầu đủ điều kiện của giấy phép làm việc
                  </List>
                  <List>
                    Mở một doanh nghiệp ở Canada với quyền sở hữu ít nhất 50%
                    trong doanh nghiệp..
                  </List>
                  <List>
                    Với tư cách là chủ sở hữu của doanh nghiệp, tự cho mình một
                    lời mời làm việc để làm việc cho doanh nghiệp với tư cách là
                    nhân viên của doanh nghiệp.
                  </List>
                  <List>Xin giấy phép làm việc theo lời mời làm việc này.</List>
                  <List>
                    Nhập cảnh và làm việc tại Canada sau khi giấy phép làm việc
                    của họ được chấp thuận.
                  </List>
                </UL>
              </div>
            }
          />
        </Glass>
      </Container>
      <Container>
        <Glass>
          <Title
            title="Điều Kiện Của Giấy Phép Làm Việc C11"
            description={
              <div className="mt-5">
                <UL>
                  <List>
                    Không phải mọi doanh nhân đều có đủ điều kiện được cấp giấy
                    phép làm việc C11 này. Để thoả điều kiện:
                  </List>
                  <List>
                    Các nhà đầu tư là cổ đông chính của doanh nghiệp và có kế
                    hoạch kinh doanh tạo việc làm cho người Canada.
                  </List>
                  <List>
                    Người nộp đơn cần sở hữu từ 51% cổ phần của công ty Canada;
                  </List>
                  <List>
                    Công ty Canada phải cho thấy khả năng vận hành được;
                  </List>
                  <List>
                    Công ty phải sở hữu nguồn vốn đủ để trả lương cho chủ doanh
                    nghiệp, người sẽ vận hành doanh nghiệp ở Canada.
                  </List>
                  <List>
                    Chứng minh được doanh nghiệp ở Canada cần người ở cấp độ
                    quản lý cao cấp (NOC 00).
                  </List>
                  <List>
                    Đáp ứng tất cả các yêu cầu Nộp đơn để nhận Giấy phép làm
                    việc theo C11.
                  </List>
                </UL>
              </div>
            }
          />
        </Glass>
      </Container>

      <Container className="grid grid-cols-2 gap-4">
        {visa.map((item) => (
          <HoverCard
            key={index}
            description={item.des}
            title={item.title}
            icon="iconamoon:information-square-duotone"
          />
        ))}
      </Container>

      <Container>
        <Glass>
          <Title
            title="LỘ TRÌNH LÊN THƯỜNG TRÚ NHÂN VỚI VISA C11"
            description={
              <div className="mt-5">
                <p>
                  Có một số lựa chọn và con đường để chuyển đổi từ giấy phép lao
                  động C11 sang thường trú nhân tại Canada. Chương trình phổ
                  biến nhất là chương trình “Express Entry” (EE), cho phép chủ
                  sở hữu, giám đốc điều hành và chuyên gia, những người nắm giữ
                  các vị trí quản lý cấp cao, đăng ký thường trú nhân thông qua
                  lời mời làm việc từ chính công ty của họ ở Canada. Ứng viên
                  cần đáp ứng các điều kiện sau đây để nộp định cư theo Express
                  Entry:
                </p>
                <UL>
                  <List>
                    Có ít nhất 1 năm (nên là 2-3 năm) kinh nghiệm quản lý cấp
                    cao;
                  </List>
                  <List>
                    Sở hữu công ty tại Canada đang tích cực hoạt động kinh doanh
                    và có đủ khả năng tài chính để trả mức lương hợp lý ở Canada
                    cho người nộp đơn;
                  </List>
                  <List>
                    Người nộp đơn phải giữ vị trí điều hành hoặc quản lý cấp cao
                    tại công ty Canada
                  </List>
                  <List>
                    Công ty Canada phải có địa điểm thực tế (văn phòng thương
                    mại) và thuê ít nhất 1 công dân hoặc thường trú nhân Canada;
                  </List>
                  <List>
                    Người nộp đơn phải đạt ít nhất 6 điểm cho mỗi kỹ năng của
                    bài kiểm tra ngôn ngữ IELTS, hoặc 7 điểm cho mỗi kỹ năng của
                    bài kiểm tra CELPIP.
                  </List>
                  <List>
                    Đáp ứng các yêu cầu khác của Chương trình Express Entry như
                    trình độ học vấn…
                  </List>
                </UL>
              </div>
            }
          />
        </Glass>
      </Container>
      <CTADefault
        image="/immigration.png"
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

const visa = [
  {
    id: 1,
    title: "Lên Ý Tưởng Kinh Doanh",
    des: "Ứng viên cần phát triển ý tưởng kinh doanh cho doanh nghiệp ở Canada. Ứng viên sẽ nhận được yêu cầu nộp các tài liệu liên quan đến ý tưởng kinh doanh, kinh nghiệm, tài liệu cá nhân và báo cáo tài chính.",
  },
  {
    id: 2,
    title: "Thành lập công ty tại Canada",
    des: "tiến hành đăng ký một công ty ở Canada. Công ty Canada này bắt buộc sẽ do người nộp đơn sở hữu hoặc quản lý.",
  },
  {
    id: 3,
    title: "Nộp đơn xin giấy phép lao động",
    des: "Ứng viên sẽ tiến hành nộp đơn xin giấy phép. Trong bộ hồ sơ đó, đương đơn cần chuẩn bị kế hoạch kinh doanh, lời mời làm việc từ doanh nghiệp Canada, tài liệu công ty và cá nhân của cả công ty nước ngoài và người nộp đơn.",
  },
  {
    id: 4,
    title: "Chờ kết quả",
    des: "Sau khi tất cả các tài liệu được thu thập và hồ sơ đã sẵn sàng, hồ sơ của đương đơn sẽ được nộp trực tuyến đến văn phòng chịu trách nhiệm xử lý. Trong vòng 3 đến 4 tháng thời điểm nộp đơn, người nộp đơn có thể nhận được giấy phép lao động đến Canada.",
  },
];
