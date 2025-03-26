"use client";
import { useDispatch, useSelector } from "react-redux";
import { setCoverLetter } from "@/store/slices/generatedCoverLetterSlice";
import { useState, useEffect } from "react";
import ClassicLayout from "./Layouts/classicLayout";

export default function Document({ colSpan }) {
  const dispatch = useDispatch();
  const coverLetter = useSelector((state) => state.coverLetter.value);
  const [content, setContent] = useState(coverLetter);

  useEffect(() => {
    setContent(coverLetter);
  }, [coverLetter]);

  function handleInput(e) {
    const newContent = e.currentTarget.innerHTML;
    setContent(newContent);
    dispatch(setCoverLetter(newContent));
  }

  return (
    <div
      className={`bg-document flex justify-center items-center rounded-xl h-full px-4 ${colSpan}`}
    >
      <ClassicLayout content={content} onInput={handleInput} />
    </div>
  );
}
