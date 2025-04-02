"use client";
import { useDispatch, useSelector } from "react-redux";
import { updateField } from "@/store/slices/coverLetterFormSlice";
import EducationInput from "./2educationInput";

export default function IncludeEducation({ setStep }) {
  const dispatch = useDispatch();
  const { useEducation } = useSelector((state) => state.coverLetterForm);

  function handleUseEducation(answer) {
    dispatch(updateField({ field: "useEducation", value: answer }));

    if (!answer) setStep(2);
  }
  return (
    <>
      <fieldset>
        <legend className="block mb-4 text-lg">
          Mention your education in the cover letter?
        </legend>
        <div className="flex items-center space-x-6 mb-4">
          <button
            type="button"
            aria-pressed={useEducation === true}
            aria-label="Yes, include education in the cover letter"
            onClick={() => handleUseEducation(true)}
            className={`p-3 rounded-full w-36 transition cursor-pointer ${
              useEducation === true ? "bg-primary" : "bg-steps-button"
            }`}
          >
            <div className="space-x-3 text-xl">
              <span>✅</span>
              <span>Yes</span>
            </div>
          </button>
          <button
            type="button"
            aria-pressed={useEducation === false}
            aria-label="No, do not include education in the cover letter"
            onClick={() => handleUseEducation(false)}
            className="bg-steps-button p-3 rounded-full w-36  transition cursor-pointer"
          >
            <div className="space-x-3 text-xl">
              <span>❌</span>
              <span>No</span>
            </div>
          </button>
        </div>
        <EducationInput />
      </fieldset>
    </>
  );
}
