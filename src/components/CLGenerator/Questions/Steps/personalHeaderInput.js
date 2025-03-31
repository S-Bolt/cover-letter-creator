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
      <h2>Personal information for header</h2>
      <div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstname}
              onChange={handleChange}
              className="bg-background py-2 mb-4 rounded-lg w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={handleChange}
              className="bg-background py-2 mb-4 rounded-lg w-full"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              className="bg-background py-2 mb-4 rounded-lg w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChange}
              className="bg-background py-2 mb-4 rounded-lg w-full"
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
}
