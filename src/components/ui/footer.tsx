"use client";

import { Icon } from "@iconify/react";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "./button";

export default function Footer() {
  const navigate = useRouter();

  return (
    <footer className="w-full mx-auto bg-[#1A2A3A] text-white">
      <div className="px-4 py-8 mx-auto max-w-7xl">
        <div className="grid px-12 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Logo and Links */}
          <div className="space-y-4">
            <img src="/logo.png" alt="logo" className="w-40" />
            <nav className="grid gap-2 text-sm">
              <Link href="/ve-icanpr" className="hover:underline">
                Giới thiệu về công ty iCanPR
              </Link>
              <Link href="/lien-he" className="hover:underline">
                Liên hệ
              </Link>
              <Link href="/doi-tac-icanpr" className="hover:underline">
                Đối tác iCanPR
              </Link>
              <Link
                href="/cuoc-song-canada/cac-tinh-bang-canada/tinh-alberta"
                className="hover:underline"
              >
                Chương trình tỉnh bang
              </Link>
            </nav>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Thông tin liên hệ</h3>
            <div className="space-y-2 text-sm">
              <p>
                Địa chỉ: Tầng 7, 85 Nguyễn Hữu Cầu, phường Tân Định, Quận 1, Tp.
                Hồ Chí Minh, Việt Nam
              </p>
              <p>
                Email:{" "}
                <a href="mailto:tuvan@icanpr.vn" className="hover:underline">
                  tuvan@icanpr.vn
                </a>
              </p>
              <p>
                Điện thoại:{" "}
                <a href="tel:+84869967809" className="hover:underline">
                  +84 869967809
                </a>
              </p>
              <p>Giờ làm việc: 9:00 - 5:00, Thứ 2- Thứ 6, 9-12:00 sáng Thứ 7</p>
            </div>
          </div>

          {/* Social Media and Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Theo dõi chúng tôi</h3>
            <div className="flex space-x-4">
              {["linkedin", "facebook", "instagram", "youtube"].map(
                (social) => (
                  <Link
                    key={social}
                    href={
                      social === "facebook"
                        ? "https://www.facebook.com/DinhCu.iCanPR"
                        : social === "youtube"
                        ? "https://www.youtube.com/watch?v=2un5fxffDjc"
                        : social === "linkedin"
                        ? "https://www.linkedin.com/company/icanpr"
                        : social === "twitter"
                        ? "https://twitter.com/icanpr"
                        : "https://www.instagram.com/icanprvietnam/"
                    }
                    className="hover:text-primary-foreground transition-colors"
                  >
                    <Icon icon={`carbon:logo-${social}`} className="w-6 h-6" />
                  </Link>
                )
              )}
            </div>
            <p className="text-sm">
              Nhận các nguồn lực và công cụ có thể giúp bạn chuẩn bị cho tương
              lai. Bạn có thể hủy bất cứ lúc nào.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded focus:outline-none focus:ring-1 focus:ring-white text-white placeholder-white/50"
              />
              <Button
                onClick={() => navigate.push("/lien-he")}
                className="w-full py-2 px-4 bg-white text-primary hover:bg-primary-foreground transition-colors"
              >
                <span className="text-sm">Tư vấn miễn phí</span>
              </Button>
            </form>
            <a
              href="tel:+84869967809"
              className="inline-flex items-center space-x-2 hover:underline"
            >
              <Icon icon="mdi:phone" className="w-5 h-5" />
              <span>+84 869967809</span>
            </a>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-white/60">
            © iCanPr - All rights reserved
          </p>
          <img
            src="/RCIC-CERTIFIED-1.png"
            className="w-24"
            alt="RCIC-CERTIFIED-1"
          />
        </div>
      </div>
    </footer>
  );
}
