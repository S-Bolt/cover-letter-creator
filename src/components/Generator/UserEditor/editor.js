import { PaintBrushIcon } from "@heroicons/react/24/solid";
import { HashtagIcon } from "@heroicons/react/24/solid";
import { SparklesIcon } from "@heroicons/react/24/solid";
import CircleButton from "./circleButton";
import { useState } from "react";
import TemplateSelectorModal from "./modals/templateSelectorModal";
import ColorSelectorModal from "./modals/colorSelectorModal";
import FontSelectorModal from "./modals/fontSelectorModal";

export default function Editor({ colSpan }) {
  const [showActiveModal, setShowActiveModal] = useState(null);

  function handleOpen(type) {
    setShowActiveModal(type);
  }

  function handleClose() {
    setShowActiveModal(null);
  }

  return (
    <>
      <div className={`bg-cl-generator h-20 self-end rounded-xl ${colSpan}`}>
        <div className="flex flex-row justify-center items-center h-full space-x-6">
          <CircleButton
            icon={SparklesIcon}
            label={"STYLE"}
            onClick={() => handleOpen("style")}
          />

          <CircleButton
            icon={PaintBrushIcon}
            label={"COLOR"}
            onClick={() => handleOpen("color")}
          />
          <CircleButton
            icon={HashtagIcon}
            label={"FONT"}
            onClick={() => handleOpen("font")}
          />
        </div>
      </div>
      {showActiveModal === "style" && (
        <TemplateSelectorModal onClose={handleClose} />
      )}
      {showActiveModal === "color" && (
        <ColorSelectorModal onClose={handleClose} />
      )}
      {showActiveModal === "font" && (
        <FontSelectorModal onClose={handleClose} />
      )}
    </>
  );
}
