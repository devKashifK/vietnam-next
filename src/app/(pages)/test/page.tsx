"use client";
import { Button } from "@/components/ui/button";
import OverflowMenu from "./test";
import FlexibleMenu from "./test";

export default function ExampleUsage() {
  const menuItems = [
    "Home",
    "About",
    "Services",
    "Portfolio",
    "Blog",
    "Contact",
    "Support",
  ];
  return (
    <div style={{ width: "100%" }} className="h-screen">
      {/* <OverflowMenu>
        <button>Item 1</button>
        <button className="inline-block">Item 2</button>
        <button className="inline-block">Item 3</button>
        <button className="inline-block">Item 4</button>
        <button className="inline-block">Item 5</button>
        <button className="inline-block">Item 6</button>
        <button className="inline-block">Item 7</button>
      </OverflowMenu> */}

      <div className="p-6">
        <FlexibleMenu items={menuItems} />
      </div>
    </div>
  );
}
