"use client";
import { useDispatch, useSelector } from "react-redux";
import { toggleTrait } from "@/store/slices/coverLetterFormSlice";

// List of available traits
const traitsOptions = [
  "Team Player",
  "Innovative",
  "Reliable",
  "Adaptable",
  "Detail-Oriented",
  "Creative",
  "Analytical",
  "Sociable",
  "Flexible",
  "Determined",
  "Problem-Solving",
  "Independent",
  "Goal-Oriented",
  "Dependable",
  "Ambitious",
  "Confident",
];

export default function YourTraits() {
  const dispatch = useDispatch();
  const { traits } = useSelector((state) => state.coverLetterForm);

  return (
    <>
      <div>
        <h2 className="mb-4 text-center">Select 3 traits that describe you</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 sm:gap-4">
          {traitsOptions.map((trait, index) => (
            <button
              type="button"
              key={index}
              onClick={() => dispatch(toggleTrait(trait))}
              className={`text-xs sm:text-base px-1 sm:px-4 py-2 border rounded-lg transition ${
                traits && traits.includes(trait)
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white text-black"
              }`}
            >
              {trait}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
