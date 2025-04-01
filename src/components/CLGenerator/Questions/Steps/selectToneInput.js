"use client";
import { useDispatch, useSelector } from "react-redux";
import { updateField } from "@/store/slices/coverLetterFormSlice";

const toneOptions = [
  {
    tone: "Professional",
    prompt:
      "Write the cover letter in a professional and formal tone. Emphasize courtesy, respect, and a polished demeanor. Use refined language and a structured style suitable for corporate or traditional industries.",
  },
  {
    tone: "Confident",
    prompt:
      "Write the cover letter in a confident and assertive tone. Highlight your skills and leadership abilities, clearly articulating your value and unique contributions. The language should be direct and self-assured.",
  },
  {
    tone: "Friendly",
    prompt:
      "Write the cover letter in a friendly and approachable tone. Balance professionalism with warmth and a personable style. The language should feel welcoming and collaborative, ideal for companies with a casual culture.",
  },
  {
    tone: "Enthusiastic",
    prompt:
      "Write the cover letter in an enthusiastic and energetic tone. Convey excitement and passion for the role using lively and dynamic language. This tone should help you stand out in creative or innovative fields.",
  },
  {
    tone: "Creative",
    prompt:
      "Write the cover letter in a creative and innovative tone. Emphasize originality and out-of-the-box thinking while maintaining professionalism. Use imaginative language that reflects a fresh, modern perspective.",
  },
  {
    tone: "RIZZ MODE",
    prompt:
      "Write a cover letter in a 'RIZZ MODE' tone that’s as bold and irreverent as it is hilarious. Imagine a marketing superhero who combines street smarts with Silicon Valley savvy. The letter should burst with charisma and playful exaggeration—think Gary Vee meets the Kool-Aid Man. Use vivid, unexpected analogies (e.g., 'I’ll have your website ranking higher than Aunt Carol’s lasagna recipe on Pinterest') and punchy one-liners that make the reader laugh while they’re impressed. The cover letter should be unapologetically confident, breaking the conventional mold with wit and energy that leaves jaws dropping. Be creative, fun, and totally unforgettable.",
  },
];

export default function SelectTone() {
  const dispatch = useDispatch();
  const { tone } = useSelector((state) => state.coverLetterForm);

  function handleSelectTone(selectedTone) {
    dispatch(updateField({ field: "tone", value: selectedTone }));
  }
  return (
    <div className="mb-8">
      <h2 className="text-center text-lg font-semibold mb-4">Select a tone</h2>
      <div className="grid grid-cols-3 gap-4">
        {toneOptions.map((toneOption, index) => (
          <button
            type="button"
            key={index}
            onClick={() => handleSelectTone(toneOption)}
            className={`text-xs sm:text-base px-1 sm:px-4 py-2 border rounded-lg hover:bg-orange-200 transition  ${
              tone.tone === toneOption.tone
                ? "bg-primary text-white border-primary"
                : "bg-white text-black"
            }`}
          >
            {toneOption.tone}
          </button>
        ))}
      </div>
    </div>
  );
}
