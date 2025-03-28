"use client";
import { useSelector } from "react-redux";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { PhoneIcon } from "@heroicons/react/24/solid";

export default function LayoutB({ content }) {
  const { coverLetter } = useSelector((state) => state.coverLetter);
  const { firstName, lastName, email, phoneNumber } = useSelector(
    (state) => state.header
  );
  const { jobTitle, companyName } = useSelector(
    (state) => state.coverLetterForm
  );

  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="layout-b  grid grid-cols-[1fr_2fr] grid-rows-[auto_1fr]">
      {/* Row 1, Column 1: Name and Position */}
      <div className="flex flex-col text-left bg-gray-200 ">
        <h1 className="text-4xl mt-8 ml-8">
          {firstName} {lastName}
        </h1>
        <h2 className="text-xl ml-8 mb-8 ">{jobTitle}</h2>
      </div>

      {/* Row 1, Column 2: Empty Space */}
      <div></div>
      {/* Row 2, Column 1: Contact Info */}
      <div className="flex flex-col space-y-2 border-r border-r-gray-200 ">
        <div className="my-8 ml-8">
          <p>{currentDate}</p>
          <p>{companyName}</p>
        </div>
        <p className="flex items-center  space-x-2 my-2 ml-8">
          <EnvelopeIcon className="h-5 w-5 text-gray-700" />
          <span>{email}</span>
        </p>
        <p className="flex items-center  space-x-2 my-2 ml-8">
          <PhoneIcon className="h-5 w-5 text-gray-700" />
          <span>{phoneNumber} </span>
        </p>
      </div>

      {/* Row 2, Column 2: Cover Letter Content */}
      <div className="col-span-1 ml-4">
        {/*LETTER */}
        <div>{content}</div>
      </div>
    </div>
  );
}
