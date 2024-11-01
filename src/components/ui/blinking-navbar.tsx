"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

const navItems = [
  { href: "/", icon: "material-symbols:home-app-logo", label: "Home" },
  {
    href: "/tin-tuc",
    icon: "material-symbols:breaking-news-outline-sharp",
    label: "News",
  },
  {
    href: "mailto:tuvan@icanpr.vn",
    icon: "material-symbols:mail-rounded",
    label: "Email",
  },
  {
    href: "https://api.whatsapp.com/send?phone=84869967809",
    icon: "mdi:whatsapp",
    label: "WhatsApp",
  },
  {
    href: "https://zalo.me/84869967809",
    icon: "arcticons:zalo",
    label: "Zalo",
  },
];

export default function BlinkingNavbar() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % navItems.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="fixed z-[9999999999999999999] bottom-0 left-0 w-full bg-white shadow-lg border-t border-highlight lg:hidden">
      <ul className="flex justify-around items-stretch h-16">
        {navItems.map((item, index) => (
          <li key={item.label} className="flex-1">
            {item.href.startsWith("http") || item.href.startsWith("mailto") ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`h-full w-full flex flex-col justify-center items-center transition-all duration-300 ease-in-out ${
                  index === activeIndex
                    ? "bg-highlight text-white"
                    : "hover:bg-highlight/10"
                }`}
                aria-label={item.label}
              >
                <Icon
                  icon={item.icon}
                  className={`text-2xl mb-1 ${
                    index === activeIndex
                      ? "animate-bounce text-white"
                      : "text-highlight"
                  }`}
                />
                <span className="text-xs font-medium">{item.label}</span>
              </a>
            ) : (
              <Link
                href={item.href}
                className={`h-full w-full flex flex-col justify-center items-center transition-all duration-300 ease-in-out ${
                  index === activeIndex
                    ? "bg-highlight text-white"
                    : "hover:bg-highlight/10"
                }`}
              >
                <Icon
                  icon={item.icon}
                  className={`text-2xl mb-1 ${
                    index === activeIndex
                      ? "animate-bounce text-white"
                      : "text-highlight"
                  }`}
                />
                <span className="text-xs font-medium">{item.label}</span>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
