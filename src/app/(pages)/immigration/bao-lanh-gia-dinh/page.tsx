import Container from "@/components/ui/container";
import HoverCard from "@/components/ui/hover-card";
import { ServicesCard } from "@/components/ui/services-card";
import Title from "@/components/ui/Title";
import Glass from "@/lib/helpers";
import React from "react";

export default function Page() {
  return (
    <Container className="py-10 gap-20">
      <Title
        title="Điều kiện định cư theo diện bảo lãnh gia đình"
        description="Để tham gia chương trình định cư Canada theo diện bảo lãnh gia đình, đương đơn phải tuân thủ một số điều kiện nhất định. Dù là người bảo lãnh hoặc người được bảo lãnh cũng cần phải đáp ứng các yêu cầu sau:"
      />

      <Glass className="py-8 px-6">
        <Title
          title="Điều kiện định cư theo diện bảo lãnh gia đình"
          description="Để tham gia chương trình định cư Canada theo diện bảo lãnh gia đình, đương đơn phải tuân thủ một số điều kiện nhất định. Dù là người bảo lãnh hoặc người được bảo lãnh cũng cần phải đáp ứng các yêu cầu sau:"
        />
        <p className="text-center">ĐỐI VỚI NGƯỜI BẢO LÃNH</p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {requirements.map((item, index) => (
            <HoverCard
              key={index}
              icon="mdi:star-four-points"
              color="bg-background"
              description={item.title}
            />
          ))}
        </div>
      </Glass>

      <Glass>
        <Title title="ĐỐI VỚI NGƯỜI ĐƯỢC BẢO LÃNH" />
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-6 mt-10">
          {sponsorshipCategories.map((item, index) => (
            <HoverCard
              key={index}
              icon="mdi:star-four-points"
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Glass>

      <div className="flex flex-col gap-8">
        <Title title="ĐỐI VỚI NGƯỜI ĐƯỢC BẢO LÃNH" />
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-6 ">
          {immigrationConditions.map((item, index) => (
            <ServicesCard
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>

      <Glass>
        <Title title="Quyền lợi khi đăng ký định cư Canada theo diện bảo lãnh người thân" />

        <div className="grid grid-cols-1  lg:grid-cols-3 gap-6 mt-10">
          {benefitsOfPR.map((item, index) => (
            <ServicesCard
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Glass>

      <div>
        <Title
          title="Điều kiện tài chính để bảo lãnh cho người thân sang định cư Canada"
          description="Điều kiện tài chính là một trong những yếu tố quan trọng được xem xét khi thường trú nhân muốn bảo lãnh gia đình của mình sang định cư tại Canada. Theo đó, người bảo lãnh cần phải đáp ứng các điều kiện về tài chính như sau:"
        />

        <div className="grid grid-cols-1  lg:grid-cols-3 gap-6 mt-10">
          {sponsorshipRequirements.map((item, index) => (
            <HoverCard
              key={index}
              icon="material-symbols:ac-unit-rounded"
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}

const requirements = [
  { title: "Từ 18 tuổi trở lên và đang sinh sống tại Canada." },
  { title: "Người bảo lãnh là công dân hoặc thường trú nhân Canada." },
  {
    title:
      "Sở hữu hộ chiếu Canada có hiệu lực trong 5-10 năm hoặc không quá 01 năm trước ngày đăng ký.",
  },
  {
    title:
      "Có đủ nguồn tài chính để duy trì cuộc sống cho người được bảo lãnh.",
  },
  { title: "Lý lịch trong sạch, chưa từng vi phạm hay bị kết án tại Canada." },
  {
    title:
      "Chưa từng trễ hẹn thanh toán vay với ngân hàng trong hạng mục di trú.",
  },
  {
    title:
      "Không đang trong trạng thái tuyên bố phá sản hoặc tạm giam bởi cảnh sát.",
  },
];

const sponsorshipCategories = [
  {
    title: "Vợ/Chồng",
    description:
      "Người được bảo lãnh phải trên 16 tuổi và đã có giấy đăng ký kết hôn với người bảo lãnh.",
  },
  {
    title: "Con cái",
    description:
      "Diện bảo lãnh chỉ được áp dụng với con cái còn độc thân. Nếu là con ruột thì dưới 22 tuổi, con nuôi phải dưới 18 tuổi.",
  },
  {
    title: "Anh/Chị/Em & Cháu ruột",
    description:
      "Phải dưới 18 tuổi, mồ côi cả cha mẹ và không đang sinh sống cùng một người khác.",
  },
];

const immigrationConditions = [
  {
    title: "Diện bảo lãnh vợ/chồng",
    description:
      "Đã kết hôn hợp pháp và sống chung với nhau trong ít nhất 1 năm tính từ ngày nộp hồ sơ. Không được bảo lãnh cho người khác trong vòng ít nhất 5 năm kể từ ngày vợ hoặc chồng trở thành thường trú nhân. Cả hai phải có mong muốn định cư ở Canada, đủ sức khỏe và tuân thủ luật pháp của đất nước này. Nếu cả hai định cư ở Canada theo diện vợ chồng mà không có con chung trong vòng 24 tháng, bạn và vợ/chồng của mình cần phải trải qua thử thách mối quan hệ trong 2 năm.",
  },
  {
    title: "Diện bảo lãnh ông bà, cha mẹ",
    description:
      "Cam kết hỗ trợ tài chính cho ông, bà, cha, mẹ ít nhất 20 năm và đơn thỏa thuận hỗ trợ tài chính phải được ký tên đầy đủ của người bảo lãnh, người được bảo lãnh. Thường trú nhân cũng cần đảm bảo có mức thu nhập tối thiểu.",
  },
  {
    title: "Diện bảo lãnh con cái",
    description:
      "Các du học sinh đã làm cha, mẹ đang sinh sống hoặc làm việc tại Canada có thể bảo lãnh con cái của mình sang đoàn tụ, nhưng phải đáp ứng các yêu cầu sau đây: Người được bảo lãnh phải là con ruột hoặc con nuôi của một công dân hoặc thường trú nhân Canada. Người được bảo lãnh phải dưới 19 tuổi vào thời điểm nộp đơn xin visa và sống phụ thuộc vào người bảo lãnh về vấn đề tài chính. Người được bảo lãnh chưa kết hôn hoặc có bất kỳ quan hệ hôn nhân nào. Nếu người được bảo lãnh trên 19 tuổi vào thời điểm nộp đơn xin visa, họ phải làm hồ sơ chứng minh bản thân vẫn phụ thuộc vào người bảo lãnh về vấn đề tài chính.",
  },
  {
    title: "Diện bảo lãnh người phối ngẫu (Common-law partner)",
    description:
      "Cả hai (bao gồm mối quan hệ đồng giới và khác giới) phải chung sống với nhau trong vòng 12 tháng liên tục. Hai người cần cung cấp được các bằng chứng chứng minh mối quan hệ của cả hai là thật.",
  },
  {
    title: "Diện bảo lãnh người thân mồ côi",
    description:
      "Người thân mồ côi đáp ứng các điều kiện sau: Người được bảo lãnh dưới 18 tuổi, là người mồ côi, độc thân, không có mối quan hệ vợ chồng hay người phối ngẫu, là chị em hoặc cháu trai, cháu gái, cháu theo máu mủ hoặc nhận nuôi.",
  },
  {
    title: "Diện bảo lãnh người thân khác",
    description:
      "Người thân khác (bao gồm cô, dì, chú, bác, anh chị em họ): Thường trú nhân chỉ được bảo lãnh gia đình khác trong trường hợp không còn người thân nào khác còn sống trong các diện được kể trên và cũng không còn người thân nào hiện đang sinh sống tại Canada theo diện công dân hoặc thường trú nhân.",
  },
];

const benefitsOfPR = [
  {
    title: "Tự do sinh sống và làm việc",
    description:
      "Thường trú nhân có quyền tự do sinh sống, làm việc, kinh doanh, đi lại và tự do phát biểu miễn là không vi phạm hiến pháp và pháp luật liên bang của Canada.",
  },
  {
    title: "Dễ dàng xin thị thực đến nhiều quốc gia",
    description:
      "Là thường trú nhân tại Canada, có một số quốc gia bạn được miễn xin thị thực như Mỹ, Úc, Anh, Pháp, Đức… Bạn cũng có thể dễ dàng xin thị thực đến những quốc gia khác để du lịch.",
  },
  {
    title: "Chương trình phúc lợi cho trẻ em",
    description:
      "Phúc lợi trẻ em Canada là một chương trình do Cục thuế liên bang Canada quản lý, nhằm hỗ trợ các gia đình trang trải chi phí nuôi dạy con cái dưới 18 tuổi thông qua khoản thanh toán miễn thuế. Trẻ em dưới 6 tuổi, khoản phúc lợi là $6.833 CAD/ năm. Trẻ em từ 6 đến 17 tuổi, khoản phúc lợi là $5.765 CAD/ năm.",
  },
  {
    title: "Chương trình phúc lợi đối với người cao tuổi",
    description:
      "Phúc lợi an sinh người cao tuổi (Old Age Security – OAS) là khoản tiền thanh toán hàng tháng dành cho người cao tuổi tại Canada từ độ tuổi 65 trở lên. Số tiền nhận được phụ thuộc vào thời gian sống tại Canada, người nhận phải trả thuế trên khoản thu nhập này.",
  },
  {
    title: "Miễn và giảm chi phí học tập",
    description:
      "Canada cung cấp quyền lợi miễn phí học tập cho trẻ em dưới 18 tuổi của các thường trú nhân và người lao động nước ngoài hợp pháp. Ngoài ra, thường trú nhân cũng được hưởng mức chi phí học tập thấp hơn so với du học sinh quốc tế.",
  },
  {
    title: "Các phúc lợi xã hội khác",
    description:
      "Nhận bảo hiểm thất nghiệp, các phúc lợi về thai sản giống như công dân Canada.",
  },
  {
    title: "Chính sách chăm sóc sức khỏe",
    description:
      "Hưởng các chính sách về chế độ y tế và chăm sóc sức khỏe toàn dân của Canada.",
  },
];

const sponsorshipRequirements = [
  {
    title: "Đạt mức thu nhập tiêu chuẩn tối thiểu",
    description:
      "Trong 12 tháng gần nhất do Bộ Di Trú Canada quy định. Mức thu nhập tối thiểu cụ thể sẽ được Bộ Di Trú Canada cập nhật hàng năm.",
  },
  {
    title: "Người bảo lãnh không cần đạt mức thu nhập tối thiểu",
    description:
      "Áp dụng khi bảo lãnh người phối ngẫu hay con cái phụ thuộc dưới 22 tuổi không có con phụ thuộc. Tuy nhiên, thường trú nhân sẽ không được bảo lãnh gia đình nếu những đối tượng này đang nhận tiền trợ cấp xã hội, trừ trường hợp họ bị bệnh tật.",
  },
  {
    title: "Mức thu nhập tối thiểu tính theo tổng số người trong hộ",
    description:
      "Bao gồm người đã bảo lãnh nhưng chưa hết thời gian và người được bảo lãnh trong lần này. Tài liệu về biểu đồ và cách tính thu nhập tối thiểu sẽ được đính kèm trong hướng dẫn xin bảo lãnh gia đình.",
  },
  {
    title: "Các loại thu nhập được tính",
    description:
      "Trong mẫu đơn đánh giá tài chính đính kèm với đơn bảo lãnh gia đình sẽ liệt kê: Tiền lương, thu nhập có được từ kinh doanh, tiền cho thuê nhà, tiền hưu trí, các loại trợ cấp đặc biệt khác.",
  },
];
