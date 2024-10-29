import Footer from "@/components/ui/footer";
import Hero from "@/components/ui/hero";
import Sidebar from "@/components/ui/sidebar-main";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Sidebar />
      <Hero />
      {children}
      <Footer />
    </>
  );
}
