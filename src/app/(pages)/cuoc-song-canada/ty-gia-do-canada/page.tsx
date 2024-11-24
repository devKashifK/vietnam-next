// import NewsShowcase from "../../news.tsx/news-showcase";

import Container from "@/components/ui/container";
import { getDataBySlug } from "@/components/ui/dynamic-component";
import { DynamicComponent } from "@/components/ui/dynamic-component";
import { ServicesCard } from "@/components/ui/services-card";
import TitleWithBottomBorder from "@/components/ui/title-with-bottom-border";
import TitleWithDoubleBorder from "@/components/ui/title-with-double-border";
import { use } from "react";

// export default function ExchangeRate({ slug }) {
//   const pageData = use(getDataBySlug("ty-gia-do-canada"));

//   // Check if pageData and pageData.content are available
//   if (!pageData) return <p>Loading...</p>;
//   if (!pageData.content || !Array.isArray(pageData.content)) {
//     console.error("No content array found in pageData:", pageData); // Log error details
//     return <p>No components to display</p>;
//   }

//   return (
//     <div className="flex flex-col gap-10">
//       {pageData.content.map(
//         (componentData, index) => (
//           console.log(componentData, "componentData"),
//           (<DynamicComponent key={index} data={componentData} />)
//         )
//       )}
//     </div>
//   );
// }

export default function ExchangeRate() {
  return (
    <Container className="flex flex-col gap-8 py-20">
      {exchangeRateInfo.map((section, index) => (
        <div key={index} className="flex flex-col gap-20">
          {Object.entries(section).map(([sectionKey, sectionValue]) => (
            <div key={sectionKey} className="flex flex-col gap-4">
              <TitleWithDoubleBorder>{sectionKey}</TitleWithDoubleBorder>
              <h2 className="text-2xl text-left">{sectionValue.title}</h2>
              <p>{sectionValue.content}</p>

              {sectionValue.subsections && (
                <div className="grid grid-cols-2 gap-8">
                  {Object.entries(sectionValue.subsections).map(
                    ([subKey, subsection]) => (
                      <ServicesCard
                        key={subKey}
                        title={
                          <div className="flex flex-col gap-1">
                            <TitleWithBottomBorder>
                              {subKey}
                            </TitleWithBottomBorder>
                            <h5 className="text-2xl text-left text-highlight">
                              {subsection.title}
                            </h5>
                          </div>
                        }
                        description={subsection.content}
                      />
                    )
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </Container>
  );
}

const exchangeRateInfo = [
  {
    ExchangeRateDefinition: {
      title: "Tỷ giá hối đoái là gì?",
      content:
        "Tỷ giá hối đoái là giá trị của một đồng tiền này được biểu thị bằng một đồng tiền khác. Ví dụ, tỷ giá giữa CAD và USD (đô la Mỹ) là 1 CAD = 0.75 USD có nghĩa là một đô la Canada đổi được 0.75 đô la Mỹ. Tỷ giá này thay đổi liên tục dựa trên nhiều yếu tố kinh tế và tài chính.",
    },
    FactorsAffectingExchangeRate: {
      title: "Các yếu tố ảnh hưởng đến tỷ giá hối đoái của đô la Canada",
      subsections: {
        OilPrice: {
          title: "Giá dầu",
          content:
            "Canada là một trong những quốc gia xuất khẩu dầu lớn nhất thế giới. Giá dầu tăng thường kéo theo sự tăng giá của đồng CAD do doanh thu từ xuất khẩu dầu tăng lên.",
        },
        InterestRates: {
          title: "Lãi suất",
          content:
            "Ngân hàng Trung ương Canada (BoC) điều chỉnh lãi suất để kiểm soát lạm phát và thúc đẩy tăng trưởng kinh tế. Lãi suất cao thường làm tăng giá trị của CAD.",
        },
        Economy: {
          title: "Kinh tế và chính sách tài chính",
          content:
            "Tình hình kinh tế và các chính sách tài chính của Canada cũng ảnh hưởng đến tỷ giá hối đoái. Một nền kinh tế mạnh mẽ và ổn định thường hỗ trợ giá trị của đồng CAD.",
        },
        GlobalFactors: {
          title: "Tình hình toàn cầu",
          content:
            "Các yếu tố toàn cầu như căng thẳng thương mại, biến động trên thị trường tài chính quốc tế và các sự kiện chính trị lớn cũng có thể ảnh hưởng đến tỷ giá hối đoái của CAD.",
        },
      },
    },
    ImpactOnImmigrants: {
      title: "Tác động của tỷ giá hối đoái đến người định cư",
      subsections: {
        LivingCost: {
          title: "Chi phí sinh hoạt",
          content:
            "Tỷ giá hối đoái ảnh hưởng trực tiếp đến chi phí sinh hoạt của bạn. Khi đồng CAD mạnh, chi phí hàng hóa và dịch vụ nhập khẩu có thể rẻ hơn, ngược lại khi CAD yếu, bạn có thể phải chi trả nhiều hơn.",
        },
        InternationalTransfers: {
          title: "Chuyển tiền quốc tế",
          content:
            "Nếu bạn cần chuyển tiền từ Canada về nước hoặc ngược lại, tỷ giá hối đoái sẽ ảnh hưởng đến số tiền thực nhận. Để tối ưu hóa số tiền chuyển, bạn nên theo dõi tỷ giá và chọn thời điểm thích hợp.",
        },
        TravelAndShopping: {
          title: "Du lịch và mua sắm",
          content:
            "Khi tỷ giá hối đoái có lợi, bạn sẽ tiết kiệm được chi phí khi đi du lịch hoặc mua sắm quốc tế.",
        },
      },
    },
    AdviceForImmigrants: {
      title: "Lời khuyên cho người định cư về tỷ giá hối đoái",
      subsections: {
        MonitorExchangeRate: {
          title: "Theo dõi tỷ giá",
          content:
            "Thường xuyên theo dõi tỷ giá hối đoái thông qua các trang web tài chính, ứng dụng di động hoặc ngân hàng để cập nhật thông tin kịp thời.",
        },
        UseFinancialServices: {
          title: "Sử dụng các dịch vụ tài chính hợp lý",
          content:
            "Sử dụng các dịch vụ chuyển tiền quốc tế có phí thấp và tỷ giá hối đoái tốt để tối ưu hóa chi phí.",
        },
        FinancialPlanning: {
          title: "Lập kế hoạch tài chính",
          content:
            "Tạo một kế hoạch tài chính chi tiết để đối phó với biến động của tỷ giá hối đoái, đảm bảo bạn luôn có đủ nguồn lực tài chính cho các nhu cầu cá nhân và gia đình.",
        },
      },
    },
  },
];
