"use client";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "@/store/slices/sidebarSlice";
import Document from "@/components/Generator/Layouts/document";
import Editor from "@/components/Generator/UserEditor/editor";
import Sidebar from "./Sidebar/sidebar";
import Navbar from "@/components/Navbar/navbar";
import SmallSidebar from "./Sidebar/smallSidebar";

export default function LargeGenerator() {
  const sidebar = useSelector((state) => state.sidebar.sidebar);
  const dispatch = useDispatch();
  return (
    <div className="bg-background text-default min-h-screen flex flex-col h-screen ">
      <Navbar />

      <div className="grid grid-cols-20 grid-rows-1 gap-4 p-4 mt-8 flex-grow w-full  h-full min-h-0 ">
        {sidebar === "large" ? (
          <Sidebar onSetSidebar={() => dispatch(toggleSidebar())} />
        ) : (
          <SmallSidebar onSetSidebar={() => dispatch(toggleSidebar())} />
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
