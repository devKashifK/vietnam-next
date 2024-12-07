import Container from "@/components/ui/container";
import Glass from "@/lib/helpers";
import { Feature } from "@/components/ui/cards-set";
import { CTADefault, CTAWithImage } from "@/components/ui/cta";
import { ServicesCard } from "@/components/ui/services-card";
import TitleWithBottomBorder from "@/components/ui/title-with-bottom-border";
import TitleWithDoubleBorder from "@/components/ui/title-with-double-border";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function PrinceEdwardIsland() {
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
        image="/canada.jpg"
        title={ctaSection[0].title}
        description={ctaSection[0].content}
        subtitle={ctaSection[0].section}
        ctaAction="Xem thêm"
      />
      {ctaSection[1] && (
        <CTAWithImage
          flip
          image="/canada.jpg"
          title={ctaSection[1].title}
          description={ctaSection[1].content}
          subtitle={ctaSection[1].section}
          ctaAction="Xem thêm"
        />
      )}

      <CTADefault
        image="/business.jpg"
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
      "Prince Edward Island (Đảo hoàng tử) là một tỉnh bang nhỏ nằm ở phía Đông của Canada. Đây cũng là tỉnh bang nhỏ nhất và cũng xanh nhất của Canada với thiên nhiên tươi đẹp, nước và không khí cực kì trong lành.. Nông nghiệp, ngư nghiệp và du lịch là lĩnh vực phát triển trọng tâm của nền kinh tế đảo hoàng tử Edward. Bên cạnh đó, PEI còn là một trong những nơi có chi phí sinh hoạt cũng như giá nhà ở khá thấp so với các tỉnh bang khác.",
      "PEI PNP là Chương trình Đề cử của tỉnh bang Prince Edward Island. Thông qua chương trình này, người nhập cư sở hữu các kỹ năng và kinh nghiệm phù hợp với chỉ tiêu của tỉnh bang này sẽ có cơ hội nhận được Giấy chứng nhận Đề cử Tỉnh Prince Edward Island, cho phép người nước ngoài có thể đăng ký thường trú Canada nhanh hơn so với các loại hình di trú khác của Canada.",
    ],
  },
  {
    section: "Eligibility",
    title: "Điều Kiện Tham Gia Chương Trình Đề Cử Tỉnh Bang PEI",
    content: [
      "Độ tuổi từ 21 – 59 tuổi",
      "Bắt buộc bằng cấp tối thiểu là bằng THPT.",
      "Có mục tiêu định cư lâu dài tại Prince Edward Island.",
      "Tổng tài sản ròng nên có ít nhất 600.000 USD.",
      "Có 3 năm kinh nghiệm ở vị trí quản lý trở lên.",
      "Thành thạo tiếng Anh hoặc tiếng Pháp.",
    ],
  },
  {
    section: "Skilled Immigration",
    title: "Các luồng định cư của PEI PNP",
    subsections: [
      {
        title: "Diện Lao Động Lành Nghề",
        description:
          "Dành cho những lao động đang làm việc tại PEI hoặc có lời mời của chủ lao động tại PEI",
        details: [
          "Từ 18 đến 59 tuổi",
          "Có lời mời làm việc toàn thời gian hoặc ít nhất 2 năm từ một chủ lao động ở PEI cho nhóm ngành thuộc TEER 0, 1, 2 hoặc 3",
          "Có ít nhất 2 năm kinh nghiệm làm việc toàn thời gian trong 5 năm qua",
          "Có giấy phép lao động hợp lệ tại Canada",
          "Ngôn ngữ: CLB 4 trở lên (tiếng Anh hoặc tiếng Pháp)",
          "Có ý định muốn định cư tại PEI",
        ],
      },
      {
        title: "Diện Lao Động Thiết Yếu",
        description:
          "Dành cho những lao động đã được 1 chủ lao động PEI thuê và chủ lao động muốn bảo lãnh cho họ.",
        details: [
          "Từ 18 đến 59 tuổi",
          "Có lời mời làm việc toàn thời gian hoặc ít nhất 2 năm từ một chủ lao động ở PEI cho nhóm ngành thuộc TEER 4 hoặc 5",
          "Có tối thiểu 6 tháng kinh nghiệm làm việc toàn thời gian với chủ lao động tại PEI",
          "Có giấy phép lao động hợp lệ tại Canada",
          "Tốt nghiệp THPT",
          "Có ít nhất 2 năm kinh nghiệm làm việc toàn thời gian trong 5 năm qua",
          "Ngôn ngữ: CLB 4 trở lên (tiếng Anh hoặc tiếng Pháp)",
          "Có ý định muốn định cư tại PEI",
        ],
      },
      {
        title: "Sinh viên quốc tế",
        description:
          "Dành cho những sinh viên mới tốt nghiệp từ các trường đại học và cao đẳng được công nhận tại PEI",
        details: [
          "Từ 18 đến 59 tuổi",
          "Có lời mời làm việc toàn thời gian hoặc ít nhất 2 năm từ một chủ lao động ở PEI",
          "Công việc được mời thuộc TEER 0, 1, 2 hoặc 3 nếu công việc tay nghề cao; thuộc TEER 4 hoặc 5 nếu công việc tay nghề trung cấp",
          "Tốt nghiệp tại một trường công tại PEI",
          "Có giấy phép lao động hợp lệ tại Canada",
          "Ngôn ngữ: CLB 4 trở lên (tiếng Anh hoặc tiếng Pháp)",
          "Có ý định muốn định cư tại PEI",
        ],
      },
    ],
  },
  {
    section: "Express Entry",
    title: "Diện PEI PNP Express Entry",
    content: [
      "Đây là diện dành cho những ứng viên đã có hồ sơ Express Entry hợp lệ, có mong muốn sống và làm việc tại PEI. Bên cạnh đó, các ứng viên này có kỹ năng phù hợp với nhu cầu thị trường lao động hiện tại trong tỉnh bang PEI. Chương trình định cư tỉnh bang Prince Edward Island Canada ưu tiên các lời mời được cấp thông qua Express Entry cho những ứng viên nộp đơn làm việc và sinh sống tại tỉnh với một chủ lao động PEI đủ điều kiện. Người nộp đơn thỏa mãn đầy đủ các tiêu chí sẽ được rút ngắn thời gian xử lý hồ sơ xuống dưới 6 tháng. Các tiêu chí cụ thể như sau:",
      "Phù hợp 1 trong 3 chương trình của Express Entry liên bang như Chương trình Công nhân lành nghề liên bang (Công nhân lành nghề liên bang Program), Chương trình giao dịch tay nghề liên bang (Thương mại tay nghề liên bangs Program), Chương trình kinh nghiệm làm việc tại Canada (Canadian Experience Class)",
      "Đã có hồ sơ trên hệ thống Express Entry của liên bang",
      "Cần lưu ý rằng, nếu bạn là người có Giấy phép làm việc sau đại học (PGWP) hoặc người có giấy phép lao động mở của vợ/chồng: PGWP của bạn phải có hiệu lực ít nhất 4 tháng tại thời điểm bạn gửi EOI",
      "Có ít nhất 9 tháng kinh nghiệm làm việc dưới sự chỉ đạo của chủ lao động PEI. Ngoài ra, nếu bạn nộp đơn theo diện này thì sẽ không đảm bảo rằng tất cả các hồ sơ Express Entry sẽ được chấp thuận. Thay vào đó, chỉ những ứng viên có kỹ năng phù hợp với nhu cầu lao động của tỉnh bang mới được thông qua.",
    ],
  },
  {
    section: "Business Immigration",
    title: "DIỆN ĐỊNH CƯ DOANH NHÂN",
    content: [
      "Đây là diện dành cho các ứng viên muốn đầu tư và điều hành một doanh nghiệp tại PEI, có giấy phép làm việc trước khi nhận được đề cử của tỉnh bang.",
      "Ưu Điểm Của Chương Trình Đề cử Tỉnh Bang PEI",
      "• Yêu cầu mức đầu tư thấp nhất trong số các chương trình doanh nhân tỉnh bang ở Canada, với chỉ $150,000CAD.",
      "• Không yêu cầu doanh thu lợi nhuận của công ty tại Canada.",
      "• Không yêu cầu số công việc cần tạo ra tối thiểu, chỉ cần nhà đầu tư thật sự có thiện chí và chứng minh được sự nỗ lực tham gia hoạt động kinh doanh tại PEI.",
      "• Chương trình đề cử tỉnh bang PEI không bắt buộc ứng viên phải khảo sát địa phương mới có thể nộp hồ sơ.",
      "• Đương nhiên là Chương trình này sẽ thưởng thêm điểm EOI nhằm giúp hồ sơ nâng cao tính cạnh tranh, nếu ứng viên có tham gia chuyến đi khảo sát. Đây là một lợi thế trong những lúc nhà đi tư không thể tham gia chuyến đi khảo sát, giúp họ tiết kiệm thời gian và tiền bạc.",
      "• Cùng với New Brunswick, đảo hoàng tử Edward (PEI) mang đến cho người dân chất lượng cuộc sống cao. Giá nhà, chi phí sinh hoạt, học phí cao đẳng và đại học tại đây rất hợp lý so với các tỉnh bang khác ở Canada.",
      "• Đây là tỉnh bang duy nhất có Lịch tuyển chọn hồ sơ cố định và đều đặn mỗi tháng, trong khi các tỉnh bang như Ontario và British Columbia thông thường phải từ 3 đến 6 tháng mới có đợt tuyển chọn hồ sơ.",
      "• Là một trong các Tỉnh bang có điểm chọn lọc hồ sơ (EOI) thấp nhất trong các chương trình định cư Canada tỉnh bang dành cho doanh nhân.",
      "• Hồ sơ chứng minh tài chính không trải qua quá trình thẩm định bắt buộc của đơn vị thứ ba tại Canada – do tỉnh bang chỉ định. Hồ sơ chứng minh tài chính chỉ cần được thẩm định theo đúng luật Việt Nam trước khi nộp hồ sơ.",
      "• Không yêu cầu ký quỹ.",
    ],
  },
  {
    section: "Investment",
    title: "Hình Thức Đầu Tư",
    content: [
      "Nhà đầu tư chỉ cần đầu tư từ $150,000CAD (tương đương tối thiểu 33.33% cổ phần) và tham gia quản lý doanh nghiệp đó tại tỉnh PEI.",
      "Kế hoạch kinh doanh có tính khả thi và mang lại lợi ích kinh tế cho tỉnh bang.",
      "Vận hành doanh nghiệp trong 12 tháng.",
    ],
  },
  {
    section: "Eligibility",
    title:
      "Điều kiện tham gia chương trình đề cử tỉnh bang PEI diện doanh nhân",
    content: [
      "• Từ 21 đến 59 tuổi",
      "• Có giá trị tài sản ròng tối thiểu là 600.000 CAD",
      "• Tốt nghiệp THPT",
      "• Có kỹ năng quản lý và điều hành một doanh nghiệp",
      "• Ngôn ngữ: CLB 4 trở lên (tiếng Anh hoặc tiếng Pháp)",
      "• Có ý định sống và làm việc tại PEI đồng thời quản lý doanh nghiệp một cách tích cực và liên tục",
      "• Tham gia một cuộc phỏng vấn với nhân viên di trú của tỉnh bang.",
    ],
  },
  {
    section: "Application Process",
    title: "Quy Trình Nộp Hồ Sơ",
    content: [
      "Giai đoạn 1: Thẩm định hồ sơ và ký hợp đồng, khảo sát và nộp Thư bày tỏ nguyện vọng (1-3 tháng)",
      "Giai đoạn 2: Nhận thư mời dự tuyển ITA (45 ngày)",
      "Giai đoạn 3: Phỏng vấn và nhận thư hỗ trợ xin WP từ Tỉnh bang (3-6 tháng)",
      "Giai đoạn 4: Nộp đơn xin Work Permit và chờ phê duyệt liên bang (1-3 tháng)",
      "Giai đoạn 5: Nhận WP có thời hạn 2 năm, tới PEI bắt đầu kinh doanh (3-6 tháng)",
      "Giai đoạn 6: Triển khai kế hoạch kinh doanh và đảm bảo thực hiện đúng cam kết đã ký với PEI (1-2 năm)",
      "Giai đoạn 7: Nộp đơn xin đề cử tỉnh bang (2-4 tháng)",
      "Giai đoạn 8: Nộp đơn xin cấp PR tới liên bang (12-18 tháng)",
      "Giai đoạn 9: Nhận thẻ thường trú nhân (PR).",
    ],
  },
  {
    cta: true,
    section: "Why PEI",
    title: "Vì sao Prince Edward Island là điểm đến lý tưởng cho gia đình bạn?",
    content: [
      "Prince Edward Island (PEI), Canada, là điểm đến lý tưởng cho dân nhập cư nhờ vào sự kết hợp giữa chất lượng cuộc sống cao, môi trường thiên nhiên tươi đẹp, và cộng đồng thân thiện, hòa đồng. Đặc biệt, PEI có chi phí sinh hoạt thấp hơn so với nhiều nơi khác ở Canada, giúp người nhập cư dễ dàng ổn định cuộc sống hơn.",
      "PEI nổi tiếng với cảnh quan thiên nhiên tuyệt đẹp, bao gồm những bãi biển trải dài, những cánh đồng xanh ngát, và những thị trấn duyên dáng. Điều này tạo nên một môi trường sống trong lành và thư giãn, lý tưởng cho những ai tìm kiếm sự cân bằng giữa công việc và cuộc sống.",
      "Thị trường việc làm tại PEI cũng rất đa dạng, với nhiều cơ hội trong các lĩnh vực như nông nghiệp, ngư nghiệp, du lịch, và dịch vụ. Điều này tạo điều kiện thuận lợi cho người nhập cư có thể tìm kiếm việc làm phù hợp với kỹ năng và kinh nghiệm của mình.",
      "Chính phủ PEI còn có các chương trình hỗ trợ nhập cư như Chương trình Đề cử Tỉnh bang (PEI PNP), giúp người nhập cư dễ dàng hơn trong việc xin thường trú và hòa nhập vào cộng đồng. Hệ thống giáo dục và y tế của tỉnh cũng được đánh giá cao, cung cấp các dịch vụ chất lượng cho cư dân.",
      "Nhờ những yếu tố này, PEI thực sự là một điểm đến hấp dẫn cho người nhập cư muốn bắt đầu một cuộc sống mới tại Canada.",
    ],
  },
];
