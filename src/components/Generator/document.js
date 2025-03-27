"use client";
import { useDispatch, useSelector } from "react-redux";
import { setCoverLetter } from "@/store/slices/generatedCoverLetterSlice";
import BaseLayout from "./Layouts/baseLayout";

export default function Document({ colSpan }) {
  const dispatch = useDispatch();
  const coverLetter = useSelector((state) => state.coverLetter.value);

  const handleInput = (newContent) => {
    dispatch(setCoverLetter(newContent));
  };

  return (
    <div
      className={`bg-document flex justify-center items-center rounded-xl h-full px-4 ${colSpan}`}
    >
      <BaseLayout content={coverLetter} onHandleInput={handleInput} />
    </div>
  );
}
