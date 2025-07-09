"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  Phone,
  Info,
  MapPin,
  Briefcase,
  Newspaper,
  Star,
  Home,
  Users,
  Mail,
  User,
  Building,
  Rocket,
  UserPlus,
  Map,
  Leaf,
  Heart,
  School,
  DollarSign,
  Scale,
  HelpCircle,
  Globe,
  BookOpen,
  ChefHat,
  CheckCircle,
  Plane,
  FileText,
  ChevronRight,
  ChevronDown,
} from "lucide-react";

export default function Navbar() {
  const [isFixed, setIsFixed] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredSubmenu, setHoveredSubmenu] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getIcon = (iconName: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      phone: <Phone className="w-3 h-3" />,
      info: <Info className="w-3 h-3" />,
      mapPin: <MapPin className="w-3 h-3" />,
      briefcase: <Briefcase className="w-3 h-3" />,
      newspaper: <Newspaper className="w-3 h-3" />,
      star: <Star className="w-3 h-3" />,
      home: <Home className="w-3 h-3" />,
      users: <Users className="w-3 h-3" />,
      mail: <Mail className="w-3 h-3" />,
      user: <User className="w-3 h-3" />,
      building: <Building className="w-3 h-3" />,
      rocket: <Rocket className="w-3 h-3" />,
      userPlus: <UserPlus className="w-3 h-3" />,
      map: <Map className="w-3 h-3" />,
      leaf: <Leaf className="w-3 h-3" />,
      heart: <Heart className="w-3 h-3" />,
      school: <School className="w-3 h-3" />,
      dollarSign: <DollarSign className="w-3 h-3" />,
      scale: <Scale className="w-3 h-3" />,
      helpCircle: <HelpCircle className="w-3 h-3" />,
      globe: <Globe className="w-3 h-3" />,
      bookOpen: <BookOpen className="w-3 h-3" />,
      chefHat: <ChefHat className="w-3 h-3" />,
      checkCircle: <CheckCircle className="w-3 h-3" />,
      plane: <Plane className="w-3 h-3" />,
      fileText: <FileText className="w-3 h-3" />,
    };
    return iconMap[iconName] || <FileText className="w-3 h-3" />;
  };

  return (
    <>
      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <MobileNavbar />
      </div>

      {/* Desktop Navigation */}
      <div
        className={cn(
          "hidden lg:flex flex-col w-full bg-white border-b shadow-sm transition-all duration-300",
          isFixed && "fixed top-0 z-50 shadow-lg"
        )}
      >
        {/* Top Bar */}
        <div className="w-full bg-highlight text-white py-2 px-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Link
                href="/lien-he"
                className="flex items-center gap-2 text-xs hover:text-blue-300 transition-colors"
              >
                {getIcon("phone")}
                <span>Liên hệ</span>
              </Link>
            </div>
            <div className="flex items-center gap-6">
              <Link
                href="/ve-icanpr"
                className="flex items-center gap-2 text-xs hover:text-blue-300 transition-colors"
              >
                {getIcon("info")}
                <span>VỀ CHÚNG TÔI</span>
              </Link>
              <Link
                href="/lmia-map"
                className="flex items-center gap-2 text-xs hover:text-blue-300 transition-colors"
              >
                {getIcon("mapPin")}
                <span>BẢN ĐỒ LMIA</span>
              </Link>
              <Link
                href="/cong-viec-nong"
                className="flex items-center gap-2 text-xs hover:text-blue-300 transition-colors"
              >
                {getIcon("briefcase")}
                <span>BẢN ĐỒ VIỆC LÀM</span>
              </Link>
              <Link
                href="/tin-tuc"
                className="flex items-center gap-2 text-xs hover:text-blue-300 transition-colors"
              >
                {getIcon("newspaper")}
                <span>TIN TỨC</span>
              </Link>
              <Link
                href="/immigration/khach-hang-thanh-cong"
                className="flex items-center gap-2 text-xs hover:text-blue-300 transition-colors"
              >
                {getIcon("star")}
                <span>KHÁCH HÀNG THÀNH CÔNG</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="w-full bg-white border-b">
          <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="/logo.png"
                alt="iCanPR Logo"
                className="h-10 w-auto cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => router.push("/")}
              />
            </div>

            {/* Navigation Menu */}
            <div className="flex items-center gap-0">
              {navigationData.map((item, index) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => {
                    setActiveDropdown(null);
                    setHoveredSubmenu(null);
                  }}
                >
                  <button
                    className={cn(
                      "h-16 px-4 text-xs font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50",
                      "border-r border-slate-200 last:border-r-0 transition-colors duration-200",
                      "flex items-center gap-2",
                      activeDropdown === item.label && "bg-slate-100 text-slate-900"
                    )}
                  >
                    {getIcon(item.icon)}
                    <span>{item.label}</span>
                  </button>
                  
                  {/* Dropdown Menu */}
                  {item.children && activeDropdown === item.label && (
                    <div className="absolute top-full left-0 bg-white border rounded-md shadow-lg min-w-[280px] py-2 z-50">
                      {item.children.map((child) => (
                        <div key={child.label} className="relative">
                          {child.children ? (
                            <div
                              className="flex items-center justify-between px-4 py-2 text-xs hover:bg-slate-50 cursor-pointer transition-colors"
                              onMouseEnter={() => setHoveredSubmenu(child.label)}
                              onMouseLeave={() => setHoveredSubmenu(null)}
                            >
                              <span className="flex items-center gap-2">
                                {getIcon(child.icon)}
                                {child.label}
                              </span>
                              <ChevronRight className="w-3 h-3 text-slate-400" />
                              
                              {/* Sub-submenu */}
                              {hoveredSubmenu === child.label && (
                                <div className="absolute left-full top-0 bg-white border rounded-md shadow-lg min-w-[320px] py-2 z-[60]">
                                  {child.children.map((subChild) => (
                                    <Link
                                      key={subChild.label}
                                      href={subChild.href}
                                      className="flex items-center gap-2 px-4 py-2 text-xs hover:bg-slate-50 transition-colors"
                                    >
                                      {getIcon(subChild.icon)}
                                      {subChild.label}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ) : (
                            <Link
                              href={child.href}
                              className="flex items-center gap-2 px-4 py-2 text-xs hover:bg-slate-50 transition-colors"
                              target={child.external ? "_blank" : undefined}
                            >
                              {getIcon(child.icon)}
                              {child.label}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Mobile Navigation Component
function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-between p-4 bg-white border-b">
      <img src="/logo.png" alt="iCanPR Logo" className="h-8 w-auto" />
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="w-5 h-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-80">
          <div className="py-4">
            <h2 className="text-lg font-semibold mb-4">Menu</h2>
            <div className="space-y-2">
              {navigationData.map((item) => (
                <MobileNavItem key={item.label} item={item} />
              ))}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

function MobileNavItem({ item }: { item: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-1">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-2 text-sm hover:bg-slate-50 rounded-md"
      >
        <span className="flex items-center gap-2">
          {item.icon && <span>{item.icon}</span>}
          {item.label}
        </span>
        {item.children && (
          <ChevronDown className={cn("w-4 h-4 transition-transform", isOpen && "rotate-180")} />
        )}
      </button>
      
      {item.children && isOpen && (
        <div className="pl-6 space-y-1">
          {item.children.map((child: any) => (
            <MobileNavItem key={child.label} item={child} />
          ))}
        </div>
      )}
    </div>
  );
}

// Navigation Data
const navigationData = [
  {
    label: "ICANPR",
    icon: "info",
    children: [
      { label: "Về iCanPR", href: "/ve-icanpr", icon: "info" },
      { label: "Đối tác iCanPR", href: "/doi-tac-icanpr", icon: "users" },
      { label: "Liên hệ", href: "/lien-he", icon: "mail" },
    ],
  },
  {
    label: "ĐỊNH CƯ CANADA",
    icon: "user",
    children: [
      { label: "Việc làm định cư", href: "/immigration/viec-lam-dinh-cu", icon: "briefcase" },
      { label: "Du học – định cư", href: "/immigration/du-hoc-dinh-cu", icon: "school" },
      { label: "Doanh nghiệp C11 Visa", href: "/immigration/doanh-nghiep-c11-visa", icon: "building" },
      { label: "Visa khởi nghiệp", href: "/immigration/start-up-visa", icon: "rocket" },
      {
        label: "Nhập cảnh nhanh",
        icon: "plane",
        children: [
          { label: "Công nhân lành nghề liên bang (FSW)", href: "/immigration/nhap-canh-nhanh/cong-nhan-lanh-nghe-lien-bang", icon: "user" },
          { label: "Thương mại tay nghề liên bang (FST)", href: "/immigration/nhap-canh-nhanh/thuong-mai-co-tay-nghe-lien-bang", icon: "briefcase" },
          { label: "Lớp trải nghiệm Canada (CEC)", href: "/immigration/nhap-canh-nhanh/lop-hoc-trai-nghiem-canada", icon: "school" },
          { label: "Tính điểm CRS", href: "/immigration/nhap-canh-nhanh/tinh-toan-diem-crs", icon: "checkCircle" },
        ],
      },
      { label: "Bảo lãnh gia đình", href: "/immigration/bao-lanh-gia-dinh", icon: "userPlus" },
      { label: "Khách hàng thành công", href: "/immigration/khach-hang-thanh-cong", icon: "star" },
    ],
  },
  {
    label: "CHƯƠNG TRÌNH ĐỀ CỬ CẤP TỈNH BANG",
    icon: "map",
    children: [
      { label: "Alberta Nhap Cu (AAIP)", href: "/de-cu-tinh-bang-pnp/alberta-nhap-cu-aaip", icon: "mapPin" },
      { label: "British Colombia (BC PNP)", href: "/de-cu-tinh-bang-pnp/british-columbia-bcpnp", icon: "mapPin" },
      { label: "Ontario (OINP)", href: "/de-cu-tinh-bang-pnp/ontario-oinp", icon: "mapPin" },
      { label: "Manitoba (MPNP)", href: "/de-cu-tinh-bang-pnp/manitoba-mpnp", icon: "mapPin" },
      { label: "New Brunswick (NBPNP)", href: "/de-cu-tinh-bang-pnp/new-brunswick-nbpnp", icon: "mapPin" },
      { label: "Nova Scotia (NSNP)", href: "/de-cu-tinh-bang-pnp/nova-scotia-nsnp", icon: "mapPin" },
      { label: "Prince Edward Island (PEI PNP)", href: "/de-cu-tinh-bang-pnp/prince-edward-island-peipnp", icon: "mapPin" },
      { label: "Quebec", href: "/de-cu-tinh-bang-pnp/quebec", icon: "mapPin" },
      { label: "Saskatchewan (SINP)", href: "/de-cu-tinh-bang-pnp/saskatchewan-sinp", icon: "mapPin" },
      { label: "Yukon (YNP)", href: "/de-cu-tinh-bang-pnp/yukon-ynp", icon: "mapPin" },
    ],
  },
  {
    label: "CUỘC SỐNG CANADA",
    icon: "heart",
    children: [
      {
        label: "Các tỉnh bang Canada",
        icon: "map",
        children: [
          { label: "Alberta (AAIP)", href: "/cuoc-song-canada/cac-tinh-bang-canada/tinh-alberta", icon: "mapPin" },
          { label: "British Colombia (BC PNP)", href: "/cuoc-song-canada/cac-tinh-bang-canada/brcolumbiaP", icon: "mapPin" },
          { label: "Manitoba (MPNP)", href: "/cuoc-song-canada/cac-tinh-bang-canada/manitobaP", icon: "mapPin" },
          { label: "New Brunswick (NBPNP)", href: "/cuoc-song-canada/cac-tinh-bang-canada/new-brunswickP", icon: "mapPin" },
          { label: "Newfoundland and Labrador", href: "/cuoc-song-canada/cac-tinh-bang-canada/newfoundland-labradorP", icon: "mapPin" },
          { label: "Northwest Territories", href: "/cuoc-song-canada/cac-tinh-bang-canada/northwest-territoriesP", icon: "mapPin" },
          { label: "Nova Scotia (NSNP)", href: "/cuoc-song-canada/cac-tinh-bang-canada/nova-scotiaP", icon: "mapPin" },
          { label: "Nunavut", href: "/cuoc-song-canada/cac-tinh-bang-canada/nunavutP", icon: "mapPin" },
          { label: "Ontario (OINP)", href: "/cuoc-song-canada/cac-tinh-bang-canada/ontarioP", icon: "mapPin" },
          { label: "Prince Edward Island (PEI PNP)", href: "/cuoc-song-canada/cac-tinh-bang-canada/prince-edwardP", icon: "mapPin" },
          { label: "Quebec", href: "/cuoc-song-canada/cac-tinh-bang-canada/quebecP", icon: "mapPin" },
          { label: "Saskatchewan (SINP)", href: "/cuoc-song-canada/cac-tinh-bang-canada/saskatchewanP", icon: "mapPin" },
          { label: "Yukon (YNP)", href: "/cuoc-song-canada/cac-tinh-bang-canada/yukonP", icon: "mapPin" },
        ],
      },
      { label: "Môi Trường Canada", href: "/cuoc-song-canada/moi-truong-canada", icon: "leaf" },
      { label: "Văn hóa & tôn giáo", href: "/cuoc-song-canada/van-hoa-ton-gaio", icon: "users" },
      { label: "Y Tế", href: "/cuoc-song-canada/y-te", icon: "heart" },
      { label: "Giáo dục Canada", href: "/cuoc-song-canada/giao-duc-canada", icon: "school" },
      { label: "Tỷ giá đô Canada", href: "/cuoc-song-canada/ty-gia-do-canada", icon: "dollarSign" },
      { label: "Chính sách thuế", href: "/cuoc-song-canada/chinh-sach-thue", icon: "scale" },
    ],
  },
  {
    label: "THÔNG TIN HỮU ÍCH",
    icon: "helpCircle",
    children: [
      { label: "Câu hỏi thường gặp", href: "/thong-tin-huu-ich/cau-hoi-thuong-gap", icon: "helpCircle" },
      { label: "Trang web hữu ích", href: "/thong-tin-huu-ich/trang-web-huu-ich", icon: "globe" },
      { label: "Thuật ngữ trong di trú", href: "/thong-tin-huu-ich/thuat-ngu-trong-di-tru", icon: "bookOpen" },
      { label: "CLB là gì? Cách quy đổi điểm đương đương?", href: "/thong-tin-huu-ich/CLB-la-gi", icon: "helpCircle" },
    ],
  },
  {
    label: "TUYỂN DỤNG",
    icon: "briefcase",
    children: [
      { label: "Làm việc cho iCanPR", href: "/tuyen-dung/lam-viec-cho-icanpr", icon: "briefcase" },
      { label: "Tổng hợp việc làm Canada", href: "https://jobs.icanpr.vn/jobs/Careers", icon: "briefcase", external: true },
      { label: "Công nhân trại gà", href: "https://icanpr.zohorecruit.com/jobs/Careers/777018000000558001/75119---General-Labour-C%C3%B4ng-nh%C3%A2n-n%C3%B4ng-tr%E1%BA%A1i-g%C3%A0?source=CareerSite", icon: "briefcase", external: true },
      { label: "Đầu bếp Món Âu", href: "/tuyen-dung/dau-bep-mon-au", icon: "chefHat" },
    ],
  },
];