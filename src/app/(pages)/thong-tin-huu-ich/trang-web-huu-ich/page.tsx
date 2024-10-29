import Container from "@/components/ui/container";
import { CTADefault } from "@/components/ui/cta";
import { List, UL } from "@/components/ui/list";
import Title from "@/components/ui/Title";
import Glass from "@/lib/helpers";
import React from "react";

export default function UsefulWebsite() {
  return (
    <>
      <Container>
        <Glass className="flex flex-col gap-8">
          <Title
            // title={"Useful Websites"}
            subtitle="http://canada.ca"
            description={
              "Trang web tổng hợp thông tin về chính sách, thủ tục và quy trình định cư tại Canada:"
            }
          />
          <Title
            subtitle="http://canada.ca"
            description={
              "Trang web chính thức của Chính phủ Canada về nhập cư và công dân"
            }
          />
          <Title
            subtitle="Trang web của các tỉnh bang"
            description={
              "Các trang web chính thức của từng tỉnh bang và lãnh thổ tại Canada, cung cấp thông tin về các chương trình đề cử tỉnh bang "
            }
          />
          <UL>
            <List>Ontario Immigrant Nominee Program (OINP)</List>
            <List>British Columbia Provincial Nominee Program (BC PNP)</List>
            <List>Alberta Immigrant Nominee Program (AINP)</List>
            <List>Saskatchewan Immigrant Nominee Program (SINP)</List>
            <List>Manitoba Provincial Nominee Program (MPNP)</List>
          </UL>
          <Title
            description={
              "Những trang web này sẽ cung cấp cho bạn thông tin chi tiết về các chương trình nhập cư, yêu cầu, thủ tục, và hướng dẫn cụ thể để bạn có thể chuẩn bị tốt cho quá trình định cư tại Canada."
            }
          />
          <Title
            description={
              "Ngoài những trang web đã đề cập, bạn cũng có thể tham khảo trang web chúng tôi http://icanpr.vn để cập nhật các tin tức mới nhất về di trú và các cơ hội việc làm, đầu tư tại Canada."
            }
          />
        </Glass>
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
    </>
  );
}
