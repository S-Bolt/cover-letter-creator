"use client";
import { useDispatch, useSelector } from "react-redux";
import { updateField } from "@/store/slices/coverLetterFormSlice";
import EducationInput from "./educationInput";

export default function IncludeEducation({ setStep }) {
  const dispatch = useDispatch();

  function handleUseEducation(answer) {
    dispatch(updateField({ field: "useEducation", value: answer }));

    if (!answer) setStep(2);
  }
  return (
    <>
      <div className="block mb-4 text-lg">
        Mention your education in the cover letter?
      </div>
      <div className="flex items-center space-x-6 mb-4">
        <button
          type="button"
          onClick={() => handleUseEducation(true)}
          className="bg-gray-300 p-3 rounded-full w-36 hover:bg-gray-500 active:bg-gray-600 transition cursor-pointer"
        >
          <div className="space-x-3 text-xl">
            <span>✅</span>
            <span>YES</span>
          </div>
        </button>
        <button
          type="button"
          onClick={() => handleUseEducation(false)}
          className="bg-gray-300 p-3 rounded-full w-36 hover:bg-gray-500 active:bg-gray-600 transition cursor-pointer"
        >
          <div className="space-x-3 text-xl">
            <span>❌</span>
            <span>No</span>
          </div>
        </button>
      </div>
      <EducationInput />
    </>
  );
}
