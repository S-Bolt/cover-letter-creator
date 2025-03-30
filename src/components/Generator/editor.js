import { PaintBrushIcon } from "@heroicons/react/24/solid";
import { ArrowTurnDownLeftIcon } from "@heroicons/react/24/solid";
import { HashtagIcon } from "@heroicons/react/24/solid";
import { SparklesIcon } from "@heroicons/react/24/solid";
import CircleButton from "./circleButton";
import { useState } from "react";
import TemplateSelectorModal from "./Layouts/templateSelectorModal";
import ColorSelectorModal from "./Layouts/colorSelectorModal";

export default function Editor({ colSpan }) {
  const [showTemplateSelector, setShowTemplateSelector] = useState(false);
  const [showColor, setShowColor] = useState(false);

  function handleOpenTemplateSelector() {
    setShowTemplateSelector(true);
  }

  function handleCloseTemplateSelector() {
    setShowTemplateSelector(false);
  }

  function handleOpenColor() {
    setShowColor(true);
  }

  function handleCloseColor() {
    setShowColor(false);
  }
  return (
    <>
      <div className={`bg-cl-generator h-20 self-end rounded-xl ${colSpan}`}>
        <div className="flex flex-row justify-center items-center h-full space-x-6">
          <CircleButton
            icon={SparklesIcon}
            label={"STYLE"}
            onClick={handleOpenTemplateSelector}
          />

          <CircleButton
            icon={PaintBrushIcon}
            label={"COLOR"}
            onClick={handleOpenColor}
          />
          <CircleButton icon={HashtagIcon} label={"TEXT"} />
          <CircleButton icon={ArrowTurnDownLeftIcon} label={"RESET"} />
        </div>
      </div>
      {showTemplateSelector && (
        <TemplateSelectorModal onClose={handleCloseTemplateSelector} />
      )}
      {showColor && <ColorSelectorModal onClose={handleCloseColor} />}
    </>
  );
}
