"use client";
import HeaderEditor from "../headerEditor";
import CoverLetterEditor from "../coverLetterEditor";

export default function LayoutB({ onHandleInput }) {
  return (
    <div className="layout-b flex">
      <div className="flex-1 pr-4">
        <HeaderEditor />
      </div>
      <div className="flex-2">
        <CoverLetterEditor onHandleInput={onHandleInput} />
      </div>
    </div>
  );
}
