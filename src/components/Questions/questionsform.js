/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react";
import Skill from "./skill";

export default function QuestionsForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    jobTitle: "",
    companyName: "",
    jobDescription: "",
    remote: "null",
    skills: ["", "", "", "", ""],
    experience: "",
    rightFit: "",
    companyContributions: "",
    useEducation: null,
    education: "",
    school: "",
    major: "",
    collegeExperience: "",
  });

  // List of available traits
  const traitsOptions = [
    "Team Player",
    "Innovative",
    "Reliable",
    "Adaptable",
    "Detail-Oriented",
    "Creative",
    "Analytical",
  ];

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
      setStep(3);
    }
  }

  function handleRemote(value) {
    setFormData((prev) => ({
      ...prev,
      remote: value,
    }));
  }

  function handleAddSkill(e) {
    const { name, value } = e.target;
    const index = parseInt(name.replace("skill", ""), 10) - 1;

    setFormData((prev) => {
      const newSkills = [...prev.skills];
      newSkills[index] = value;
      return {
        ...prev,
        skills: newSkills,
      };
    });
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
                  name="collegeExperience"
                  value={formData.collegeExperience}
                  onChange={handleChange}
                  className="bg-background py-2 mb-4 rounded-lg w-full"
                />
              </div>
            </div>
          </>
        )}
        {step === 3 && (
          <>
            <div>
              <div>
                <label className="block mb-4">Job Title</label>
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  className="bg-background py-2 mb-4 rounded-lg w-full"
                />
              </div>
              <div>
                <label className="block mb-4">Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="bg-background py-2 mb-4 rounded-lg w-full"
                />
              </div>
              <div>
                <label className="block mb-4">Is this Position Remote?</label>
                <div className="flex items-center space-x-8">
                  <button
                    type="button"
                    onClick={() => handleRemote(true)}
                    className="bg-background p-6 rounded-lg"
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    onClick={() => handleRemote(false)}
                    className="bg-background p-6 rounded-lg"
                  >
                    No
                  </button>
                </div>
              </div>
              <div>
                <label className="block mb-4">Paste the Job Description</label>
                <textarea
                  type="text"
                  name="jobDescription"
                  value={formData.jobDescription}
                  onChange={handleChange}
                  className="bg-background py-2 mb-4 rounded-lg w-full"
                />
              </div>
            </div>
          </>
        )}
        {step === 4 && (
          <>
            <div className="block mb-2">
              What top skills do you have for this job?
            </div>
            <Skill
              title={"Skill 1"}
              name={"skill1"}
              onHandleAddSkill={handleAddSkill}
              value={formData.skills[0] || ""}
            />
            <Skill
              title={"Skill 2"}
              name={"skill2"}
              onHandleAddSkill={handleAddSkill}
              value={formData.skills[1] || ""}
            />
            <Skill
              title={"Skill 3"}
              name={"skill3"}
              onHandleAddSkill={handleAddSkill}
              value={formData.skills[2] || ""}
            />
          </>
        )}
        {step === 5 && (
          <>
            <div>Extra Credit</div>
            <div>
              <label className="block mb-4">
                Why is this job right for you
              </label>
              <textarea
                type="text"
                name="rightFit"
                value={formData.rightFit}
                onChange={handleChange}
                className="bg-background py-2 mb-4 rounded-lg w-full"
              />
            </div>
            <div>
              <label className="block mb-4">
                how do you envision contributing to the company's success?
              </label>
              <textarea
                type="text"
                name="companyContributions"
                value={formData.companyContributions}
                onChange={handleChange}
                className="bg-background py-2 mb-4 rounded-lg w-full"
              />
            </div>
          </>
        )}

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
          {step < 6 && (
            <button
              type="button"
              onClick={handleNext}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Next
            </button>
          )}
          {step === 6 && (
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
