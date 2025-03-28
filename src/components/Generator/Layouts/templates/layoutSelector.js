"use client";
import { useSelector } from "react-redux";
import LayoutA from "./styleA";
import LayoutB from "./styleB";

export default function LayoutSelector() {
  const selectedTemplate = useSelector((state) => state.template.selected);
  const coverLetter = useSelector((state) => state.coverLetter.value);

  switch (selectedTemplate) {
    case "B":
      return <LayoutB content={coverLetter} />;
    case "A":
    default:
      return <LayoutA content={coverLetter} />;
  }
}
