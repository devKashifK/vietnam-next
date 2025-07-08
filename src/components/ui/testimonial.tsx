"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./moving-cards";
import Glass from "@/lib/helpers";
import Container from "./container";
import Title from "./Title";
import { Icon } from "@iconify/react/dist/iconify.js";

export function InfiniteMovingCardsDemo() {
  return (
    <Container effect="slide-left" className="py-20">
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

// List of images for expanded cards
const expandedImages = [
  "/immigration-cannada.jpg",
  "/family.jpg",
  "/hero-2.jpg",
  "/business.jpg",
  "/study.jpg",
  "/immigrate.jpg",
  "/saskatchewan.jpg",
  "/novaScotia.jpg",
  "/ontario.png",
];

function getImageForIndex(idx: number) {
  return expandedImages[idx % expandedImages.length];
}

export function TestimonialsSection() {
  // Carousel state
  const [featuredIdx, setFeaturedIdx] = useState(0);
  const visible = 3;
  // Get indices for the current view
  const getIndices = () => {
    const idxs = [featuredIdx];
    for (let i = 1; idxs.length < visible; i++) {
      idxs.push((featuredIdx + i) % testimonials.length);
    }
    return idxs;
  };
  const indices = getIndices();

  return (
    <section className="w-full py-16 px-4 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#6B3F1D] leading-tight mb-2">
              Hành trình đáng tự hào<br />
              Kiến tạo sự thành công
            </h2>
          </div>
          {/* Navigation arrows at top right */}
          <div className="flex gap-2 ml-4">
            <button
              className={`w-10 h-10 rounded-full flex items-center justify-center bg-[#F3EDE7] text-[#6B3F1D] shadow transition hover:bg-[#e5dacb] mr-2 ${featuredIdx === 0 && 'opacity-40 pointer-events-none'}`}
              onClick={() => setFeaturedIdx((featuredIdx - 1 + testimonials.length) % testimonials.length)}
              aria-label="Previous"
            >
              <Icon icon="mdi:chevron-left" className="text-lg" />
            </button>
            <button
              className={`w-10 h-10 rounded-full flex items-center justify-center bg-[#F3EDE7] text-[#6B3F1D] shadow transition hover:bg-[#e5dacb] ${testimonials.length <= 3 && 'opacity-40 pointer-events-none'}`}
              onClick={() => setFeaturedIdx((featuredIdx + 1) % testimonials.length)}
              aria-label="Next"
            >
              <Icon icon="mdi:chevron-right" className="text-lg" />
            </button>
          </div>
        </div>
        {/* Main testimonials row */}
        <div className="flex flex-col lg:flex-row gap-8 w-full">
          {/* Featured (large) testimonial */}
          <div className="flex-1 bg-white rounded-3xl shadow-lg flex flex-col md:flex-row overflow-hidden min-h-[340px] transition-all duration-500">
            {/* Left: Quote and author */}
            <div className="flex-1 flex flex-col justify-between p-8">
              <div>
                <Icon icon="mdi:format-quote-open" className="text-[64px] text-[#EDE7DE] mb-2" />
                <p className="text-lg md:text-xl text-[#6B3F1D] font-medium mb-6 leading-relaxed line-clamp-6">
                  {testimonials[indices[0]]?.quote}
                </p>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <img src={testimonials[indices[0]]?.image} alt={testimonials[indices[0]]?.name} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow" />
                <div>
                  <div className="font-bold text-lg text-black">{testimonials[indices[0]]?.name}</div>
                  <div className="text-sm text-gray-400">{testimonials[indices[0]]?.title}</div>
                </div>
              </div>
            </div>
            {/* Right: Large image (random from public) */}
            <div className="flex-1 min-w-[200px] bg-gray-100 relative">
              <img src={getImageForIndex(indices[0])} alt="Testimonial Visual" className="w-full h-full object-cover rounded-none md:rounded-r-3xl" />
            </div>
          </div>
          {/* Two smaller testimonial cards */}
          <div className="flex flex-1 flex-col gap-8">
            {[1, 2].map((offset) => {
              const idx = indices[offset];
              return idx !== undefined ? (
                <div key={idx} className="relative rounded-3xl shadow-lg overflow-hidden min-h-[180px] flex-1 flex flex-col justify-end transition-all duration-500">
                  <img src={getImageForIndex(idx)} alt={testimonials[idx].name} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="relative z-10 flex items-center gap-3 p-4">
                    <img src={testimonials[idx].image} alt={testimonials[idx].name} className="w-10 h-10 rounded-full object-cover border-2 border-white shadow" />
                    <div>
                      <div className="font-bold text-white text-base">{testimonials[idx].name}</div>
                      <div className="text-xs text-white/80">{testimonials[idx].title}</div>
                    </div>
                    {/* Expand button */}
                    <button
                      className="ml-auto bg-[#F3EDE7] text-[#6B3F1D] rounded-full w-8 h-8 flex items-center justify-center shadow hover:bg-[#e5dacb] transition"
                      onClick={() => setFeaturedIdx(idx)}
                      aria-label="Expand testimonial"
                    >
                      <Icon icon="mdi:arrow-up-bold-box-outline" className="text-2xl" />
                    </button>
                  </div>
                </div>
              ) : null;
            })}
          </div>
        </div>
      </div>
    </section>
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
    name: "Freeman",
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
