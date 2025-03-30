"use client";
import { useSelector } from "react-redux";
import LayoutA from "./styleA";
import LayoutB from "./styleB";

export default function LayoutSelector() {
  const selectedTemplate = useSelector((state) => state.template.selected);
  const coverLetter = useSelector((state) => state.coverLetter.value);

  // Ensure paragraphs in `content` have spacing
  const formattedContent = coverLetter
    .split("\n")
    .filter((paragraph) => paragraph.trim() !== "")
    .map((paragraph, index) => (
      <p key={index} className="mb-4 leading-relaxed">
        {paragraph}
      </p>
    ));

  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  switch (selectedTemplate) {
    case "B":
      return <LayoutB content={formattedContent} onCurrentDate={currentDate} />;
    case "A":
    default:
      return <LayoutA content={formattedContent} onCurrentDate={currentDate} />;
  }
}
