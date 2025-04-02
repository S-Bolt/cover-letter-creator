/* eslint-disable react/no-unescaped-entities */
"use client";
import { useDispatch, useSelector } from "react-redux";
import { updateField } from "@/store/slices/coverLetterFormSlice";

export default function JobInput() {
  const dispatch = useDispatch();
  const { jobTitle, companyName, jobDescription, remote } = useSelector(
    (state) => state.coverLetterForm
  );

  function handleChange(e) {
    const { name, value } = e.target;

    const capitalizeFields = ["jobTitle", "companyName"];

    const formattedValue = capitalizeFields.includes(name)
      ? value.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase())
      : value;

    dispatch(updateField({ field: name, value: formattedValue }));
  }

  function handleRemote(answer) {
    dispatch(updateField({ field: "remote", value: answer }));
  }

  return (
    <>
      <fieldset>
        <legend className="text-center text-lg mb-4 font-semibold">
          Enter informtion on job you're applying to.
        </legend>
        <div className="sm:flex sm:flex-row space-x-4">
          <div>
            <label htmlFor="jobTitle" className="block text-sm steps-form">
              Job Title
            </label>
            <input
              type="text"
              name="jobTitle"
              value={jobTitle}
              onChange={handleChange}
              className="bg-background py-2 mb-4 rounded-lg w-full pl-4"
              required
            />
          </div>
          <div>
            <label htmlFor="companyName" className="block text-sm steps-form">
              Company Name
            </label>
            <input
              type="text"
              name="companyName"
              value={companyName}
              onChange={handleChange}
              className="bg-background py-2 mb-4 rounded-lg w-full pl-4"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="jobDescription" className="block text-sm steps-form">
            Paste the Job Description
          </label>
          <textarea
            name="jobDescription"
            value={jobDescription}
            onChange={handleChange}
            className="bg-background py-2 mb-4 rounded-lg w-full pl-4"
            required
          />
        </div>
        <div className="flex justify-center mb-4">
          <div className="flex flex-col items-center">
            <label className="block mb-4 text-lg font-semibold">
              Is this position remote?
            </label>
            <div className="flex items-center space-x-6">
              <button
                type="button"
                aria-pressed={remote === true}
                aria-label="Yes, this position is remote"
                onClick={() => handleRemote(true)}
                className={`p-3 rounded-full w-48 transition cursor-pointer ${
                  remote === true ? "bg-primary" : "bg-steps-button"
                }`}
              >
                <div className="space-x-3 text-xl">
                  <span>✅</span>
                  <span>Yes</span>
                </div>
              </button>
              <button
                type="button"
                aria-pressed={remote === false}
                aria-label="No, this position is not remote"
                onClick={() => handleRemote(false)}
                className={`p-3 rounded-full w-48 transition cursor-pointer ${
                  remote === false ? "bg-primary" : "bg-steps-button"
                }`}
              >
                <div className="space-x-3 text-xl">
                  <span>❌</span>
                  <span>No</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </fieldset>
    </>
  );
}
