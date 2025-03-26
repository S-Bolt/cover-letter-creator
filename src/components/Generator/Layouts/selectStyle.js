"use client";
import { useState } from "react";
import ClassicLayout from "./classicLayout";
import ModernLayout from "./modernLayout";
import { useSelector } from "react-redux";

export default function CoverLetterDocument() {
  // Assume headerData is either from Redux or props, and coverLetter from Redux
  const coverLetter = useSelector((state) => state.coverLetter.value);
  const headerData = useSelector((state) => state.coverLetterForm); // or wherever you store header info

  const [layout, setLayout] = useState("classic"); // "classic" or "modern"

  return (
    <div>
      <div className="layout-selector">
        <button onClick={() => setLayout("classic")}>Classic</button>
        <button onClick={() => setLayout("modern")}>Modern</button>
      </div>
      {layout === "classic" && (
        <ClassicLayout headerData={headerData} coverLetter={coverLetter} />
      )}
      {layout === "modern" && (
        <ModernLayout headerData={headerData} coverLetter={coverLetter} />
      )}
      <style jsx>{`
        .layout-selector {
          text-align: center;
          margin-bottom: 1rem;
        }
        .layout-selector button {
          margin: 0 0.5rem;
          padding: 0.5rem 1rem;
          border: 1px solid #0070f3;
          background: #fff;
          color: #0070f3;
          cursor: pointer;
          border-radius: 4px;
          transition: background 0.2s;
        }
        .layout-selector button:hover {
          background: #0070f3;
          color: #fff;
        }
      `}</style>
    </div>
  );
}
