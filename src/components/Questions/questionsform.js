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
    useEducation: null,
    education: "",
    school: "",
    major: "",
    collgeExperience: "",
  });

  function handleChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleUseEducation(value) {
    setFormData((prev) => ({
      ...prev,
      useEducation: value,
    }));

    if (value) {
      setStep(2);
    } else {
      setStep(4);
    }
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
      <h2 className="text-center m-8">Step {step} of 4</h2>
      <form className="bg-gray-400 rounded-xl p-4 flex flex-col items-center">
        {step === 1 && (
          <>
            <div className="block mb-4">
              Is your education something you want to mention in your cover
              letter?
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
        )}
        {step === 2 && (
          <>
            <div>
              <div>
                <label className="block mb-4">
                  What is you highest level of education?
                </label>
                <select
                  type="text"
                  name="education"
                  className="bg-background py-2 mb-4 rounded-lg"
                  value={formData.education}
                  onChange={handleChange}
                >
                  <option value="">Select your education level</option>
                  <option value="high school diploma">
                    High School Diploma
                  </option>
                  <option value="associate's degree">Associate Degree</option>
                  <option value="bachelor's degree">Bachelor's Degree</option>
                  <option value="master's degree">Master's Degree</option>
                  <option value="doctorate">Doctorate</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block mb-4">College</label>
                <input
                  type="text"
                  name="school"
                  value={formData.school}
                  onChange={handleChange}
                  className="bg-background py-2 mb-4 rounded-lg"
                />
              </div>
              <div>
                <label className="block mb-4">Major</label>
                <input
                  type="text"
                  name="major"
                  value={formData.major}
                  onChange={handleChange}
                  className="bg-background py-2 mb-4 rounded-lg"
                />
              </div>
              <div>
                <label className="block mb-4">
                  Is there anything specific about your college experience that
                  an employer would find value in? Anything that prepared you
                  for this job?
                </label>
                <textarea
                  type="text"
                  name="collgeExperience"
                  value={formData.collgeExperience}
                  onChange={handleChange}
                  className="bg-background py-2 mb-4 rounded-lg w-full"
                />
              </div>
            </div>
          </>
        )}
        {step === 3 && <></>}
        {step === 4 && <></>}

        <div className="flex justify-between mt-4">
          {step > 1 && (
            <button
              type="button"
              onClick={handleBack}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Back
            </button>
          )}
          {step < 4 && (
            <button
              type="button"
              onClick={handleNext}
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
