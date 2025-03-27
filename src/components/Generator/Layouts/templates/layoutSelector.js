// LayoutSelector.jsx
"use client";
import { useSelector } from "react-redux";
import LayoutA from "./styleA";
import LayoutB from "./styleB";

export default function LayoutSelector({ onHandleInput }) {
  const selectedTemplate = useSelector((state) => state.template.selected);

  switch (selectedTemplate) {
    case "B":
      return <LayoutB onHandleInput={onHandleInput} />;
    case "A":
    default:
      return <LayoutA onHandleInput={onHandleInput} />;
  }
}
