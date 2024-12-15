import Container from "@/components/ui/container";
import Glass from "@/lib/helpers";
import { Feature } from "@/components/ui/cards-set";
import { CTADefault, CTAWithImage } from "@/components/ui/cta";
import { ServicesCard } from "@/components/ui/services-card";
import TitleWithBottomBorder from "@/components/ui/title-with-bottom-border";
import TitleWithDoubleBorder from "@/components/ui/title-with-double-border";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function NewBrunswick() {
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

      <CTAWithImage
        image="newbrunswick-b"
        title={ctaSection[0].title}
        description={ctaSection[0].content}
        subtitle={ctaSection[0].section}
        ctaAction="Xem thêm"
      />
      {ctaSection[1] && (
        <CTAWithImage
          flip
          image="newbrunswick-a"
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
    title: "TỔNG QUAN VỀ CHƯƠNG TRÌNH",
    content: [
      "Chương trình Đề cử Tỉnh bang New Brunswick (NBPNP) nhằm thu hút và giữ chân những người lao động lành nghề, doanh nhân và sinh viên tốt nghiệp có khả năng hội nhập thành công vào thị trường lao động và cộng đồng của tỉnh bang này.",
      "Nếu thành công trong việc đăng ký NBPNP, ứng viên sẽ nhận được chứng nhận Đề cử tỉnh bang, chứng nhận này sẽ hỗ trợ cho đơn xin thường trú với Chính phủ Canada.",
    ],
  },
  {
    section: "NB PNP Streams",
    title: "CHƯƠNG TRÌNH NB PNP CÓ CÁC DIỆN NHƯ SAU:",
    subsections: [
      {
        title: "Đề Cử Tỉnh Bang New Brunswick Luồng Express Entry",
        description:
          "Thông qua diện thị trường lao động Express Entry, ứng viên sẽ được xét duyệt dựa theo hệ thống Express Entry của liên bang và mô hình Bày tỏ sự quan tâm (EOI). Với mục tiêu đáp ứng nhu cầu thị trường lao động hiện tại ở New Brunswick.",
        requirements: [
          "Có một hồ sơ Express Entry đang hoạt động;",
          "Có Mã xác nhận người tìm việc hoặc bằng chứng ghi danh vào một chương trình đủ điều kiện PGWP tại một cơ sở giáo dục sau trung học được liên bang chỉ định;",
          "Đang sinh sống ở New Brunswick;",
          "Có điểm kiểm tra ngôn ngữ hợp lệ bằng tiếng Anh hoặc tiếng Pháp bằng với Điểm chuẩn Ngôn ngữ Canada Cấp 7 (CLB 7).",
        ],
      },
      {
        title: "Đề Cử Tỉnh Bang New Brunswich Luồng Công Nhân Lành Nghề",
        description:
          "Dành cho những người lao động lành nghề có hồ sơ Express Entry hợp lệ và có lời mời làm việc từ một nhà tuyển dụng ở New Brunswick.",
        requirements: [
          "Cần chứng minh rằng họ có ý định cư trú tại New Brunswick;",
          "Có lời mời làm việc lâu dài đầy đủ từ một nhà tuyển dụng đủ điều kiện ở New Brunswick và một lá thư hỗ trợ từ họ;",
          "Có tối thiểu bằng tốt nghiệp trung học cơ sở (trung học phổ thông) của Canada hoặc bằng tốt nghiệp trung học phổ thông nước ngoài tương đương với chứng chỉ của Canada;",
          "Từ 19-55 tuổi;",
          "Có điểm kiểm tra ngôn ngữ hợp lệ bằng tiếng Anh hoặc tiếng Pháp bằng với Điểm chuẩn Ngôn ngữ Canada Cấp 4 (CLB 4).",
        ],
      },
      {
        title: "NB PNP Luồng Nhập Cư Doanh Nghiệp",
        description:
          "Dành cho các doanh nhân muốn bắt đầu hoặc mua lại một doanh nghiệp ở New Brunswick.",
        requirements: [
          "Độ tuổi từ 22 đến 55;",
          "Kinh nghiệm làm việc: Là chủ doanh nghiệp có ít nhất 3 năm trong 5 năm gần nhất hoặc quản lý cấp cao trong 5 năm gần nhất;",
          "Đạt tối thiểu 65 điểm theo thang điểm di trú;",
          "Có khả năng tiếng Anh tương đương IELTS 5.0 (General);",
          "Trình độ học vấn tối thiểu là hệ 2 năm sau khi tốt nghiệp Trung học phổ thông;",
          "Tổng tài sản mức tối thiểu là 600.000 CAD;",
          "Đáp ứng các tiêu chí liên quan đến lý lịch an ninh và sức khỏe để đảm bảo tính an toàn và phù hợp với quy định.",
        ],
      },
      {
        title:
          "Thí Điểm Tốt Nghiệp Cao Đẳng Nghề Tư Thục (Private Career College Graduate Pilot Program)",
        description:
          "Được thiết kế cho các sinh viên quốc tế tốt nghiệp có kỹ năng, trình độ và kinh nghiệm làm việc để đóng góp cho nền kinh tế New Brunswick. Chương trình cung cấp con đường nhập cư cho các sinh viên tốt nghiệp từ các chương trình học 1 năm và 2 năm thuộc các ngành nghề ưu tiên như Giáo dục, Phát triển Xã hội, Y tế, CNTT và An ninh mạng, Quản trị Kinh doanh, và Chuỗi cung ứng và Logistics.",
        requirements: [
          "Tốt nghiệp từ một trường cao đẳng tư nhân đủ điều kiện ở New Brunswick;",
          "Chấp nhận một lời mời làm việc toàn thời gian, không theo mùa từ một nhà tuyển dụng tại New Brunswick;",
          "Phải sẵn sàng cho tình trạng Thường trú nhân (PR).",
        ],
      },
      {
        title: "NB PNP Luồng Sáng Kiến Chiến Lược",
        description:
          "Dành cho những người lao động lành nghề và sinh viên tốt nghiệp nói tiếng Pháp có lời mời làm việc từ một chủ lao động ở New Brunswick hoặc muốn bắt đầu kinh doanh tại tỉnh này.",
        requirements: [
          "Có ý định cư trú tại New Brunswick;",
          "Có kết nối đủ điều kiện đến New Brunswick;",
          "Có tối thiểu bằng tốt nghiệp trung học cơ sở (trung học phổ thông) của Canada hoặc bằng tốt nghiệp trung học phổ thông nước ngoài tương đương với chứng chỉ của Canada;",
          "Có số tiền yêu cầu của quỹ quyết toán;",
          "Từ 19-55 tuổi;",
          "Có điểm kiểm tra ngôn ngữ hợp lệ bằng tiếng Pháp bằng điểm Niveaux de compétence linguistique canadiens (NCLC) 5.",
        ],
      },
      {
        title: "Chương Trình Nhập Cư Đại Tây Dương",
        description:
          "Dành cho những người lao động lành nghề và sinh viên quốc tế tốt nghiệp có lời mời làm việc từ một chủ lao động được chỉ định ở New Brunswick, Nova Scotia, Đảo Hoàng tử Edward hoặc Newfoundland & Labrador.",
        requirements: [
          "Ứng viên trên 22 tuổi;",
          "Sức khỏe tốt;",
          "Tốt nghiệp từ Trung học Phổ thông;",
          "Ứng viên có 1 năm kinh nghiệm trong lĩnh vực hoặc ngành nghề ứng tuyển trong giai đoạn 5 năm gần nhất;",
          "Chứng minh tài chính đáp ứng nhu cầu sinh sống cho gia đình 1 năm đầu;",
          "Được một công ty do chính phủ Canada chỉ định tuyển dụng;",
          "Yêu cầu bằng IELTS General còn thời hạn với điểm CLB 4.0 hoặc CLB 5.0 tùy theo từng NOC ngành nghề.",
        ],
      },
    ],
  },
  {
    section: "Why NB",
    title: "VÌ SAO NEW BRUNSWICK LÀ ĐIỂM ĐẾN LÝ TƯỞNG CHO GIA ĐÌNH BẠN?",
    content: [
      "Tỉnh bang New Brunswick là một trong các tỉnh thuộc miền Đông Canada, nằm ở vùng Đại Tây Dương. Đây là tỉnh lục địa duy nhất của Canada có diện tích nhỏ hơn so với các tỉnh khác, nhưng lại có bờ biển dài và phong phú.",
      "New Brunswick được bao quanh bởi Quebec về phía tây và miền Đông Quebec về phía nam. Bờ biển phía Đại Tây Dương của tỉnh này bao gồm nhiều vịnh và bãi biển đẹp như vịnh Fundy, nơi có mực nước thủy triều cao nhất thế giới. Ngoài ra, New Brunswick còn có các khu rừng rậm, hồ nước và dãy núi Appalachian phần lớn nằm ở phía bắc tỉnh.",
      "Có nhiều lý do để New Brunswick ngày càng trở thành một tỉnh bang hấp dẫn để định cư, sau đây là những lý do hàng đầu khiến người nhập cư lựa chọn tỉnh bang này.",
    ],
  },
  {
    cta: true,
    section: "Benefits",
    title: "ƯU ĐIỂM CỦA CHƯƠNG TRÌNH ĐỊNH CƯ NEW BRUNSWICK",
    content: [
      "Nhận PR cho cả gia đình: Vợ/chồng và con cái dưới 22 tuổi được bảo lãnh cùng.",
      "Nhanh chóng: Quá trình xét duyệt hồ sơ nhanh chóng và hiệu quả.",
      "Hỗ trợ: Chính phủ New Brunswick cung cấp nhiều dịch vụ hỗ trợ cho người nhập cư.",
      "Được tỉnh bang hỗ trợ thư xin Work Permit: Giúp gia đình bạn có thể sang Canada sinh sống và làm việc sớm trong thời gian chờ cấp Thường trú nhân.",
      "Dễ dàng: Các yêu cầu đủ điều kiện rõ ràng và minh bạch.",
      "Linh hoạt: Nhiều chương trình phù hợp với nhiều đối tượng khác nhau.",
    ],
  },
  {
    cta: true,
    section: "Why NB is Ideal",
    title: "VÌ SAO NEW BRUNSWICK LÀ ĐIỂM ĐẾN LÝ TƯỞNG CHO GIA ĐÌNH BẠN?",
    content: [
      "New Brunswick, Canada, là điểm đến lý tưởng cho dân nhập cư nhờ vào nhiều yếu tố hấp dẫn. Trước hết, tỉnh bang này nổi tiếng với chi phí sinh hoạt thấp hơn so với nhiều khu vực khác ở Canada, giúp người mới định cư dễ dàng ổn định cuộc sống.",
      "Thứ hai, New Brunswick có một thị trường lao động đa dạng với nhiều cơ hội việc làm trong các ngành như công nghệ thông tin, y tế, và giáo dục. Điều này mang lại nhiều lựa chọn nghề nghiệp cho dân nhập cư.",
      "Ngoài ra, tỉnh bang này còn có nhiều chương trình hỗ trợ dân nhập cư như Chương trình Định cư Tỉnh bang (PNP) giúp đẩy nhanh quá trình xin thường trú. New Brunswick cũng chú trọng đến việc hỗ trợ người mới qua các dịch vụ định cư, giúp họ hòa nhập nhanh chóng vào cộng đồng.",
      "Cảnh quan thiên nhiên tuyệt đẹp với nhiều công viên quốc gia, bãi biển, và rừng rậm cũng là một điểm thu hút lớn. Hơn nữa, môi trường sống an toàn và thân thiện, với cộng đồng đa văn hóa, tạo điều kiện cho dân nhập cư cảm thấy được chào đón và dễ dàng thích nghi.",
      "Tóm lại, New Brunswick là lựa chọn tuyệt vời cho dân nhập cư nhờ vào chi phí sinh hoạt hợp lý, cơ hội việc làm phong phú, các chương trình hỗ trợ nhập cư, và môi trường sống chất lượng.",
    ],
  },
];
