import { CardWithImage } from "@/components/ui/card-with-image";
import { CTADefault } from "@/components/ui/cta";
import { getDataBySlug } from "@/components/ui/dynamic-component";
import { DynamicComponent } from "@/components/ui/dynamic-component";
import { List, UL } from "@/components/ui/list";
import Glass from "@/lib/helpers";
import React from "react";
import NewsShowcase from "../../news.tsx/news-showcase";
import Container from "@/components/ui/container";
import Title from "@/components/ui/Title";

// export default async function EnvCanada({ slug }) {
//   try {
//     const pageData = await getDataBySlug("moi-truong-canada");

//     // Validate that pageData exists and has the expected structure
//     if (!pageData || !pageData.content || !Array.isArray(pageData.content)) {
//       console.error("Invalid page data structure:", pageData);
//       return <p>No components to display</p>;
//     }

//     return (
//       <div className="flex flex-col gap-10">
//         {pageData.content.map((componentData, index) => (
//           <DynamicComponent key={index} data={componentData} />
//         ))}
//       </div>
//     );
//   } catch (error) {
//     console.error("Failed to load page data:", error);
//     return <p>Something went wrong while loading the content.</p>;
//   }
// }

export default function EnvCanada() {
  return (
    <div className="flex flex-col gap-8">
      <Container>
        <Glass>
          {" "}
          <Title
            title={"Thời Tiết của Canada"}
            description={
              "Môi trường và thời tiết của Canada rất đa dạng và phong phú, từ khí hậu bắc cực lạnh giá đến khí hậu nhiệt đới đại dương ấm áp, cùng với một sự đa dạng sinh học rộng lớn và sự ảnh hưởng mạnh mẽ từ các vùng biển và đại dương xung quanh."
            }
          />
        </Glass>
      </Container>
      <Title
        subtitle={"Đa dạng sinh học"}
        description={
          "Canada là một trong những nước có diện tích rừng nguyên sinh lớn nhất thế giới với nhiều loại môi trường sống từ rừng nguyên sinh, thảo nguyên đến vùng sa mạc và núi non. Bờ biển dài hơn 200.000 km của Canada ảnh hưởng lớn đến thời tiết và môi trường của nước này. Bờ biển Tây có nhiều rạn san hô và hoạt động của các loài sinh vật biển, trong khi bờ biển Đông có các hệ sinh thái khác nhau và cung cấp nguồn tài nguyên lớn cho kinh tế Canada.."
        }
      />
      <Container>
        <Glass>
          <Title
            subtitle={"khí hậu"}
            description={"Canada có nhiều loại khí hậu khác nhau:"}
          />
          <div className=" text-center px-14">
            <UL>
              <List>
                Khí hậu bắc cực: Ở miền Bắc Canada (vùng Yukon, Nunavut), khí
                hậu lạnh giá quanh năm với mùa đông rất dài và lạnh.
              </List>
              <List>
                Khí hậu lục địa: Các vùng phía Nam của Canada (ví dụ như
                Ontario, Quebec, Manitoba) có mùa đông lạnh và mùa hè nóng ẩm.
              </List>
              <List>
                Khí hậu nhiệt đới đại dương: Ở các vùng ven biển phía Tây
                (British Columbia), khí hậu ấm áp, mưa nhiều và mùa đông ẩm.
              </List>
            </UL>
          </div>

          <Title
            description={
              "Như nhiều quốc gia trên thế giới,  Canada đang phải đối mặt với những thay đổi trong khí hậu toàn cầu, với một số khu vực nhận thấy sự gia tăng về nhiệt độ và sự thay đổi trong mùa lạnh."
            }
          />
        </Glass>
      </Container>

      <Title subtitle="Bốn mùa tại Canada" />
      <Container>
        <div className="flex gap-5">
          <CardWithImage
            image="/alberta.png"
            title="Mùa Xuân"
            description="Mùa xuân ở Canada, kéo dài từ tháng 3 tới tháng 5, là thời gian của sự tái sinh, khi cả nước chào đón sự nở rộ của hoa anh đào, hoa tulip, và hoa thuỷ tiên sau khi băng tuyết chảy."
          />
          <CardWithImage
            image="/saskatchewan.jpg"
            title="Mùa Hè"
            description="
Mùa hè chính là thời gian ấm áp nhất trong năm, với nhiệt độ giao động từ khoảng 20-30°C. Đây chính là thời gian thích hợp nhất với các hoạt động thể thao và các lễ hội ngoài trời."
          />
          <CardWithImage
            image="/ontario.png"
            title="Mùa Thu"
            description="Khi lá phong ngả sang vàng đỏ, thời tiết mát dần, đây là thời gian thích hợp để đi bộ, cắm trại, và ngắm cảnh, tận hưởng được vẻ đẹp thơ mộng của thiên nhiên."
          />
          <CardWithImage
            image="/northwestterritories.png"
            title="Mùa Đông"
            description="Với nhiệt độ trung bình là -15°C, mùa đông là mùa lạnh nhất trong năm và cũng là mùa tuyệt vời nhất để trải nghiệm trượt tuyết, trượt băng, khúc côn cầu, và các hoạt động tuyết khác. "
          />
        </div>
        <Title title={"Cuộc sống Canada"} subtitle="Bài viết mới" />
        <NewsShowcase />
      </Container>
      <CTADefault
        title="Chúng tôi có thể giúp bạn"
        subtitle={
          <p className="text-lg text-white/90">
            iCan PR hiểu rằng di trú/ định cư tại Canada là một hành trình nhiều
            thay đổi và thách thức.
            <br /> Mục tiêu và nhiệm vụ của chúng tôi trở thành đối tác đáng tin
            cậy của bạn trong hành trình này. Chúng tôi mong <br />
            muốn giúp bạn hiện thực hóa ước mơ định cư Canada, sẳn sàng chào đón
            những cơ hội mới tại đây.
          </p>
        }
        image={"/service.jpg"}
      />
    </div>
  );
}
