"use client";
import { useSelector } from "react-redux";
export default function Header() {
  const { firstName, lastName, phoneNumber, email, jobTitle } = useSelector(
    (state) => state.coverLetterForm
  );
  return (
    <div className="document-header">
      <h1>
        {firstName} {lastName}
      </h1>
      <h2>{jobTitle}</h2>
      <p>
        {email} | {phoneNumber}
      </p>
    </div>
  );
}
