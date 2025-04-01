"use client";
import { updateField } from "@/store/slices/coverLetterFormSlice";
import { updateHeaderField } from "@/store/slices/headerSlice";
import { AcroFormField } from "jspdf";
import { useDispatch, useSelector } from "react-redux";

export default function PersonalHeaderInput() {
  const dispatch = useDispatch();
  const { firstName, lastName, email, phoneNumber } = useSelector(
    (state) => state.header
  );

  function formatPhoneNumber(input) {
    const cleaned = input.replace(/\D/g, "");
    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);

    if (!match) return input;

    let formatted = "";
    if (match[1]) formatted += match[1];
    if (match[2]) formatted += `-${match[2]}`;
    if (match[3]) formatted += `-${match[3]}`;

    return formatted;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    const capitalizeFields = ["firstName", "lastName"];
    let formattedValue = value;

    if (capitalizeFields.includes(name)) {
      formattedValue =
        value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    }

    if (name === "phoneNumber") {
      formattedValue = formatPhoneNumber(value);
    }

    dispatch(updateHeaderField({ field: name, value: formattedValue }));
    dispatch(updateField({ field: name, value: formattedValue }));
  }

  return (
    <fieldset>
      <legend className="text-left text-lg font-semibold mb-4">
        Personal information for header
      </legend>
      <div>
        <div>
          <label htmlFor="firstName" className="text-sm text-gray-400">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={handleChange}
            className="bg-background py-2 mb-4 rounded-lg w-full pl-4"
            required
          />
        </div>
        <div>
          <label htmlFor="lastName" className="text-sm text-gray-400">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={handleChange}
            className="bg-background py-2 mb-4 rounded-lg w-full pl-4"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="text-sm text-gray-400">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            className="bg-background py-2 mb-4 rounded-lg w-full pl-4"
            required
          />
        </div>
        <div>
          <label htmlFor="phoneNumber" className="text-sm text-gray-400">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handleChange}
            className="bg-background py-2 mb-4 rounded-lg w-full pl-4"
            required
          />
        </div>
      </div>
    </fieldset>
  );
}
