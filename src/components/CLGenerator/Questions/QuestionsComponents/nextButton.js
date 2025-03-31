import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function NextButton({ onHandleNext, className }) {
  return (
    <button
      type="button"
      onClick={onHandleNext}
      className={`text-primary ${className}`}
    >
      <div className="flex flex-row items-center space-x-2 cursor-pointer">
        <span>Next</span>
        <ArrowRightIcon className="h-6 w-6" />
      </div>
    </button>
  );
}
