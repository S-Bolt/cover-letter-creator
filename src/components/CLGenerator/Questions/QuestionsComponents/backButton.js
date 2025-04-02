import { ArrowLeftIcon } from "@heroicons/react/24/solid";

export default function BackButton({ onHandleBack }) {
  return (
    <button type="button" onClick={onHandleBack} className="">
      <div className="flex flex-row items-center space-x-2 cursor-pointer">
        <ArrowLeftIcon className="h-6 w-6" />
        <span className="text-default">Previous</span>
      </div>
    </button>
  );
}
