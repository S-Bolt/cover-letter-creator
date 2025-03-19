import { PaintBrushIcon } from "@heroicons/react/24/solid";
import { ArrowTurnDownLeftIcon } from "@heroicons/react/24/solid";
import { HashtagIcon } from "@heroicons/react/24/solid";
import { SparklesIcon } from "@heroicons/react/24/solid";
import CircleButton from "./circleButton";

export default function Editor({ colSpan }) {
  return (
    <div className={`bg-cl-generator h-20 self-end rounded-xl ${colSpan}`}>
      <div className="flex flex-row justify-center items-center h-full space-x-6">
        <CircleButton icon={SparklesIcon} label={"STYLE"} />
        <CircleButton icon={PaintBrushIcon} label={"COLOR"} />
        <CircleButton icon={HashtagIcon} label={"TEXT"} />
        <CircleButton icon={ArrowTurnDownLeftIcon} label={"RESET"} />
      </div>
    </div>
  );
}
