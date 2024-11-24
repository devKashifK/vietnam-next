// Import your dynamic component and data fetching function
// import { getDataBySlug } from "@/components/ui/dynamic-component";
// import { DynamicComponent } from "@/components/ui/dynamic-component";

// export default async function CultureReligion({ params }) {
//   // Fetch the data for the page based on slug
//   const pageData = await getDataBySlug("van-hoa-ton-gaio");

//   // Check if pageData and pageData.content are available
//   if (!pageData) return <p>Loading...</p>;
//   if (!pageData.content || !Array.isArray(pageData.content)) {
//     console.error("No content array found in pageData:", pageData); // Log error details
//     return <p>No components to display</p>;
//   }

//   return (
//     <div className="flex flex-col gap-10">
//       {pageData.content.map((componentData, index) => (
//         <DynamicComponent key={index} data={componentData} />
//       ))}
//     </div>
//   );
// }

import { CardWithImage } from "@/components/ui/card-with-image";
import Container from "@/components/ui/container";
import HoverCard from "@/components/ui/hover-card";
import { ServicesCard } from "@/components/ui/services-card";
import Title from "@/components/ui/Title";
import TitleWithBottomBorder from "@/components/ui/title-with-bottom-border";
import TitleWithDoubleBorder from "@/components/ui/title-with-double-border";
import Glass from "@/lib/helpers";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

export default function CultureReligion() {
  return (
    <Container className="py-10 flex flex-col gap-20">
      <div className="flex flex-col gap-8">
        <Title title="Văn Hóa" />
        <div className="grid grid-cols-2 gap-8">
          {culture.map((item, index) =>
            Object.entries(culture[0]).map(([key, i], index) => (
              <ServicesCard
                key={key}
                title={
                  <div className="flex flex-col gap-1">
                    <TitleWithBottomBorder>{key}</TitleWithBottomBorder>
                    <h5 className="text-2xl text-left text-highlight">
                      {i.title}
                    </h5>
                  </div>
                }
                description={i.content}
              />
            ))
          )}
        </div>
      </div>

      <Glass className="flex flex-col gap-8 px-10">
        <h2 className="text-6xl text-background">{religion[0].category}</h2>
        <Title title={religion[0].title} description={religion[0].content} />
        <div className="grid grid-cols-2 gap-8">
          {religion[0].subsections.map((item, index) => (
            <ServicesCard
              key={index}
              title={
                <div className="flex flex-col gap-1">
                  <TitleWithBottomBorder>{item.title}</TitleWithBottomBorder>
                  <h5 className="text-2xl text-left text-highlight">
                    {item.title}
                  </h5>
                </div>
              }
              description={item.content}
            />
          ))}
        </div>
      </Glass>

      <Glass className="flex flex-col gap-8 px-10">
        <h2 className="text-6xl text-background">{people[0].category}</h2>
        <Title title={people[0].title} description={people[0].content} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {people[0].subsections.map((item, index) => (
            <CardWithImage
              image={item.image}
              key={index}
              title={item.title}
              description={item.content}
            />
          ))}
        </div>
      </Glass>

      <Glass className="flex flex-col gap-8 px-10">
        <h2 className="text-6xl text-background">{history[0].category}</h2>
        <Title title={history[0].title} description={history[0].content} />
        <div className="grid grid-cols-2 gap-8">
          {history[0].events.map((item, index) => (
            <ServicesCard
              key={index}
              title={
                <h2 className="text-2xl flex text-left text-highlight gap-2 ">
                  <Icon icon="simple-icons:aircanada" className="mt-1 " />
                  {item.year}
                </h2>
              }
              description={item.event}
            />
          ))}
        </div>
      </Glass>
    </Container>
  );
}

const culture = [
  {
    CulturalDiversity: {
      title: "Đa dạng dân tộc và văn hóa",
      content:
        "Canada là quốc gia đa dân tộc với người dân từ nhiều quốc gia và vùng lãnh thổ khác nhau. Người Canada gốc gác từ các nền văn hóa châu Âu, Châu Á, Châu Phi và các khu vực khác trên thế giới.",
    },
    Languages: {
      title: "Ngôn ngữ",
      content:
        "Tiếng Anh và tiếng Pháp là hai ngôn ngữ chính thức của Canada, phản ánh lịch sử chia sẻ giữa người Anh và người Pháp. Tuy nhiên, Canada cũng có nhiều cộng đồng người nói các ngôn ngữ khác nhau, làm phong phú thêm thế giới ngôn ngữ của đất nước này.",
    },
    Arts: {
      title: "Nghệ thuật",
      content:
        "Canada có một nền văn hóa nghệ thuật phong phú, bao gồm văn học, âm nhạc, điện ảnh và nghệ thuật hình thái. Toronto và Vancouver là các trung tâm nghệ thuật lớn với các sự kiện quốc tế như Liên hoan phim Quốc tế Toronto và Liên hoan phim quốc tế Vancouver.",
    },
    Sports: {
      title: "Thể thao",
      content:
        "Thể thao là một phần quan trọng của văn hóa Canada, với các môn thể thao như bóng đá, bóng bầu dục, bóng chày và khúc côn cầu rất phổ biến. Canada cũng có các sự kiện thể thao quan trọng như Giải bóng chày Thế giới Little League và Giải đua thuyền kỳ nghỉ lớn nhất thế giới.",
    },
  },
];

