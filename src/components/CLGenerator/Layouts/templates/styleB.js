"use client";
import { useSelector } from "react-redux";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { PhoneIcon } from "@heroicons/react/24/solid";

export default function LayoutB({ content, onCurrentDate }) {
  const { firstName, lastName, email, phoneNumber } = useSelector(
    (state) => state.header
  );
  const { jobTitle, companyName } = useSelector(
    (state) => state.coverLetterForm
  );
  const { primaryColor, secondaryColor } = useSelector((state) => state.color);

  return (
    <div className="layout-b grid grid-cols-[1fr_2fr] grid-rows-[auto_1fr]">
      {/* Row 1 (Header) - Centered Name and Job Title */}
      <div
        style={{ background: secondaryColor, borderBottomColor: primaryColor }}
        className="col-span-2 flex flex-col items-center text-center py-6 border-b"
      >
        <h1 style={{ color: primaryColor }} className="text-5xl">
          {firstName} {lastName}
        </h1>
        <h2 className="text-2xl">{jobTitle}</h2>
      </div>

      {/* Row 2, Column 1: Contact Info */}
      <div
        style={{ borderColor: primaryColor }}
        className="flex flex-col space-y-2 border-r border-r-gray-200"
      >
        <div className="my-8 ml-8">
          <p>{onCurrentDate}</p>
          <p>{companyName}</p>
        </div>
        <p className="flex items-center space-x-2 my-2 ml-8">
          <EnvelopeIcon className="h-5 w-5 text-gray-700" />
          <span>{email}</span>
        </p>
        <p className="flex items-center space-x-2 my-2 ml-8">
          <PhoneIcon className="h-5 w-5 text-gray-700" />
          <span>{phoneNumber} </span>
        </p>
      </div>

      {/* Row 2, Column 2: Cover Letter Content */}
      <div className="col-span-1 mx-4 mt-8">
        {/* LETTER */}
        <div>{content}</div>
      </div>
    </div>
  );
}
