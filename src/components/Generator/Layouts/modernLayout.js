"use client";
import Header from "./header";
import Content from "./contents";

export default function ModernLayout({ headerData, coverLetter }) {
  return (
    <div className="modern-layout document-page">
      <Header {...headerData} />
      <Content coverLetter={coverLetter} />
      <style jsx>{`
        .document-page {
          background: #fff;
          padding: 2rem;
          margin: 2rem auto;
          width: 816px;
          height: 1056px;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
          border: none;
          font-family: "Arial", sans-serif;
          white-space: pre-wrap;
          overflow-y: auto;
          overflow-x: hidden;
        }
        .modern-layout .document-header {
          color: #0070f3;
          margin-bottom: 1rem;
        }
      `}</style>
    </div>
  );
}
