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
        <div className="sm:flex sm:flex-row space-x-4">
          <div>
            <label className="block mb-4">Job Title</label>
            <input
              type="text"
              name="jobTitle"
              value={jobTitle}
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
              value={companyName}
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
            value={jobDescription}
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
                className={`p-6 rounded-lg ${
                  remote === true ? "bg-primary" : "bg-background"
                }`}
              >
                Yes
              </button>
              <button
                type="button"
                onClick={() => handleRemote(false)}
                className={`p-6 rounded-lg ${
                  remote === false ? "bg-primary" : "bg-background"
                }`}
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
