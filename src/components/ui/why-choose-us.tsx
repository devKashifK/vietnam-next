import React from "react";
import Container from "./container";
import Glass from "@/lib/helpers";
// import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
// import { Icon } from "@radix-ui/react-select";
import TitleWithDoubleBorder from "./title-with-double-border";
import TitleWithBottomBorder from "./title-with-bottom-border";

export default function WhyChooseUs() {
  return (
    <Container effect="slide-left">
      <Glass className="flex flex-col lg:flex-row gap-10 md:gap-2 h-max px-10 py-10">
        <div className="w-full md:flex-1 flex flex-col gap-2">
          <TitleWithDoubleBorder>Tại sao chọn chúng tôi</TitleWithDoubleBorder>
          <div className="flex flex-col justify-start gap-6">
            <TitleWithBottomBorder titleClass="md:text-xl text-left">
              Chúng tôi luôn sẵn sàng biến giấc mơ Canada của bạn thành hiện
              thực.
            </TitleWithBottomBorder>
            <p className="text-sm text-black/60 text-left">
              Về iCanPR Worldwide Canada, chúng tôi chuyên hỗ trợ bạn trên hành
              trình định cư.
            </p>
            <p className="text-sm text-black/60 text-left">
              Đội ngũ chuyên gia giàu kinh nghiệm của chúng tôi cam kết mang lại
              thành công cho bạn, cung cấp sự hướng dẫn cá nhân hóa, kiến thức
              cập nhật, và sự hỗ trợ tận tâm suốt quá trình nhập cư của bạn. Với
              hồ sơ thành công đã được chứng minh, chúng tôi đảm bảo một quá
              trình chuyển tiếp suôn sẻ, không căng thẳng, và thành công tới
              cuộc sống mới của bạn tại Canada.
            </p>
          </div>
        </div>
        <div className="w-full  md:flex-1 flex flex-col gap-3 justify-center items-center h-max">
          <ul className="flex gap-6 flex-wrap justify-center">
            <li className="text-center flex gap-1 justify-center bg-background/40 font-primary tracking-widest px-8 w-full md:w-[200px]  flex-col items-center text-white/90 py-6">
              <Icon icon={"iconamoon:profile-light"} className="text-4xl" />
              Đội ngũ tư vấn chuyên nghiệp
            </li>
            <li className="text-center flex gap-1 justify-center bg-background/80 font-primary tracking-widest px-8 py-6 w-full md:w-[200px]  flex-col items-center text-white/90">
              <Icon icon={"hugeicons:absolute"} className="text-4xl" />
              Giải pháp cá nhân hóa
            </li>
            <li className="text-center flex gap-1 justify-center bg-background/80  font-primary tracking-widest px-8 py-6 w-full md:w-[200px]  flex-col items-center text-white/90">
              <Icon icon={"solar:hand-money-linear"} className="text-4xl" />
              Chi phí hợp lý
            </li>
            <li className="text-center flex gap-1 justify-center bg-background/40 font-primary tracking-widest px-8 py-6 w-full md:w-[200px]  flex-col items-center text-white/90">
              <Icon icon={"ph:chalkboard-teacher-bold"} className="text-4xl" />
              Hơn 10 năm kinh nghiệm
            </li>
          </ul>
        </div>
      </Glass>
    </Container>
  );
}
