import {
  PencilIcon,
  ArrowPathIcon,
  ClipboardDocumentIcon,
  BookmarkSquareIcon,
  QuestionMarkCircleIcon,
  UserCircleIcon,
  ArrowDownTrayIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/solid";

export default function SmallSidebar({ onSetSidebar }) {
  return (
    <aside className="bg-cl-generator col-span-5 lg:col-span-4 xl:col-span-3 rounded-xl border-r-6 border-primary-accent">
      <div className="flex w-full h-full justify-center">
        <ul className="grid grid-rows-8 text-default h-full w-full">
          <li className="flex items-center pl-[15%]">
            <div className="flex-grow px-2 py-4 hover:bg-primary-accent rounded-l-lg drop-shadow-lg hover:text-primary">
              <PencilIcon className="h-5 w-5 mr-2" />
            </div>
          </li>
          <li className="flex items-center pl-[15%]">
            <div className="flex-grow px-2 py-4 rounded-l-lg hover:bg-primary-accent drop-shadow-lg hover:text-primary">
              <ArrowPathIcon className="h-5 w-5 mr-2" />
            </div>
          </li>
          <li className="flex items-center pl-[15%]">
            <div className="flex-grow px-2 py-4 rounded-l-lg hover:bg-primary-accent drop-shadow-lg hover:text-primary">
              <ClipboardDocumentIcon className="h-5 w-5 mr-2" />
            </div>
          </li>
          <li className="flex items-center pl-[15%]">
            <div className="flex-grow px-2 py-4 rounded-l-lg hover:bg-primary-accent drop-shadow-lg hover:text-primary">
              <BookmarkSquareIcon className="h-5 w-5 mr-2" />
            </div>
          </li>
          <li className="flex items-center pl-[15%]">
            <div className="flex-grow px-2 py-4 hover:bg-primary-accent rounded-l-lg drop-shadow-lg hover:text-primary">
              <QuestionMarkCircleIcon className="h-5 w-5 mr-2" />
            </div>
          </li>
          <li className="flex items-center pl-[15%]">
            <div className="flex-grow px-2 py-4 hover:bg-primary-accent rounded-l-lg drop-shadow-lg hover:text-primary">
              <UserCircleIcon className="h-5 w-5 mr-2" />
            </div>
          </li>
          <li className="flex items-center pl-[15%]">
            <div className="flex-grow px-2 py-4 hover:bg-primary-accent rounded-l-lg drop-shadow-lg hover:text-primary">
              <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
            </div>
          </li>
          <button
            onClick={() => onSetSidebar("large")}
            className="h-12 w-12 bg-gray-400 rounded-full ml-auto flex items-center justify-center drop-shadow-lg"
          >
            <ChevronDoubleRightIcon className="h-5 w-5 text-default" />
          </button>
        </ul>
      </div>
    </aside>
  );
}
