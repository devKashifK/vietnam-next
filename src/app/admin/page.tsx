"use client";
import React from "react";
// import AdminPanel from "./admin-panel";
import dynamic from "next/dynamic";
const AdminPanel = dynamic(() => import("./admin-panel"), {
  ssr: false,
});

export default function Admin() {
  return <AdminPanel />;
}
