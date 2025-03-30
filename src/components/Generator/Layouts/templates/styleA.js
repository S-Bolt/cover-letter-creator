"use client";
import { useSelector } from "react-redux";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { PhoneIcon } from "@heroicons/react/24/solid";

export default function LayoutA({ content }) {
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

  // Ensure paragraphs in `content` have spacing
  const formattedContent = content
    .split("\n")
    .filter((paragraph) => paragraph.trim() !== "")
    .map((paragraph, index) => (
      <p key={index} className="mb-4 leading-relaxed">
        {paragraph}
      </p>
    ));

  return (
    <div className="layout-a m-10">
      {/*HEADER */}
      <div className="flex flex-col text-center">
        <h1 className="text-5xl  mb-2">
          {/* {firstName} {lastName} */}
          Sam Bolton
        </h1>
        <h2 className="text-2xl mb-8 ">
          {/* {jobTitle} */}
          Front End Developer
        </h2>
        <div className="border border-black"></div>
        <p className="flex items-center justify-center space-x-2 my-2">
          <EnvelopeIcon className="h-5 w-5 text-gray-700" />
          {/* {email} {phoneNumber} */}
          <span>sambolton.kw@gmail.com</span>
          <PhoneIcon className="h-5 w-5 text-gray-700" />
          <span>7038018364</span>
        </p>
        <div className="border border-black"></div>
      </div>
      {/*INFO */}
      <div className="my-8">
        <div>{currentDate}</div>
        <div>{companyName}</div>
      </div>
      {/*LETTER */}
      <p>{formattedContent}</p>
    </div>
  );
}
