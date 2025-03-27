"use client";
import CoverLetterEditor from "./coverLetterEditor";
import { useSelector } from "react-redux";
import HeaderEditor from "./headerEditor";
import LayoutSelector from "./templates/layoutSelector";

export default function BaseLayout({ onHandleInput }) {
  const selectedTemplate = useSelector((state) => state.template.selected);
  const coverLetter = useSelector((state) => state.coverLetter.value);
  const coverLetterForm = useSelector((state) => state.coverLetterForm);
  const { headerData } = useSelector((state) => state.header);

  return (
    <div className="document-container h-3/4 ">
      <div className="document-page  bg-white">
        <LayoutSelector onHandleInput={onHandleInput} />
      </div>
    </div>
  );
}
