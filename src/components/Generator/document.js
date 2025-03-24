"use client";
import { useSelector } from "react-redux";
export default function Document({ colSpan }) {
  const coverLetter = useSelector((state) => state.coverLetter.value);

  return (
    <div className={`bg-document rounded-xl h-full ${colSpan}`}>
      {coverLetter != "" ? <div>{coverLetter}</div> : ""}
    </div>
  );
}