const religion = [
  {
    title: "Tôn giáo",
    category: "Religion",
    content:
      "Xã hội Canada rất tôn trọng tự do tôn giáo, bao gồm cả quyền tự do tín ngưỡng. Canada là một trong những quốc gia đa văn hóa và đa tôn giáo trên thế giới, với người dân từ nhiều nền văn hóa và tôn giáo khác nhau. Các tôn giáo lớn nhất ở Canada bao gồm:",
    subsections: [
      {
        category: "Christianity",
        title: "Thiên chúa giáo",
        content:
          "Đa phần là Cơ đốc giáo Kitô hữu, với nhiều giáo phận và nhà thờ trên khắp đất nước.",
      },
      {
        category: "Islam",
        title: "Hồi giáo",
        content:
          "Hồi giáo có một cộng đồng lớn và đa dạng ở Canada, đặc biệt là ở các thành phố lớn như Toronto, Montreal và Vancouver. Các cộng đồng Hồi giáo thường có nhiều điểm tôn giáo và văn hóa phát triển.",
      },
      {
        category: "Buddhism",
        title: "Đạo Phật",
        content:
          "Người theo đạo Phật là một phần quan trọng của cộng đồng tôn giáo ở Canada. Có nhiều chùa và tổ chức Phật giáo hoạt động để phục vụ cộng đồng và du nhập giá trị văn hóa của Phật giáo vào xã hội.",
      },
      {
        category: "Hinduism",
        title: "Hindu giáo",
        content:
          "Hindu giáo là một trong những tôn giáo lớn và có ảnh hưởng sâu sắc nhất trên thế giới, với nguồn gốc từ Ấn Độ. Đạo Hindu cũng có mặt và có sự phát triển trong cộng đồng tôn giáo ở Canada, đặc biệt là trong các thành phố lớn với nhiều đền đài và hoạt động văn hóa tôn giáo.",
      },
      {
        category: "Others",
        title: "Khác",
        content:
          "Canada cũng có nhiều nhóm tôn giáo nhỏ khác và các hệ thống tôn giáo thế tục, đặc biệt là trong cộng đồng các dân tộc bản địa. Tôn giáo ở Canada không chỉ là nơi thực hành tín ngưỡng mà còn là một phần quan trọng của đa dạng văn hóa và xã hội của đất nước này.",
      },
    ],
  },
];

const people = [
  {
    category: "IndigenousPeoples",
    title: "Người bản địa Canada",
    content:
      "Người bản địa Canada, còn được gọi là người dân của các dân tộc bản địa, là những cộng đồng văn hóa và dân tộc đã sớm hiện diện và sống tại vùng lãnh thổ ngày nay của Canada từ hàng ngàn năm trước khi các thực dân châu Âu đến định cư. Các cộng đồng bản địa Canada đã và đang gắn bó mật thiết với đất đai, tự do tôn giáo và truyền thống văn hóa đặc biệt của họ, đóng góp quan trọng vào văn hóa và sự phát triển của đất nước này.",
    subsections: [
      {
        image: "/hero-2.jpg",
        category: "FirstNations",
        title: "Người First Nations (Dân tộc Đầu tiên)",
        content:
          "Bao gồm nhiều dân tộc và sắc tộc khác nhau, sống trên khắp Canada từ biển Đại Tây Dương tới biên giới với Hoa Kỳ. Mỗi dân tộc First Nations có văn hóa, ngôn ngữ và truyền thống riêng, với một số dân tộc nổi bật như Cree, Ojibwe, và Haida.",
      },
      {
        image: "/hero-3.jpg",
        title: "Người Inuit",
        category: "Inuit",
        content:
          "Sinh sống chủ yếu ở miền Bắc Canada, bao gồm các vùng đất của Nunavut, Northwest Territories, Quebec và Labrador. Người Inuit được biết đến với nền văn hóa phong phú, nghệ thuật điêu khắc đá và nghề săn bắn truyền thống.",
      },
      {
        image: "/service.jpg",
        title: "Người Métis",
        category: "Người",
        content:
          "Là những người lai giữa người châu Âu (thường là người Pháp hoặc người Anh) và người bản địa. Họ có một nền văn hóa pha trộn của cả hai truyền thống, và sống chủ yếu ở các tỉnh giữa và phía Tây của Canada.",
      },
    ],
  },
];

