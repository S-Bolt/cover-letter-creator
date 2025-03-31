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
    dispatch(updateField({ field: name, value }));
  }

  function handleRemote(answer) {
    dispatch(updateField({ field: "remote", value: answer }));
  }

  console.log(remote);
  return (
    <>
      <div>
        <h2 className="text-center text-lg mb-4 font-semibold">
          Enter informtion on job you're applying to.
        </h2>
        <div className="sm:flex sm:flex-row space-x-4">
          <div>
            <label className="block text-sm text-gray-400">Job Title</label>
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
            <label className="block text-sm text-gray-400">Company Name</label>
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
          <label className="block text-sm text-gray-400">
            Paste the Job Description
          </label>
          <textarea
            type="text"
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
              Is this Position Remote?
            </label>
            <div className="flex items-center space-x-6">
              <button
                type="button"
                onClick={() => handleRemote(true)}
                className="bg-gray-400 p-3 rounded-full w-48 hover:bg-gray-500 active:bg-gray-600 transition cursor-pointer"
              >
                <div className="space-x-3 text-xl">
                  <span>✅</span>
                  <span>YES</span>
                </div>
              </button>
              <button
                type="button"
                onClick={() => handleRemote(false)}
                className="bg-gray-400 p-3 rounded-full w-48 hover:bg-gray-500 active:bg-gray-600 transition cursor-pointer"
              >
                <div className="space-x-3 text-xl">
                  <span>❌</span>
                  <span>No</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
