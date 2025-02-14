import Container from "@/components/ui/container";
import Glass from "@/lib/helpers";
import { Feature } from "@/components/ui/cards-set";
import { CTADefault, CTAWithImage } from "@/components/ui/cta";
import { ServicesCard } from "@/components/ui/services-card";
import TitleWithBottomBorder from "@/components/ui/title-with-bottom-border";
import TitleWithDoubleBorder from "@/components/ui/title-with-double-border";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Ontario() {
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

                <div>
                  {Array.isArray(pageData[4].content) ? (
                    <ul className="list-inside flex flex-col gap-2">
                      {pageData[4].content.map((item, index) => (
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
                      {pageData[4].content}
                    </p>
                  )}
                </div>
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

                <div>
                  {Array.isArray(pageData[5].content) ? (
                    <ul className="list-inside flex flex-col gap-2">
                      {pageData[5].content.map((item, index) => (
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
                      {pageData[5].content}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </Glass>
        </Container>
      )}

      <CTAWithImage
        image="ontario-b"
        title={ctaSection[0].title}
        description={ctaSection[0].content}
        subtitle={ctaSection[0].section}
        ctaAction="Xem thêm"
      />
      {ctaSection[1] && (
        <CTAWithImage
          flip
          image="ontario-a"
          title={ctaSection[1].title}
          description={ctaSection[1].content}
          subtitle={ctaSection[1].section}
          ctaAction="Xem thêm"
        />
      )}

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

const pageData = [
  {
    section: "Overview",
    title: "TỔNG QUAN VỀ CHƯƠNG TRÌNH",
    content: [
      "Chương trình Đề cử tỉnh bang Ontario (OINP) là chương trình nhập cư chính của tỉnh bang Ontario. Chương trình này nhằm thu hút những người lao động có kỹ năng, doanh nhân và nhà đầu tư đến sinh sống và làm việc tại Ontario, góp phần phát triển nền kinh tế của tỉnh bang.",
      "Thông qua chương trình này, những ứng viên được tỉnh bang Ontario đề cử có thể nộp đơn xin thường trú tại Canada. OINP cung cấp các luồng định cư khác nhau dựa trên nhu cầu kinh tế và thị trường lao động của tỉnh bang. Mỗi luồng trong OINP có yêu cầu và tiêu chí riêng. Ứng viên cần đáp ứng các yêu cầu này để được đề cử và xem xét định cư tại Ontario.",
    ],
  },
  {
    section: "Streams",
    title: "CÁC LUỒNG ĐỊNH CƯ OINP",
    subsections: [
      {
        title: "Chương trình Đầu tư Doanh Nghiệp (Entrepreneur Stream)",
        description:
          "Dành cho các doanh nhân muốn đầu tư và điều hành doanh nghiệp tại Ontario.",
      },
      {
        title:
          "Chương trình Kỹ năng Chuyên môn (Employer Job Offer: Foreign Worker Stream)",
        description:
          "Dành cho các lao động nước ngoài có lời mời làm việc từ các doanh nghiệp tại Ontario.",
      },
      {
        title: "Chương trình Đề cử Kỹ năng (Human Capital Priorities Stream)",
        description:
          "Dành cho các ứng viên có kỹ năng và kinh nghiệm trong các lĩnh vực cần thiết của Ontario.",
      },
      {
        title: "Chương trình Đề cử Đầu tư (Investor Stream)",
        description:
          "Dành cho các nhà đầu tư có khả năng tài chính và muốn đầu tư vào các dự án tại Ontario.",
      },
    ],
  },
  {
    section: "Business Immigration",
    title: "CÁC CHƯƠNG TRÌNH ĐẦU TƯ TẠI ONTARIO",
    subsections: [
      {
        title: "Diện Doanh Nhân",
        description:
          "Dành cho các ứng viên muốn thành lập hoặc mua lại doanh nghiệp tại Ontario. Số tiền tối thiểu cần đầu tư:",
        details: [
          "🍁 600.000 CAD đối với doanh nghiệp nằm trong khu vực Greater Toronto Area",
          "🍁 200.000 CAD đối với doanh nghiệp nằm ngoài khu vực Greater Toronto Area",
        ],
      },
      {
        title: "Diện Đầu Tư Đặc Biệt",
        description:
          "Dành cho các ứng viên muốn đầu tư vào các lĩnh vực đặc biệt tại Ontario. Số tiền tối thiểu cần đầu tư: 1.000.000 CAD.",
      },
    ],
  },
  {
    section: "Eligibility",
    title: "YÊU CẦU ĐIỀU KIỆN & ĐIỂM SỐ",
    subsections: [
      {
        title: "Điểm Số",
        description: "Số điểm tối đa: 200",
      },
      {
        title: "Ngoại Ngữ",
        description:
          "CLB hoặc NCLC 7 với diện doanh nhân và kỹ sư. Không yêu cầu cụ thể đối với diện đầu tư đặc biệt, nhưng ứng viên có thể được yêu cầu chứng minh khả năng ngôn ngữ trong quá trình phỏng vấn.",
      },
    ],
  },
  {
    section: "Eligibility",
    title: "YÊU CẦU VỀ KINH NGHIỆM VÀ TRÌNH ĐỘ",
    subsections: [
      {
        title: "Diện Doanh Nhân",
        description: [
          "🍁 Ứng viên phải có ít nhất 3 năm kinh nghiệm điều hành doanh nghiệp hoặc quản lý trong 5 năm qua.",
          "🍁 Ứng viên phải sở hữu ít nhất 33.3% cổ phần của công ty.",
        ],
      },
      {
        title: "Diện Đầu Tư Đặc Biệt",
        description: [
          "🍁 Ứng viên phải có ít nhất 5 năm kinh nghiệm đầu tư và quản lý các dự án lớn.",
          "🍁 Điểm cộng sẽ được cấp cho những ứng viên đầu tư vào các dự án tạo ra nhiều việc làm và giá trị kinh tế cao cho tỉnh bang.",
        ],
      },
    ],
  },
  {
    section: "Education",
    title: "TRÌNH ĐỘ HỌC VẤN",
    subsections: [
      {
        title: "Diện Doanh Nhân",
        description:
          "Ứng viên tối thiểu phải có bằng THPT hoặc tương đương với bằng của Canada.",
      },
      {
        title: "Diện Đầu Tư Đặc Biệt",
        description:
          "Ứng viên nên có trình độ học vấn phù hợp với yêu cầu đầu tư và quản lý dự án.",
      },
    ],
  },
  {
    section: "Age",
    title: "ĐỘ TUỔI",
    description:
      "Không giới hạn độ tuổi. Tuy nhiên, ứng viên từ 25 đến 49 tuổi có thể được ưu tiên hơn về điểm số.",
  },
  {
    section: "Program Notes",
    title: "CÁC LƯU Ý VỀ CHƯƠNG TRÌNH",
    subsections: [
      {
        title: "Phỏng Vấn",
        description:
          "Ứng viên có thể cần tham gia phỏng vấn trực tiếp với viên chức tỉnh bang để chứng minh khả năng và kế hoạch đầu tư.",
      },
      {
        title: "Khảo Sát Thực Địa",
        description:
          "Chính phủ tỉnh bang Ontario có thể yêu cầu ứng viên đến thăm tỉnh bang trước khi nộp hồ sơ. Thời gian khảo sát nên diễn ra trong vòng 6 tháng trước khi nộp hồ sơ.",
      },
      {
        title: "Thường Trú Nhân",
        description:
          "Ứng viên sẽ được cấp giấy phép lao động tạm thời trước khi nhận thường trú nhân nếu hồ sơ đáp ứng đầy đủ yêu cầu.",
      },
      {
        title: "Quy trình đăng ký",
        description:
          "Ứng viên nộp hồ sơ qua hệ thống EOI và gửi hồ sơ chính thức qua đường bưu điện. Chính phủ tỉnh bang sẽ chọn hồ sơ dựa trên điểm số và cấp thư mời nộp hồ sơ (Letter of Advice to Apply). Số lượng thư mời có thể dao động từ 10 đến 15 lần mỗi năm.",
      },
      {
        title: "Tạo Việc Làm",
        description:
          "Doanh nghiệp của ứng viên phải tạo ra việc làm cho ít nhất 2 nhân viên toàn thời gian (công dân Canada hoặc Thường Trú Nhân). Yêu cầu này không áp dụng cho diện đầu tư đặc biệt.",
      },
    ],
  },
  {
    cta: true,
    section: "Why Ontario",
    title: "VÌ SAO ONTARIO LÀ ĐIỂM ĐẾN LÝ TƯỞNG?",
    content: [
      "Ontario, Canada là một điểm đến lý tưởng cho dân nhập cư nhờ vào nền kinh tế phát triển và chất lượng cuộc sống cao. Tỉnh bang này có nhiều cơ hội việc làm trong các lĩnh vực như công nghệ thông tin, tài chính, và dịch vụ chăm sóc sức khỏe.",
      "Khí hậu ở Ontario rất đa dạng, với mùa đông lạnh và mùa hè ấm áp. Thành phố Toronto, thủ phủ của tỉnh bang, nổi tiếng với mức sống cao, cơ sở hạ tầng hiện đại, và đa dạng văn hóa.",
      "Ontario cũng có hệ thống giáo dục và y tế phát triển, với nhiều trường học và bệnh viện chất lượng cao. Cộng đồng đa văn hóa và sự thân thiện của người dân là điểm cộng lớn khi chọn Ontario là nơi định cư.",
      "Với cảnh quan thiên nhiên tuyệt đẹp, bao gồm nhiều công viên và hồ nước lớn, Ontario là nơi lý tưởng cho những ai yêu thích hoạt động ngoài trời và khám phá thiên nhiên.",
    ],
  },
  {
    cta: true,
    section: "Matching Program",
    title: "CHƯƠNG TRÌNH ONTARIO NÀO PHÙ HỢP VỚI BẠN?",
    content: [
      "Dựa trên hoàn cảnh cá nhân của bạn, chúng tôi có thể giúp bạn chọn chương trình OINP phù hợp nhất để đảm bảo sự thành công trong quá trình định cư tại Ontario. Hãy đảm bảo rằng bạn đáp ứng các yêu cầu và tiêu chí của chương trình mà bạn quan tâm.",
    ],
  },
];
