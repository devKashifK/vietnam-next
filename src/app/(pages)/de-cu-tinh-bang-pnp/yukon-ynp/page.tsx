import Container from "@/components/ui/container";
import Glass from "@/lib/helpers";
import { CTAWithImage, CTADefault } from "@/components/ui/cta";
import { ServicesCard } from "@/components/ui/services-card";
import TitleWithBottomBorder from "@/components/ui/title-with-bottom-border";
import TitleWithDoubleBorder from "@/components/ui/title-with-double-border";

export default function Yukon() {
  const ctaSection = pageData.filter((item) => item.cta === true);
  return (
    <div className="flex flex-col gap-20 py-10">
      <Container>
        <Glass className="flex gap-2 px-10 py-10">
          <div className="flex-1 flex flex-col gap-2">
            <div className="relative w-max">
              <div className="px-3 py-1.5">
                <TitleWithDoubleBorder>
                  {pageData[0].section}
                </TitleWithDoubleBorder>
              </div>
            </div>
            <div className="flex flex-col justify-start gap-6">
              <h3 className="tracking-wide text-left text-4xl text-black/70">
                {pageData[0].title}
              </h3>

              <div>
                {Array.isArray(pageData[0].content) ? (
                  <ul className="list-inside flex flex-col gap-2">
                    {pageData[0].content.map((item, index) => (
                      <li
                        key={index}
                        className="text-sm text-black/60 text-left"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-black/60 text-left">
                    {pageData[0].content}
                  </p>
                )}
              </div>
            </div>
          </div>
        </Glass>
      </Container>
      {pageData[1]?.subsections ? (
        <Container className="flex flex-col gap-5 px-10">
          <TitleWithDoubleBorder>{pageData[1].section}</TitleWithDoubleBorder>
          <TitleWithBottomBorder>{pageData[1].title}</TitleWithBottomBorder>
          <div className="py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {pageData[1]?.subsections.map((item, index) => {
              return (
                <ServicesCard
                  key={index}
                  title={item.title}
                  description={item.description}
                  readMore={false}
                />
              );
            })}
          </div>
        </Container>
      ) : (
        <Container>
          <Glass className="flex gap-2 px-10 py-10">
            <div className="flex-1 flex flex-col gap-2">
              <div className="relative w-max">
                <div className="px-3 py-1.5">
                  <TitleWithDoubleBorder>
                    {pageData[1].section}
                  </TitleWithDoubleBorder>
                </div>
              </div>
              <div className="flex flex-col justify-start gap-6">
                <h3 className="tracking-wide text-left text-4xl text-black/70">
                  {pageData[1].title}
                </h3>

                <div>
                  {Array.isArray(pageData[1].content) ? (
                    <ul className="list-inside flex flex-col gap-2">
                      {pageData[1].content.map((item, index) => (
                        <li
                          key={index}
                          className="text-sm text-black/60 text-left"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-black/60 text-left">
                      {pageData[1].content}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </Glass>
        </Container>
      )}
      {pageData[2]?.subsections ? (
        <Container className="flex flex-col gap-5">
          <Glass className="px-10 py-10 flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <TitleWithDoubleBorder>
                {pageData[2].section}
              </TitleWithDoubleBorder>
              <TitleWithBottomBorder>{pageData[2].title}</TitleWithBottomBorder>
            </div>
            <div className="py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
              {pageData[2]?.subsections.map((item, index) => {
                return (
                  <ServicesCard
                    key={index}
                    title={item.title}
                    description={item.description}
                    readMore={false}
                  />
                );
              })}
            </div>
          </Glass>
        </Container>
      ) : (
        <Container>
          <Glass className="flex gap-2 px-10 py-10">
            <div className="flex-1 flex flex-col gap-2">
              <div className="relative w-max">
                <div className="px-3 py-1.5">
                  <TitleWithDoubleBorder>
                    {pageData[2].section}
                  </TitleWithDoubleBorder>
                </div>
              </div>
              <div className="flex flex-col justify-start gap-6">
                <h3 className="tracking-wide text-left text-4xl text-black/70">
                  {pageData[2].title}
                </h3>

                <div>
                  {Array.isArray(pageData[2].content) ? (
                    <ul className="list-inside flex flex-col gap-2">
                      {pageData[2].content.map((item, index) => (
                        <li
                          key={index}
                          className="text-sm text-black/60 text-left"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-black/60 text-left">
                      {pageData[2].content}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </Glass>
        </Container>
      )}
      {pageData[3]?.subsections ? (
        <Container className="flex flex-col gap-5">
          <Glass className="px-10 py-10 flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <TitleWithDoubleBorder>
                {pageData[3].section}
              </TitleWithDoubleBorder>
              <TitleWithBottomBorder>{pageData[3].title}</TitleWithBottomBorder>
            </div>
            <div className="py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
              {pageData[3]?.subsections.map((item, index) => {
                return (
                  <ServicesCard
                    key={index}
                    title={item.title}
                    description={item.description}
                    readMore={false}
                  />
                );
              })}
            </div>
          </Glass>
        </Container>
      ) : (
        <Container>
          <Glass className="flex gap-2 px-10 py-10">
            <div className="flex-1 flex flex-col gap-2">
              <div className="relative w-max">
                <div className="px-3 py-1.5">
                  <TitleWithDoubleBorder>
                    {pageData[3].section}
                  </TitleWithDoubleBorder>
                </div>
              </div>
              <div className="flex flex-col justify-start gap-6">
                <h3 className="tracking-wide text-left text-4xl text-black/70">
                  {pageData[3].title}
                </h3>

                <div>
                  {Array.isArray(pageData[3].content) ? (
                    <ul className="list-inside flex flex-col gap-2">
                      {pageData[3].content.map((item, index) => (
                        <li
                          key={index}
                          className="text-sm text-black/60 text-left"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-black/60 text-left">
                      {pageData[3].content}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </Glass>
        </Container>
      )}

      <CTAWithImage
        image="yukon-b"
        title={ctaSection[0].title}
        description={ctaSection[0].content}
        subtitle={ctaSection[0].section}
        ctaAction="Xem thêm"
      />
      {ctaSection[1] && (
        <CTAWithImage
          flip
          image="yukon-a"
          title={ctaSection[1].title}
          description={ctaSection[1].content}
          subtitle={ctaSection[1].section}
          ctaAction="Xem thêm"
        />
      )}

      <CTADefault
        image="business"
        subtitle="Chúng tôi có thể giúp bạn"
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
const pageData = [
  {
    section: "Overview",
    title: "TỔNG QUAN CHƯƠNG TRÌNH",
    content: [
      "Yukon Nominee Program (YNP) là chương trình Đề Cử Tỉnh của Yukon. Theo đó, người nhập cư sở hữu các kỹ năng và kinh nghiệm phù hợp với các tiêu chí của tỉnh bang sẽ có cơ hội nhận được giấy chứng nhận đề cử tỉnh bang Yukon, từ đó có thể đăng ký thường trú tại Canada (PR).",
      "Hiện Yukon là nơi sinh sống của khoảng 30.000 người và nền kinh tế chủ yếu là du lịch và khai thác khoáng sản. Yukon là một địa điểm định cư lý tưởng dành cho những cá nhân yêu thích trải nghiệm không gian sống mới.",
    ],
  },
  {
    section: "Programs",
    title: "Các Chương Trình Định Cư Yukon",
    content: [
      "Yukon Express Entry",
      "Chương trình Yukon Express Entry dành cho các lao động nước ngoài có kỹ năng nhận được lời mời làm việc hợp lệ lâu dài, toàn thời gian từ các nhà tuyển dụng Yukon đủ điều kiện.",
      "Đối với các nhà tuyển dụng Yukon không thể tìm thấy thường trú nhân hoặc công dân Canada để lấp đầy cơ hội việc làm, thì có thể truy cập vào nhóm ứng viên Express Entry của Bộ Di trú, tị nạn và Quốc tịch Canada.",
      "Chương trình Công nhân lành nghề Yukon",
      "Chương trình đề cử vùng lãnh thổ Yukon (YNP) dành cho công nhân lành nghề cho phép bảo lãnh những người lao động có tay nghề nước ngoài được định cư tại Canada.",
      "Các ứng viên được bảo lãnh phải đang làm việc trong một ngành nghề thuộc nhóm 0, A hoặc B của phân loại ngành nghề Quốc gia (NOC).",
      "Chương trình Người lao động theo yêu cầu YNP",
      "Mục đích tạo ra chương trình này để giúp chủ lao động bảo lãnh cho người lao động nhập cư có kỹ năng và kinh nghiệm làm việc trong ngành nghề lãnh thổ đang cần. Vì thế ứng viên cần nhận được lời mời làm việc từ nhà tuyển dụng và không bắt buộc khi nộp đơn phải ở Yukon.",
      "Chương trình Đề cử Doanh nghiệp",
      "Chương trình đề cử doanh nghiệp trong chương trình đề cử vùng lãnh thổ Yukon (YNP) dành cho những người có kinh nghiệm kinh doanh, người muốn bắt đầu công việc kinh doanh mới, hợp tác với doanh nghiệp hiện có hay mua lại, vận hành một doanh nghiệp tại Yukon. Ứng viên nên sẵn sàng đầu tư vào hoạt động kinh doanh của họ.",
      "Chương trình Thí điểm Cộng đồng Yukon",
      "Đối với chương trình này, những người đã được đề cử sẽ nhận được một giấy phép lao động đặc biệt, cho phép họ làm việc cho nhiều nhà tuyển dụng tại một trong các cộng đồng Yukon tham gia.",
    ],
  },
  {
    section: "Eligibility",
    title: "Điều Kiện Tham Gia",
    content: [
      "Yukon Express Entry",
      "• Có hồ sơ Express Entry.",
      "• Đáp ứng các yêu cầu của một trong ba chương trình nhập cư kinh tế của Canada.",
      "• Có lời mời làm việc toàn thời gian hợp lệ từ nhà tuyển dụng Yukon.",
      "• Có đủ tài chính cho bản thân và các thành viên trong gia đình tại Canada.",
      "• Có ý định sống và làm việc tại Yukon.",
      "Chương trình công nhân lành nghề Yukon",
      "• Ít nhất một năm kinh nghiệm làm việc cho vị trí đó.",
      "• Có trình độ học vấn và kinh nghiệm làm việc.",
      "• Có giấy phép lao động hợp lệ nếu người nộp đơn ở Canada.",
      "• Có thư mời làm việc hợp lệ từ nhà tuyển dụng.",
      "• Đáp ứng tốt các yêu cầu tối thiểu về ngôn ngữ.",
      "• Người sử dụng lao động cần đáp ứng yêu cầu bổ sung.",
      "Chương trình người lao động theo yêu cầu YNP",
      "• Có một lời mời làm việc toàn thời gian cố định từ người tuyển dụng.",
      "• Có trình độ học vấn cũng như kinh nghiệm làm việc cần thiết (tối thiểu tốt nghiệp Trung học Phổ thông).",
      "• Có ít nhất 6 tháng kinh nghiệm làm việc ở vị trí tương đương.",
      "• Có giấy phép lao động hợp lệ nếu đang ở Canada.",
      "• Đáp ứng yêu cầu tối thiểu về ngôn ngữ (tiếng Pháp hoặc tiếng Anh).",
      "• Nhà tuyển dụng cũng cần đáp ứng các yêu cầu bổ sung.",
      "Chương trình đề cử doanh nghiệp",
      "• Ít nhất 3 năm kinh nghiệm kinh doanh hoặc quản lý doanh nghiệp.",
      "• Đạt cấp độ 6 trong kỳ thi IELTS (tiếng Anh) hoặc cấp độ 4 trong kỳ thi TEF (tiếng Pháp).",
      "• Đạt được số điểm tối thiểu 65 điểm trên Bảng đánh giá người được đề cử.",
      "• Tối thiểu 10 điểm ở mục ngôn ngữ trên Bảng đánh giá người được đề cử.",
      "• Ít nhất 5 năm kinh nghiệm liên quan đến lĩnh vực kinh doanh được đề xuất.",
      "• Có ít nhất 500.000 USD giá trị ròng tại Canada (do kế toán công ty Yukon xác minh).",
      "• Có ít nhất 300.000 CAD tài sản lưu động (do kế toán công ty Yukon xác minh).",
      "• Chứng minh được giá trị ròng và tài sản có tính thanh khoản đã được thu thập thông qua phương tiện hợp pháp.",
      "• Có ý định định cư lâu dài ở Yukon và kinh doanh trong lãnh thổ.",
      "• Gửi kế hoạch tái định cư cho thấy ý định sinh sống ở Yukon.",
      "Thí điểm cộng đồng Yukon",
      "• Phải do tỉnh bang đề cử.",
      "• Có thư ủng hộ có chữ ký của chính phủ Yukon.",
      "• Có 2 hoặc 3 lời mời làm việc đủ điều kiện cùng thuộc một cộng đồng Yukon tham gia.",
      "• Đáp ứng các yêu cầu đối với giấy phép lao động.",
      "• Công việc của bạn phải có ít nhất 30 giờ làm việc mỗi tuần.",
      "• Kinh nghiệm làm việc phải cho thấy được có thể thực hiện tốt các nhiệm vụ được giao.",
    ],
  },
  {
    cta: true,
    section: "Why Yukon",
    title: "Vì sao Yukon là điểm đến lý tưởng cho gia đình bạn?",
    content: [
      "Yukon, Canada, là một điểm đến lý tưởng cho dân nhập cư vì nhiều lý do liên quan đến cơ hội kinh tế, môi trường sống, cộng đồng thân thiện và các chính sách nhập cư thuận lợi.",
      "Trước hết, Yukon có một nền kinh tế đang phát triển mạnh mẽ, đặc biệt là trong các ngành công nghiệp khai thác mỏ, du lịch và dịch vụ. Sự phát triển của các dự án khai thác mỏ và du lịch sinh thái tạo ra nhiều cơ hội việc làm hấp dẫn cho người lao động có kỹ năng và kinh nghiệm. Ngoài ra, chính phủ Yukon cũng đang đầu tư vào cơ sở hạ tầng và phát triển kinh doanh, mang lại nhiều cơ hội cho các doanh nhân và nhà đầu tư.",
      "Môi trường sống tại Yukon là một trong những lý do chính thu hút người nhập cư. Với cảnh quan thiên nhiên hùng vĩ, bao gồm các dãy núi, rừng nguyên sinh và sông băng, Yukon là nơi lý tưởng cho những người yêu thích cuộc sống ngoài trời và các hoạt động như leo núi, câu cá, và ngắm cực quang. Mặc dù thời tiết ở Yukon có thể khắc nghiệt vào mùa đông, sự hỗ trợ từ cộng đồng và chính quyền địa phương giúp người dân thích nghi tốt với điều kiện thời tiết đặc biệt này.",
      "Cộng đồng tại Yukon được biết đến là thân thiện và hỗ trợ, tạo ra một môi trường chào đón cho người nhập cư. Sự đa dạng văn hóa và sự hoà nhập của người dân địa phương với các nền văn hóa khác nhau tạo điều kiện thuận lợi cho người mới đến. Nhiều chương trình và tổ chức cộng đồng được thiết lập để hỗ trợ người nhập cư trong việc tìm kiếm việc làm, học tiếng Anh và hoà nhập vào cuộc sống mới.",
      "Cuối cùng, Yukon có các chính sách nhập cư thuận lợi và các chương trình hỗ trợ người nhập cư. Chương trình Yukon Nominee Program (YNP) cho phép tỉnh này đề cử người lao động có kỹ năng, doanh nhân và nhà đầu tư để xin thường trú nhân. Chính phủ Yukon cũng cung cấp nhiều dịch vụ hỗ trợ, bao gồm tư vấn việc làm, đào tạo nghề và hỗ trợ định cư, giúp người nhập cư nhanh chóng ổn định cuộc sống.",
      "Tóm lại, Yukon là điểm đến lý tưởng cho dân nhập cư nhờ vào cơ hội kinh tế, môi trường sống tuyệt vời, cộng đồng thân thiện và các chính sách nhập cư thuận lợi.",
    ],
  },
];
