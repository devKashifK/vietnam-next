import { Icon } from "@iconify/react/dist/iconify.js";

import Home from "./home";
import Link from "next/link";
import BlinkingNavbar from "@/components/ui/blinking-navbar";

export default function page() {
  return (
    <div className="relative">
      <Home />
      <BlinkingNavbar />
    </div>
  );
}
