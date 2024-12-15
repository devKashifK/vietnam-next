// cache.ts

import { fetchMediaByExactTitle } from "@/graphql/lib/query";
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
    image: "about",
  },
  ["tin-tuc"]: {
    text: "Tin tức",
    image: "news",
  },
  ["việc-làm"]: {
    text: "Việc làm",
    image: "hero-2",
  },
  ["bảo-lãnh"]: {
    text: "Bảo lãnh",
    image: "about",
  },

  ["doanh-nghiep"]: {
    text: "Doanh Nghiệp",
    image: "service",
  },

  ["tư-vấn"]: {
    text: "Tư vấn",
    image: "service",
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
    image: "about",
  },
  ["doi-tac-icanpr"]: {
    text: "Đối tác iCanPR",
    image: "service",
  },
  ["lien-he"]: {
    text: "Liên hệ",
    image: "successcustomers",
  },
  "nhap-canh-nhanh": {
    text: "Nhập cảnh nhanh",
    image: "expressEntry",
  },

  "thuong-mai-co-tay-nghe-lien-bang": {
    text: "Thương mại tay nghề liên bangs Program",
    image: "federalSkill",
  },
  "cong-nhan-lanh-nghe-lien-bang": {
    text: "Công nhân lành nghề liên bang Program",
    image: "federalSkill",
  },
  "lop-hoc-trai-nghiem-canada": {
    text: "Lớp trải nghiệm Canada",
    image: "federalSkill",
  },
  "tinh-toan-diem-crs": {
    text: "Tính điểm CRS",
    image: "federalSkill",
  },
  "doanh-nghiep-c11-visa": {
    text: "Chương Trình Doanh nhân diện điều hành doanh nghiệp (C11 - Significant Benefit Program)",
    image: "federalSkill",
  },
  ["viec-lam-dinh-cu"]: {
    text: "Việc làm định cư",
    image: "federalSkill",
  },
  ["du-hoc-dinh-cu"]: {
    text: "Du học - định cư",
    image: "federalSkill",
  },
  ["doanh-nghiệp-C11-visa"]: {
    text: "Doanh nghiệp C11 Visa",
    image: "federalSkill",
  },
  "start-up-visa": {
    text: "Start Up Visa",
    image: "federalSkill",
  },
  ["bao-lanh-gia-dinh"]: {
    text: "Bảo lãnh gia đình",
    image: "federalSkill",
  },
  ["khach-hang-thanh-cong"]: {
    text: "Khách hàng thành công",
    image: "federalSkill",
  },

  "de-cu-tinh-bang-pnp": {
    text: "Provincial Nominee Programs",
    image: "immigrationProvincial",
  },
  "alberta-nhap-cu-aaip": {
    text: "Chương trình Di Trú Lợi Thế của tỉnh bang Alberta (AAIP)",
    image: "alberta",
  },

  "british-columbia-bcpnp": {
    text: "Chương trình đề cử tỉnh bang British Columbia (BC PNP)",
    image: "br-a",
  },
  "ontario-oinp": {
    text: "Chương trình đề cử tỉnh bang Ontario (OINP)",
    image: "ontario-a",
  },
  "manitoba-mpnp": {
    text: "Chương trình Đề Cử Tỉnh Bang Manitoba (MPNP)",
    image: "manitoba-a",
  },
  "new-brunswick-nbpnp": {
    text: "Chương trình đề cử tỉnh bang New Brunswick (NB PNP)",
    image: "newbrunswick-a",
  },

  "nova-scotia-nsnp": {
    text: "CHƯƠNG TRÌNH ĐỀ CỬ TỈNH BANG NOVA SCOTIA",
    image: "nova-a",
  },
  "prince-edward-island-peipnp": {
    text: "Chương trình đề cử tỉnh bang Prince Edward Island (PEI PNP)",
    image: "edward-b",
  },
  "saskatchewan-sinp": {
    text: "Chương trình đề cử tỉnh bang Saskatchewan (SINP)",
    image: "saskatchewan-a",
  },
  "cuoc-song-canada": {
    text: "Cuộc sống Canada",
    image: "canada",
  },

  quebec: {
    text: "Chương Trình Đề Cử Tỉnh Bang Quebec",
    image: "quebec-a",
  },
  // path: "các-tỉnh-bang-canada",

  "yukon-ynp": {
    text: "Chương trình đề cử tỉnh bang Yukon (YPNP)",
    image: "yukon-a",
  },

  "các-tỉnh-bang-canada": {
    text: "Các Tỉnh Bang Canada",
    image: "canada",
  },
  "tinh-alberta": {
    text: "Tinh Alberta",
    image: "alberta-b",
  },
  brcolumbiaP: {
    text: "British Colombia (BC PNP)",
    image: "br-b",
  },
  manitobaP: {
    text: "Manitoba Tinh",
    image: "manitoba-b",
  },
  "new-brunswickP": {
    text: "New Brunswick Tinh",
    image: "newbrunswick-b",
  },
  "newfoundland-labradorP": {
    text: "Newfoundland and Labrador",
    image: "newfoundland-a",
  },
  "northwest-territoriesP": {
    text: "Northwest Territories Tinh",
    image: "northwest-a",
  },
  "nova-scotiaP": {
    text: "Nova Scotia Tinh",
    image: "nova-b",
  },
  nunavutP: {
    text: "Nunavut Tinh",
    image: "nunavut-a",
  },
  ontarioP: {
    text: "Ontario Tinh",
    image: "ontario-b",
  },
  "prince-edwardP": {
    text: "Prince Edward Island Tinh",
    image: "edward-a",
  },
  saskatchewanP: {
    text: "Saskatchewan Tinh",
    image: "saskatchewan-b",
  },
  yukonP: {
    text: "Yukon Tinh",
    image: " yukon-b",
  },
  quebecP: {
    text: "Quebec Tinh",
    image: "quebec-b",
  },
  ["moi-truong-canada"]: {
    text: "Môi trường Canada",
    image: "about",
  },
  ["van-hoa-ton-gaio"]: {
    text: "Văn hóa & tôn giáo",
    image: "canada",
  },
  ["giao-duc-canada"]: {
    text: "Giáo dục Canada",
    image: "alberta-c",
  },
  ["y-te"]: {
    text: "Y Tế",
    image: "canada",
  },
  ["ty-gia-do-canada"]: {
    text: "Tỷ giá đô Canada",
    image: "about",
  },
  ["chinh-sach-thue"]: {
    text: "Chính sách thuế",
    image: "saskatchewan-a",
  },
  ["cau-hoi-thuong-gap"]: {
    text: "Câu hỏi thường gặp",
    image: "about",
  },
  ["trang-web-huu-ich"]: {
    text: "Trang web hữu ích",
    image: "about",
  },
  ["thuat-ngu-trong-di-tru"]: {
    image: "about",
    text: "Thuật ngữ trong di trú",
  },
  ["CLB-la-gi"]: {
    text: "CLB là gì? Cách quy đổi điểm đương đương?",
    image: "canada",
  },
  ["lam-viec-cho-icanpr"]: {
    text: "Làm việc cho iCanPR",
    image: "job-bann",
  },
  ["tong-hợp-viec-lam-canada"]: {
    text: "Tổng hợp việc làm Canada",
    image: "about",
  },
  ["cong-nhan-trai-ga"]: {
    text: "Công nhân trại gà",
    image: "about",
  },
  ["dau-bep-mon-au"]: {
    text: "Đầu bếp Món Âu",
    image: "cook",
  },
  ["lmia-map"]: {
    text: "LMIA Map",
    image: "lmia",
  },
  ["cong-viec-nong"]: {
    text: "Cong Viec Nong",
    image: "work",
  },
  ["dinh-cu-canada"]: {
    text: "Định cư Canada",
    image: "immigration-cannada",
  },
  ["book-appointment"]: {
    text: "Book Appointment",
    image: "work",
  },
};
export const getCachedData = async (pathname) => {
  console.log(pathname, "checkPathanme");
  const sanitizedPath = pathname.replace(/^\/|\/$/g, ""); // Sanitize the path

  // Define default values for missing entries
  const defaultText = `Default text for ${sanitizedPath}`;
  const fallbackImage = "/fallback-image.jpg";
  console.log(pathname, cacheData[pathname], "sanitizedPath23");

  try {
    // Attempt to fetch the resolved image
    const resolvedImage = await getImage(cacheData[pathname].image);

    return {
      text: cacheData[pathname].text, // You can adjust how text is generated
      image: resolvedImage || fallbackImage, // Use resolved image or fallback
    };
  } catch (error) {
    console.error(`Error resolving data for: ${sanitizedPath}`, error);

    // Return fallback values in case of errors
    return {
      text: defaultText,
      image: fallbackImage,
    };
  }
};

const imageCache = {};

/**
 * Fetches the image URL for a given title and caches it.
 * @param {string} title - The title of the image.
 * @returns {Promise<string>} - The image URL or fallback.
 */
export async function getImage(title) {
  if (imageCache[title]) {
    return imageCache[title];
  }

  try {
    const image = await fetchMediaByExactTitle(title);
    if (image?.sourceUrl) {
      imageCache[title] = image.sourceUrl; // Cache the image
      return image.sourceUrl;
    }

    // Fallback for missing images
    const fallbackImage = "/fallback-image.jpg";
    imageCache[title] = fallbackImage; // Cache the fallback
    return fallbackImage;
  } catch (error) {
    return "/fallback-image.jpg"; // Return fallback on error
  }
}
