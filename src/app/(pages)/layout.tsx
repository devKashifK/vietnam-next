import { Button } from "@/components/ui/button";
import Footer from "@/components/ui/footer";
import HeroDefault from "@/components/ui/hero-all";
import { HomeIcon, Search, Bell } from "lucide-react";
import Sidebar from "@/components/ui/sidebar-main";
import { User } from "lucide-react";
import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import BlinkingNavbar from "@/components/ui/blinking-navbar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {/* <Sidebar /> */}
      <HeroDefault />
      {children}
      <Footer />
      <BlinkingNavbar />
    </div>
  );
}
