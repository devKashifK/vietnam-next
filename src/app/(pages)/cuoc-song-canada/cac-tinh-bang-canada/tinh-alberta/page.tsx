import { CardWithImage } from "@/components/ui/card-with-image";
import Container from "@/components/ui/container";
import { CTADefault, CTAWithImage } from "@/components/ui/cta";
import Title from "@/components/ui/Title";
import Glass from "@/lib/helpers";
import { title } from "process";
import React from "react";

export default function AlbertaP() {
  return (
    <>
      <Container>
        {" "}
        <Glass>
          <Title
            title={"Edmonton"}
            subtitle="Alberta"
            description={
              "Edmonton, thủ phủ của Alberta, nằm trên Vành Đai Màu Mỡ Fertile Belt của Canada, là khu vực có những điều kiện tối ưu để trồng lúa gạo, cùng với việc khai thác gỗ, xay bột, đóng gói thịt, thuộc da, và sản xuất sữa. Tuy nhiên, ngành sản xuất dầu chính là yếu tố chủ đạo trong kinh tế của Edmonton, cũng như với cả Alberta. Với nền kinh tế phát triển mạnh và các cơ hội làm việc tại đây, Edmonton đã từ lâu là nơi thu hút nhiều người nhập cư, và ngày nay đã tạo nên nhiều khu phố văn hoá để phản ánh điều này, bao gồm cả Chinatown (Khu phố Tàu), Little Italy, và khu người Việt."
            }
          />
        </Glass>
      </Container>
      <Container>
        <CTAWithImage
          title={"Hệ Thống Giáo Dục"}
          subtitle={"Alberta"}
          description={
            <div className="flex flex-col gap-2 justify-start items-start">
              <p className="text-left">
                Hệ thống giáo dục của tỉnh Alberta có danh tiếng là một trong
                những hệ thống giáo dục tốt nhất tại Canada. Như các hệ thống
                trường công tại Canada khác, giáo dục tại Alberta hoàn toàn miễn
                phí dành cho cư dân, và được chia thành hơn 42 hệ thống trường
                công và 4 hệ thống trường Pháp ngữ. Ngoài ra, Alberta cũng có
                các hệ thống trường công giáo hoạt động bằng cả tiếng Anh và
                tiếng Pháp, với học phí được tài trợ bởi chính phủ.
              </p>
            </div>
          }
          image="alberta"
        />
        <CTAWithImage
          flip={true}
          title={"University of Alberta"}
          subtitle={"Alberta"}
          description={
            <div className="flex flex-col gap-2 justify-start items-start">
              <p className="text-left">
                University of Alberta (UofA) là một trong năm những đại học
                nghiên cứu lớn nhất Canada, nằm trong nhóm U15 Đại Học Nghiên
                Cứu Canada. Hiện nay, UofA đã đạt được hạng trong top 100 đại
                học thế giới trên bảng xếp hạng QS, với danh tiếng quốc tế trong
                các lĩnh vực nhân văn, khoa học, nghệ thuật sáng tạo, kinh
                doanh, kỹ thuật, và khoa học sức khỏe.
              </p>
            </div>
          }
          image="alberta-a"
        />
        <CTAWithImage
          title={"University of Calgary"}
          subtitle={"Alberta"}
          description={
            <div className="flex flex-col gap-2 justify-start items-start">
              <p className="text-left">
                Université de Montréal (UdeM) được giảng dạy hoàn toàn bằng
                tiếng Pháp, và là đại học nghiên cứu lớn nhất tỉnh, thành viên
                của nhóm U15 Đại Học Nghiên Cứu Canada. Đạt được hạng 111 trên
                bảng xếp hạng thế giới của Times Higher Education, UdeM là một
                trong những trường dẫn đầu trong các lĩnh vực khoa học máy tính,
                luật, y khoa, kinh doanh và tài chính, và giáo dục.
              </p>
            </div>
          }
          image="alberta-b"
        />
      </Container>
      <Container>
        <Glass>
          <Title
            title={"Calgary"}
            subtitle="Alberta"
            description={
              "Thành phố Calgary, Alberta, chính là trụ sở hành chính và tài chính cho ngành dầu khí của Canada, và vào đầu thế kỷ 21, Calgary đã trở thành một trong những thành phố phát triển nhanh nhất Canada, thu hút nhiều người nhập cư. Tuy nhiên, Calgary vẫn giữ mạnh nền văn hoá phương Tây, được thể hiện trong lễ hội Calgary Stampede, bắt nguồn từ lịch sử chăn nuôi gia súc của thành phố. Ngày nay, Calgary được biết đến vì bối cảnh của dãy núi Rocky Mountains bao quanh thành phố, cùng với văn hoá phương Tây và ngành khai thác dầu của họ."
            }
          />
        </Glass>
      </Container>
      <Container>
        <Title subtitle="Các Điểm Đến Nổi Tiếng" />
        <div className="flex  flex-wrap gap-5">
          {albertaConfig.map((item) => (
            <CardWithImage
              image={item.image}
              title={item.title}
              key={item.id}
              description={item.description}
            />
          ))}
        </div>
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
        image={"service"}
      />
    </>
  );
}

const albertaConfig = [
  {
    id: 1,
    image: "/province/alberta/a.png",
    title: "National Park",
    description: "Banff National Park",
  },
  {
    id: 4,
    image: "/province/alberta/b.png",
    title: " Calgary",
    description: "Scotiabank Saddledome, Calgary",
  },
  {
    id: 3,
    image: "/province/alberta/c.png",
    title: "Edmonton",
    description: "Art Gallery of Alberta, Edmonton",
  },
  {
    id: 2,
    image: "/province/alberta/d.png",
    title: "Edmonton",
    description: "Alberta Legislature Building, Edmonton",
  },
  {
    id: 5,
    image: "/province/alberta/e.png",
    title: "National Park",
    description: "Elk Island National Park, Edmonton",
  },
  {
    id: 6,
    image: "/province/alberta/f.png",
    title: "River Valley",
    description: "North Saskatchewan River Valley, Edmonton",
  },
  {
    id: 7,
    image: "/province/alberta/g.png",
    title: "Edmonton",
    description: "North Saskatchewan River, Edmonton",
  },
  {
    id: 8,
    image: "/province/alberta/h.png",
    title: "Town of Banff",
    description: "Banff Avenue, Town of Banff",
  },
];
