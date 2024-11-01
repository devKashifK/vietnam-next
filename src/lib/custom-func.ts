// cache.ts

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
  "express-entry": {
    text: "Express Entry",
    image: "/expressEntry.png",
  },

  "federal-skilled-trade": {
    text: "Federal Skilled Trades Program",
    image: "/federalSkill.png",
  },
  "federal-skilled-worker": {
    text: "Federal Skilled Worker Program",
    image: "/federalSkill.png",
  },
  "canadian-experience-class": {
    text: "Canadian Experience Class",
    image: "/federalSkill.png",
  },
  "crs-score-calculation": {
    text: "CRS Score Calculation",
    image: "/federalSkill.png",
  },
  ["viec-lam-dinh-cu"]: {
    text: "Việc làm định cư",
    image: "/federalSkill.png",
  },
  ["du-hoc-dinh-cu"]: {
    text: "Du học - định cư",
    image: "/federalSkill.png",
  },
  ["doanh-nghiệp-C11-visa"]: {
    text: "Doanh nghiệp C11 Visa",
    image: "/federalSkill.png",
  },
  "start-up-visa": {
    text: "Start Up Visa",
    image: "/federalSkill.png",
  },
  ["bảo-lãnh-gia-đình"]: {
    text: "Bảo lãnh gia đình",
    image: "/federalSkill.png",
  },
  ["khach-hang-thanh-cong"]: {
    text: "Khách hàng thành công",
    image: "/federalSkill.png",
  },

  "de-cu-tinh-bang-pnp": {
    text: "Provincial Nominee Programs",
    image: "/immigrationProvincial.png",
  },
  "alberta-immigration-aaip": {
    text: "Alberta Immigration (AAIP)",
    image: "/alberta.png",
  },

  "british-columbia-bcpnp": {
    text: "British Columbia (BC PNP)",
    image: "/british.jpg",
  },
  "ontario-oinp": {
    text: "Ontario (OINP)",
    image: "/ontario.png",
  },
  "manitoba-mpnp": {
    text: "Manitoba (MPNP)",
    image: "/manitoba.png",
  },
  "new-brunswick-nbpnp": {
    text: "New Brunswick (NB PNP)",
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
    text: "Nova Scotia (NSNP)",
    image: "/novaScotia.jpg",
  },
  "prince-edward-island-peipnp": {
    text: "Prince Edward Island (PEI PNP)",
    image: "/novaScotia.jpg",
  },
  "saskatchewan-sinp": {
    text: "Saskatchewan (SINP)",
    image: "/saskatchewan.jpg",
  },

  quebec: {
    text: "Quebec (PNP)",
    image: "/northwestterritories.png",
  },
  // path: "các-tỉnh-bang-canada",

  "yukon-ynp": {
    text: "Yukon (YNP)",
    image: "/yukon.jpg",
  },
  albertaP: {
    text: "Alberta Province",
    image: "/alberta.png",
  },
  brcolumbiaP: {
    text: "British Colombia (BC PNP)",
    image: "/british.jpg",
  },
  manitobaP: {
    text: "Manitoba Province",
    image: "/manitoba.png",
  },
  "new-brunswickP": {
    text: "New Brunswick Province",
    image: "/newbrunswick.png",
  },
  "newfoundland-labradorP": {
    text: "Newfoundland and Labrador",
    image: "/newbrunswick.png",
  },
  "northwest-territoriesP": {
    text: "Northwest Territories Province",
    image: "/northwestterritories.png",
  },
  "nova-scotiaP": {
    text: "Nova Scotia Province",
    image: "/novaScotia.jpg",
  },
  nunavutP: {
    text: "Nunavut Province",
    image: "/novaScotia.jpg",
  },
  ontarioP: {
    text: "Ontario Province",
    image: "/ontario.png",
  },
  "prince-edwardP": {
    text: "Prince Edward Island Province",
    image: "/novaScotia.jpg",
  },
  saskatchewanP: {
    text: "Saskatchewan Province",
    image: "/saskatchewan.jpg",
  },
  yukonP: {
    text: "Yukon Province",
    image: "/yukon.jpg",
  },
  quebecP: {
    text: "Quebec Province",
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
    image: "/about.png",
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
    image: "/about.png",
  },
  ["lmia-map"]: {
    text: "LMIA Map",
    image: "/lmia.jpg",
  },
  ["hot-job"]: {
    text: "Hot JOB",
    image: "/work.jpg",
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
