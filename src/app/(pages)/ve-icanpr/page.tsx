"use client"
import Container from "@/components/ui/container";
import { CTADefault, CTAWithImage } from "@/components/ui/cta";
import HoverCard from "@/components/ui/hover-card";
import { List, UL } from "@/components/ui/list";
import Title from "@/components/ui/Title";
import Glass from "@/lib/helpers";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function About() {
  return (
    <>
      <Container effect="bg" className="flex flex-col gap-10">
        <div className="flex flex-col gap-6">
          <Title
            title={"Giới thiệu về công ty"}
            subtitle="Ưu Thế của iCANPR"
            description={
              "Tại iCANPR, chúng tôi tự hào về mạng lưới đối tác mạnh mẽ và đa dạng, từ các tổ chức giáo dục, nhà tuyển dụng, đến các luật sư di trú hàng đầu tại Canada. Chúng tôi tự tin cung cấp thông tin cập nhật và chính xác nhất và đảm bảo gia đình bạn nhận được sự hỗ trợ toàn diện trong suốt quá trình từ tư vấn, hoàn thiện hồ sơ đến ổn định và xây dựng cuộc sống mới tại Canada"
            }
            effect={true}
            className="mb-2"
            titleClassName="text-4xl md:text-5xl font-extrabold text-[#6B3F1D] tracking-wider"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white p-8 px-0 rounded-3xl shadow-sm">
          {[{
            title: "Quan Hệ Chặt Chẽ với Nhà Tuyển Dụng",
            color: "bg-yellow-100",
            icon: "game-icons:relationship-bounds",
            description: "Mạng lưới luật sư di trú của chúng tôi sẽ đảm bảo mọi thủ tục pháp lý của bạn được thực hiện chính xác và nhanh chóng, giúp giảm thiểu rủi ro và thời gian chờ đợi.",
            link: "/doi-tac-icanpr"
          }, {
            title: "Liên Kết với Các Tổ Chức Giáo Dục",
            color: "bg-green-100",
            icon: "cil:education",
            description: "Chúng tôi hợp tác chặt chẽ với nhiều trường đại học, cao đẳng uy tín tại Canada, giúp bạn có nhiều lựa chọn về học tập và các chương trình học bổng",
            link: "/doi-tac-icanpr"
          }, {
            title: "Hỗ Trợ Pháp Lý Từ Các Luật Sư Di Trú",
            color: "bg-sky-100",
            icon: "streamline:legal-justice-hammer-hammer-work-legal-mallet-office-company-gavel-justice-judge-arbitration-court",
            description: "Mạng lưới luật sư di trú của chúng tôi sẽ đảm bảo mọi thủ tục pháp lý của bạn được thực hiện chính xác và nhanh chóng, giúp giảm thiểu rủi ro và thời gian chờ đợi.",
            link: "#"
          }].map((card, idx) => (
            <div
              key={card.title}
              className="flex flex-col items-center text-center bg-white rounded-2xl border border-[#e5dacb] shadow-sm p-8 transition-all duration-200 hover:shadow-md hover:border-[#6B3F1D]"
            >
              <div className={`flex justify-center items-center h-16 w-16 rounded-full mb-4 ${card.color}`}> 
                <Icon icon={card.icon} className="text-3xl text-[#6B3F1D]" />
              </div>
              <h3 className="text-lg font-bold text-[#6B3F1D] tracking-wide mb-2">{card.title}</h3>
              <p className="text-gray-700 text-base mb-2">{card.description}</p>
              <a href={card.link} className="mt-2 text-highlight font-semibold text-sm underline underline-offset-4 hover:text-[#6B3F1D] transition-colors">Tìm hiểu thêm</a>
            </div>
          ))}
        </div>
      </Container>
      <Container effect="bg-color" className="">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left: Text and Features */}
          <div className="flex-1 flex flex-col gap-6">
            <h2 className="text-3xl font-bold text-highlight">Tại sao chọn iCANPR?</h2>
            <p className="text-base text-gray-700 mb-4 max-w-lg">
              Chúng tôi là đối tác tin cậy trên hành trình định cư Canada của bạn. Đội ngũ chuyên gia tận tâm, giải pháp toàn diện, và sự đồng hành từ A-Z giúp bạn an tâm thực hiện giấc mơ mới.
            </p>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 group">
                <span className="bg-blue-100 text-highlight rounded-full p-3 shadow-md group-hover:scale-110 transition-transform">
                  <Icon icon="mdi:briefcase-search-outline" className="text-2xl" />
                </span>
                <div>
                  <span className="font-semibold text-highlight">Cơ hội việc làm đa dạng</span>
                  <p className="text-gray-600 text-sm">Kết nối với nhiều nhà tuyển dụng uy tín tại Canada.</p>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <span className="bg-green-100 text-highlight rounded-full p-3 shadow-md group-hover:scale-110 transition-transform">
                  <Icon icon="mdi:domain-plus" className="text-2xl" />
                </span>
                <div>
                  <span className="font-semibold text-highlight">Hỗ trợ doanh nghiệp & khởi nghiệp</span>
                  <p className="text-gray-600 text-sm">Tư vấn thành lập doanh nghiệp, phát triển ý tưởng kinh doanh tại Canada.</p>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <span className="bg-yellow-100 text-highlight rounded-full p-3 shadow-md group-hover:scale-110 transition-transform">
                  <Icon icon="mdi:school-outline" className="text-2xl" />
                </span>
                <div>
                  <span className="font-semibold text-yellow-800">Lộ trình du học đến định cư</span>
                  <p className="text-gray-600 text-sm">Định hướng học tập, hỗ trợ chuyển tiếp sang định cư lâu dài.</p>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <span className="bg-red-100 text-highlight rounded-full p-3 shadow-md group-hover:scale-110 transition-transform">
                  <Icon icon="mdi:account-check-outline" className="text-2xl" />
                </span>
                <div>
                  <span className="font-semibold text-highlight">Xử lý hồ sơ chuyên nghiệp</span>
                  <p className="text-gray-600 text-sm">Tư vấn, chuẩn bị và xử lý hồ sơ nhanh chóng, minh bạch.</p>
                </div>
              </li>
            </ul>
          </div>
          {/* Right: Image */}
          <div className="flex-1 flex flex-col justify-center items-center h-full">
            <div className="relative w-full max-w-2xl md:max-w-3xl h-[34rem] flex items-center justify-center">
              {/* Back image 1 */}
              <img
                src="/canada.jpg"
                alt="Canada background"
                className="absolute top-20 left-16 w-80 h-[22rem] object-cover rounded-2xl shadow-md border border-gray-200 rotate-[-8deg] z-0 transition-transform transition-shadow duration-300 hover:scale-105 hover:shadow-2xl"
                style={{ zIndex: 0 }}
              />
              {/* Back image 2 */}
              <img
                src="/immigration.png"
                alt="Immigration background"
                className="absolute top-8 right-16 w-80 h-[22rem] object-cover rounded-2xl shadow-md border border-gray-200 rotate-[7deg] z-10 transition-transform transition-shadow duration-300 hover:scale-105 hover:shadow-2xl"
                style={{ zIndex: 1 }}
              />
              {/* Main image */}
              <div className="relative w-96 h-[26rem] z-20 transition-transform transition-shadow duration-300 hover:scale-105 hover:shadow-2xl">
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-5 py-2 rounded-full text-base font-semibold shadow-sm">
                  Đối tác tin cậy
                </div>
                <img
                  src="/aaa.jpg"
                  alt="Canada Success"
                  className="w-full h-full object-cover rounded-2xl shadow-lg border border-gray-200"
                />
              </div>
            </div>
            <div className="mt-6 text-lg text-gray-500 text-center font-medium">
              Đồng hành cùng bạn đến Canada
            </div>
          </div>
        </div>
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
          image="alberta"
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
          image="saskatchewan-a"
          ctaAction={"Xem thêm về SINP"}
          link="/de-cu-tinh-bang-pnp/saskatchewan-sinp"
        />
      </div>
      <CTADefault
        title="Chúng tôi có thể giúp bạn"
        image={"service"}
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
