// cache.ts

import { text } from "stream/consumers";

// Define the cache object
// const cacheData = {
//     "about": {
//       text: "Tin tức",
//       image: "/news.jpg",
//     },
//     "việc-làm": {
//       text: "Việc làm",
//       image: "/hero-2.jpg",
//     },
//     "bảo-lãnh": {
//       text: "Bảo lãnh",
//       image: "/about.png",
//     },
//   };

const cacheData = {
  "/": "We are a team of professionals who are passionate about helping you achieve",
  about: {
    text: "GreenTech Resources Worldwide <br /> Canada",
    image: "/about.png",
  },
  ["tin-tuc"]: {
    text: "Tin tức",
    image: "/news.jpg",
  },
  ["việc-làm"]: {
    text: "Việc làm",
    image: "/hero-2.jpg",
  },
  ["bảo-lãnh"]: {
    text: "Bảo lãnh",
    image: "/about.png",
  },

  ["doanh-nghiep"]: {
    text: "Doanh Nghiệp",
    image: "/service.jpg",
  },

  ["tư-vấn"]: {
    text: "Tư vấn",
    image: "/service.jpg",
  },
  ["dịch-vụ"]: {
    text: "Dịch vụ",
    image: "/service.jpg",
  },
  ["học-tập"]: {
    text: "Học tập",
    image: "/study.jpg",
  },
  "du-học": {
    text: "Du Học",
    image: "/expressEntry.png",
  },
  ["lao-động"]: {
    text: "Lao động",
    image: "/canada.jpg",
  },
  ["ve-icanpr"]: {
    text: "Về iCanPR",
    image: "/about.png",
  },
  ["doi-tac-icanpr"]: {
    text: "Đối tác iCanPR",
    image: "/service.jpg",
  },
  ["lien-he"]: {
    text: "Liên hệ",
    image: "/successcustomers.png",
  },

  // "our-success-customers": {
  //   text: "Our Success Stories",
  //   image: "/successcustomers.png",
  // },

  // "book-appointment": {
  //   text: "Book an Appointment",
  //   image: "/service.jpg",
  // },
  // "why-choose-us": {
  //   text: "Why Choose Us",
  //   image: "/about.png",
  // },
  // "our-service": {
  //   text: "Our <br /> Services",
  //   image: "/service.jpg",
  // },
  // "certificate-membership": {
  //   text: "Certification and Membership",
  //   image: "/about.png",
  // },
  // "customer-testimonials": {
  //   text: "Please Rate Our Quality",
  //   image: "/testimonial.jpg",
  // },
  "nhap-canh-nhanh": {
    text: "Nhập cảnh nhanh",
    image: "/expressEntry.png",
  },

  "thuong-mai-co-tay-nghe-lien-bang": {
    text: "Thương mại tay nghề liên bangs Program",
    image: "/federalSkill.jpg",
  },
  "cong-nhan-lanh-nghe-lien-bang": {
    text: "Công nhân lành nghề liên bang Program",
    image: "/federalSkill.jpg",
  },
  "lop-hoc-trai-nghiem-canada": {
    text: "Lớp trải nghiệm Canada",
    image: "/federalSkill.jpg",
  },
  "tinh-toan-diem-crs": {
    text: "Tính điểm CRS",
    image: "/federalSkill.jpg",
  },
  "doanh-nghiep-c11-visa": {
    text: "Chương Trình Doanh nhân diện điều hành doanh nghiệp (C11 - Significant Benefit Program)",
    image: "/federalSkill.jpg",
  },
  ["viec-lam-dinh-cu"]: {
    text: "Việc làm định cư",
    image: "/federalSkill.jpg",
  },
  ["du-hoc-dinh-cu"]: {
    text: "Du học - định cư",
    image: "/federalSkill.jpg",
  },
  ["doanh-nghiệp-C11-visa"]: {
    text: "Doanh nghiệp C11 Visa",
    image: "/federalSkill.jpg",
  },
  "start-up-visa": {
    text: "Start Up Visa",
    image: "/federalSkill.jpg",
  },
  ["bao-lanh-gia-dinh"]: {
    text: "Bảo lãnh gia đình",
    image: "/federalSkill.jpg",
  },
  ["khach-hang-thanh-cong"]: {
    text: "Khách hàng thành công",
    image: "/federalSkill.jpg",
  },

  "de-cu-tinh-bang-pnp": {
    text: "Provincial Nominee Programs",
    image: "/immigrationProvincial.png",
  },
  "alberta-nhap-cu-aaip": {
    text: "Chương trình Di Trú Lợi Thế của tỉnh bang Alberta (AAIP)",
    image: "/alberta.png",
  },

  "british-columbia-bcpnp": {
    text: "Chương trình đề cử tỉnh bang British Columbia (BC PNP)",
    image: "/british.jpg",
  },
  "ontario-oinp": {
    text: "Chương trình đề cử tỉnh bang Ontario (OINP)",
    image: "/ontario.png",
  },
  "manitoba-mpnp": {
    text: "Chương trình Đề Cử Tỉnh Bang Manitoba (MPNP)",
    image: "/manitoba.png",
  },
  "new-brunswick-nbpnp": {
    text: "Chương trình đề cử tỉnh bang New Brunswick (NB PNP)",
    image: "/newbrunswick.png",
  },
  // "newfoundland-and-labrador": {
  //   text: "Newfoundland and Labrador",
  //   image: "/newbrunswick.png",
  // },

  // "northwest-territories": {
  //   text: "Northwest Territories",
  //   image: "/northwestterritories.png",
  // },
  "nova-scotia-nsnp": {
    text: "CHƯƠNG TRÌNH ĐỀ CỬ TỈNH BANG NOVA SCOTIA",
    image: "/novaScotia.jpg",
  },
  "prince-edward-island-peipnp": {
    text: "Chương trình đề cử tỉnh bang Prince Edward Island (PEI PNP)",
    image: "/novaScotia.jpg",
  },
  "saskatchewan-sinp": {
    text: "Chương trình đề cử tỉnh bang Saskatchewan (SINP)",
    image: "/saskatchewan.jpg",
  },
  "cuoc-song-canada": {
    text: "Cuộc sống Canada",
    image: "/canada.jpg",
  },

  quebec: {
    text: "Chương Trình Đề Cử Tỉnh Bang Quebec",
    image: "/northwestterritories.png",
  },
  // path: "các-tỉnh-bang-canada",

  "yukon-ynp": {
    text: "Chương trình đề cử tỉnh bang Yukon (YPNP)",
    image: "/yukon.jpg",
  },

  "các-tỉnh-bang-canada": {
    text: "Các Tỉnh Bang Canada",
    image: "/canada.jpg",
  },
  "tinh-alberta": {
    text: "Tinh Alberta",
    image: "/alberta.png",
  },
  brcolumbiaP: {
    text: "British Colombia (BC PNP)",
    image: "/british.jpg",
  },
  manitobaP: {
    text: "Manitoba Tinh",
    image: "/manitoba.png",
  },
  "new-brunswickP": {
    text: "New Brunswick Tinh",
    image: "/newbrunswick.png",
  },
  "newfoundland-labradorP": {
    text: "Newfoundland and Labrador",
    image: "/newbrunswick.png",
  },
  "northwest-territoriesP": {
    text: "Northwest Territories Tinh",
    image: "/northwestterritories.png",
  },
  "nova-scotiaP": {
    text: "Nova Scotia Tinh",
    image: "/novaScotia.jpg",
  },
  nunavutP: {
    text: "Nunavut Tinh",
    image: "/novaScotia.jpg",
  },
  ontarioP: {
    text: "Ontario Tinh",
    image: "/ontario.png",
  },
  "prince-edwardP": {
    text: "Prince Edward Island Tinh",
    image: "/novaScotia.jpg",
  },
  saskatchewanP: {
    text: "Saskatchewan Tinh",
    image: "/saskatchewan.jpg",
  },
  yukonP: {
    text: "Yukon Tinh",
    image: "/yukon.jpg",
  },
  quebecP: {
    text: "Quebec Tinh",
    image: "/northwestterritories.png",
  },
  ["moi-truong-canada"]: {
    text: "Môi trường Canada",
    image: "/about.png",
  },
  ["van-hoa-ton-gaio"]: {
    text: "Văn hóa & tôn giáo",
    image: "/canada.jpg",
  },
  ["giao-duc-canada"]: {
    text: "Giáo dục Canada",
    image: "/alberta.png",
  },
  ["y-te"]: {
    text: "Y Tế",
    image: "/canada.jpg",
  },
  ["ty-gia-do-canada"]: {
    text: "Tỷ giá đô Canada",
    image: "/about.png",
  },
  ["chinh-sach-thue"]: {
    text: "Chính sách thuế",
    image: "/saskatchewan.jpg",
  },
  ["cau-hoi-thuong-gap"]: {
    text: "Câu hỏi thường gặp",
    image: "/about.png",
  },
  ["trang-web-huu-ich"]: {
    text: "Trang web hữu ích",
    image: "/about.png",
  },
  ["thuat-ngu-trong-di-tru"]: {
    image: "/about.png",
    text: "Thuật ngữ trong di trú",
  },
  ["CLB-la-gi"]: {
    text: "CLB là gì? Cách quy đổi điểm đương đương?",
    image: "/canada.jpg",
  },
  ["lam-viec-cho-icanpr"]: {
    text: "Làm việc cho iCanPR",
    image: "/job-bann.jpg",
  },
  ["tong-hợp-viec-lam-canada"]: {
    text: "Tổng hợp việc làm Canada",
    image: "/about.png",
  },
  ["cong-nhan-trai-ga"]: {
    text: "Công nhân trại gà",
    image: "/about.png",
  },
  ["dau-bep-mon-au"]: {
    text: "Đầu bếp Món Âu",
    image: "/cook.png",
  },
  ["lmia-map"]: {
    text: "LMIA Map",
    image: "/lmia.jpg",
  },
  ["cong-viec-nong"]: {
    text: "Cong Viec Nong",
    image: "/work.jpg",
  },
  ["dinh-cu-canada"]: {
    text: "Định cư Canada",
    image: "/immigration-cannada.jpg",
  },
  ["book-appointment"]: {
    text: "Book Appointment",
    image: "/book.webp",
  },
};
export const getCachedData = (pathname: string) => {
  const sanitizedPath = pathname.replace(/^\/|\/$/g, ""); // removes leading and trailing slashes
  console.log(sanitizedPath, "sanitizedPath"); // helpful for debugging

  if (cacheData[sanitizedPath]) {
    console.log(cacheData[sanitizedPath]);
    return cacheData[sanitizedPath];
  }

  return {
    text: "",
    image: "/news.jpg",
  };
};
