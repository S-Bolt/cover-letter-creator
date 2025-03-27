"use client";
import HeaderEditor from "../headerEditor";
import CoverLetterEditor from "../coverLetterEditor";

export default function LayoutA({ onHandleInput }) {
  return (
    <div className="layout-a">
      <HeaderEditor />
      <CoverLetterEditor onHandleInput={onHandleInput} />
    </div>
  );
}
