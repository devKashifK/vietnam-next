"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./moving-cards";
import Glass from "@/lib/helpers";
import Container from "./container";
import Title from "./Title";

export function InfiniteMovingCardsDemo() {
  return (
    <Container effect="slide-left">
      <Title
        subtitle="Phản hồi từ khách hàng"
        title="Câu Chuyện Thực Tế"
        cta="All Stories"
        to="/customer-testimonials"
      />
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </Container>
  );
}

const testimonials = [
  {
    quote:
      "Green Tech Resources rất chuyên nghiệp và hữu ích. Họ đã cung cấp dịch vụ tư vấn di trú tuyệt vời cần thiết cho quá trình xử lý PR Canada của chúng tôi. Cảm ơn rất nhiều Manoj và đội ngũ của bạn vì sự hỗ trợ và tư vấn tuyệt vời.",
    name: "Aditi Joshi",
    title: "phản hồi đăng trên trang Google của chúng tôi bởi khách hàng",
    image: "/customer/aditi.png",
  },
  {
    quote:
      "Làm việc với GTR Resources là quyết định tốt nhất mà tôi có thể đưa ra. Họ đã giúp tôi trong toàn bộ quá trình cho đến khi PR của tôi được phê duyệt cách đây vài ngày, tôi và gia đình tôi đều rất biết ơn họ. Tôi biết rằng toàn bộ quá trình này có thể đáng sợ nhưng họ là lựa chọn tốt nhất.",
    name: "Viky Díaz",
    title: "phản hồi đăng trên trang Google của chúng tôi bởi khách hàng",
    image: "/customer/viky.png",
  },
  {
    quote:
      "Đây là một hành trình tuyệt vời, một người bạn đã giới thiệu tôi đến ông Manoj Goswami, một người rất thân thiện và kiên nhẫn. Ông đã yêu cầu tôi gửi thông tin, tôi chưa làm bài kiểm tra IELTS và ông đã khuyên tôi nên làm bài kiểm tra. Ông rất kiên nhẫn, tất cả đều mất thời gian nhưng ông không từ bỏ tôi. Sau đó, ông giới thiệu tôi đến cô Zinal, tôi yêu cách họ minh bạch và có đạo đức kinh doanh tốt.",
    name: "Freeman Chinonzwa",
    title: "phản hồi đăng trên trang Google của chúng tôi bởi khách hàng",
    image: "/customer/freeman.jpg",
  },
  {
    quote:
      "Tôi là Manaswi Chakma từ Bangladesh. Tôi rất vui khi làm việc với ông Manoj Goswami về cách ông tư vấn để tôi đến Canada. Đặc biệt là cô Zinal, người rất chuyên nghiệp, đáng tin cậy và thông minh ở từng bước. Cuối cùng, tôi sẽ gợi ý làm việc với GTR Immigration, họ thực sự đang cố gắng giúp đỡ để đến Canada.",
    name: "Manaswi Chakma",
    title: "phản hồi đăng trên trang Google của chúng tôi bởi khách hàng",
    image: "/customer/manmasi.png",
  },
  {
    quote:
      "Xin cảm ơn ông Manoj Goswami của GTR Immigration đã giúp tôi được phê duyệt visa du lịch trong thời gian chưa đầy một tháng. Ông và đội ngũ của ông rất hiệu quả, nhanh chóng và chuyên nghiệp. Họ biết cách hoàn thành công việc. Họ đã hỗ trợ tôi trong tất cả các tài liệu và tôi chỉ cần ký vào các tài liệu.",
    name: "Sumita Kolte",
    title: "phản hồi đăng trên trang Google của chúng tôi bởi khách hàng",
    image: "/customer/sumita.png",
  },
];
