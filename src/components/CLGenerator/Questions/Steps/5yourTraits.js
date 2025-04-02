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
  "Resourceful",
  "Proactive",
];

export default function YourTraits() {
  const dispatch = useDispatch();
  const { traits } = useSelector((state) => state.coverLetterForm);

  return (
    <>
      <fieldset>
        <legend className="mb-4 text-lg font-semibold text-center">
          Select 3 traits that describe you
        </legend>
        <div className="grid grid-cols-2 sm:grid-cols-3 sm:gap-4 mb-4">
          {traitsOptions.map((trait, index) => (
            <button
              type="button"
              key={index}
              aria-pressed={traits && traits.includes(trait)}
              aria-label={
                traits && traits.includes(trait)
                  ? `${trait}, selected`
                  : `${trait}, not selected`
              }
              onClick={() => dispatch(toggleTrait(trait))}
              className={`text-xs sm:text-base px-1 sm:px-4 py-2 border rounded-lg hover:bg-primary-accent transition cursor-pointer ${
                traits && traits.includes(trait)
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-black"
              }`}
            >
              {trait}
            </button>
          ))}
        </div>
      </fieldset>
    </>
  );
}
