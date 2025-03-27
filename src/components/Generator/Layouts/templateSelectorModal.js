"use client";
import { useDispatch, useSelector } from "react-redux";
import { setTemplate } from "@/store/slices/templateSlice";
import { XMarkIcon } from "@heroicons/react/24/solid";

export default function TemplateSelectorModal({ onClose }) {
  const dispatch = useDispatch();
  const selectedTemplate = useSelector((state) => state.template.selected);

  function handleTemplateSelect(templateId) {
    dispatch(setTemplate(templateId));
    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-80">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Select Template</h2>
          <button onClick={onClose}>
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="flex flex-col space-y-4">
          <button
            className={`p-2 border rounded ${
              selectedTemplate === "A" ? "bg-gray-200" : "bg-white"
            }`}
            onClick={() => handleTemplateSelect("A")}
          >
            Template A
          </button>
          <button
            className={`p-2 border rounded ${
              selectedTemplate === "B" ? "bg-gray-200" : "bg-white"
            }`}
            onClick={() => handleTemplateSelect("B")}
          >
            Template B
          </button>
          {/* Add more templates as needed */}
        </div>
      </div>
    </div>
  );
}
