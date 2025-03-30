import { XMarkIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedFontStyle } from "@/store/slices/fontSlice";

export default function FontSelectorModal({ onClose }) {
  const dispatch = useDispatch();
  const selectedFont = useSelector((state) => state.font.selectedFontStyle);

  const fonts = [
    { name: "Sans-serif", value: "sans-serif" },
    { name: "Serif", value: "serif" },
    { name: "Monospace", value: "monospace" },
    { name: "Courier New", value: "'Courier New', monospace" },
    { name: "Arial", value: "Arial, sans-serif" },
    { name: "Times New Roman", value: "'Times New Roman', serif" },
    { name: "Montserrat", value: "'Montserrat', sans-serif" },
    { name: "Roboto", value: "'Roboto', sans-serif" },
  ];
  return (
    <div className="fixed inset-0 bg-black/90  flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Choose a Font</h2>
          <button onClick={onClose}>
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        {/* Dropdown for Font Selection */}
        <select
          className="w-full p-2 border rounded-md mb-4"
          value={selectedFont}
          onChange={(e) => dispatch(setSelectedFontStyle(e.target.value))}
        >
          {fonts.map((font) => (
            <option key={font.name} value={font.value}>
              {font.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
