"use client";
import { useState } from "react";

export default function QuestionsForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    jobTitle: "",
    companyName: "",
    skills: "",
    experience: "",
    additionalInfo: "",
    education: "",
    school: "",
  });

  function handleChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-center m-8">Step {step} of 4</h2>
      <form className="bg-gray-400 rounded-xl p-4 flex flex-col items-center">
        {step === 1 && (
          <>
            <label className="block mb-4">
              What is you highest level of education?
            </label>
            <select
              type="text"
              name="education"
              className="bg-white py-2"
              value={formData.education}
              onChange={handleChange}
            >
              <option value="">Select your education level</option>
              <option value="high_school">High School Diploma</option>
              <option value="associate">Associate Degree</option>
              <option value="bachelor">Bachelor's Degree</option>
              <option value="master">Master's Degree</option>
              <option value="doctorate">Doctorate</option>
              <option value="other">Other</option>
            </select>
          </>
        )}
        {step === 2 && <></>}
        {step === 3 && <></>}
        {step === 4 && <></>}

        <div className="flex justify-between mt-4">
          {step > 1 && (
            <button
              type="button"
              //   onClick={handleBack}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Back
            </button>
          )}
          {step < 4 && (
            <button
              type="button"
              //   onClick={handleNext}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Next
            </button>
          )}
          {step === 4 && (
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded"
            >
              Generate Cover Letter
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
