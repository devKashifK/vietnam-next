import Footer from "@/components/ui/footer";
import HeroDefault from "@/components/ui/hero-all";
import Sidebar from "@/components/ui/sidebar-main";
import React from "react";

export default function layout({ children }) {
  return (
    <>
      <Sidebar />
      <HeroDefault />
      {children}
      <Footer />
    </>
  );
}
