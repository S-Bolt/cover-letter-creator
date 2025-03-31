/* eslint-disable react/no-unescaped-entities */
"use client";
import { useDispatch, useSelector } from "react-redux";
import { updateField } from "@/store/slices/coverLetterFormSlice";

export default function EducationInput() {
  const dispatch = useDispatch();
  const { education, school, major } = useSelector(
    (state) => state.coverLetterForm
  );

  function handleChange(e) {
    const { name, value } = e.target;
    dispatch(updateField({ field: name, value }));
  }

  return (
    <>
      <div>
        <div className="">
          <label className="block text-sm text-gray-400">
            Highest level of education?
          </label>
          <select
            type="text"
            name="education"
            className="bg-background py-2 mb-2 rounded-lg w-78 pl-3"
            value={education}
            onChange={handleChange}
          >
            <option value="">Select your education level</option>
            <option value="high school diploma">High School Diploma</option>
            <option value="associate's degree">Associate Degree</option>
            <option value="bachelor's degree">Bachelor's Degree</option>
            <option value="master's degree">Master's Degree</option>
            <option value="doctorate">Doctorate</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-gray-400">College</label>
          <input
            type="text"
            name="school"
            value={school}
            onChange={handleChange}
            className="bg-background py-2 mb-2 rounded-lg w-78 pl-4"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-400">Major</label>
          <input
            type="text"
            name="major"
            value={major}
            onChange={handleChange}
            className="bg-background py-2 mb-4 rounded-lg w-78 pl-4"
          />
        </div>
      </div>
    </>
  );
}
