import Container from "@/components/ui/container";
import { CTADefault, CTAWithImage } from "@/components/ui/cta";
import HoverCard from "@/components/ui/hover-card";
import { List, UL } from "@/components/ui/list";
import Title from "@/components/ui/Title";
import TitleWithBottomBorder from "@/components/ui/title-with-bottom-border";
import TitleWithDoubleBorder from "@/components/ui/title-with-double-border";
import Glass from "@/lib/helpers";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function About() {
  return (
    <>
      <Container className="flex flex-col gap-10">
        <Title
          title={"Giới thiệu về công ty"}
          subtitle="Ưu Thế của iCANPR"
          description={
            "Tại iCANPR, chúng tôi tự hào về mạng lưới đối tác mạnh mẽ và đa dạng, từ các tổ chức giáo dục, nhà tuyển dụng, đến các luật sư di trú hàng đầu tại Canada. Chúng tôi tự tin cung cấp thông tin cập nhật và chính xác nhất và đảm bảo gia đình bạn nhận được sự hỗ trợ toàn diện trong suốt quá trình từ tư vấn, hoàn thiện hồ sơ đến ổn định và xây dựng cuộc sống mới tại Canada"
          }
        />
        <div className="flex gap-6 md:flex-row flex-col">
          <HoverCard
            title={"Quan Hệ Chặt Chẽ với Nhà Tuyển Dụng"}
            color="bg-yellow-400"
            icon={"game-icons:relationship-bounds"}
            description={
              "Mạng lưới luật sư di trú của chúng tôi sẽ đảm bảo mọi thủ tục pháp lý của bạn được thực hiện chính xác và nhanh chóng, giúp giảm thiểu rủi ro và thời gian chờ đợi."
            }
            link="/doi-tac-icanpr"
          />
          <HoverCard
            color="bg-green-400"
            title={"Liên Kết với Các Tổ Chức Giáo Dục:"}
            icon={"cil:education"}
            description={
              "Chúng tôi hợp tác chặt chẽ với nhiều trường đại học, cao đẳng uy tín tại Canada, giúp bạn có nhiều lựa chọn về học tập và các chương trình học bổng"
            }
            link="/doi-tac-icanpr"
          />
          <HoverCard
            color="bg-sky-400"
            title={"Hỗ Trợ Pháp Lý Từ Các Luật Sư Di Trú"}
            icon={
              "streamline:legal-justice-hammer-hammer-work-legal-mallet-office-company-gavel-justice-judge-arbitration-court"
            }
            description={
              "Mạng lưới luật sư di trú của chúng tôi sẽ đảm bảo mọi thủ tục pháp lý của bạn được thực hiện chính xác và nhanh chóng, giúp giảm thiểu rủi ro và thời gian chờ đợi."
            }
            link="#"
          />
        </div>
      </Container>
      <Container effect="slide-left">
        <Glass className="flex flex-col lg:flex-row  gap-10 md:gap-2 h-max px-10 py-10">
          <div className="w-full md:flex-1 flex flex-col gap-2">
            <TitleWithDoubleBorder>iCanPR</TitleWithDoubleBorder>
            <div className="flex flex-col justify-start gap-6">
              <TitleWithBottomBorder titleClass="md:text-xl text-left">
                Chuyên môn
              </TitleWithBottomBorder>
              <p className="text-sm text-black/60 text-left">
                Chào mừng đến với iCANPR, nơi chúng tôi giúp bạn thực hiện giấc
                mơ định cư tại Canada.
              </p>
              <p className="text-sm text-black/60 text-left">
                Với đội ngũ chuyên gia giàu kinh nghiệm và mạng lưới đối tác
                rộng khắp, chúng tôi cam kết mang đến cho bạn giải pháp định cư
                tối ưu nhất.
              </p>
            </div>
          </div>
          <div className="w-full  md:flex-1 flex flex-col gap-3 justify-center items-center h-max">
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-center cursor-pointer ">
              <li className="text-center flex gap-1 justify-center bg-highlight/80 font-primary tracking-widest px-8 w-full md:w-[200px]  flex-col items-center text-white/90 py-6">
                <Icon icon={"hugeicons:job-search"} className="text-4xl" />
                Cơ hội việc làm cho người nước ngoài
              </li>
              <li className="text-center flex gap-1 justify-center bg-background/80 font-primary tracking-widest px-8 py-6 w-full md:w-[200px]  flex-col items-center text-white/90">
                <Icon
                  icon={
                    "streamline:money-graph-bar-increase-up-product-performance-increase-arrow-graph-business-chart"
                  }
                  className="text-4xl"
                />
                Thành lập doanh nghiệp tại Canada
              </li>
              <li className="text-center flex gap-1 justify-center bg-background/80  font-primary tracking-widest px-8 py-6 w-full md:w-[200px]  flex-col items-center text-white/90">
                <Icon
                  icon={"material-symbols:conversion-path"}
                  className="text-4xl"
                />
                Lộ trình từ du học đến định cư Canada
              </li>
              <li className="text-center flex gap-1 justify-center bg-highlight/80 font-primary tracking-widest px-8 py-6 w-full md:w-[200px]  flex-col items-center text-white/90">
                <Icon
                  icon={"ph:chalkboard-teacher-bold"}
                  className="text-4xl"
                />
                Xử lý hồ sơ bị từ chối bởi IRCC Canada
              </li>
            </ul>
          </div>
        </Glass>
      </Container>
      <Container>
        <Title title={"ICANPR"} subtitle="Các chương trình định cư phổ biến" />
      </Container>
      <div className=" flex flex-col gap-10">
        <CTAWithImage
          title={"Chương TRÌNH đề cử tỉnh bang"}
          subtitle={"Alberta"}
          description={
            <div className="flex flex-col gap-2 justify-start items-start">
              <p className="text-left">
                Chương trình Ưu tiên đề cử tỉnh bang của Alberta (AAIP) – trước
                đây được gọi là Chương trình Đề cử Nhập cư Alberta (AINP) – đã
                trở thành một trong những chương trình lao động định cư phổ biến
                nhất của Canada, cung cấp quyền thường trú nhân Canada cho các
                công nhân và doanh nhân nước ngoài có tay nghề cao.
              </p>
              <p className="text-left">
                <UL>
                  <List>
                    Chương trình nhập cư ngành Du lịch và Dịch vụ – Alberta
                    Tourism & Hospitality Stream (THS).
                  </List>
                  <List>
                    Chương trình cơ hội nhập cư tại Alberta (Alberta Opportunity
                    Stream).
                  </List>
                  <List>
                    Chương trình nhập cư Alberta thông qua Express Entry
                    (Alberta Express Entry Stream).
                  </List>
                  <List>
                    Chương trình Đổi mới nông thôn ( Rural Renewal Stream).
                  </List>
                </UL>
              </p>
            </div>
          }
          image="/alberta.png"
          ctaAction={"Xem thêm chương trình AAIP"}
          link="/de-cu-tinh-bang-pnp/alberta-nhap-cu-aaip"
        />
        <CTAWithImage
          flip={true}
          title={"Chương TRÌNH đề cử tỉnh bang"}
          subtitle={"Saskatchewan"}
          description={
            <div className="flex flex-col gap-2 justify-start items-start">
              <p className="text-left">
                Chương trình đề cử của tỉnh bang Saskatchewan (SINP) mở ra cơ
                hội cho công dân quốc tế nộp đơn xin thường trú (PR) tại Canada
                với thời gian xét duyệt nhanh hơn các chương trình nhập cư khác,
                bao gồm:
              </p>
              <p className="text-left">
                <UL>
                  <List>
                    Saskatchewan International Skilled Worker: dành cho đối
                    tượng lao động lành nghề muốn sinh sống, làm việc ở
                    Saskatchewan.
                  </List>
                  <List>
                    Saskatchewan Experience: dành cho người lao động có giấy
                    phép làm việc và sinh viên tốt nghiệp quốc tế đang sống và
                    làm việc tại Saskatchewan.
                  </List>
                  <List>
                    Saskatchewan Entrepreneur and Farm: Dành cho doanh nhân, nhà
                    đầu tư có kế hoạch khởi nghiệp hoặc mua lại một trang trại ở
                    Saskatchewan.
                  </List>
                </UL>
              </p>
            </div>
          }
          image="/saskatchewan.jpg"
          ctaAction={"Xem thêm về SINP"}
          link="/de-cu-tinh-bang-pnp/saskatchewan-sinp"
        />
      </div>
      <CTADefault
        title="Chúng tôi có thể giúp bạn
"
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

export const Card = ({ image, title, list, flip }) => {
  return (
    <>
      <Glass
        className={cn(
          "h-[450px] w-[450px] flex flex-col gap-4 items-center relative z-10 mx-0 bg-cover",

          flip ? "justify-end" : "justify-start"
        )}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 rounded-2xl border-gray-100  h-full absolute top-0 left-0 w-full"></div>
        {/* <div className="w-[45%] rounded-l-2xl">
        <img
          src={image}
          alt=""
          className={cn(
            "h-[217px] bg-cover z-10 relative",
            flip ? "rounded-r-2xl" : "rounded-l-2xl"
          )}
        />
      </div> */}
        {/* <div
        className={cn(
          "px-8  absolute rounded-2xl -ml-6 shadow-2xl  z-20 border-gray-100 backdrop-blur-3xl bg-opacity-10 bg-clip-padding backdrop-filter bg-gray-100 flex flex-col gap-2 py-5",
          flip ? "left-2" : "-right-6"
        )}
      > */}
      </Glass>
    </>
    // </div>
  );
};

const data = [
  {
    id: 1,
    title: "Entrepreneurs",
    image: "/aaa.jpg",
    list: [
      {
        id: 1,
        title: "Conduct initial assessment based on intake criteria",
      },
      {
        id: 2,
        title: "Develop & refine the innovative business concepts",
      },
      {
        id: 3,
        title: "Incubator selection",
      },
      {
        id: 4,
        title: "Pitch deck refinement",
      },
      {
        id: 5,
        title: "Pitch coaching",
      },
      {
        id: 6,
        title: "Closed Work Permit for Applicant",
      },
      {
        id: 7,
        title: "Open Work Permit for spouse",
      },
      {
        id: 8,
        title: "Visitor/ Study Permit for dependent children",
      },
      {
        id: 9,
        title: "PR application",
      },
      {
        id: 10,
        title: "Settlement",
      },
    ],
  },
  {
    id: 2,
    title: "Foreign Workers",
    image: "/aaa.jpg",
    list: [
      {
        id: 1,
        title: "Recruitment at CICCanadaJobs",
      },
      {
        id: 2,
        title: "Provincial nomination",
      },
      {
        id: 3,
        title: "Closed work permit for applicant",
      },
      {
        id: 4,
        title: "Open work permit for spouse",
      },
      {
        id: 5,
        title: "Visitor/ Study Permit for dependent children",
      },
      {
        id: 6,
        title: "PR application",
      },
    ],
  },
  {
    id: 3,
    title: "Students",
    image: "/aaa.jpg",
    list: [
      {
        id: 1,
        title: "Study Permit",
      },
      {
        id: 2,
        title: "Post graduation work permit",
      },
      {
        id: 3,
        title: "Open Work Permit for spouses",
      },
      {
        id: 4,
        title: "Consulting Pathway to PR",
      },
      {
        id: 5,
        title: "Visitor/ Study Permit for dependent children",
      },
      {
        id: 6,
        title: "Settlement",
      },
    ],
  },
  {
    id: 4,
    title: "Employers",
    image: "/aaa.jpg",
    list: [
      {
        id: 1,
        title: "PNP/LMIA registration for employers",
      },
      {
        id: 2,
        title: "Planning, searching, and screening suitable candidates",
      },
      {
        id: 3,
        title: "Streamlining the interview process",
      },
      {
        id: 4,
        title: "Assisting with employment offers",
      },
      {
        id: 5,
        title: "Handling PNP/LMIA and work permit procedures for candidates",
      },
      {
        id: 6,
        title: "Settlement",
      },
    ],
  },
];
