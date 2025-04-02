/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCoverLetter } from "@/store/slices/generatedCoverLetterSlice";
import { useRouter } from "next/navigation";
import LoadingScreen from "./Steps/loadingScreen";
import IncludeEducation from "./Steps/1includeEducation";
import JobInput from "./Steps/3jobInput";
import SkillsInput from "./Steps/4skillsInput";
import YourTraits from "./Steps/5yourTraits";
import ExtraInput from "./Steps/6additionalContext";
import SelectTone from "./Steps/8selectToneInput";
import BackButton from "./QuestionsComponents/backButton";
import NextButton from "./QuestionsComponents/nextButton";
import GenerateCLButton from "./QuestionsComponents/generateCLButton";
import PersonalHeaderInput from "./Steps/7personalHeaderInput";
import ProgressBar from "./QuestionsComponents/progressBar";

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
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let coverLetter = "";
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          coverLetter += decoder.decode(value, { stream: true });
          dispatch(setCoverLetter(coverLetter));
        }

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
    <div className="p-6 flex justify-center h-min-screen  ">
      <form
        className="bg-steps-card rounded-xl p-4 flex flex-col items-center"
        onSubmit={handleSubmit}
      >
        <h2 className="text-default text-lg sm:text-2xl font-semibold ">
          Create Your Cover Letter
        </h2>
        <ProgressBar step={step} />
        {step === 1 && <IncludeEducation setStep={setStep} />}
        {step === 2 && <JobInput />}
        {step === 3 && <SkillsInput />}
        {step === 4 && <YourTraits />}
        {step === 5 && <ExtraInput />}
        {step === 6 && <PersonalHeaderInput />}
        {step === 7 && <SelectTone />}

        <div
          className={`flex ${
            step === 7
              ? "justify-between space-x-48"
              : "justify-center space-x-77 w-full"
          } mt-4`}
        >
          {step > 1 && <BackButton onHandleBack={handleBack} />}
          {step < 7 && (
            <NextButton
              onHandleNext={handleNext}
              className={`${step === 1 ? "ml-100" : ""}`}
            />
          )}
          {step === 7 && <GenerateCLButton />}
        </div>
      </form>
    </div>
  );
}
