"use client";
import { useSelector } from "react-redux";
export default function Contents() {
  const coverLetter = useSelector((state) => state.coverLetter.value);
  return (
    <div className="document-content">
      <pre>{coverLetter}</pre>
    </div>
  );
}
