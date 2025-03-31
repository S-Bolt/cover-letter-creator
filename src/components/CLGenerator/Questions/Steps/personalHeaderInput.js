"use client";
import { updateField } from "@/store/slices/coverLetterFormSlice";
import { updateHeaderField } from "@/store/slices/headerSlice";
import { useDispatch, useSelector } from "react-redux";

export default function PersonalHeaderInput() {
  const dispatch = useDispatch();
  const { firstname, lastName, email, phoneNumber } = useSelector(
    (state) => state.header
  );

  function handleChange(e) {
    const { name, value } = e.target;
    dispatch(updateHeaderField({ field: name, value }));
    dispatch(updateField({ field: name, value }));
  }

  return (
    <div>
      <h2 className="text-left text-lg font-semibold mb-4">
        Personal information for header
      </h2>
      <div>
        <div>
          <label htmlFor="firstName" className="text-sm text-gray-400">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstname}
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
            type="text"
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
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handleChange}
            className="bg-background py-2 mb-4 rounded-lg w-full pl-4"
            required
          />
        </div>
      </div>
    </div>
  );
}
