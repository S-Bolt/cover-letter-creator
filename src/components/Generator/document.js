"use client";
import { useSelector } from "react-redux";
import LayoutSelector from "./Layouts/templates/layoutSelector";

export default function Document({ colSpan }) {
  return (
    <div
      className={`bg-document flex justify-center items-center rounded-xl h-full px-4 ${colSpan}`}
    >
      <div className="document-container h-3/4 ">
        <div className="document-page bg-white">
          <LayoutSelector />
        </div>
      </div>
    </div>
  );
}
