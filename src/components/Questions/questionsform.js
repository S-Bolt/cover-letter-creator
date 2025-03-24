/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react";
import Skill from "./skill";
import { useDispatch } from "react-redux";
import { setCoverLetter } from "@/store/slices/generatedCoverLetterSlice";
import { useRouter } from "next/navigation";

export default function QuestionsForm() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    jobTitle: "",
    companyName: "",
    jobDescription: "",
    remote: null,
    skills: ["", "", "", "", ""],
    traits: [],
    yearsExperience: 0,
    rightFit: "",
    companyContributions: "",
    useEducation: null,
    education: "",
    school: "",
    major: "",
    collegeExperience: "",
    tone: "",
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
    "Sociable",
    "Flexible",
    "Determined",
    "Problem-Solving",
    "Independent",
    "Goal-Oriented",
    "Dependable",
    "Ambitious",
    "Confident",
  ];

  const toneOptions = [
    {
      tone: "Professional",
      prompt:
        "Write the cover letter in a professional and formal tone. Emphasize courtesy, respect, and a polished demeanor. Use refined language and a structured style suitable for corporate or traditional industries.",
    },
    {
      tone: "Confident",
      prompt:
        "Write the cover letter in a confident and assertive tone. Highlight your skills and leadership abilities, clearly articulating your value and unique contributions. The language should be direct and self-assured.",
    },
    {
      tone: "Friendly",
      prompt:
        "Write the cover letter in a friendly and approachable tone. Balance professionalism with warmth and a personable style. The language should feel welcoming and collaborative, ideal for companies with a casual culture.",
    },
    {
      tone: "Enthusiastic",
      prompt:
        "Write the cover letter in an enthusiastic and energetic tone. Convey excitement and passion for the role using lively and dynamic language. This tone should help you stand out in creative or innovative fields.",
    },
    {
      tone: "Creative",
      prompt:
        "Write the cover letter in a creative and innovative tone. Emphasize originality and out-of-the-box thinking while maintaining professionalism. Use imaginative language that reflects a fresh, modern perspective.",
    },
    {
      tone: "Oozing RIZZ",
      prompt:
        "Write a cover letter in a 'Oozing RIZZ' tone that’s as bold and irreverent as it is hilarious. Imagine a marketing superhero who combines street smarts with Silicon Valley savvy. The letter should burst with charisma and playful exaggeration—think Gary Vee meets the Kool-Aid Man. Use vivid, unexpected analogies (e.g., 'I’ll have your website ranking higher than Aunt Carol’s lasagna recipe on Pinterest') and punchy one-liners that make the reader laugh while they’re impressed. The cover letter should be unapologetically confident, breaking the conventional mold with wit and energy that leaves jaws dropping. Be creative, fun, and totally unforgettable.",
    },
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

  function toggleTrait(trait) {
    const currentTraits = formData.traits || [];
    if (currentTraits.includes(trait)) {
      setFormData({
        ...formData,
        traits: currentTraits.filter((t) => t !== trait),
      });
    } else {
      if (currentTraits.length < 3) {
        setFormData({
          ...formData,
          traits: [...currentTraits, trait],
        });
      } else {
        alert("You can only select 3 traits");
      }
    }
  }

  function handleSelectTone(selectedTone) {
    setFormData((prev) => ({
      ...prev,
      tone: selectedTone,
    }));
  }

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
        body: JSON.stringify(formData),
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
      console.error(error);
      setError(error.message);
      setLoading(false);
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
      <h2 className="text-center m-8">Step {step} of 8</h2>
      <form
        className="bg-gray-400 rounded-xl p-4 flex flex-col items-center"
        onSubmit={handleSubmit}
      >
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
              <div className="sm:flex sm:flex-row space-x-4">
                <div>
                  <label className="block mb-4">Job Title</label>
                  <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    className="bg-background py-2 mb-4 rounded-lg w-full"
                    required
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
                    required
                  />
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
                  required
                />
              </div>
              <div className="flex justify-center mb-4">
                <div>
                  <label className="block mb-4">Is this Position Remote?</label>
                  <div className="flex items-center space-x-8">
                    <button
                      type="button"
                      onClick={() => handleRemote(true)}
                      className={
                        formData.remote === true
                          ? `bg-primary p-6 rounded-lg`
                          : `bg-background p-6 rounded-lg`
                      }
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      onClick={() => handleRemote(false)}
                      className={
                        formData.remote === false
                          ? `bg-primary p-6 rounded-lg`
                          : `bg-background p-6 rounded-lg`
                      }
                    >
                      No
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {step === 4 && (
          <>
            <div>
              <h2 className="block mb-2">
                What top skills do you have for this job?
              </h2>
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
            </div>
          </>
        )}
        {step === 5 && (
          <>
            <div>
              <h2 className="mb-4 text-center">
                Select 3 traits that describe you
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 sm:gap-4">
                {traitsOptions.map((trait, index) => (
                  <button
                    type="button"
                    key={index}
                    onClick={() => toggleTrait(trait)}
                    className={`text-xs sm:text-base px-1 sm:px-4 py-2 border rounded-lg transition ${
                      formData.traits && formData.traits.includes(trait)
                        ? "bg-blue-500 text-white border-blue-500"
                        : "bg-white text-black"
                    }`}
                  >
                    {trait}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
        {step === 6 && (
          <>
            <div>Extra Credit</div>
            <div>
              <label className="block mb-4">
                Why is this job right for you?
              </label>
              <textarea
                type="text"
                name="rightFit"
                value={formData.rightFit}
                onChange={handleChange}
                className="bg-background py-2 mb-4 rounded-lg w-full"
              />

              <label className="block mb-4">
                How do you envision contributing to the company's success?
              </label>
              <textarea
                type="text"
                name="companyContributions"
                value={formData.companyContributions}
                onChange={handleChange}
                className="bg-background py-2 mb-4 rounded-lg w-full"
              />
              <div className="flex flex-row items-center space-x-4">
                <label className="block ">Years of experience?</label>
                <select
                  type="text"
                  name="yearsExperience"
                  className="bg-background py-2  rounded-lg"
                  value={formData.yearsExperience}
                  onChange={handleChange}
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="1-3">1-3</option>
                  <option value="4-6">4-6</option>
                  <option value="7-10">7-10</option>
                  <option value="10-15">10-15</option>
                  <option value="15+">15+</option>
                </select>
              </div>
            </div>
          </>
        )}
        {step === 7 && (
          <>
            <h2>Select a tone</h2>
            <div className="grid grid-cols-3 gap-4">
              {toneOptions.map((tone, index) => (
                <button
                  type="button"
                  key={index}
                  onClick={() => handleSelectTone(tone)}
                  className={`text-xs sm:text-base px-1 sm:px-4 py-2 border rounded-lg transition ${
                    formData.tone.tone === tone.tone
                      ? "bg-blue-500 text-white border-blue-500"
                      : "bg-white text-black"
                  }`}
                >
                  {tone.tone}
                </button>
              ))}
            </div>
          </>
        )}
        {step === 8 && <></>}
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
          {step < 7 && (
            <button
              type="button"
              onClick={handleNext}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Next
            </button>
          )}
          {step === 7 && (
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
