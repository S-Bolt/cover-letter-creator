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
      <div>Extra Credit</div>
      <div>
        <label className="block mb-4">Why is this job right for you?</label>
        <textarea
          type="text"
          name="rightFit"
          value={rightFit}
          onChange={handleChange}
          className="bg-background py-2 mb-4 rounded-lg w-full"
        />

        <label className="block mb-4">
          How do you envision contributing to the company's success?
        </label>
        <textarea
          type="text"
          name="companyContributions"
          value={companyContributions}
          onChange={handleChange}
          className="bg-background py-2 mb-4 rounded-lg w-full"
        />
        <div className="flex flex-row items-center space-x-4">
          <label className="block ">Years of experience?</label>
          <select
            type="text"
            name="yearsExperience"
            className="bg-background py-2  rounded-lg"
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
      </div>
    </>
  );
}
