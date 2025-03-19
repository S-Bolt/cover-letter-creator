"use client";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "@/store/slices/sidebarSlice";

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

export default function SmallSidebar() {
  const dispatch = useDispatch();
  return (
    <aside className="bg-cl-generator col-span-2  rounded-xl border-r-6 border-primary-accent">
      <div className="flex w-full h-full justify-center">
        <ul className="grid grid-rows-8 text-default h-full w-full">
          <li className="flex justify-center items-center">
            <div className="flex items-center justify-center flex-grow py-4 ml-2 hover:bg-primary-accent rounded-l-lg drop-shadow-lg hover:text-primary">
              <PencilIcon className="h-5 w-5 xl:h-7 xl:w-7 mr-2" />
            </div>
          </li>
          <li className="flex justify-center items-center">
            <div className="flex items-center justify-center flex-grow py-4 ml-2 rounded-l-lg hover:bg-primary-accent drop-shadow-lg hover:text-primary">
              <ArrowPathIcon className="h-5 w-5 xl:h-7 xl:w-7 mr-2" />
            </div>
          </li>
          <li className="flex justify-center items-center">
            <div className="flex items-center justify-center flex-grow py-4 ml-2  rounded-l-lg hover:bg-primary-accent drop-shadow-lg hover:text-primary">
              <ClipboardDocumentIcon className="h-5 w-5 xl:h-7 xl:w-7 mr-2" />
            </div>
          </li>
          <li className="flex justify-center items-center">
            <div className="flex items-center justify-center flex-grow py-4 ml-2  rounded-l-lg hover:bg-primary-accent drop-shadow-lg hover:text-primary">
              <BookmarkSquareIcon className="h-5 w-5 xl:h-7 xl:w-7 mr-2" />
            </div>
          </li>
          <li className="flex justify-center items-center">
            <div className="flex items-center justify-center flex-grow py-4 ml-2  hover:bg-primary-accent rounded-l-lg drop-shadow-lg hover:text-primary">
              <QuestionMarkCircleIcon className="h-5 w-5 xl:h-7 xl:w-7 mr-2" />
            </div>
          </li>
          <li className="flex justify-center items-center">
            <div className="flex items-center justify-center flex-grow py-4 ml-2  hover:bg-primary-accent rounded-l-lg drop-shadow-lg hover:text-primary">
              <UserCircleIcon className="h-5 w-5 xl:h-7 xl:w-7 mr-2" />
            </div>
          </li>
          <li className="flex justify-center items-center">
            <div className="flex items-center justify-center flex-grow py-4 ml-2  hover:bg-primary-accent rounded-l-lg drop-shadow-lg hover:text-primary">
              <ArrowDownTrayIcon className="h-5 w-5 xl:h-7 xl:w-7 mr-2" />
            </div>
          </li>
          <div className="flex justify-center w-full mt-auto mb-4">
            <button
              onClick={() => dispatch(toggleSidebar())}
              className="h-12 w-12 bg-generator-buttons rounded-full flex items-center justify-center drop-shadow-lg"
            >
              <ChevronDoubleRightIcon className="h-6 w-6 text-default" />
            </button>
          </div>
        </ul>
      </div>
    </aside>
  );
}
