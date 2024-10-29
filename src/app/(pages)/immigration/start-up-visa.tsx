import { Feature } from "@/components/ui/cards-set";
import Container from "@/components/ui/container";
import { FAQ } from "@/components/ui/faq";
import { FeatureSection } from "@/components/ui/feature";
import HoverCard from "@/components/ui/hover-card";
import { truncateTextHeading } from "@/components/ui/newsCard";
import Title from "@/components/ui/Title";
import Glass from "@/lib/helpers";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { umask } from "process";

export default function StartUpVisa() {
  return (
    <Container className="flex flex-col gap-10">
      <Title
        title={"Lợi ích của Chương trình SUV"}
        description={
          "Chương trình Visa Khởi Nghiệp (SUV) tại Canada mang lại nhiều lợi ích cho các doanh nhân và các doanh nghiệp khởi nghiệp sáng tạo muốn thiết lập hoạt động tại Canada với những lợi ích chính."
        }
      />
      <div className="flex gap-6 md:flex-row flex-col">
        <HoverCard
          title={"LỘ TRÌNH TRỰC TIẾP ĐẾN CƯ TRÚ VĨNH VIỄN (PR CANADA)"}
          color="bg-yellow-400"
          icon={"iconamoon:delivery-free-light"}
          description={
            "Tối đa 5 gia đình có thể sống, học tập và làm việc trong khi PR đang trong quá trình xử lý chỉ với một doanh nghiệp duy nhất."
          }
        />
        <HoverCard
          color="bg-green-400"
          title={"Con Đường Không Rắc Rối"}
          icon={"arcticons:netbenefits"}
          description={
            "Không yêu cầu đầu tư tối thiểu, không cần chuyến đi khảo sát, không yêu cầu đầu tư tiền của bạn vào doanh nghiệp, không kiểm tra giá trị tài sản ròng."
          }
        />
        <HoverCard
          color="bg-sky-400"
          title={"LỰA CHỌN AN TOÀN"}
          icon={"material-symbols:lock-reset"}
          description={
            "Duy trì trạng thái thường trú ngay cả trong trường hợp doanh nghiệp thất bại."
          }
        />
      </div>

      <Glass className="px-8 flex flex-col gap-8">
        <Title
          title={"Lợi ích cho gia đình bạn"}
          description={
            "Toàn bộ gia đình của bạn, bao gồm vợ/chồng và con dưới 22 tuổi (vào thời điểm nộp đơn xin đề cử tỉnh bang), sẽ nhận được thẻ thường trú tại Canada và được hưởng hầu hết các quyền lợi giống như công dân Canada."
          }
        />

        <div className="px-6 py-4 rounded-md flex flex-col gap-4">
          <Title
            subtitle="Làm việc"
            title={
              <p className="text-4xl text-black/50 w-full text-left pt-3">
                Trong khi chờ thường trú, gia đình bạn có thể nộp đơn đến, làm
                việc và học tập tại Canada
              </p>
            }
          />
          <p className="text-sm text-black/60 text-left">
            Với đề cử tỉnh bang, toàn bộ gia đình của bạn, bao gồm vợ/chồng và
            con dưới 22 tuổi (vào thời điểm nộp đơn xin đề cử tỉnh bang), có thể
            nộp đơn xin Thường Trú tại Canada để được hưởng hầu hết các quyền
            lợi như công dân Canada.
          </p>
          <p className="text-sm text-black/60 text-left ">
            Trong thời gian chờ thường trú, gia đình bạn có thể nộp đơn đến, làm
            việc và học tập tại Canada
            <ul className="pl-6 list-disc">
              <li>Miễn phí học tiểu học và trung học</li>
              <li>Được bảo vệ pháp lý dưới luật pháp Canada</li>
            </ul>
          </p>
          <p className="text-sm text-black/60 text-left ">
            Khi bạn trở thành Thường Trú Nhân Canada
            <ul className="pl-6 list-disc">
              <li>
                Tự do sống, học tập, và làm việc trên toàn lãnh thổ Canada
              </li>
              <li>Tiếp cận các chính sách an sinh xã hội</li>
              <li>
                Đủ điều kiện để nộp đơn xin quốc tịch Canada sau thời gian chờ.
                Sở hữu hộ chiếu mạnh thứ 6 trên thế giới, được hưởng chế độ miễn
                thị thực hoặc ETA trực tiếp tới 185 quốc gia.
              </li>
              <li>
                Khi có PR, học phí đại học chỉ bằng một phần ba so với sinh viên
                quốc tế, không bị hạn chế về trường học và chương trình.
              </li>
            </ul>
          </p>
        </div>
      </Glass>

      <Title
        title={"Điều kiện"}
        description={
          "Đáp ứng các tiêu chí đủ điều kiện của chương trình và chứng minh tiềm năng thành công của doanh nghiệp tại Canada là các yếu tố quan trọng trong quá trình lựa chọn."
        }
      />
      <div className="flex flex-col gap-2">
        {startUpFAQ.map((item) => (
          <FAQ
            key={index}
            description={item.description()}
            title={item.question}
          />
        ))}
      </div>

      <div>
        <FeatureSection title="LỘ TRÌNH SUV" subtitle="Lộ Trình">
          {features.map((item, index) => (
            <div
              key={index}
              className="max-w-md sm:mx-auto sm:text-center flex flex-col justify-center items-center"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-background sm:mx-auto sm:w-24 sm:h-24 text-white">
                {item.icon}
              </div>
              <h6 className="mb-3 text-xl font-bold leading-5">{item.title}</h6>
              <p className="mb-3 text-sm text-gray-900">
                {truncateTextHeading(item.description, 14)}
              </p>
              <Link
                href="/"
                aria-label=""
                className="inline-flex bg-background text-white px-4 rounded-full font-light items-center transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Tìm hiểu thêm
              </Link>
            </div>
          ))}
        </FeatureSection>
      </div>
      <div className="flex flex-col gap-10">
        <Title
          title={"Danh Sách Tổ Chức Được Chỉ Định"}
          description={
            "Danh sách có thể được cập nhật mà không có thông báo trước. Vui lòng liên hệ với chúng tôi để được tư vấn."
          }
        />

        <div className="flex gap-2">
          <div className="flex flex-col gap-2 flex-1">
            {visaFAQ.map((item) => (
              <FAQ
                key={index}
                description={item.description()}
                title={item.question}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="">
        <Title
          title={"Chúng tôi có thể giúp bạn gì?"}
          subtitle="CHƯƠNG TRÌNH VISA KHỞI NGHIỆP"
          description="Điều quan trọng là chọn một đại lý hoặc tư vấn di trú uy tín và được cấp phép, người am hiểu về các chương trình di trú kinh doanh Start-Up Visa để đảm bảo rằng người nộp đơn nhận được thông tin và hướng dẫn chính xác và cập nhật trong suốt quá trình."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
          {featuresBottom.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </Container>
  );
}

const featuresBottom = [
  {
    id: 1,
    title: "Đánh giá Điều kiện",
    description:
      "Các chuyên gia của chúng tôi đánh giá điều kiện của bạn, đảm bảo bạn đáp ứng các yêu cầu của chương trình.",
    icon: (
      <Icon
        icon="material-symbols:person-apron"
        className="text-6xl w-[50px]"
      />
    ),
  },
  {
    id: 2,
    title: "Phát triển Kế hoạch Kinh doanh",
    description:
      "Các chuyên gia trong nhóm Di trú Kinh doanh của chúng tôi có thể hỗ trợ phát triển một kế hoạch kinh doanh mạnh mẽ và toàn diện. Kế hoạch kinh doanh chuẩn bị kỹ lưỡng là một yếu tố quan trọng cho sự thành công của chương trình Start Up Visa. Chúng tôi giúp bạn soạn thảo kế hoạch kinh doanh mạnh mẽ và cung cấp huấn luyện thuyết trình để giúp ứng viên thể hiện tốt trong buổi thuyết trình với tổ chức hỗ trợ.",
    icon: (
      <Icon
        icon="material-symbols-light:qr-code-2-rounded"
        className="text-6xl w-[50px]"
      />
    ),
  },
  {
    id: 3,
    title:
      "Kết nối với Tổ chức Thiết kế và cung cấp hướng dẫn về Chương trình Start Up Visa",
    description:
      "Chúng tôi kết nối bạn với các tổ chức có thể hỗ trợ doanh nghiệp của bạn. Chúng tôi cũng cung cấp hướng dẫn về cách đáp ứng các yêu cầu, cải thiện bài thuyết trình và huấn luyện phỏng vấn để tăng khả năng nhận được Thư Hỗ trợ.",
    icon: <Icon icon="oui:ml-regression-job" className="text-6xl w-[50px]" />,
  },
  {
    id: 4,
    title: "Hoàn thành Hồ sơ",
    description:
      "RCIC của chúng tôi có thể giúp các ứng viên điều hướng quá trình nộp hồ sơ, đảm bảo tất cả các tài liệu cần thiết được hoàn thành chính xác và nộp đúng hạn. Chúng tôi cũng cung cấp hỗ trợ và hướng dẫn liên tục trong suốt quá trình nộp hồ sơ, đảm bảo ứng viên được chuẩn bị và thông báo kỹ lưỡng ở mọi giai đoạn.",
    icon: (
      <Icon
        icon="streamline:quality-education-solid"
        className="text-6xl w-[50px]"
      />
    ),
  },
];

const features = [
  {
    id: 1,
    title: "Đánh giá và Tiếp nhận",
    description:
      "Thực hiện đánh giá ban đầu dựa trên các tiêu chí tiếp nhận với các chuyên gia Di trú Kinh doanh của GreenTech Resources Worldwide Canada.",
    icon: (
      <Icon
        icon="material-symbols:person-apron"
        className="text-6xl w-[50px]"
      />
    ),
  },
  {
    id: 2,
    title: "Phát triển Ý tưởng Kinh doanh & Lựa chọn Vườn ươm",
    description:
      "Phát triển và cải tiến các ý tưởng kinh doanh sáng tạo. Chọn vườn ươm phù hợp và chuẩn bị bài thuyết trình.",
    icon: (
      <Icon
        icon="material-symbols-light:qr-code-2-rounded"
        className="text-6xl w-[50px]"
      />
    ),
  },
  {
    id: 3,
    title: "Thuyết trình tại Tổ chức Được chỉ định",
    description:
      "Thuyết trình và nhận cam kết – Thư Hỗ trợ từ một tổ chức Canada được chỉ định.",
    icon: <Icon icon="oui:ml-regression-job" className="text-6xl w-[50px]" />,
  },
  {
    id: 4,
    title: "Nộp hồ sơ TR và PR",
    description:
      "Đáp ứng các yêu cầu điều kiện để nộp hồ sơ chương trình Start-Up Visa để xin cư trú tạm thời (TR) và cư trú vĩnh viễn (PR).",
    icon: (
      <Icon
        icon="streamline:quality-education-solid"
        className="text-6xl w-[50px]"
      />
    ),
  },
];

const visaFAQ = [
  {
    id: 1,
    question: "Quỹ Đầu tư Mạo hiểm",
    description: () => (
      <ul className="list-disc px-6">
        <li>7 Gate Ventures</li>
        <li>BCF Ventures</li>
        <li>BDC Venture Capital</li>
        <li>Celtic House Venture Partners</li>
        <li>Celtic House Venture Partners</li>
        <li>Golden Venture Partners Fund, LP</li>
        <li>Impression Ventures</li>
        <li>Innovation Platform Capital International LP</li>
        <li>iNovia Capital Inc.</li>
        <li>Lumira Ventures</li>
        <li>Tập đoàn Đổi mới Nova Scotia (o/a Innovacorp)</li>
      </ul>
    ),
  },
  {
    id: 2,
    question: "Nhóm Nhà đầu tư Thiên thần",
    description: () => (
      <ul className="list-disc px-6">
        <li>Nhà đầu tư Thiên thần Quốc tế Canada</li>
        <li>Ekagrata Inc.</li>
        <li>Mạng lưới Nhà đầu tư Thiên thần Golden Triangle</li>
        <li>Mạng lưới Nhà đầu tư Thiên thần Golden Triangle</li>
        <li>Keiretsu Forum Canada</li>
        <li>Oak Mason Investments Inc.</li>
        <li>Mạng lưới Nhà đầu tư Thiên thần Đông Nam Ontario</li>
        <li>Nhà đầu tư Thiên thần TenX</li>
        <li>Mạng lưới Nhà đầu tư Thiên thần VANTEC</li>
        <li>Nhà đầu tư Thiên thần York</li>
      </ul>
    ),
  },
  {
    id: 3,
    question: "Vườn ươm Doanh nghiệp",
    description: () => (
      <ul className="list-disc px-6">
        <li>Quỹ Alacrity</li>
        <li>Bộ Nông nghiệp và Lâm nghiệp Alberta</li>
        <li>Vườn ươm Chế biến Nông sản</li>
        <li>Trung tâm Phát triển Chế biến Thực phẩm</li>
        <li>
          Canada Thương mại Sinh học (hoạt động như Máy gia tốc Công nghệ
          Manitoba)
        </li>
        <li>Creative Destruction Lab</li>
        <li>Empowered Startups Ltd.</li>
        <li>Extreme Innovations</li>
        <li>Trung tâm Genesis</li>
        <li>Highline BETA Inc.</li>
        <li>Innovacorp</li>
        <li>Interactive Niagara Media Cluster o/a Innovate Niagara</li>
        <li>Invest Ottawa</li>
        <li>Knowledge Park o/a Planet Hatch</li>
        <li>LatAm Startups</li>
      </ul>
    ),
  },
];

const startUpFAQ = [
  {
    id: 1,
    question: "Doanh nghiệp Đủ Điều kiện",
    description: () => (
      <ul className="list-disc px-6">
        <li>Khi cam kết: Mỗi ứng viên sở hữu hơn 10% quyền biểu quyết.</li>
        <li>
          Khi được cấp quyền cư trú vĩnh viễn: Quản lý tích cực doanh nghiệp tại
          Canada, các hoạt động thiết yếu và thành lập doanh nghiệp tại Canada.
        </li>
      </ul>
    ),
  },
  {
    id: 2,
    question: "Thư Hỗ trợ",
    description: () => (
      <p>
        Nhận thư hỗ trợ từ tổ chức được chỉ định: Vườn ươm Doanh nghiệp, Nhóm
        Nhà đầu tư Thiên thần hoặc Quỹ Đầu tư Mạo hiểm.
      </p>
    ),
  },
  {
    id: 3,
    question: "Trình độ Ngôn ngữ",
    description: () => (
      <p>
        Đạt trình độ CLB 5 tối thiểu trong tiếng Anh hoặc tiếng Pháp ở cả 4 kỹ
        năng nghe, đọc, viết và nói.
      </p>
    ),
  },
];
