import Container from "@/components/ui/container";
import Glass from "@/lib/helpers";
import { Feature } from "@/components/ui/cards-set";
import { CTADefault, CTAWithImage } from "@/components/ui/cta";
import { ServicesCard } from "@/components/ui/services-card";
import TitleWithBottomBorder from "@/components/ui/title-with-bottom-border";
import TitleWithDoubleBorder from "@/components/ui/title-with-double-border";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Saskatchewan() {
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

              <p className="text-sm text-black/60 text-left">
                {pageData[0].content}
              </p>
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

                <p className="text-sm text-black/60 text-left">
                  {pageData[1].content}
                </p>
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

                <p className="text-sm text-black/60 text-left">
                  {pageData[2].content}
                </p>
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
      "Chương trình đề cử của tỉnh bang Saskatchewan (SINP) được xây dựng dựa trên sự hợp tác của chính quyền tỉnh bang và chính phủ Canada thông qua Cơ quan Nhập cư, Người tị nạn và Quốc tịch (IRCC). Thông qua chương trình này, những ứng viên tương lai với những kỹ năng và kinh nghiệm do tỉnh bang đề cử có thể nhận được Thư đề cử Saskatchewan, cho phép công dân quốc tế nộp đơn xin thường trú (PR) tại Canada với thời gian xét duyệt nhanh hơn các chương trình nhập cư khác.",
      "Hiện có 3 dòng (Stream) phổ biến dành cho ứng viên có nguyện vọng định cư theo chương trình SINP, bao gồm:",
      "🍁 Saskatchewan International Skilled Worker: dành cho đối tượng lao động lành nghề muốn sinh sống, làm việc ở Saskatchewan.",
      "🍁 Saskatchewan Experience: dành cho người lao động có giấy phép làm việc và sinh viên tốt nghiệp quốc tế đang sống và làm việc tại Saskatchewan.",
      "🍁 Saskatchewan Entrepreneur and Farm: Dành cho doanh nhân, nhà đầu tư có kế hoạch khởi nghiệp hoặc mua lại một trang trại ở Saskatchewan.",
    ],
  },
  {
    section: "International Skilled Worker",
    title: "Saskatchewan International Skilled Worker",
    content: [
      "Dòng này bao gồm 3 dòng nhập cư hướng đến những người lao động động nước ngoài có tay nghề cao và có khả năng tham gia vào lực lượng lao động của Saskatchewan. Có một số chương trình ưu tiên những ứng viên có kinh nghiệm trong một số lĩnh vực hiện đang thiếu hụt lao động, trong khi các chương trình khác hướng đến ứng viên có Thư mời làm việc từ các nhà tuyển dụng ở Saskatchewan.",
      "International Skilled Worker - Employment Offer",
      "International Skilled Worker - Occupation In-Demand",
      "International Skilled Worker - Tech Talent Pathway",
    ],
  },
  {
    section: "Employment Offer",
    title:
      "Chương trình đề cử tỉnh bang Saskatchewan (SINP) - Employment Offer",
    content: [
      "Ưu Điểm Của Chương Trình",
      "• Vợ/Chồng được cấp Giấy Phép Lao Động mở (Open Work Permit) từ Việt Nam",
      "• Nộp hồ sơ xin PR từ Việt Nam",
      "• Tất cả các con cái đều được học tập miễn phí và miễn phí bảo hiểm y tế cho cả gia đình",
      "• Nhận được công việc phù hợp và thu nhập ổn định tại Canada trong thời gian chờ PR",
      "• Nhận được đề cử tỉnh bang (Nomination) tại Việt Nam chỉ sau 3 tháng",
      "• Yêu cầu đơn giản và không chứng minh tài chính",
    ],
  },
  {
    section: "Requirements",
    title: "Điều Kiện Chương Trình",
    content: [
      "TRÌNH ĐỘ",
      "• Tốt nghiệp Đại học, Cao đẳng hoặc Trung cấp (đã được kiểm chứng và tương đương với hệ thống giáo dục của Canada).",
      "NGOẠI NGỮ",
      "• Chứng chỉ ngoại ngữ tối thiểu đạt CLB 4 (IELTS 4.0)",
      "SỨC KHỎE",
      "• Yêu cầu cả gia đình sức khoẻ tốt",
      "KINH NGHIỆM",
      "• Kinh nghiệm tối thiểu 1 năm trong 10 năm gần nhất",
      "LÝ LỊCH",
      "• Lý lịch trong sạch",
      "THƯ CHẤP THUẬN VIỆC LÀM",
      "• Nhận được Thư Chấp Thuận Việc Làm (JAL) từ tỉnh bang Saskatchewan",
    ],
  },
  {
    section: "Saskatchewan Experience",
    title:
      "Saskatchewan Experience – Dòng nhập cư dành cho người có kinh nghiệm làm việc tại Saskatchewan",
    content: [
      "Saskatchewan Experience bao gồm 5 dòng nhập cư hướng đến những người lao động đã có kinh nghiệm làm việc và học tập tại Saskatchewan. Đồng thời, người lao động phải có Thư mời làm việc từ chủ lao động ở Saskatchewan để tiếp tục làm việc tại tỉnh bang này, bao gồm một số chương trình trình ưu tiên ứng viên có kinh nghiệm trong một số lĩnh vực đang thiếu hụt lao động.",
      "🍁 Saskatchewan Existing Work Permit.",
      "🍁 Saskatchewan Health Professionals.",
      "🍁 Saskatchewan Hospitality Sector Project.",
      "🍁 Saskatchewan Long-Haul Truck Driver Project.",
      "🍁 Saskatchewan Students.",
    ],
  },
  {
    section: "Saskatchewan Students",
    title: "Điều Kiện Tham Gia Chương Trình Saskatchewan Students",
    content: [
      "1. Sinh viên đã tốt nghiệp từ một cơ sở giáo dục sau trung học được công nhận tại Saskatchewan:",
      "• Bằng cấp: Có giấy chứng nhận, chứng chỉ hoặc bằng tốt nghiệp từ một cơ sở giáo dục sau trung học được công nhận tại Saskatchewan.",
      "• Kinh nghiệm: Ứng viên đã làm việc được trả lương tối thiểu 6 tháng (hoặc 780 giờ) ở Saskatchewan. Các loại kinh nghiệm làm việc đủ điều kiện ở Saskatchewan bao gồm:",
      "  - Trong trường (On-campus);",
      "  - Ngoài trường (Off-campus);",
      "  - Hợp tác (Co-op terms);",
      "• Học bổng sau đại học có thể được xác minh bởi cơ sở giáo dục của ứng viên;",
      "• Kinh nghiệm làm việc có được trong giấy phép làm việc sau khi tốt nghiệp (Post-Graduate Work Permit).",
      "• Hiện có giấy phép làm việc hợp lệ sau khi tốt nghiệp từ Bộ Di trú, Người tị nạn và Quốc tịch Canada (IRCC).",
      "• Thư mời làm việc: Có lời mời làm việc hiện tại, lâu dài, toàn thời gian trong lĩnh vực nghiên cứu của ứng viên từ một nhà tuyển dụng ở Saskatchewan.",
      "• Công việc phải thỏa mãn:",
      "  - Trong nhóm phân loại nghề nghiệp quốc gia TEER 0, 1, 2 và 3; hoặc",
      "  - Trong danh sách ngành nghề được chỉ định trong tỉnh bang;",
      "  - Thư mời làm việc có liên quan đến lĩnh vực ngành học của ứng viên và yêu cầu trình độ sau trung học;",
      "  - Nhân viên phục vụ thức ăn và đồ uống phải đăng ký theo danh mục Lĩnh vực khách sạn.",
      "• Có Thư chấp thuận công việc SINP (Job Approval Letter) hợp lệ.",
      "• Ngoại ngữ: Có điểm ngôn ngữ tối thiểu của Điểm chuẩn ngôn ngữ Canada CLB 4 nếu lời mời làm việc thuộc nhóm nghề nghiệp TEER 4 hoặc 5.",
      "2. Sinh viên đã tốt nghiệp từ một cơ sở giáo dục tại Canada nhưng không thuộc tỉnh bang Saskatchewan:",
      "• Bằng cấp: Đã tốt nghiệp một chương trình tương đương với ít nhất một năm học (8 tháng) nghiên cứu toàn thời gian từ một cơ sở giáo dục sau trung học được công nhận ở Canada (bên ngoài Saskatchewan) với giấy chứng nhận, chứng chỉ hoặc bằng tốt nghiệp.",
      "• Đã nộp đơn đăng ký và nhận được giấy phép làm việc sau tốt nghiệp (Post-Granduate Work Permit) hợp lệ từ IRCC.",
      "• Kinh nghiệm: Đã làm việc sau khi tốt nghiệp với giấy phép làm việc sau tốt nghiệp trong ít nhất 6 tháng liên tục (tối thiểu 780 giờ) công việc được trả lương tại Saskatchewan ở một vị trí liên quan đến ngành học.",
      "• Các loại kinh nghiệm làm việc đủ điều kiện ở Saskatchewan bao gồm kinh nghiệm làm việc có được trong giấy phép làm việc sau tốt nghiệp.",
      "• Thư mời làm việc: Có lời mời làm việc hiện tại, lâu dài, toàn thời gian trong lĩnh vực liên quan đến ngành học từ một nhà tuyển dụng tại Saskatchewan.",
      "• Công việc phải thỏa mãn:",
      "  - Trong nhóm phân loại nghề nghiệp quốc gia TEER 0, 1, 2 và 3; hoặc",
      "  - Trong danh sách ngành nghề được chỉ định trong tỉnh bang;",
      "  - Thư mời làm việc có liên quan đến lĩnh vực ngành học của ứng viên và yêu cầu trình độ sau trung học.",
      "• Có Thư chấp thuận công việc SINP (Job Approval Letter) hợp lệ;",
      "• Ngoại ngữ: Đạt điểm ngôn ngữ tối thiểu của điểm chuẩn ngôn ngữ Canada CLB 4 nếu lời mời làm việc thuộc nhóm nghề nghiệp TEER 4 hoặc 5.",
    ],
  },
  {
    section: "Entrepreneur",
    title: "Điều kiện tham gia chương trình Saskatchewan Entrepreneur",
    content: [
      "Saskatchewan Entrepreneur and Farm – Dòng nhập cư dành cho Doanh nhân & Nhà Đầu tư",
      "Dòng này bao gồm 2 dòng nhập cư dành cho các cá nhân có kinh nghiệm quản lý Doanh nghiệp và có nguyện vọng kinh doanh hoặc khởi nghiệp tại Saskatchewan",
      "🍁 Saskatchewan Entrepreneur.",
      "🍁 Saskatchewan Farm Owners and Operators.",
    ],
  },
  {
    section: "Investment",
    title: "Điều Kiện Đầu Tư",
    content: [
      "• Kinh nghiệm: Tối thiểu 3 năm kinh nghiệm làm quản lý cấp cao hoặc chủ doanh nghiệp trong vòng 10 năm gần nhất.",
      "• Tài sản: Tối thiểu 500.000 CAD.",
      "• Mức Đầu Tư",
      "  - Tối thiểu 300.000 CAD & Sở hữu 1/3 vốn góp: Dành cho công ty hoạt động tại Regina và Saskatoon;",
      "  - Tối thiểu 200.000 CAD & Sở hữu 1/3 vốn góp: Dành cho công ty hoạt động tại các vùng khác.",
    ],
  },
  {
    section: "Business Projects",
    title: "Dự Án Kinh Doanh",
    content: [
      "• Xây dựng kế hoạch Thành lập Doanh nghiệp tại Saskatchewan;",
      "• Mở Doanh nghiệp mới hoặc Mua lại Doanh nghiệp hiện hữu;",
      "• Chuyến khảo sát ít nhất 5 ngày đến Saskatchewan;",
      "• Doanh nghiệp phải tạo ra 2 việc làm toàn thời gian nếu công ty dự định hoạt động tại Regina hoặc Saskatoon.",
    ],
  },
  {
    section: "Permanent Residence",
    title: "Điều Kiện Lên Thường Trú Nhân",
    content: [
      "• Trực tiếp điều hành doanh nghiệp và tạo ra việc làm cho người dân Canada tối thiểu 6 tháng.",
      "• Kế hoạch kinh doanh có tính khả thi và mang lại lợi ích kinh tế cho tỉnh bang.",
    ],
  },
  {
    cta: true,
    section: "Why Saskatchewan",
    title: "Vì sao Saskatchewan là điểm đến lý tưởng cho gia đình bạn?",
    content: [
      "Saskatchewan là một trong những vùng đất nổi tiếng xinh đẹp nhất của Canada. Đây là một trong những Tỉnh Bang có chất lượng sống cao đồng thời là vùng đất lý tưởng cho những người mong muốn định cư và sinh sống tại Canada.",
      "Saskatchewan là Tỉnh Bang có chất lượng cuộc sống cao và chi phí sinh hoạt thấp. Tại các thành phố và cộng đồng của Saskatchewan, chi phí nhà ở sẽ thấp hơn nhiều so với các thành phố lớn ở Canada, và việc sở hữu một ngôi nhà với chi phí hợp lý là điều khả thi đối với nhiều người.",
      "Bên cạnh đó, Saskatchewan cung cấp 1/3 lượng Kali và 1/5 lượng Uranium cho toàn thế giới. Bên cạnh đó, Tỉnh cũng cung cấp hơn 1/3 tổng lượng lúa mì cứng xuất khẩu và là nhà xuất khẩu đậu lăng và đậu khô trên thế giới.",
      "Ngoài việc dẫn đầu thế giới về nông nghiệp, Saskatchewan còn là nhà sản xuất nội địa lớn thứ sáu ở Canada và Hoa Kỳ. Rất nhiều loại hàng hóa được tiêu thụ trên thị trường quốc nội cũng như được xuất khẩu sang nhiều thị trường trên khắp thế giới.",
    ],
  },
];
