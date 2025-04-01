/* eslint-disable react/no-unescaped-entities */
"use client";
import { useDispatch, useSelector } from "react-redux";
import { updateField } from "@/store/slices/coverLetterFormSlice";

export default function EducationInput() {
  const dispatch = useDispatch();
  const { education, school, studyField } = useSelector(
    (state) => state.coverLetterForm
  );

  function handleChange(e) {
    const { name, value } = e.target;

    const capitalizeFields = ["school", "studyField"];

    let formattedValue = capitalizeFields.includes(name)
      ? value.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase())
      : value;

    dispatch(updateField({ field: name, value: formattedValue }));
  }

  return (
    <>
      <fieldset>
        <div className="">
          <label htmlFor="education" className="block text-sm text-gray-400">
            Highest level of education?
          </label>
          <select
            name="education"
            id="education"
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
          <label htmlFor="school" className="block text-sm text-gray-400">
            College
          </label>
          <input
            id="school"
            type="text"
            name="school"
            value={school}
            onChange={handleChange}
            className="bg-background py-2 mb-2 rounded-lg w-78 pl-4"
          />
        </div>
        <div>
          <label htmlFor="studyField" className="block text-sm text-gray-400">
            Field of Study
          </label>
          <input
            type="text"
            name="studyField"
            value={studyField}
            onChange={handleChange}
            className="bg-background py-2 mb-4 rounded-lg w-78 pl-4"
          />
        </div>
      </fieldset>
    </>
  );
}
