import Container from "@/components/ui/container";
import React from "react";

export default function TaxPolicy() {
  return (
    <Container className="flex justify-center items-center gap-10 py-10">
      <p className="text-left">
        Cơ quan Thuế vụ Canada (CRA) chịu trách nhiệm thu thuế, quản lý các
        chương trình và chính sách thuế, cũng như thực thi pháp luật thuế. CRA
        cung cấp các dịch vụ trực tuyến giúp người dân và doanh nghiệp nộp thuế
        và yêu cầu hoàn thuế một cách thuận tiện
      </p>
      <p className="text-left">
        Thuế hàng hóa và dịch vụ (GST) là một loại thuế giá trị gia tăng (VAT)
        áp dụng trên hầu hết các hàng hóa và dịch vụ được tiêu thụ tại Canada.
        Mức GST liên bang hiện tại là 5%.
      </p>
      <p className="text-left">
        Một số tỉnh bang đã kết hợp GST liên bang với thuế bán hàng tỉnh bang
        (PST) thành một loại thuế duy nhất gọi là HST. Mức HST khác nhau giữa
        các tỉnh, ví dụ như Ontario có mức HST là 13%.
      </p>
      <p className="text-left">
        Thuế Bán hàng Tỉnh bang (PST – Provincial Sales Tax) là một loại thuế
        tiêu thụ được áp dụng tại một số tỉnh bang của Canada. Đây là thuế do
        chính quyền tỉnh bang thu.
      </p>
      <img src="/thue.png" className="w-96" />
    </Container>
  );
}
