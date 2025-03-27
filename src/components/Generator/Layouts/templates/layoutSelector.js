"use client";
import { useSelector } from "react-redux";
import LayoutA from "./styleA";
import LayoutB from "./styleB";
import { headerStyles } from "./headerStyles";

export default function LayoutSelector({ onHandleInput }) {
  const { jobTitle } = useSelector((state) => state.coverLetterForm);
  const { header } = useSelector((state) => state.header);
  const selectedTemplate = useSelector((state) => state.template.selected);

  const style = headerStyles[selectedTemplate];

  // Build your header HTML string. Adjust class names as needed.
  const headerContent = `
      <div class="${style.container}">
        <h1 class="${style.title}">${header.firstName} ${header.lastName}</h1>
        <h2 class="${style.subtitle}">${jobTitle}</h2>
        <p class="${style.contact}">${header.email} | ${header.phoneNumber}</p>
      </div>
    `;

  switch (selectedTemplate) {
    case "B":
      return (
        <LayoutB
          onHeaderContent={headerContent}
          onHandleInput={onHandleInput}
        />
      );
    case "A":
    default:
      return (
        <LayoutA
          onHeaderContent={headerContent}
          onHandleInput={onHandleInput}
        />
      );
  }
}