const history = [
  {
    title: "Lịch sử Canada",
    category: "History",
    content:
      "Trước khi các nhà thám hiểm châu Âu đến Canada, người bản địa đã sinh sống trên mảnh đất này hàng nghìn năm, phát triển những nền văn minh phong phú và đa dạng. Mối quan hệ giữa hai nhóm người, bao gồm cả việc giao thương lông thú, liên minh quân sự, và hiệp ước hoà bình, đã đặt nền tảng cho sự tồn tại của Canada ngày nay.",
    events: [
      {
        year: 1497,
        event:
          "John Cabot, một nhà thám hiểm người Ý nhập cư Anh đặt chân lên Newfoundland ngày nay, tuyên bố vùng đất là New Founde Land của Anh.",
      },
      {
        year: 1534,
        event:
          "Jacques Cartier đã khám phá Vịnh St. Lawrence (Vịnh Chaleur), tuyên bố đất đai cho Vua Francis I của Pháp. Sau đó, khi anh đến Bán đảo Gaspé, anh chạm trán với một nhóm người Iroquoians và bắt giữ hai con trai của tù trưởng Donnacona, đưa họ trở về Pháp. Sau đó, anh ta quay trở lại và khám phá khu vực Montreal ngày nay, và bắt giữ Donnacona để làm người hướng dẫn cho những chuyến thám hiểm trong tương lai của anh ta. Donnacona đã chết trong khi bị giam cầm. Việc định cư của người Pháp tại Thành phố Quebec trong những năm sau đó cuối cùng đã thất bại phần lớn do sự thù địch của người Iroquoians. Cái tên Canada xuất phát từ tiếng của người Iroquoians, khi Cartier nghe hai người bị bắt giam nói chữ ‘kanata‘, mang nghĩa ‘ngôi làng.",
      },
      {
        year: 1608,
        event:
          "Samuel de Champlain thành lập Thành phố Quebec, khu định cư lâu dài đầu tiên của người Pháp tại Canada.",
      },
      {
        year: 1670,
        event:
          "Công ty Hudson’s Bay được thành lập, giành quyền kiểm soát việc buôn bán lông thú ở trên khu vực rộng lớn. Ngày nay, Hudson’s Bay vẫn còn tồn tại và là công ty lâu đời nhất Canada. Nhu cầu về da hải ly ở châu Âu đã thúc đẩy hoạt động kinh doanh buôn bán lông thú với người bản địa. Những chiếc vạc đồng, dao sắt, rìu và đầu mũi tên, hạt thủy tinh, gương và quần áo được trao đổi để lấy da hải ly của thổ dân, và dùng để làm mũ nỉ. Các thương gia, thu hút bởi nền kinh tế phát triển này, sau đó đã tiến hành các cuộc thám hiểm thuần túy thương mại của riêng họ.",
      },
      {
        year: 1759,
        event:
          "Trận chiến đồng bằng Abraham dẫn đến chiến thắng của Anh trước quân Pháp ở Quebec.",
      },
      {
        year: 1763,
        event:
          "Hiệp ước Paris được ký kết, nhượng lại các lãnh thổ của Pháp ở Canada cho Anh.",
      },
      {
        year: 1864,
        event:
          "Các cuộc thảo luận và hội nghị dẫn đến việc thành lập Liên bang Canada.",
      },
      {
        year: 1867,
        event:
          "Ngày 1 tháng 7, 1867 – Quốc gia tự trị Canada được thành lập với các tỉnh ban đầu là Ontario, Quebec, New Brunswick và Nova Scotia.",
      },
      {
        year: 1870,
        event:
          "Canada mở rộng về phía tây với Manitoba, British Columbia và Prince Edward Island.",
      },
      {
        year: 1885,
        event:
          "Sự hoàn thành của đường ray Canadian Pacific Railway, nối liền đất nước từ bờ biển này sang bờ biển khác.",
      },
      {
        year: 1914,
        event:
          "Canada tham gia Chiến tranh Thế giới thứ Nhất, đóng góp đáng kể vào nỗ lực chiến tranh của quân Đồng minh.",
      },
      {
        year: 1939,
        event:
          "Canada một lần nữa đóng vai trò quan trọng trong Chiến tranh Thế giới thứ Hai, với những đóng góp đáng kể về quân sự và kinh tế.",
      },
      {
        year: 1982,
        event:
          "Đạo luật Canada (Canada Act) được thông qua, cho phép Canada sửa đổi hiến pháp của mình mà không cần sự chấp thuận của Anh.",
      },
      {
        year: 1999,
        event:
          "Nunavut được thành lập thành một lãnh thổ mới, công nhận quyền tự quản của người Inuit.",
      },
    ],
    conclusion:
      "Văn hoá và các thành phố của Canada ngày này còn giữ lại những ký ức của lịch sử phong phú này, từ việc thừa nhận lãnh thổ hoặc đất đai (Land Acknowledgement) vào lúc bắt đầu các buổi lễ, bài giảng hoặc bất kỳ sự kiện công cộng nào, tới các ngày lễ như Remembrance Day.",
  },
];
