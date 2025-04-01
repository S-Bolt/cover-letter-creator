/* eslint-disable react/no-unescaped-entities */
"use client";
import { useDispatch, useSelector } from "react-redux";
import { updateField } from "@/store/slices/coverLetterFormSlice";

export default function ExtraInput() {
  const dispatch = useDispatch();
  const { rightFit, companyContributions, yearsExperience } = useSelector(
    (state) => state.coverLetterForm
  );

  function handleChange(e) {
    const { name, value } = e.target;
    dispatch(updateField({ field: name, value }));
  }

  return (
    <>
      <fieldset>
        <legend className="mb-4 text-lg font-semibold">
          Additional Context
        </legend>
        <div className="text-left max-w-lg">
          {" "}
          {/* Years of Experience */}
          <div className="mb-4">
            <label
              htmlFor="yearsExperience"
              className="block text-sm text-gray-400 pl-1 mb-1"
            >
              Years of experience?
            </label>
            <select
              id="yearsExperience"
              name="yearsExperience"
              className="bg-background py-2 rounded-lg w-full border border-gray-300 px-3"
              value={yearsExperience}
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
          {/* Why is this job a good fit? */}
          <div className="mb-4">
            <label
              htmlFor="rightFit"
              className="block text-sm text-gray-400 pl-1 mb-1"
            >
              Share 1–2 sentences about what excites you about this role.
            </label>
            <textarea
              id="rightFit"
              name="rightFit"
              value={rightFit}
              onChange={handleChange}
              className="bg-background py-2 rounded-lg w-full border border-gray-300 px-3"
              rows="3"
            />
          </div>
          {/* Contributions to the Company */}
          <div className="mb-4">
            <label
              htmlFor="companyContributions"
              className="block text-sm text-gray-400 pl-1 mb-1"
            >
              How do you envision contributing to the company's success?
            </label>
            <textarea
              id="companyContributions"
              name="companyContributions"
              value={companyContributions}
              onChange={handleChange}
              className="bg-background py-2 rounded-lg w-full border border-gray-300 px-3"
              rows="3"
            />
          </div>
        </div>
      </fieldset>
    </>
  );
}
