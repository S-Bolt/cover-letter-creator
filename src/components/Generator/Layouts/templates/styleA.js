"use client";
import { useSelector } from "react-redux";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { PhoneIcon } from "@heroicons/react/24/solid";

export default function LayoutA({ content, onCurrentDate }) {
  const { firstName, lastName, email, phoneNumber } = useSelector(
    (state) => state.header
  );
  const { primaryColor, secondaryColor } = useSelector((state) => state.color);
  const { jobTitle, companyName } = useSelector(
    (state) => state.coverLetterForm
  );
  const selectedFont = useSelector((state) => state.font.selectedFontStyle);

  return (
    <div
      style={{
        backgroundColor: secondaryColor,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        fontFamily: selectedFont,
      }}
      className="layout-a min-h-full"
    >
      {/*HEADER */}
      <div className="flex flex-col text-center ">
        <h1 style={{ color: primaryColor }} className="text-5xl  mb-2 m-10">
          {firstName} {lastName}
        </h1>
        <h2 className="text-2xl mb-8 ">{jobTitle}</h2>
        <div
          style={{ borderColor: primaryColor }}
          className="border mx-10"
        ></div>
        <p className="flex items-center justify-center space-x-2 my-2">
          <EnvelopeIcon className="h-5 w-5 text-gray-700" />
          <span>{email}</span>
          <PhoneIcon className="h-5 w-5 text-gray-700" />
          <span>{phoneNumber}</span>
        </p>
        <div
          style={{ borderColor: primaryColor }}
          className="border mx-10"
        ></div>
      </div>
      {/*INFO */}
      <div className="my-8 mx-10">
        <div>{onCurrentDate}</div>
        <div>{companyName}</div>
      </div>
      {/*LETTER */}
      <div className="mx-10 flex-grow">
        <p>{content}</p>
      </div>
    </div>
  );
}
