"use client";
import {
  PencilIcon,
  ArrowPathIcon,
  ClipboardDocumentIcon,
  BookmarkSquareIcon,
  QuestionMarkCircleIcon,
  UserCircleIcon,
  ArrowDownTrayIcon,
  ChevronDoubleLeftIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import SmallSidebar from "./smallSidebar";

export default function Sidebar() {
  const [sidebar, setSidebar] = useState("large");
  return (
    <>
      {sidebar === "large" ? (
        <aside className="bg-cl-generator col-span-5 lg:col-span-4 xl:col-span-3 rounded-xl border-r-6 border-primary-accent">
          <div className="flex w-full h-full justify-center">
            <ul className="grid grid-rows-8 text-default h-full w-full">
              <li className="flex items-center pl-[15%]">
                <PencilIcon className="h-5 w-5 mr-2" />
                <div className="flex-grow px-2 py-4 hover:bg-primary-accent rounded-l-lg drop-shadow-lg hover:text-primary">
                  <span className="text-sm font-semibold">EDIT LETTER</span>
                </div>
              </li>
              <li className="flex items-center pl-[15%]">
                <ArrowPathIcon className="h-5 w-5 mr-2" />
                <div className="flex-grow px-2 py-4 rounded-l-lg hover:bg-primary-accent drop-shadow-lg hover:text-primary">
                  <span className="text-sm font-semibold">RE PROMPT</span>
                </div>
              </li>
              <li className="flex items-center pl-[15%]">
                <ClipboardDocumentIcon className="h-5 w-5 mr-2" />
                <div className="flex-grow px-2 py-4 rounded-l-lg hover:bg-primary-accent drop-shadow-lg hover:text-primary">
                  <span className="text-sm font-semibold">COPY</span>
                </div>
              </li>
              <li className="flex items-center pl-[15%]">
                <BookmarkSquareIcon className="h-5 w-5 mr-2" />
                <div className="flex-grow px-2 py-4 rounded-l-lg hover:bg-primary-accent drop-shadow-lg hover:text-primary">
                  <span className="text-sm font-semibold">SAVE</span>
                </div>
              </li>
              <li className="flex items-center pl-[15%]">
                <QuestionMarkCircleIcon className="h-5 w-5 mr-2" />
                <div className="flex-grow px-2 py-4 hover:bg-primary-accent rounded-l-lg drop-shadow-lg hover:text-primary">
                  <span className="text-sm font-semibold">HELP</span>
                </div>
              </li>
              <li className="flex items-center pl-[15%]">
                <UserCircleIcon className="h-5 w-5 mr-2" />
                <div className="flex-grow px-2 py-4 hover:bg-primary-accent rounded-l-lg drop-shadow-lg hover:text-primary">
                  <span className="text-sm font-semibold">ACCOUNT</span>
                </div>
              </li>
              <li className="flex items-center pl-[15%]">
                <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
                <div className="flex-grow px-2 py-4 hover:bg-primary-accent rounded-l-lg drop-shadow-lg hover:text-primary">
                  <span className="text-sm font-semibold">DOWNLOAD</span>
                </div>
              </li>
              <button
                onClick={() => setSidebar("small")}
                className="h-12 w-12 bg-gray-400 rounded-full ml-auto flex items-center justify-center drop-shadow-lg"
              >
                <ChevronDoubleLeftIcon className="h-5 w-5 text-default" />
              </button>
            </ul>
          </div>
        </aside>
      ) : (
        <SmallSidebar onSetSidebar={setSidebar} />
      )}
    </>
  );
}
