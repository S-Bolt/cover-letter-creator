"use client";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "@/store/slices/sidebarSlice";
import Document from "@/components/CLGenerator/Layouts/document";
import Editor from "@/components/CLGenerator/UserEditor/editor";
import Sidebar from "./Sidebar/sidebar";
import Navbar from "@/components/Navbar/navbar";
import SmallSidebar from "./Sidebar/smallSidebar";
import { useState } from "react";
import { downloadCoverLetterAsPDF } from "@/lib/download";

export default function LargeGenerator() {
  const sidebar = useSelector((state) => state.sidebar.sidebar);
  const dispatch = useDispatch();
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    downloadCoverLetterAsPDF();
    setTimeout(() => {
      setDownloading(false);
    }, 4500);
  };

  return (
    <div className="bg-background text-black min-h-screen flex flex-col h-screen ">
      <Navbar />

      <div className="grid grid-cols-20 grid-rows-1 gap-4 p-4 mt-8 flex-grow w-full  h-full min-h-0 ">
        {sidebar === "large" ? (
          <Sidebar
            onDownload={handleDownload}
            downloading={downloading}
            onSetSidebar={() => dispatch(toggleSidebar())}
          />
        ) : (
          <SmallSidebar
            onDownload={handleDownload}
            downloading={downloading}
            onSetSidebar={() => dispatch(toggleSidebar())}
          />
        )}
        <Document
          colSpan={
            sidebar === "large"
              ? "col-span-15 lg:col-span-16 xl:span-17"
              : "col-span-18"
          }
        />
        <div
          className={`h-full ${
            sidebar === "large"
              ? "col-span-5 lg:col-span-4 xl:col-span-3"
              : "col-span-2"
          }`}
        ></div>
        {/* Empty space */}
        <Editor
          colSpan={
            sidebar === "large"
              ? "col-span-15 lg:col-span-16 xl:span-17"
              : "col-span-18"
          }
        />
      </div>
    </div>
  );
}
