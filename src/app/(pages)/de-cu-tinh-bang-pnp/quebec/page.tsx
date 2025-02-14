import { Feature } from "@/components/ui/cards-set";
import Container from "@/components/ui/container";
import { CTADefault, CTAWithImage } from "@/components/ui/cta";
import { ServicesCard } from "@/components/ui/services-card";
import TitleWithBottomBorder from "@/components/ui/title-with-bottom-border";
import TitleWithDoubleBorder from "@/components/ui/title-with-double-border";
import Glass from "@/lib/helpers";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

export default function Quebec() {
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
        image="quebec-b"
        title={ctaSection[0].title}
        description={ctaSection[0].content}
        subtitle={ctaSection[0].section}
        ctaAction="Xem thêm"
      />
      {ctaSection[1] && (
        <CTAWithImage
          flip
          image="quebec-a"
          title={ctaSection[1].title}
          description={ctaSection[1].content}
          subtitle={ctaSection[1].section}
          ctaAction="Xem thêm"
        />
      )}

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
    title: "TỔNG QUAN CHƯƠNG TRÌNH",
    content: [
      "Quebec là một tỉnh bang của Canada nằm ở hướng Đông Bắc của Canada, và là tỉnh bang lớn nhất của Canada tính về diện tích. Quebec có tư cách là một tỉnh bang trực thuộc Canada, với văn hoá và thể chế chính trị riêng, và ngôn ngữ giao tiếp chủ yếu là tiếng Pháp.",
      "Chương trình định cư Quebec khuyến khích phát triển kinh doanh của những người nhập cư. Họ là người có khả năng tài chính đóng góp cho nền kinh tế của Quebec. Những người này sở hữu và điều hành một doanh nghiệp nhỏ.",
    ],
  },
  {
    section: "Programs",
    title: "Các Chương Trình Định Cư Chính Của Quebec",
    content: [
      "Quebec Immigrant Investor Program (Chương trình đầu tư định cư Quebec)",
      "Đây là diện định cư mà doanh nhân cần bỏ ra một số tiền đầu tư tối thiểu để đầu tư vào một dự án và nhận PR Canada.",
      "Quebec Entrepreneur Program (Chương trình doanh nhân Quebec)",
      "Bạn sẽ cần đáp ứng Điều kiện chung và Điều kiện riêng cho từng chương trình, tùy thuộc vào diện bạn lựa chọn nộp hồ sơ.",
      "Quebec Self-Employed Program (Chương trình tự làm chủ Quebec)",
      "Dành cho những cá nhân làm việc trong lĩnh vực văn thể mỹ đến Canada tự do hoạt động và định cư.",
    ],
  },
  {
    section: "Investment Program",
    title: "Chương Trình Đầu Tư Định Cư Quebec",
    content: [
      "• Đầu tư tài sản ròng 2.000.000 CAD. Số tiền đầu tư có nguồn gốc và hợp pháp.",
      "• Ký cam kết thỏa thuận đầu tư với một đơn vị tài chính được ủy quyền bởi Bộ Đầu tư Quebec. Đơn vị này sẽ chịu trách nhiệm thực hiện khoản đầu tư và đóng góp tài chính thay mặt bạn.",
      "• Có kinh nghiệm quản lý ít nhất 2 năm, được tính lũy trong vòng 5 năm trước thời điểm nộp hồ sơ.",
    ],
  },
  {
    section: "Entrepreneur Program",
    title: "Chương Trình Doanh Nhân Quebec - Start-Up Visa",
    content: [
      "• Ý tưởng khởi nghiệp: Có ý tưởng kinh doanh sáng tạo cá nhân hoặc kết hợp với 3 đối tác. Các đối tác tham gia khởi nghiệp cũng sẽ cùng nộp hồ sơ định cư theo chương trình Start-Up Visa.",
      "• Sở hữu tối thiểu 10% vốn trong doanh nghiệp.",
      "• Doanh nghiệp nhận được hỗ trợ từ tổ chức đủ điều kiện (bao gồm quỹ đầu tư mạo hiểm, nhà đầu tư thiên thần, vườn ươm doanh nghiệp) để hỗ trợ bạn trong dự án kinh doanh. Tổ chức này phải có cơ sở tại Quebec, có nhiệm vụ chính trong các dịch vụ hỗ trợ bao gồm đào tạo, cố vấn, đầu tư tài chính cho những người có dự án kinh doanh khởi tạo.",
      "• Chuẩn bị kế hoạch kinh doanh gửi kèm đơn đăng ký. Kế hoạch kinh doanh này dựa trên mẫu “Plan d’affaires — Programme des entrepreneurs Volet 1” (bằng tiếng Pháp).",
    ],
  },
  {
    section: "Self-Employed Program",
    title: "Chương trình tự làm chủ Quebec",
    content: [
      "• Kinh nghiệm chuyên môn trong lĩnh vực hoạt động văn hóa hoặc thể thao, có khả năng đóng góp đáng kể cho đời sống văn hóa hoặc thể thao của Canada.",
      "• Ít nhất 2 năm kinh nghiệm làm việc chính thức trong 5 năm trước thời điểm nộp hồ sơ.",
      "• Có giấy phép hành nghề trong lĩnh vực mà bạn hoạt động tại Quebec.",
      "• Có bằng cấp hoặc chứng chỉ đào tạo được cơ quan quản lý lĩnh vực nghề nghiệp của bạn tại Quebec công nhận toàn phần hoặc một phần. Bằng chứng công nhận phải có hiệu lực không quá 5 năm kể từ ngày nộp đơn đăng ký.",
      "• Có giá trị tài sản ròng tối thiểu là 100.000 CAD (không bao gồm khoản tiền tài trợ nhận được trong 6 tháng trước ngày nộp đơn).",
      "• Chứng minh nguồn gốc hợp pháp và quá trình tích lũy tài sản ròng của mình.",
      "• Trình độ tiếng Pháp NCLC tối thiểu là 7.",
    ],
  },
  {
    section: "Application Process",
    title: "Quy Trình Nộp Hồ Sơ",
    content: [
      "• Ứng viên phải nộp hồ sơ qua đường bưu điện. Chính phủ bang Quebec không chấp nhận hồ sơ nộp qua hệ thống EOI.",
      "• Với trường hợp Tự Làm Chủ, ứng viên cần phải liên hệ với viên chức Chính Phủ bang Quebec để được sắp xếp người hỗ trợ cho Ứng viên thực hành hoạt động thương mại.",
      "• Đối với chương trình đầu tư:",
      "  - Ứng viên cần đóng 1.2 triệu CAD cho 1 kỳ (5 năm). Sau khi hết 1 kỳ, công ty môi giới tài chính sẽ hoàn trả khoản tiền này trong vòng 30 ngày và không tính lãi. Tuy nhiên, khoản tiền hoàn trả sẽ tùy vào việc Ứng viên có vay mượn số tiền đầu tư này hay không.",
      "  - Ứng viên cần chứng minh rằng Ứng viên thực sự hứng thú đầu tư và định cư định cư tại tỉnh bang Quebec.",
      "  - Thời gian xét đơn sẽ phụ thuộc vào nhiều yếu tố như tuổi tác, kỹ năng sử dụng ngôn ngữ và quá trình đào tạo của Ứng viên.",
    ],
  },
  {
    cta: true,
    section: "Why Quebec",
    title: "Vì sao Quebec là điểm đến lý tưởng cho gia đình bạn?",
    content: [
      "Quebec, Canada, là điểm đến lý tưởng cho dân nhập cư vì nhiều lý do hấp dẫn về kinh tế, xã hội, văn hóa và giáo dục.",
      "Trước hết, Quebec có một nền kinh tế phát triển và đa dạng. Với nhiều ngành công nghiệp như công nghệ thông tin, hàng không vũ trụ, và dược phẩm, Quebec cung cấp nhiều cơ hội việc làm cho người nhập cư. Thành phố Montreal, trung tâm kinh tế của tỉnh, thường xuyên được xếp hạng cao trong các danh sách thành phố tốt nhất để làm việc và sinh sống.",
      "Về mặt xã hội, Quebec nổi bật với chính sách xã hội hào phóng và môi trường sống chất lượng cao. Hệ thống y tế của Quebec được tài trợ công khai, đảm bảo rằng tất cả cư dân, bao gồm cả người mới đến, đều có quyền tiếp cận dịch vụ y tế chất lượng mà không cần lo lắng về chi phí. Ngoài ra, Quebec cũng có hệ thống giáo dục công lập miễn phí cho trẻ em và học phí đại học thấp hơn nhiều so với các tỉnh khác ở Canada.",
      "Văn hóa đa dạng và phong phú là một điểm mạnh khác của Quebec. Là tỉnh duy nhất tại Canada nơi tiếng Pháp là ngôn ngữ chính thức, Quebec mang đến một trải nghiệm văn hóa độc đáo và khác biệt. Các lễ hội văn hóa, sự kiện nghệ thuật và ẩm thực Pháp tại Quebec thu hút rất nhiều người nhập cư, tạo ra một cộng đồng đa dạng và hòa nhập.",
      "Cuối cùng, Quebec có các chương trình nhập cư linh hoạt và hỗ trợ người nhập cư tốt. Chương trình Quebec Skilled Worker Program (QSWP) giúp người lao động có kỹ năng dễ dàng nhập cư và định cư tại tỉnh này. Chính phủ Quebec cũng cung cấp nhiều dịch vụ hỗ trợ, từ học tiếng Pháp đến tìm kiếm việc làm, giúp người nhập cư nhanh chóng hòa nhập vào cộng đồng mới.",
      "Tóm lại, Quebec là điểm đến lý tưởng cho dân nhập cư nhờ vào cơ hội kinh tế, chính sách xã hội tốt, văn hóa đa dạng và các chương trình hỗ trợ nhập cư hiệu quả.",
    ],
  },
];
