"use client";

import Contents from "./contents";
import Header from "./header";

export default function ClassicLayout({ onInput }) {
  return (
    <div className="document-container h-3/4 ">
      <div
        contentEditable={true}
        suppressContentEditableWarning={true}
        onInput={onInput}
        className="document-page"
      >
        <Header />
        <Contents />
      </div>
    </div>
  );
}
