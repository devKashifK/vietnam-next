import Footer from "@/components/ui/footer";
import HeroDefault from "@/components/ui/hero-all";
import React from "react";
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
