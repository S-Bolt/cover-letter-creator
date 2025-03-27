"use client";
import { updateHeaderField } from "@/store/slices/headerSlice";
import { useDispatch, useSelector } from "react-redux";

export default function PersonalHeaderInput() {
  const dispatch = useDispatch();
  const { header } = useSelector((state) => state.header);

  function handleChange(e) {
    const { name, value } = e.target;
    dispatch(updateHeaderField({ field: name, value }));
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
              value={header.firstname}
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
              value={header.lastName}
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
              value={header.email}
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
              value={header.phoneNumber}
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
