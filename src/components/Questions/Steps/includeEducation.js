"use client";
import { useDispatch, useSelector } from "react-redux";
import { updateField } from "@/store/slices/coverLetterFormSlice";

export default function IncludeEducation({ setStep }) {
  const dispatch = useDispatch();
  const useEducation = useSelector(
    (state) => state.coverLetterForm.useEducation
  );

  function handleUseEducation(answer) {
    dispatch(updateField({ field: "useEducation", value: answer }));

    if (answer) {
      setStep(2);
    } else {
      setStep(3);
    }
  }
  return (
    <>
      <div className="block mb-4">
        Is your education something you want to mention in your cover letter?
      </div>
      <div className="flex items-center space-x-8">
        <button
          type="button"
          onClick={() => handleUseEducation(true)}
          className="bg-background p-6 rounded-lg"
        >
          Yes
        </button>
        <button
          type="button"
          onClick={() => handleUseEducation(false)}
          className="bg-background p-6 rounded-lg"
        >
          No
        </button>
      </div>
    </>
  );
}
