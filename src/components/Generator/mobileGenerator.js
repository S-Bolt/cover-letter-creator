"use client";

import { useState } from "react";
import Sidebar from "@/components/Generator/sidebar";
import Document from "@/components/Generator/document";
import Editor from "@/components/Generator/editor";
import Navbar from "../navbar";
import { Bars3Icon } from "@heroicons/react/24/solid";

export default function MobileGenerator() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      {/* ✅ Container for Sidebar Toggle Button + Document */}
      <div className=" w-full ">
        {/* Sidebar Toggle Button (Left) */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="bg-primary text-white  px-4 py-2 rounded-md m-4"
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
      </div>
      {/* Document (Right) */}
      <Document colSpan={"m-2"} />

      {/* ✅ Floating Action Buttons (Editor) */}
      <div className="fixed bottom-0 left-0 w-full bg-cl-generator p-4 flex justify-evenly">
        <Editor />
      </div>

      {/* ✅ Sidebar (Opens on Button Click) */}
      {sidebarOpen && (
        <div className="fixed top-56 left-0 w-3/4 h-full bg-cl-generator z-40">
          <Sidebar onSetSidebar={() => setSidebarOpen(false)} />
        </div>
      )}
    </div>
  );
}
