"use client";
import { cn } from "@/lib/utils";
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const dropDownContext = createContext(null);

export default function CustomDropdown() {
  return (
    <Dropdown>
      <DropDownTrigger>Click me</DropDownTrigger>
      <DropDownContent>
        <div>Content</div>
      </DropDownContent>
    </Dropdown>
  );
}

function Dropdown({ children }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  const [triggerPosition, setTriggerPosition] = useState({});
  const triggerRef = useRef(null);

  const updateTriggerPosition = () => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      console.log(rect, "rect");
      setTriggerPosition({
        top: rect.top,
        left: rect.left,
      });
    }
  };

  useEffect(() => {
    if (open) {
      updateTriggerPosition();
    }
  }, [open]);
  return (
    <dropDownContext.Provider
      value={{ open, handleOpen, triggerPosition, triggerRef }}
    >
      <div>{children}</div>
    </dropDownContext.Provider>
  );
}

function DropDownTrigger({ children }) {
  const { open, handleOpen, triggerRef } = useDropDownContext();
  return (
    <div className="relative" onClick={handleOpen} ref={triggerRef}>
      {children}
    </div>
  );
}

function DropDownContent({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { open, triggerPosition } = useDropDownContext();

  const contentStyle = {
    position: "absolute" as const,
    top: `${triggerPosition.bottom}px`, // position the content below the trigger
    left: `${triggerPosition.left}px`, // align it horizontally with the trigger
  };
  if (!open) return null;
  return (
    <div className={cn("w-10 h-10 bg-black", className)} style={contentStyle}>
      {children}
    </div>
  );
}

export function useDropDownContext() {
  return useContext(dropDownContext);
}
