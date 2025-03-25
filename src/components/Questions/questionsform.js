/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCoverLetter } from "@/store/slices/generatedCoverLetterSlice";
import { useRouter } from "next/navigation";
import LoadingScreen from "./loadingScreen";
import IncludeEducation from "./includeEducation";
import EducationInput from "./educationInput";
import JobInput from "./jobInput";
import SkillsInput from "./skillsInput";
import YourTraits from "./yourTraits";
import ExtraInput from "./extraInput";
import SelectTone from "./selectToneInput";
import BackButton from "./backButton";
import NextButton from "./nextButton";
import GenerateCLButton from "./generateCLButton";

export default function QuestionsForm() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [step, setStep] = useState(1);
  const coverLetterData = useSelector((state) => state.coverLetterForm);

  //Form Submission
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/openai/generate-cover-letter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(coverLetterData),
      });

      if (response.ok) {
        const data = await response.json();

        dispatch(setCoverLetter(data.coverLetter));

        router.push("/cover-letter-generator");
        setLoading(false);
      } else {
        throw new Error("Failed to generate cover letter.");
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  if (loading) {
    return <LoadingScreen />;
  }

  //step handlers
  function handleNext() {
    setStep(step + 1);
  }

  function handleBack() {
    setStep(step - 1);
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-center m-8">Step {step} of 7</h2>
      <form
        className="bg-gray-400 rounded-xl p-4 flex flex-col items-center"
        onSubmit={handleSubmit}
      >
        {step === 1 && <IncludeEducation setStep={setStep} />}
        {step === 2 && <EducationInput />}
        {step === 3 && <JobInput />}
        {step === 4 && <SkillsInput />}
        {step === 5 && <YourTraits />}
        {step === 6 && <ExtraInput />}
        {step === 7 && <SelectTone />}

        <div className="flex justify-between mt-4">
          {step > 1 && <BackButton onHandleBack={handleBack} />}
          {step < 7 && <NextButton onHandleNext={handleNext} />}
          {step === 7 && <GenerateCLButton />}
        </div>
      </form>
    </div>
  );
}
