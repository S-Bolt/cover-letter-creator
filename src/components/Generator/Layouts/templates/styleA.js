"use client";
import { useSelector } from "react-redux";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { PhoneIcon } from "@heroicons/react/24/solid";

export default function LayoutA({ content, onCurrentDate }) {
  const { firstName, lastName, email, phoneNumber } = useSelector(
    (state) => state.header
  );
  const { jobTitle, companyName } = useSelector(
    (state) => state.coverLetterForm
  );

  return (
    <div className="layout-a m-10">
      {/*HEADER */}
      <div className="flex flex-col text-center">
        <h1 className="text-5xl  mb-2">
          {firstName} {lastName}
        </h1>
        <h2 className="text-2xl mb-8 ">{jobTitle}</h2>
        <div className="border border-black"></div>
        <p className="flex items-center justify-center space-x-2 my-2">
          <EnvelopeIcon className="h-5 w-5 text-gray-700" />
          <span>{email}</span>
          <PhoneIcon className="h-5 w-5 text-gray-700" />
          <span>{phoneNumber}</span>
        </p>
        <div className="border border-black"></div>
      </div>
      {/*INFO */}
      <div className="my-8">
        <div>{onCurrentDate}</div>
        <div>{companyName}</div>
      </div>
      {/*LETTER */}
      <p>{content}</p>
    </div>
  );
}
