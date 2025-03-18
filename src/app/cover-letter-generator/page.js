import Document from "@/components/Generator/document";
import Editor from "@/components/Generator/editor";
import Sidebar from "@/components/Generator/sidebar";
import Navbar from "@/components/navbar";

/* eslint-disable react/no-unescaped-entities */
export default function CoverLetterGenerator() {
  return (
    <div className="bg-background text-default min-h-screen flex flex-col h-screen ">
      <Navbar />

      <div className="grid grid-cols-20 grid-rows-1 gap-4 p-4 mt-8 flex-grow w-full  h-full min-h-0 ">
        <Sidebar />
        <Document />
        <div className="col-span-5 lg:col-span-4 xl:span-3 h-full"></div>
        {/* Empty space */}
        <Editor />
      </div>
    </div>
  );
}
