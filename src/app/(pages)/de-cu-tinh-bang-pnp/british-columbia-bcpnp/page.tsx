import Container from "@/components/ui/container";
import Glass from "@/lib/helpers";
import { Feature } from "@/components/ui/cards-set";
import { Icon } from "@iconify/react/dist/iconify.js";
import { CTADefault, CTAWithImage } from "@/components/ui/cta";
import { ServicesCard } from "@/components/ui/services-card";
import TitleWithBottomBorder from "@/components/ui/title-with-bottom-border";
import TitleWithDoubleBorder from "@/components/ui/title-with-double-border";

export default function BritishColumbia() {
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
          <div className="flex flex-col gap-4">
            <TitleWithDoubleBorder>{pageData[2].section}</TitleWithDoubleBorder>
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
        </Container>
      ) : (
        <Container>
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
        </Container>
      )}
      {pageData[3]?.subsections ? (
        <Container className="flex flex-col gap-5">
          <div className="flex flex-col gap-4">
            <TitleWithDoubleBorder>{pageData[3].section}</TitleWithDoubleBorder>
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
          <div className="flex flex-col gap-4">
            <TitleWithDoubleBorder>{pageData[4].section}</TitleWithDoubleBorder>
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
          <div className="flex flex-col gap-4">
            <TitleWithDoubleBorder>{pageData[4].section}</TitleWithDoubleBorder>
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
        image="canada"
        title={ctaSection[0].title}
        description={ctaSection[0].content}
        subtitle={ctaSection[0].section}
        ctaAction="Xem thêm"
      />
      <CTAWithImage
        flip
        image="yukon-a"
        title={ctaSection[1].title}
        description={ctaSection[1].content}
        subtitle={ctaSection[1].section}
        ctaAction="Xem thêm"
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

const pageData = [
  {
    section: "Overview",
    title: "TỔNG QUAN VỀ CHƯƠNG TRÌNH",
    content: [
      "Chương trình đề cử tỉnh bang British Columbia (BC PNP) là một chương trình được tỉnh bang British Columbia - Canada quản lý để hỗ trợ việc định cư cho những người có kỹ năng, kinh nghiệm và trình độ cùng gia đình của họ vào BC. BC PNP cung cấp các lựa chọn đa dạng để các cá nhân có thể đáp ứng các yêu cầu cụ thể của tỉnh bang để có thể được đề cử để định cư tại đây.",
      "Chương trình đề cử tỉnh bang British Columbia (BC PNP) gồm các chương trình sau:",
    ],
  },
  {
    section: "Skilled Immigration",
    title: "Các Dòng Nhập Cư Diện Tay Nghề",
    subsections: [
      {
        title: "Skilled Worker",
        description: "Nhà quản lý, chuyên gia và thợ lành nghề.",
      },
      {
        title: "Healthcare Professional",
        description:
          "Đây là chương trình mới, phù hợp với đối tượng là doanh nhân quốc tế có mong muốn thành lập công ty mới tại British Columbia.",
      },
      {
        title: "International Graduate",
        description:
          "Sinh viên đã tốt nghiệp Đại học hoặc Cao đẳng của Canada.",
      },
      {
        title: "International Post-Graduate",
        description:
          "Dành cho ứng viên sở hữu bằng Thạc sĩ hoặc Tiến sĩ đối với lĩnh vực nghiên cứu khoa học tự nhiên, ứng dụng hoặc sức khỏe. Không yêu cầu có thư mời làm việc.",
      },
      {
        title: "Entry Level and Semi-Skilled",
        description:
          "(bao gồm việc làm ở vùng phát triển Đông Bắc BC) – Dành cho ứng viên đang làm ở vị trí sơ cấp hoặc bán chuyên trong các lĩnh vực quy định là du lịch, khách sạn, chế biến thực phẩm hoặc vận tải; Ngoài ra cũng áp dụng với nhóm người làm việc trong khu phát triển Đông Bắc của tỉnh bang British Columbia.",
      },
    ],
  },
  {
    section: "Express Entry",
    title: "CHƯƠNG TRÌNH EXPRESS ENTRY BRITISH COLUMBIA",
    content: [
      "Express Entry British Columbia là hình thức nộp đơn theo hệ thống Express Entry của chính phủ Canada. Những người nộp đơn bằng diện này được ưu tiên tham gia chương trình đề cử tỉnh bang British Columbia (BC PNP). Các diện được xử lý thông qua Express Entry British Columbia gồm:",
      "🍁 Diện người lao động tay nghề: viết thêm",
      "🍁 Diện chuyên gia trong ngành y tế, chăm sóc sức khỏe.",
      "🍁 Diện sinh viên quốc tế tốt nghiệp.",
      "🍁 Diện sinh viên quốc tế tốt nghiệp hệ sau đại học.",
    ],
  },
  {
    section: "Skilled Immigration",
    title: "Dòng Nhập Cư Diện Tay Nghề",
    content: [
      "Tỉnh bang British Columbia đã triển khai hệ thống đăng ký nhập cư diện tay nghề (SIRS) từ 27/1/2016 cho chương trình BC PNP. Theo đó các ứng viên sẽ nộp hồ sơ dựa vào hệ thống tính điểm đăng ký. Điểm sẽ phụ thuộc vào các yếu tố, như trình độ học vấn, kinh nghiệm làm việc, thư mời làm việc tại British Columbia.",
    ],
  },
  {
    section: "Business Immigration",
    title: "Các Dòng Nhập Cư Diện Doanh Nhân Đầu Tư",
    subsections: [
      {
        title: "Diện nhập cư dành cho doanh nhân",
        description:
          "Đây là diện nhập cư cao cấp, dành cho các đối tượng là nhà quản lý cấp cao hoặc cá nhân đang hoặc có ý định thành lập một doanh nghiệp tại British Columbia.",
      },
      {
        title: "Diện nhập cư ở vùng đô thị nhỏ",
        description:
          "Dành cho những ứng viên là bác sĩ, điều dưỡng, chuyên gia y tế… đã nhận lời mời làm việc nằm trong nhóm 11 ngành nghề đủ điều kiện ở tỉnh bang British Columbia.",
      },
      {
        title: "Diện dự án chiến lược",
        description:
          "Các tập đoàn, doanh nghiệp nước ngoài có chi nhánh đang hoạt động tại British Columbia có quyền đề cử tối đa 5 nhân sự cấp quản lý đến thường trú tại tỉnh bang.",
      },
    ],
  },
  {
    section: "Eligibility",
    title: "Điều Kiện Tham Gia BC PNP Diện Tay Nghề",
    subsections: [
      {
        title: "Diện Lao Động Lành Nghề (Skilled Worker)",
        description:
          "Để có thể định cư Canada diện Skilled Worker, ứng viên cần nhận lởi mời làm việc (Job Offer) toàn thời gian & vô thời hạn từ một nhà tuyển dụng tại tỉnh bang B.C. Công việc thuộc 1 trong các nhóm ngành sau:\n- Nhóm ngành nghề O: những công việc quản lý;\n- Nhóm ngành nghề A: những công việc mang tính chuyên nghiệp, cần bằng cấp Đại học trở lên;\n- Nhóm ngành nghề B: những công việc kỹ thuật hoặc nghề thủ công, cần bằng Cao đẳng hoặc chứng chỉ nghề;\nCó kinh nghiệm làm việc ít nhất 2 năm liên quan đến lời mời làm việc;\nKết quả kiểm tra ngôn ngữ tiếng Anh hoặc tiếng Pháp đạt CLB/NCLC 4 đối với nhóm ngành nghề B, không yêu cầu đối với nhóm nghề 0, A;\nChứng minh thu nhập & Lý lịch tư pháp.",
      },
      {
        title:
          "Diện Người Lao Động Sơ Cấp & Bán Chuyên Nghiệp (Entry Level & Semi Skilled Worker)",
        description:
          "Nhận lời mời làm việc (Job Offer) toàn thời gian và vô thời hạn từ một nhà tuyển dụng tại tỉnh bang B.C. Công việc phải liên quan đến ngành du lịch & khách sạn, vận tải đường dài và chế biến thực phẩm được tỉnh bang quy định. Riêng với khu vực Northeast Development Region, mọi vị trí công việc thuộc nhóm ngành C, D đều được chấp nhận.\nĐã và đang làm việc ít nhất 9 tháng liên tục và toàn thời gian cho nhà tuyển dụng trước khi nộp đơn.\nKết quả kiểm tra khả năng ngôn ngữ tiếng Anh hoặc tiếng Pháp đạt CLB/NCLC 4.\nTrình độ học vấn tối thiểu cấp 3 trở lên tại trường học ở Canada hoặc trường học ở nước ngoài được công nhận có giá trị bằng tương đương.\nChứng minh thu nhập, lý lịch tư pháp.",
      },
      {
        title: "Diện Sinh Viên Quốc Tế (International Graduate)",
        description:
          "Có bằng tốt nghiệp, chứng chỉ hoặc chứng nhận được ban hành bởi các cơ sở giáo dục sau Trung học phổ thông được chỉ định ở Canada. Hồ sơ đề cử tỉnh bang B.C cần được nộp trong vòng 3 năm kể từ khi hoàn thành chương trình khóa học.\nCó lời mời làm việc (job offer) toàn thời gian và vô thời hạn từ 1 nhà tuyển dụng tại tỉnh bang B.C, công việc thuộc 1 trong các nhóm ngành O, A, B.\nKết quả kiểm tra ngôn ngữ tiếng Anh hoặc tiếng Pháp đạt CLB/NCLC 4 cho nhóm nghề B, không yêu cầu với nhóm nghề O, A.\nChứng minh thu nhập & lý lịch tư pháp.",
      },
      {
        title:
          "Diện Sinh Viên Quốc Tế Bậc Thạc sĩ, Tiến sĩ (International Post-Graduate)",
        description:
          "Có bằng tốt nghiệp Thạc sĩ, Tiến sĩ trong ngành công nghệ, y tế & Ứng dụng khoa học từ cơ sở giáo dục sau Trung học Phổ thông được chỉ định tại Canada. Hồ sơ xin đề cử tỉnh bang B.C cần được nộp trong vòng 3 năm kể từ khi hoàn thành chương trình khóa học.\nCác chuyên ngành bao gồm: Nông nghiệp, Sinh học & Y học, Khoa học máy tính, Kỹ sư, Kỹ sư công nghệ, Y tế và Khoa học lâm sàng, Toán & Thống kê, nghiên cứu bảo tồn tài nguyên thiên nhiên, khoa học vật lý.\nChứng minh thu nhập & lý lịch tư pháp.\nỨng viên có nguyện vọng sinh sống và làm việc tại tỉnh bang B.C.",
      },
    ],
  },
  {
    cta: true,
    section: "Why BC",
    title: "Vì sao British Columbia là điểm đến lý tưởng cho gia đình bạn?",
    content: [
      "British Columbia (BC), Canada, là một điểm đến lý tưởng cho dân nhập cư nhờ vào nhiều yếu tố hấp dẫn. Đầu tiên, BC nổi tiếng với thiên nhiên hùng vĩ và phong cảnh tuyệt đẹp, từ những dãy núi phủ tuyết đến bờ biển dài và những khu rừng rậm rạp. Khí hậu ôn hòa, đặc biệt là ở vùng ven biển như Vancouver, khiến cho việc định cư trở nên dễ chịu hơn so với nhiều nơi khác ở Canada.",
      "Thứ hai, BC có một nền kinh tế mạnh mẽ và đa dạng, với nhiều cơ hội việc làm trong các ngành công nghiệp như công nghệ, tài chính, du lịch, và chăm sóc sức khỏe. Vancouver, thành phố lớn nhất của BC, là trung tâm công nghệ đang phát triển nhanh chóng và là nơi đặt trụ sở của nhiều công ty quốc tế, tạo ra nhiều cơ hội nghề nghiệp cho người nhập cư có kỹ năng cao.",
      "Thứ ba, BC cung cấp một hệ thống giáo dục và chăm sóc sức khỏe chất lượng cao. Các trường đại học như University of British Columbia (UBC) và Simon Fraser University (SFU) được công nhận toàn cầu, thu hút sinh viên từ khắp nơi trên thế giới. Hệ thống chăm sóc sức khỏe công cộng của Canada đảm bảo mọi người dân đều có quyền tiếp cận dịch vụ y tế chất lượng mà không phải lo lắng về chi phí.",
      "Cuối cùng, BC là một môi trường đa văn hóa và chào đón người nhập cư. Sự đa dạng về văn hóa, ngôn ngữ và tôn giáo tạo nên một cộng đồng sôi động và thân thiện, giúp người mới dễ dàng hòa nhập và xây dựng cuộc sống mới. Tất cả những yếu tố này làm cho British Columbia trở thành một lựa chọn lý tưởng cho người muốn nhập cư vào Canada.",
    ],
  },
  {
    cta: true,
    section: "Choose Program",
    title: "Chương trình British Columbia nào phù hợp cho gia đình bạn?",
    content: [
      "Tùy thuộc vào hoàn cảnh cụ thể, chúng tôi sẽ giúp bạn lựa chọn chương trình phù hợp nhất để đảm bảo một tương lai tốt đẹp tại British Columbia. Nhìn chung, bạn cần đáp ứng các điều kiện tối thiểu tùy từng chương trình.",
    ],
  },
];
