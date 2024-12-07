"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Settings, Mail, Key, Camera, Plus, Phone } from "lucide-react";
import { Icon } from "@iconify/react/dist/iconify.js";

interface CircularMenuProps {
  position: "left" | "right";
}

export default function CircularMenu({
  position = "right",
}: CircularMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: "material-symbols:call", label: "Phone", href: "tel:+84869967809" },
    {
      icon: "material-symbols-light:mail",
      label: "Messages",
      href: "mailto:tuvan@icanpr.vn",
    },
    {
      icon: "simple-icons:zalo",
      label: "Zalo",
      href: "https://zalo.me/84869967809",
    },
    { icon: "material-symbols:android-camera", label: "SCAN", href: "#" },
  ];

  return (
    <div className="fixed bottom-24 w-14 h-14 right-3">
      <div className="relative">
        <AnimatePresence>
          {isOpen && (
            <>
              {menuItems.map((item, index) => {
                const baseAngle = -215;
                const angleIncrement = 45;
                const angle = baseAngle + index * angleIncrement;
                const radius = 80;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                return (
                  <motion.button
                    key={item.label}
                    className="absolute z-[9999999999999999999999] w-12 h-12 rounded-full bg-[#E54D2E] shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
                    initial={{ scale: 0, x: 0, y: 0 }}
                    animate={{
                      scale: 1,
                      x,
                      y,
                    }}
                    exit={{ scale: 0, x: 0, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    style={{ originX: 0.5, originY: 0.5 }}
                    aria-label={item.label}
                  >
                    <a href={item.href}>
                      <Icon
                        icon={item.icon}
                        className="text-white text-xl w-5 h-5"
                      />
                    </a>
                  </motion.button>
                );
              })}
            </>
          )}
        </AnimatePresence>

        <motion.button
          className="w-14 h-14 rounded-full bg-[#E54D2E] shadow-lg flex items-center justify-center z-10 relative hover:scale-110 transition-transform"
          onMouseEnter={() => setIsOpen(true)}
          onClick={() => setIsOpen(!isOpen)}
          animate={{ rotate: isOpen ? 45 : 0 }}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <Icon
            icon={"material-symbols:list-alt-add-rounded"}
            className="w-14 h-14 text-white"
          />
        </motion.button>
      </div>
    </div>
  );
}
