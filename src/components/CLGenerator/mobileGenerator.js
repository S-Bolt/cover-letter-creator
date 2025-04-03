"use client";

import { useState } from "react";
import Sidebar from "./Sidebar/sidebar";
import Document from "@/components/CLGenerator/document";
import Editor from "@/components/CLGenerator/UserEditor/editor";
import Navbar from "../Navbar/navbar";
import { Bars3Icon } from "@heroicons/react/24/solid";
import SmallSidebar from "./Sidebar/smallSidebar";
import { downloadCoverLetterAsPDF } from "@/lib/download";

export default function MobileGenerator() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    downloadCoverLetterAsPDF();
    setTimeout(() => {
      setDownloading(false);
    }, 4500);
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      {/* Container */}
      <div className=" w-full ">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="bg-primary text-white  px-4 py-2 rounded-md m-4"
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
      </div>
      {/* Document (Right) */}
      <Document colSpan={"m-2"} />

      <div className="fixed bottom-0 left-0 w-full bg-cl-generator p-4 flex justify-evenly">
        <Editor />
      </div>

      {/* Sidebar (Opens on Button Click) */}
      {sidebarOpen && (
        <div className="fixed top-56 left-0 w-1/2 h-full bg-cl-generator z-40">
          <SmallSidebar
            onDownload={handleDownload}
            downloading={downloading}
            onSetSidebar={() => setSidebarOpen(false)}
          />
        </div>
      )}
    </div>
  );
}
