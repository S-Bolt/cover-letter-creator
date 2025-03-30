/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCoverLetter } from "@/store/slices/generatedCoverLetterSlice";
import { useRouter } from "next/navigation";
import LoadingScreen from "./Steps/loadingScreen";
import IncludeEducation from "./Steps/includeEducation";
import EducationInput from "./Steps/educationInput";
import JobInput from "./Steps/jobInput";
import SkillsInput from "./Steps/skillsInput";
import YourTraits from "./Steps/yourTraits";
import ExtraInput from "./Steps/extraInput";
import SelectTone from "./Steps/selectToneInput";
import BackButton from "./QuestionsComponents/backButton";
import NextButton from "./QuestionsComponents/nextButton";
import GenerateCLButton from "./QuestionsComponents/generateCLButton";
import PersonalHeaderInput from "./Steps/personalHeaderInput";

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
        {step === 7 && <PersonalHeaderInput />}
        {step === 8 && <SelectTone />}

        <div className="flex justify-between mt-4">
          {step > 1 && <BackButton onHandleBack={handleBack} />}
          {step < 8 && <NextButton onHandleNext={handleNext} />}
          {step === 8 && <GenerateCLButton />}
        </div>
      </form>
    </div>
  );
}
