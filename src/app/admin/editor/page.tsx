"use client";
import React from "react";
import EditorInterference from "./editor-interference";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./app-sidebar";

export default function Editor() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarTrigger />
      <EditorInterference />
    </SidebarProvider>
  );
}
