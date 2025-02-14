import Container from "@/components/ui/container";
import Glass from "@/lib/helpers";
import { Feature } from "@/components/ui/cards-set";
import { CTAWithImage, CTADefault } from "@/components/ui/cta";
import { ServicesCard } from "@/components/ui/services-card";
import TitleWithBottomBorder from "@/components/ui/title-with-bottom-border";
import TitleWithDoubleBorder from "@/components/ui/title-with-double-border";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Manitoba() {
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

                <p className="text-sm text-black/60 text-left">
                  {pageData[3].content}
                </p>
              </div>
            </div>
          </Glass>
        </Container>
      )}

      {pageData[4] && pageData[4]?.subsections ? (
        <Container className="flex flex-col gap-5">
          <Glass className="px-10 py-10 flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <TitleWithDoubleBorder>
                {pageData[4].section}
              </TitleWithDoubleBorder>
              <TitleWithBottomBorder>{pageData[4].title}</TitleWithBottomBorder>
            </div>
            <div className="py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
              {pageData[4]?.subsections.map((item, index) => {
                return (
                  <Feature
                    key={index}
                    index={index}
                    icon={
                      <Icon
                        icon="maki:religious-buddhist-11"
                        className="text-6xl"
                      />
                    }
                    title={item.title}
                    description={item.description}
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
                    {pageData[4].section}
                  </TitleWithDoubleBorder>
                </div>
              </div>
              <div className="flex flex-col justify-start gap-6">
                <h3 className="tracking-wide text-left text-4xl text-black/70">
                  {pageData[4].title}
                </h3>

                <p className="text-sm text-black/60 text-left">
                  {pageData[4].content}
                </p>
              </div>
            </div>
          </Glass>
        </Container>
      )}

      {pageData[5] && pageData[5]?.subsections ? (
        <Container className="flex flex-col gap-5">
          <Glass className="px-10 py-10 flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <TitleWithDoubleBorder>
                {pageData[4].section}
              </TitleWithDoubleBorder>
              <TitleWithBottomBorder>{pageData[4].title}</TitleWithBottomBorder>
            </div>
            <div className="py-6 grid grid-cols-2 gap-6">
              {pageData[5]?.subsections.map((item, index) => {
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
                    {pageData[5].section}
                  </TitleWithDoubleBorder>
                </div>
              </div>
              <div className="flex flex-col justify-start gap-6">
                <h3 className="tracking-wide text-left text-4xl text-black/70">
                  {pageData[5].title}
                </h3>

                <p className="text-sm text-black/60 text-left">
                  {pageData[5].content}
                </p>
              </div>
            </div>
          </Glass>
        </Container>
      )}

      <CTAWithImage
        image="manitoba-b"
        title={ctaSection[0].title}
        description={ctaSection[0].content}
        subtitle={ctaSection[0].section}
        ctaAction="Xem thêm"
      />
      <CTAWithImage
        flip
        image="graduate"
        title={ctaSection[1].title}
        description={ctaSection[1].content}
        subtitle={ctaSection[1].section}
        ctaAction="Xem thêm"
      />

      <CTADefault
        image="/business.jpg"
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

const pageData = [
  {
    section: "Overview",
    title: "TỔNG QUAN VỀ CHƯƠNG TRÌNH",
    content: [
      "Chương trình đề cử tỉnh bang Manitoba (MPNP) là chương trình nhập cư chính của tỉnh bang Manitoba. Chương trình này được đưa ra để giúp phát triển nền kinh tế của tỉnh bang, dựa trên nhu cầu kinh tế và thị trường lao động.",
      "Thông qua chương trình này, những người nhập cư tương lai với các kỹ năng và kinh nghiệm được tỉnh bang chọn có thể nhận được giấy đề cử tỉnh bang của Manitoba. MPNP cung cấp các luồng định cư khác nhau dựa trên nhu cầu kinh tế và lao động của Manitoba. Mỗi chương trình trong MPNP có yêu cầu và tiêu chí riêng. Người xin định cư cần đáp ứng các yêu cầu đó để được đề cử và xem xét định cư tại Manitoba thông qua MPNP.",
    ],
  },
  {
    section: "Skilled Immigration",
    title: "Các Luồng Định Cư MPNP",
    subsections: [
      {
        title:
          "Chương trình Đầu tư Tỉnh Bang Manitoba (Manitoba Business Investor Stream)",
        description:
          "Dành cho các nhà đầu tư và doanh nhân muốn đầu tư và kinh doanh tại Manitoba.",
      },
      {
        title:
          "Chương trình Kỹ sư Kỹ thuật (Manitoba Skilled Worker Overseas Express Entry Pathway)",
        description:
          "Dành cho các công nhân có kỹ năng chuyên môn và kỹ thuật cao trong các ngành nghề đặc biệt mà Manitoba đang cần.",
      },
      {
        title:
          "Chương trình Nhóm nghề (Manitoba Skilled Worker Overseas – Human Capital Pathway)",
        description:
          "Dành cho các công nhân có kỹ năng và kinh nghiệm trong các ngành nghề đang có nhu cầu tuyển dụng tại Manitoba.",
      },
      {
        title:
          "Chương trình Kinh nghiệm lao động Manitoba (Manitoba Experience Pathway)",
        description:
          "Dành cho những người đã sống và làm việc tại Manitoba trong thời gian dài và muốn trở thành cư dân Canada.",
      },
    ],
  },
  {
    section: "Business Immigration",
    title: "Các Chương Trình Đầu Tư Tỉnh Bang Manitoba",
    subsections: [
      {
        title: "Diện Doanh Nhân",
        description:
          "Dành cho các ứng viên tìm kiếm cơ hội và mở công ty tại Manitoba. Số tiền tối thiểu cần đầu tư:",
        details: [
          "🍁 250.000 CAD đối với doanh nghiệp nằm trong khu đô thị đông dân Manitoba",
          "🍁 150.000 CAD đối với doanh nghiệp nằm ngoài khu đô thị đông dân Manitoba",
        ],
      },
      {
        title: "Diện Đầu Tư Nông Trại",
        description:
          "Dành cho ứng viên thành lập nông trại ở ngoại ô Manitoba. Ứng viên phải sinh sống trong chính trang trại của mình và trực tiếp quản lý. Số tiền tối thiểu cần đầu tư: 300.000 CAD. Chính Phủ mong muốn ứng viên đầu tư nông trại ở ngoại ô Manitoba. Khoản tiền Ứng viên đầu tư vào trang trại phải thuộc tài sản hữu hình. Các khoản tiền thu thuộc loại thụ động sẽ không được chấp thuận.",
      },
    ],
  },
  {
    section: "Eligibility",
    title: "Điểm Số & Yêu Cầu Về Ngoại Ngữ",
    subsections: [
      {
        title: "Điểm Số",
        description: "Số điểm tối đa: 150",
      },
      {
        title: "Ngoại Ngữ",
        description:
          "CLB hoặc NCLC 5 với diện doanh nhân đầu tư mở doanh nghiệp. Với những ứng viên đầu tư mở trang trại, Chính Phủ không quy định cụ thể. Tuy nhiên, ứng viên có thể được hỏi trong quá trình phỏng vấn trực tiếp với viên chức (tiếng Anh hoặc tiếng Pháp).",
      },
    ],
  },
  {
    section: "Eligibility",
    title: "Yêu Cầu Về Tuổi Tác, Trình Độ Học Vấn và Kinh Nghiệm Điều Hành",
    subsections: [
      {
        title: "Diện Doanh Nhân",
        description: [
          "🍁 Ứng viên phải có tối thiểu 3 năm kinh nghiệm điều hành doanh nghiệp hoặc quản lý cấp cao trong vòng 5 năm trở lại đây.",
          "🍁 Các chủ doanh nghiệp sẽ được điểm cao hơn so với cấp quản lý khi xét về mặt kinh nghiệm điều hành.",
          "🍁 Nếu ứng viên khai báo là chủ doanh nghiệp, Ứng viên phải đảm bảo mình sở hữu 33.3% cổ phần của công ty.",
        ],
      },
      {
        title: "Diện Đầu Tư Nông Trại",
        description: [
          "🍁 Ứng viên phải có tối thiểu 3 năm kinh nghiệm thành lập và phát triển trang trại. Điều này cần được chứng minh khi ứng viên khai báo với Chính Phủ (lúc điều hồ sơ).",
          "🍁 Ứng viên sẽ được cộng điểm ưu tiên nếu: Doanh nghiệp hoặc nông trại của ứng viên tạo ra nhiều giá trị kinh tế cho tất cả các vùng ở tỉnh bang Manitoba.",
          "🍁 Ứng viên có thể được cộng thêm điểm khi đáp ứng vượt tiêu chuẩn như đầu tư số tiền trên mức tối thiểu yêu cầu, doanh nghiệp có xu hướng xuất khẩu cao, hoạt động kinh doanh sản xuất của ứng viên có tác động tích cực đến thị trường ngoài thành phố Winnipeg và trình độ ngoại ngữ hơn CLB 5.",
        ],
      },
    ],
  },
  {
    section: "Education",
    title: "Trình Độ Học Vấn",
    subsections: [
      {
        title: "Diện Doanh Nhân",
        description:
          "Ứng viên tối thiểu phải có bằng THPT tương đương với bằng của Canada.",
      },
      {
        title: "Diện Đầu Tư Nông Trại",
        description:
          "Hiện tại chưa có yêu cầu cụ thể với diện đầu tư nông trại. Tuy nhiên, ứng viên đầu tư nông trại nên chứng minh kỹ năng và kinh nghiệm làm việc của mình trong ngành nông-lâm-ngư-nghiệp.",
      },
    ],
  },
  {
    section: "Age",
    title: "Độ Tuổi",
    description:
      "Không giới hạn tuổi tác. Tuy nhiên tốt nhất là ứng viên có độ tuổi từ 25 đến 49 (lợi thế về điểm số).",
  },
  {
    section: "Program Notes",
    title: "Các Lưu Ý Về Chương Trình",
    subsections: [
      {
        title: "Phỏng Vấn",
        description:
          "Ứng viên phải tham gia buổi phỏng vấn trực tiếp với viên chức Sở Di Trú (phụ trách diện định cư đầu tư kinh doanh).",
      },
      {
        title: "Chuyến Du Lịch Khảo Sát",
        description:
          "Chính phủ tỉnh bang Manitoba yêu cầu các ứng viên phải đến Manitoba một chuyến. Thời gian khảo sát thực địa phải trong vòng 1 năm trước khi nộp hồ sơ trên hệ thống EOI.",
      },
      {
        title: "Thường Trú Nhân",
        description:
          "Ứng viên được cấp giấy phép lao động tạm thời. Thường Trú Nhân sẽ được cấp sau đó khi ứng viên nộp đầy đủ hồ sơ theo yêu cầu của Chính Phủ tỉnh bang.",
      },
      {
        title: "Quy trình đăng ký",
        description:
          "Ứng viên nộp hồ sơ của mình lên hệ thống EOI. Tuy nhiên ứng viên phải nộp hồ sơ chính thức qua đường bưu điện đến tỉnh bang. Sau đó, Sở Di Trú của tỉnh bang sẽ gửi email xác nhận đã nhận được hồ sơ của ứng viên. Sở Di Trú đang cập nhật hệ thống để các ứng viên có thể nộp toàn bộ hồ sơ trực tuyến. Chính Phủ tỉnh bang sẽ chọn ra EOI của các ứng viên có số điểm cao nhất và cấp thư mời nộp hồ sơ (Letter of Advice to Apply). Số lượng thư giới hạn từ 15 đến 20 lần trong một năm. Lá thư này nhằm giúp Chính Phủ sàng lọc hồ sơ kỹ hơn và khi có nó ứng viên có thể hoàn tất bộ hồ sơ xin định cư diện đầu tư kinh doanh tại tỉnh bang Manitoba.",
      },
      {
        title: "Tạo Việc Làm",
        description:
          "Công ty của ứng viên phải đảm bảo tạo ra được việc làm cho ít nhất 1 nhân viên toàn thời gian (công dân Canada hoặc Thường Trú Nhân) tại Manitoba. Ứng viên không được thuê lao động là họ hàng gia đình của mình. Yêu cầu này không áp dụng với diện đầu tư kinh doanh trang trại.",
      },
    ],
  },
  {
    cta: true,
    section: "Why BC",
    title: "VÌ SAO MANITOBA LÀ ĐIỂM ĐẾN LÝ TƯỞNG CHO GIA ĐÌNH BẠN?",
    content: [
      "Manitoba, Canada là một điểm đến lý tưởng cho dân nhập cư nhờ vào nhiều yếu tố hấp dẫn. Trước hết, tỉnh bang này có chương trình Đề cử Tỉnh bang Manitoba (Manitoba Provincial Nominee Program – MPNP), giúp quá trình định cư trở nên dễ dàng và nhanh chóng hơn cho người lao động có kỹ năng và doanh nhân. Điều này tạo điều kiện thuận lợi cho những ai muốn tìm kiếm cơ hội việc làm và xây dựng cuộc sống mới.",
      "Khí hậu ở Manitoba tuy có mùa đông lạnh nhưng lại có mùa hè ấm áp và dễ chịu. Đặc biệt, Winnipeg, thủ phủ của Manitoba, được biết đến với mức sống phải chăng, chi phí nhà ở thấp và chất lượng cuộc sống cao. Giáo dục và y tế ở đây cũng rất phát triển, với nhiều trường học và bệnh viện chất lượng cao.",
      "Manitoba còn nổi tiếng với cộng đồng đa văn hóa và sự thân thiện của người dân. Đây là nơi tổ chức nhiều lễ hội văn hóa đa dạng, tạo nên môi trường sống phong phú và sôi động. Tỉnh bang này cũng có nhiều cơ hội việc làm trong các ngành nghề khác nhau như nông nghiệp, sản xuất, công nghệ thông tin và chăm sóc sức khỏe.",
      "Ngoài ra, với cảnh quan thiên nhiên hùng vĩ, nhiều công viên và khu bảo tồn, Manitoba là nơi lý tưởng cho những ai yêu thích hoạt động ngoài trời và khám phá thiên nhiên. Tất cả những yếu tố này kết hợp lại làm cho Manitoba trở thành một điểm đến lý tưởng cho dân nhập cư.",
    ],
  },
  {
    cta: true,
    section: "Matching Program",
    title: "CHƯƠNG TRÌNH MANITOBA NÀO PHÙ HỢP CHO GIA ĐÌNH BẠN?",
    content: [
      "Tùy thuộc vào hoàn cảnh cụ thể, chúng tôi sẽ giúp bạn lựa chọn chương trình phù hợp nhất để đảm bảo một tương lai tốt đẹp tại Manitoba. Nhìn chung, bạn cần đáp ứng các điều kiện tối thiểu tùy từng chương trình.",
    ],
  },
];
