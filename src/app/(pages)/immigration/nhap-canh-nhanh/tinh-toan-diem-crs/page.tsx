import Container from "@/components/ui/container";
import { List, UL } from "@/components/ui/list";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Title from "@/components/ui/Title";
import Glass from "@/lib/helpers";
import Link from "next/link";
import { Heart, GraduationCap, Briefcase, MapPin } from "lucide-react";
import React from "react";

export default function CRSScoreCalculation() {
  return (
    <Container effect="none" className="flex flex-col lg:gap-10">
      <Glass className="flex gap-6 px-10 py-10">
        <div className="flex flex-col justify-start gap-6">
          <h3 className="tracking-wide text-left text-4xl text-black/70">
            Điểm CRS Là Gì?
          </h3>

          <p className="text-sm text-black/60 text-left">
            Comprehensive Ranking System (CRS) là một hệ thống điểm số phát
            triển bởi Cơ quan Di trú, Thương mại và Phát triển Canada (IRCC) để
            đánh giá và xếp hạng ứng viên trong quá trình định cư tại Canada.
            Điểm CRS là yếu tố quyết định liệu ứng viên có cơ hội nhận được thư
            mời (Invitation to Apply) từ chính phủ Canada để định cư hay không.
            Hệ thống này dựa trên một số yếu tố quan trọng như tuổi, trình độ
            học vấn, kinh nghiệm làm việc, khả năng sử dụng ngôn ngữ (thường là
            tiếng Anh, tiếng Pháp) và các yếu tố khác.
          </p>
        </div>

        <div className="flex-1 flex flex-col gap-4">
          <Title
            className="px-2 text-left lg:justify-start lg:items-start"
            title={
              <p className="text-4xl text-black/50 w-full text-left pt-3">
                Vai trò của điểm CRS trong việc định cư Canada
              </p>
            }
          />

          <div className="flex flex-col justify-start gap-6">
            <p className="text-sm text-black/60 text-left">
              Việc định cư tại Canada qua chương trình Liên Bang và Tỉnh Bang
              (PNP) hoặc Chương trình Định cư doanh nhân đòi hỏi ứng viên phải
              có điểm CRS đủ cao để nhận mời thư từ IRCC. Điểm CRS quyết định
              xem ứng viên có nằm trong danh sách những người được đánh giá và
              xếp hạng hay không. Đạt điểm cao hơn tương đương với việc ứng viên
              có cơ hội lớn hơn để định cư thành công tại Canada.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start gap-6">
          <Title
            title={
              <p className="text-4xl text-black/50 w-full text-left pt-3">
                Hệ Thống Xếp Hạng và Thang Điểm Tối Đa
              </p>
            }
          />
          <p className="text-sm text-black/60 text-left">
            CRS đánh giá các thông tin của ứng viên như sau:
          </p>
          <UL>
            <List>Kỹ năng</List>
            <List> Kinh nghiệm làm việc</List>
            <List>Khả năng ngôn ngữ</List>
            <List>Trình độ giáo dục và các yếu tố khác.</List>
          </UL>
          <p className="text-sm text-black/60 text-left">
            Cộng điểm cho những ứng viên có thư mời làm việc hoặc được đề cử bởi
            chính phủ tỉnh hoặc vùng lãnh thổ của Canada theo chương trình đề cử
            của tỉnh. Ứng viên có bằng cấp Canada cũng được cộng điểm.
          </p>
          <p className="text-sm text-black/60 text-left">
            CIC sẽ gửi thư mời cho các ứng cử viên có xếp hạng cao nhất thông
            qua “vòng chọn lọc” thường xuyên định kỳ. Ứng viên có thư mời được
            xin định cư tại Canada.
          </p>
        </div>
        <div className="flex flex-col justify-start gap-6">
          <Title
            title={
              <p className="text-4xl text-black/50 w-full text-left pt-3">
                CÔNG THỨC CỦA HỆ THỐNG XẾP HẠNG TOÀN DIỆN
              </p>
            }
          />
          <p className="text-sm text-black/60 text-left">
            Tất cả các ứng viên trong Express Entry sẽ được chấm điểm dựa trên
            bốn phạm trù và tổng số điểm tối đa là 1.200 điểm
          </p>

          <UL>
            Điểm Cốt Lõi (lên đến 600 điểm)
            <List>Kỹ năng và kinh nghiệm </List>
            <List>
              Vợ, chồng hoặc phối ngẫu sống chung (kỹ năng ngôn ngữ và trình độ
              giáo dục của họ)
            </List>
            <List>
              Tính có thể chuyển đổi kỷ năng của ứng viên – Skill
              Transferability (trình độ giáo dục và kinh nghiệm làm việc. Yếu tố
              dẫn đến cơ hội có được việc làm và thu nhập cao hơn){" "}
            </List>
          </UL>
          <UL>
            Điểm Cộng Thêm (lên đến 600 điểm)
            <List>Bằng cấp Canada</List>
            <List>Thư mời làm việc</List>
            <List>Được đề cử bởi tỉnh hoặc lãnh thổ</List>
            <List>
              Có anh chị em là công dân Canada hoặc thường trú dân sinh sống ở
              Canada
            </List>
            <List>Giỏi tiếng Pháp</List>
          </UL>
        </div>
        <div className="flex flex-col justify-start gap-6">
          <Title
            title={
              <p className="text-4xl text-black/50 w-full text-left pt-3">
                Lưu ý:
              </p>
            }
          />
          <p className="text-sm text-black/60 text-left">
            Ứng viên có anh/ chị/ em ở Canada có thể được hưởng 15 điểm nếu anh/
            chị/ em đó là công dân Canada hoặc thường trú nhân và ít nhất 18
            tuổi, và ứng viên chỉ được hưởng tối đa 15 điểm theo yếu tố này; thí
            sinh có nhiều anh/chị/em ở Canada sẽ được hưởng tổng 15 điểm, chứ
            không phải 15 điểm cho mỗi người anh/chị/em.
          </p>
          <p className="text-sm text-black/60 text-left">
            Những điểm này cũng có thể được trao cho ứng viên nếu vợ/chồng hoặc
            người phối ngẫu không đăng ký kết hôn của ứng viên có anh/chị/em
            ruột ở Canada. Ứng viên hoặc vợ/chồng hoặc người phối ngẫu không
            đăng ký kết hôn có mẹ và/hoặc cha với anh/chị/em ruột ở Canada. Mối
            quan hệ này có thể thông qua huyết thống, nhận con nuôi, kết hôn
            hoặc phối ngẫu không đăng ký kết hôn.
          </p>
        </div>
        <div className="flex flex-col justify-start gap-6">
          <Title
            title={
              <p className="text-4xl text-black/50 w-full text-left pt-3">
                Làm thế nào để tính điểm CRS của bạn?
              </p>
            }
          />
          <p className="text-sm text-black/60 text-left">
            Bộ Di trú Canada (IRCC) đã tạo sẵn trang web sau để tính điểm
            Express Entry của bạn. Truy cập địa chỉ và trả lời các câu hỏi, trả
            lời xong bạn sẽ biết được số điểm CRS của mình bao nhiêu:
          </p>
          <Title
            subtitle="https://www.cic.gc.ca/english/immigrate/skilled/crs-tool.asp
"
          />
        </div>
      </Glass>
      <DynamicTable data={spouseOrDomesticPartner} />

      <div className="flex flex-col gap-2">
        <p>Tóm Tắt Thang Điểm Của Các Yếu Tố</p>
        <p>1. Yếu Tố Chính</p>
        <DynamicTable data={spouseOrDomesticPartner2} />
      </div>
      <div className="flex flex-col gap-2">
        <p>1. Yếu Tố Vợ/Chồng hoặc phối ngẫu sống chung</p>
        <DynamicTable data={spouseOrDomesticPartner3} />
      </div>
      <div className="flex flex-col gap-2">
        <p>
          1. Yếu tố chính + B. Yếu Tố Vợ/Chồng hoặc phối ngẫu sống chung = Tối
          đa 500 điểm (có hoặc không có vợ/chồng hoặc phối ngẫu sống chung)
        </p>
        <p>2. Tính Có Thể Chuyển Đổi Kỷ Năng (tối đa 100 điểm)</p>
        <DynamicTable data={spouseOrDomesticPartner4} />
      </div>

      <div className="flex flex-col gap-2">
        <p>
          1. Yếu tố chính + B. Yếu Tố Vợ/Chồng hoặc phối ngẫu sống chung + C.
          Tính Có Thể Chuyển Đổi Kỷ Năng = Tối đa 600 điểm
        </p>
        <p>2. Điểm Cộng Thêm (Tối đa 600 điểm)</p>
        <DynamicTable data={spouseOrDomesticPartner5} />
      </div>
      <div className="flex flex-col gap-2">
        <p>
          1.Yếu tố chính + B. Yếu Tố Vợ/Chồng hoặc phối ngẫu sống chung + C.
          Tính Có Thể Chuyển Đổi Kỷ Năng + D. Điểm cộng thêm = Tối đa 1.200 điểm
        </p>
        <h3> CRS – Bảng Tính Điểm Chi Tiết </h3>
        <p>1. Yếu Tố Chính</p>
        <Component />
      </div>
      <Component2 />
      <CRSCalculation />

      <div className="flex flex-col justify-start gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ourService.map((service, index) => (
            <Link
              href={service.ctaLink}
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div
                    className={`w-16 h-16 rounded-lg flex items-center justify-center ${getGradientClass(
                      index
                    )}`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold ml-4">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
}

export function DynamicTable({ data }) {
  const { columns, rows } = data[0];
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map((col, index) => (
            <TableHead key={index}>{col.header}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {columns.map((col, colIndex) => (
              <TableCell key={colIndex}>{row[col.key]}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
const spouseOrDomesticPartner = [
  {
    columns: [
      {
        header: "A. Ứng Viên Độc Thân",
        key: "single",
      },
      {
        header: "B. Ứng Viên Có Vợ/Chồng hoặc Phối Ngẫu Sống Chung",
        key: "married",
      },
    ],
    rows: [
      {
        single: "1. Yếu Tố Kỹ Năng và Kinh Nghiệm Làm Việc (Tối đa 500 điểm)",
        married: "1. Yếu Tố Kỹ Năng và Kinh Nghiệm Làm Việc (Tối đa 460 điểm)",
      },
      {
        single: "2. N/A – Không Áp Dụng",
        married:
          "2. Yếu Tố Vợ/Chồng hoặc Phối Ngẫu Sống Chung (Tối đa 40 điểm)",
      },
      {
        single:
          "3. Tính Có Thể Chuyển Đổi Kỹ Năng của Ứng Viên (Tối đa 100 điểm)",
        married:
          "3. Tính Có Thể Chuyển Đổi Kỹ Năng của Ứng Viên (Tối đa 100 điểm)",
      },
      {
        single: "4. Điểm Được Cộng Thêm (Tối đa 600 điểm)",
        married: "4. Điểm Được Cộng Thêm (Tối đa 600 điểm)",
      },
      {
        single: "Tổng Cộng (Tối đa 1.200 điểm)",
        married: "Tổng Cộng (Tối đa 1.200 điểm)",
      },
    ],
  },
];

const spouseOrDomesticPartner2 = [
  {
    columns: [
      { header: "Yếu Tố", key: "element" },
      {
        header: "Điểm cho mỗi yếu tố – Có vợ/chồng hoặc người sống chung",
        key: "spouse",
      },
      { header: "Điểm cho mỗi yếu tố – Độc thân", key: "single" },
    ],
    rows: [
      { element: "Tuổi", spouse: "100", single: "110" },
      { element: "Trình Độ Văn Hóa", spouse: "140", single: "150" },
      { element: "Khả Năng Ngôn Ngữ", spouse: "150", single: "160" },
      {
        element: "Kinh Nghiệm Làm Việc tại Canada",
        spouse: "70",
        single: "80",
      },
    ],
  },
];

const spouseOrDomesticPartner3 = [
  {
    columns: [
      {
        header: "Yếu Tố",
        key: "element",
      },
      {
        header: "Điểm",
        key: "points",
      },
    ],
    rows: [
      {
        element: "Trình Độ Văn Hóa",
        points: "10",
      },
      {
        element: "Trình Độ Ngôn Ngữ",
        points: "20",
      },
      {
        element: "Kinh Nghiệm Làm Việc Tại Canada",
        points: "10",
      },
    ],
  },
];

const spouseOrDomesticPartner4 = [
  {
    columns: [
      {
        header: "Yếu Tố",
        key: "element",
      },
      {
        header: "Điểm",
        key: "points",
      },
    ],
    rows: [
      {
        element: "Ngôn ngữ tốt và bằng cấp sau trung học",
        points: "50",
      },
      {
        element: "Có kinh nghiệm làm việc tại Canada và bằng cấp sau trung học",
        points: "50",
      },
      {
        element:
          "Ngôn ngữ tốt (CLB level 7 hoặc cao hơn) và kinh nghiệm làm việc tại nước ngoài",
        points: "50",
      },
      {
        element:
          "Có kinh nghiệm làm việc tại Canada và kinh nghiệm làm việc tại nước ngoài",
        points: "50",
      },
      {
        element:
          "Ngôn ngữ tốt và bằng cấp (đối với những người trong các ngành nghề thương mại)",
        points: "50",
      },
    ],
  },
];

const spouseOrDomesticPartner5 = [
  {
    columns: [
      {
        header: "Yếu Tố",
        key: "element",
      },
      {
        header: "Điểm Tối Đa Cho Từng Yếu Tố",
        key: "points",
      },
    ],
    rows: [
      {
        element:
          "Anh chị em đang sinh sống tại Canada (công dân hoặc thường trú dân)",
        points: "15",
      },
      {
        element: "Trình độ tiếng Pháp",
        points: "30",
      },
      {
        element: "Giáo dục sau trung học tại Canada",
        points: "30",
      },
      {
        element: "Có thư mời làm việc tại Canada",
        points: "200",
      },
      {
        element: "Được tỉnh hoặc lãnh thổ đề cử",
        points: "600",
      },
    ],
  },
];

export function Component() {
  const sections = spouseOrDomesticPartner6;

  return (
    <div className="flex flex-col gap-6">
      {sections.map((section, index) => (
        <div key={index} className="flex flex-col gap-3">
          {/* Title and description */}
          <h2 className="text-xl font-semibold">{section.title}</h2>
          <p className="text-gray-600">{section.description}</p>

          {/* Table */}
          <Table>
            <TableHeader>
              <TableRow>
                {section.columns.map((col, colIndex) => (
                  <TableHead key={colIndex}>{col.header}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {section.rows.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  {section.columns.map((col, colIndex) => (
                    <TableCell key={colIndex}>{row[col.key]}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ))}
    </div>
  );
}

const spouseOrDomesticPartner6 = [
  {
    title: "Tuổi",
    description: "Điểm tối đa theo độ tuổi.",
    columns: [
      { header: "Độ Tuổi", key: "age" },
      { header: "Có vợ/chồng hoặc phối ngẫu sống chung", key: "spouse" },
      { header: "Độc thân", key: "single" },
    ],
    rows: [
      { age: "17 hoặc nhỏ hơn", spouse: "0", single: "0" },
      { age: "18", spouse: "90", single: "99" },
      { age: "19", spouse: "95", single: "105" },
      { age: "20 – 29", spouse: "100", single: "110" },
      { age: "30", spouse: "95", single: "105" },
      { age: "31", spouse: "90", single: "99" },
      { age: "32", spouse: "85", single: "94" },
      { age: "33", spouse: "80", single: "88" },
      { age: "34", spouse: "75", single: "83" },
      { age: "35", spouse: "70", single: "77" },
      { age: "36", spouse: "65", single: "72" },
      { age: "37", spouse: "60", single: "66" },
      { age: "38", spouse: "55", single: "61" },
      { age: "39", spouse: "50", single: "55" },
      { age: "40", spouse: "45", single: "50" },
      { age: "41", spouse: "35", single: "39" },
      { age: "42", spouse: "25", single: "28" },
      { age: "43", spouse: "15", single: "17" },
      { age: "44", spouse: "5", single: "6" },
      { age: "45 hoặc lớn hơn", spouse: "0", single: "0" },
    ],
  },
  {
    title: "Trình Độ Văn Hóa",
    description: "Điểm tối đa theo trình độ văn hóa.",
    columns: [
      { header: "Trình Độ", key: "education" },
      { header: "Có vợ/chồng hoặc phối ngẫu sống chung", key: "spouse" },
      { header: "Độc thân", key: "single" },
    ],
    rows: [
      { education: "Dưới trung học", spouse: "0", single: "0" },
      { education: "Tốt nghiệp trung học", spouse: "28", single: "30" },
      { education: "Khóa học một năm tại đại học", spouse: "84", single: "90" },
      { education: "Khóa học hai năm tại đại học", spouse: "91", single: "98" },
      { education: "Bằng cử nhân", spouse: "112", single: "120" },
      { education: "Hai chứng chỉ trở lên", spouse: "119", single: "128" },
      { education: "Thạc sĩ", spouse: "126", single: "135" },
      { education: "Tiến sĩ", spouse: "140", single: "150" },
    ],
  },
];

const CRSScoreDetails = [
  {
    title: "Tổng số điểm A. Yếu Tố Chính",
    description:
      "Độc thân: tối đa được 500 điểm\nCó vợ/chồng hoặc phối ngẫu sống chung: tối đa được 460 điểm",
    columns: [
      {
        header: "Yếu Tố",
        key: "element",
      },
      {
        header: "Điểm",
        key: "points",
      },
    ],
    rows: [
      {
        element:
          "Trình Độ Văn Hóa của Vợ/Chồng hoặc Phối Ngẫu Sống Chung (tối đa 10 điểm)",
        points: "",
      },
      { element: "Dưới trung học", points: "0" },
      { element: "Tốt nghiệp trung học", points: "2" },
      {
        element:
          "Khóa học một năm tại đại học, cao đẳng, thương mại hoặc kỹ thuật",
        points: "6",
      },
      {
        element:
          "Khóa học hai năm tại đại học, cao đẳng, thương mại hoặc kỹ thuật",
        points: "7",
      },
      {
        element:
          "Bằng cử nhân hoặc chương trình học ba hoặc nhiều năm tại đại học",
        points: "8",
      },
      {
        element:
          "Hai hoặc nhiều chứng chỉ, một phải thuộc chương trình ba năm hoặc hơn",
        points: "9",
      },
      {
        element: "Thạc sĩ hoặc bằng chuyên môn (Y, luật, dược, v.v.)",
        points: "10",
      },
      { element: "Tiến sĩ", points: "10" },
    ],
  },
  {
    title: "Ngôn ngữ thành thạo chính thức – Ngôn ngữ chính thức đầu tiên",
    description:
      "Canadian Language Benchmark (CLB) level per ability (reading, writing, speaking, and listening)\nĐiểm tối đa 20 và 5 cho từng kỹ năng",
    columns: [
      {
        header: "CLB Level",
        key: "clb_level",
      },
      {
        header: "Điểm",
        key: "points",
      },
    ],
    rows: [
      { clb_level: "CLB 4 hoặc thấp hơn", points: "0" },
      { clb_level: "CLB 5 hoặc 6", points: "1" },
      { clb_level: "CLB 7 hoặc 8", points: "3" },
      { clb_level: "CLB 9 hoặc cao hơn", points: "5" },
    ],
  },
  {
    title: "Kinh Nghiệm Làm Việc Tại Canada",
    description: "Điểm (Tối đa 10 điểm)",
    columns: [
      {
        header: "Kinh Nghiệm",
        key: "experience",
      },
      {
        header: "Điểm",
        key: "points",
      },
    ],
    rows: [
      { experience: "Không hoặc dưới 1 năm", points: "0" },
      { experience: "1 năm", points: "5" },
      { experience: "2 năm", points: "7" },
      { experience: "3 năm", points: "8" },
      { experience: "4 năm", points: "9" },
      { experience: "5 năm hoặc nhiều hơn", points: "10" },
    ],
  },
  {
    title: "Tính Có Thể Chuyển Đổi Kỷ Năng",
    description: "Điểm tối đa: 100",
    columns: [
      {
        header: "Trình Độ",
        key: "qualification",
      },
      {
        header: "CLB 7 hoặc Cao Hơn",
        key: "clb7",
      },
      {
        header: "CLB 9 hoặc Cao Hơn",
        key: "clb9",
      },
    ],
    rows: [
      { qualification: "Trung học hoặc thấp hơn", clb7: "0", clb9: "0" },
      {
        qualification: "Bằng cấp một năm hoặc dài hơn sau trung học",
        clb7: "13",
        clb9: "25",
      },
      {
        qualification:
          "Hai hoặc nhiều bằng cấp sau trung học, một phải thuộc chương trình 3 năm hoặc hơn",
        clb7: "25",
        clb9: "50",
      },
    ],
  },
  {
    title: "Điểm Cộng Thêm",
    description: "Điểm tối đa: 600",
    columns: [
      {
        header: "Điểm Cộng Thêm",
        key: "additional_factors",
      },
      {
        header: "Điểm Tối Đa",
        key: "max_points",
      },
    ],
    rows: [
      {
        additional_factors:
          "Có anh chị em sinh sống tại Canada (công dân hoặc thường trú dân)",
        max_points: "15",
      },
      {
        additional_factors:
          "Đạt NCLC 7 hoặc cao hơn cho tiếng Pháp và CLB 4 hoặc thấp hơn cho tiếng Anh",
        max_points: "15",
      },
      {
        additional_factors: "Giáo dục sau trung học tại Canada: 1-2 năm",
        max_points: "15",
      },
      {
        additional_factors: "Giáo dục sau trung học tại Canada: 3 năm hoặc hơn",
        max_points: "30",
      },
      {
        additional_factors: "Có thư mời làm việc thuộc NOC-00",
        max_points: "200",
      },
      {
        additional_factors: "Có thư mời làm việc thuộc NOC 0, A hoặc B",
        max_points: "50",
      },
      {
        additional_factors: "Được tỉnh hoặc lãnh thổ đề cử",
        max_points: "600",
      },
    ],
  },
];

export function Component2() {
  return (
    <div className="flex flex-col gap-6">
      {CRSScoreDetails.map((section, sectionIndex) => (
        <div key={sectionIndex} className="flex flex-col gap-3">
          {/* Render the section title and description */}
          <h2 className="text-xl font-semibold">{section.title}</h2>
          <p className="text-gray-600">{section.description}</p>

          {/* Render the table */}
          <Table>
            <TableHeader>
              <TableRow>
                {section.columns.map((col, colIndex) => (
                  <TableHead key={colIndex}>{col.header}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {section.rows.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  {section.columns.map((col, colIndex) => (
                    <TableCell key={colIndex}>{row[col.key]}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ))}
    </div>
  );
}

const CRSConfig = [
  {
    section: "Nhóm 1: Các yếu tố con người (Human Capital Factors)",
    subsections: [
      {
        title: "A. Độ tuổi",
        description:
          "Độ tuổi từ 18 đến 45 được tính điểm, trong đó 20-29 tuổi được ưu tiên tối đa 110 điểm.",
        columns: [
          { header: "Độ Tuổi", key: "age" },
          { header: "Đương đơn có vợ/chồng (tối đa 100 điểm)", key: "spouse" },
          { header: "Đương đơn độc thân (tối đa 110 điểm)", key: "single" },
        ],
        rows: [
          { age: "18 tuổi", spouse: "90", single: "99" },
          { age: "19 tuổi", spouse: "95", single: "105" },
          { age: "20 – 29 tuổi", spouse: "100", single: "110" },
          { age: "30 tuổi", spouse: "95", single: "105" },
          { age: "31 tuổi", spouse: "90", single: "99" },
          { age: "32 tuổi", spouse: "85", single: "94" },
          { age: "33 tuổi", spouse: "80", single: "88" },
          { age: "34 tuổi", spouse: "75", single: "83" },
          { age: "35 tuổi", spouse: "70", single: "77" },
          { age: "36 tuổi", spouse: "65", single: "72" },
          { age: "37 tuổi", spouse: "60", single: "66" },
          { age: "38 tuổi", spouse: "55", single: "61" },
          { age: "39 tuổi", spouse: "50", single: "55" },
          { age: "40 tuổi", spouse: "45", single: "50" },
          { age: "41 tuổi", spouse: "35", single: "39" },
          { age: "42 tuổi", spouse: "25", single: "28" },
          { age: "43 tuổi", spouse: "15", single: "17" },
          { age: "44 tuổi", spouse: "5", single: "6" },
          { age: "45 tuổi trở lên", spouse: "0", single: "0" },
        ],
      },
      {
        title: "B. Trình độ học vấn",
        description:
          "Điểm tối đa là 150 đối với trình độ học vấn cao như thạc sĩ hoặc tiến sĩ.",
        columns: [
          { header: "Bằng cấp/chứng chỉ", key: "qualification" },
          {
            header: "Đương đơn có vợ/chồng (tối đa 140 điểm)",
            key: "spouse",
          },
          {
            header: "Đương đơn độc thân (tối đa 150 điểm)",
            key: "single",
          },
        ],
        rows: [
          { qualification: "Bằng trung học", spouse: "28", single: "30" },
          {
            qualification: "Chứng chỉ/bằng cấp post-secondary (1 năm)",
            spouse: "84",
            single: "90",
          },
          {
            qualification: "Chứng chỉ/bằng cấp post-secondary (2 năm)",
            spouse: "91",
            single: "98",
          },
          {
            qualification: "Bằng cử nhân hoặc chương trình 3 năm trở lên",
            spouse: "112",
            single: "120",
          },
          {
            qualification: "2 chứng chỉ/bằng cấp trở lên (1 khóa 3 năm)",
            spouse: "119",
            single: "128",
          },
          { qualification: "Thạc sĩ", spouse: "126", single: "135" },
          { qualification: "Tiến sĩ", spouse: "140", single: "150" },
        ],
      },
      {
        title: "C. Khả năng ngôn ngữ thứ nhất",
        description:
          "Khả năng ngôn ngữ thứ nhất với tối đa 136 điểm cho các kỹ năng nghe, nói, đọc, viết.",
        columns: [
          { header: "Canadian Language Benchmarks", key: "clb" },
          {
            header: "Đương đơn có vợ/chồng (tối đa 128 điểm)",
            key: "spouse",
          },
          {
            header: "Đương đơn độc thân (tối đa 136 điểm)",
            key: "single",
          },
        ],
        rows: [
          { clb: "< CLB 4", spouse: "0", single: "0" },
          { clb: "CLB 5", spouse: "6", single: "6" },
          { clb: "CLB 6", spouse: "8", single: "9" },
          { clb: "CLB 7", spouse: "16", single: "17" },
          { clb: "CLB 8", spouse: "22", single: "23" },
          { clb: "CLB 9", spouse: "29", single: "31" },
          { clb: "CLB 10 trở lên", spouse: "32", single: "34" },
        ],
      },
      {
        title: "D. Kinh nghiệm làm việc tại Canada",
        description:
          "Điểm tối đa 80, số năm kinh nghiệm làm việc tại Canada sẽ quyết định số điểm.",
        columns: [
          { header: "Số năm kinh nghiệm", key: "experience" },
          {
            header: "Đương đơn có vợ/chồng (tối đa 70 điểm)",
            key: "spouse",
          },
          {
            header: "Đương đơn độc thân (tối đa 80 điểm)",
            key: "single",
          },
        ],
        rows: [
          { experience: "< 1 năm", spouse: "0", single: "0" },
          { experience: "1 năm", spouse: "35", single: "40" },
          { experience: "2 năm", spouse: "46", single: "53" },
          { experience: "3 năm", spouse: "56", single: "64" },
          { experience: "4 năm", spouse: "63", single: "72" },
          { experience: "5 năm trở lên", spouse: "70", single: "80" },
        ],
      },
    ],
  },
  {
    section:
      "Nhóm 2: Các yếu tố Kết hợp/Chuyển đổi (Skill Transferability Factors)",
    subsections: [
      {
        title: "A. Trình độ học vấn và Kinh nghiệm Làm việc tại Canada",
        description:
          "Kết hợp trình độ học vấn và kinh nghiệm làm việc tại Canada để đạt điểm tối đa 50.",
        columns: [
          { header: "Bằng cấp/chứng chỉ", key: "qualification" },
          { header: "Điểm", key: "points" },
        ],
        rows: [
          { qualification: "Bằng trung học", points: "2" },
          { qualification: "Chứng chỉ post-secondary (1 năm)", points: "6" },
          { qualification: "Chứng chỉ post-secondary (2 năm)", points: "7" },
          { qualification: "Bằng cử nhân (3 năm)", points: "8" },
          { qualification: "2 chứng chỉ post-secondary", points: "9" },
          { qualification: "Thạc sĩ", points: "10" },
          { qualification: "Tiến sĩ", points: "10" },
        ],
      },
    ],
  },
];

export function CRSCalculation() {
  return (
    <div className="flex flex-col gap-8">
      {CRSConfig.map((section, sectionIndex) => (
        <div key={sectionIndex} className="flex flex-col gap-6">
          <h1 className="text-2xl font-bold">{section.section}</h1>
          {section.subsections.map((sub, subIndex) => (
            <div key={subIndex} className="flex flex-col gap-4">
              <h2 className="text-xl font-semibold">{sub.title}</h2>
              <p className="text-gray-600">{sub.description}</p>
              <Table>
                <TableHeader>
                  <TableRow>
                    {sub.columns.map((col, colIndex) => (
                      <TableHead key={colIndex}>{col.header}</TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sub.rows.map((row, rowIndex) => (
                    <TableRow key={rowIndex}>
                      {sub.columns.map((col, colIndex) => (
                        <TableCell key={colIndex}>{row[col.key]}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

const ourService = [
  {
    id: "settle-in-canada",
    icon: <MapPin className="h-8 w-8 text-white" />,
    title: "Quốc gia chào đón người nhập cư trên khắp thế giới",
    description:
      "Bạn có biết bao nhiêu người nhập cư Canada mỗi năm? Canada đã luôn là 1 quốc gia nổi tiếng trong việc chào đón người nhập cư, tị nạn khi thường xuyên chào đón hơn 200.000 người nhập cư mỗi năm kể từ năm 1988 và con số vẫn tiếp tục tăng lên từ đó. Vào năm 2024, quốc gia này dự kiến tiếp nhận khoảng 500.000 người nhập cư mới. Trong số đó, nhiều người có xuất thân từ các quốc gia đang phát triển thuộc châu Á như Việt Nam, etc...",
    // ctaText: "Tìm hiểu thêm",
    ctaLink: "/immigration/dinh-cu-canada",
  },
  {
    id: "work-in-canada",
    title: "Chất lượng giáo dục hàng đầu thế giới",
    icon: <Briefcase className="h-8 w-8 text-white" />,
    description:
      "Hệ thống giáo dục của Canada từ bấy lâu nay luôn nằm trong danh sách các hệ thống giáo dục hàng đầu trên thế giới, không chỉ về chất lượng mà còn về sự đa dạng và cơ hội tiếp cận giáo dục. Được biết đến với nhiều trường đại học top đầu thế giới, vệc học tập tại đây sẽ mang lại trải nghiệm tuyệt vời về giao lưu văn hóa đa quốc gia và hứa hẹn một tương lai rộng mở trong việc ở lại định cư",
    // ctaText: "Khám phá cơ hội",
    ctaLink: "/immigration/express-entry/federal-skilled-worker",
  },
  {
    id: "study-in-canada",
    icon: <GraduationCap className="h-8 w-8 text-white" />,
    title: "Canada top 1 thế giới về chất lượng cuộc sống",
    description:
      "Trong nhiều năm, Canada liên tục giữ vị trí dẫn dầu trong báo cáo hàng năm của US News và World’s Report về các quốc gia có chất lượng cuộc sống cao nhất thế giới. Danh mục này được đánh giá dựa trên một số thuộc tính bao gồm khả năng chi trả, thị trường việc làm mạnh mẽ, kinh tế ổn định, bình đẳng thu nhập, hệ thống giáo dục và y tế công phát triển tốt. Đặc biệt, Canada là 1 trong số ít các quốc gia có sự ổn định về chính trị và ít có giao tranh",
    // ctaText: "Tìm hiểu chương trình",
    ctaLink: "/immigration/du-hoc-dinh-cu",
  },
  {
    id: "family-sponsorship",
    icon: <Heart className="h-8 w-8 text-white" />,
    title: "Môi trường trong lành, xinh đẹp",
    description:
      "Canada là một trong những quốc gia có diện tích rừng phong phú và các vùng đất hoang dã rộng lớn trên thế giới. Với hệ thực vật đa dạng và các hệ sinh thái tự nhiên độc đáo, Canada được coi là một trong những nơi có môi trường tự nhiên tuyệt đẹp.",
    // ctaText: "Xem thêm chi tiết",
    ctaLink: "/immigration/family-sponsorship",
  },
];

function getGradientClass(index) {
  const gradients = [
    "bg-gradient-to-br from-blue-500 to-purple-600",
    "bg-gradient-to-br from-green-500 to-teal-600",
    "bg-gradient-to-br from-yellow-500 to-orange-600",
    "bg-gradient-to-br from-pink-500 to-red-600",
  ];
  return gradients[index % gradients.length];
}
