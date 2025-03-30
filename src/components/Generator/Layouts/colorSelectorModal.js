"use client";
import { useDispatch, useSelector } from "react-redux";
import { setPrimaryColor, setSecondaryColor } from "@/store/slices/colorSlice";
import { XMarkIcon } from "@heroicons/react/24/solid";
import ColorButton from "./templates/colorButton";

export default function ColorSelectorModal({ onClose }) {
  const dispatch = useDispatch();
  const { primaryColor, secondaryColor } = useSelector((state) => state.color);

  function handleColorSelection(e) {
    const outerColor = e.currentTarget.dataset.outer;
    const innerColor = e.currentTarget.dataset.inner;

    dispatch(setPrimaryColor(innerColor));
    dispatch(setSecondaryColor(outerColor));
  }

  return (
    <div className="fixed inset-0 bg-black/90  flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Select Colors</h2>
          <button onClick={onClose}>
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        <ColorButton
          onClick={handleColorSelection}
          outerColor={"bg-white"}
          outerValue={"#ffffff"}
          innerColor={"bg-black"}
          innerValue={"#000000"}
        />
        <ColorButton
          onClick={handleColorSelection}
          outerColor={"bg-white"}
          outerValue={"#ffffff"}
          innerColor={"bg-red-600"}
          innerValue={"#e7000b"}
        />
        <ColorButton
          onClick={handleColorSelection}
          outerColor={"bg-blue-200"}
          outerValue={"#b9d4ff"}
          innerColor={"bg-blue-800"}
          innerValue={"#193cb8"}
        />

        <button>
          <div className="outerColor relative w-16 h-16 border border-black rounded-full flex justify-center items-center">
            <div className="innerColor w-8 h-8 border border-black rounded-full bg-blue-200"></div>
          </div>
        </button>

        {/* Primary Color Picker */}
        <div className="mb-4">
          <label className="block text-sm font-medium">Primary Color</label>
          <input
            type="color"
            value={primaryColor}
            onChange={(e) => dispatch(setPrimaryColor(e.target.value))}
            className="w-full h-10 cursor-pointer"
          />
        </div>

        {/* Secondary Color Picker */}
        <div className="mb-4">
          <label className="block text-sm font-medium">Secondary Color</label>
          <input
            type="color"
            value={secondaryColor}
            onChange={(e) => dispatch(setSecondaryColor(e.target.value))}
            className="w-full h-10 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
