"use client";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "@/store/slices/sidebarSlice";
import useWindowSize from "@/lib/hooks/useWindowSize";
import SidebarButtons from "./sidebarButtons";

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

export default function Sidebar() {
  const width = useWindowSize();
  const dispatch = useDispatch();
  return (
    <>
      <aside className="bg-cl-generator col-span-5 lg:col-span-4 xl:col-span-3 rounded-xl border-r-6 border-primary-accent">
        <div className="flex w-full h-full justify-center">
          <ul className="grid grid-rows-8 text-default h-full w-full">
            <SidebarButtons icon={PencilIcon} label={"EDIT LETTER"} />
            <SidebarButtons icon={ArrowPathIcon} label={"RE PROMPT"} />
            <SidebarButtons icon={ClipboardDocumentIcon} label={"COPY"} />
            <SidebarButtons icon={BookmarkSquareIcon} label={"SAVE"} />
            <SidebarButtons icon={QuestionMarkCircleIcon} label={"HELP"} />
            <SidebarButtons icon={UserCircleIcon} label={"ACCOUNT"} />
            <SidebarButtons icon={ArrowDownTrayIcon} label={"DOWNLOAD"} />

            {width > 640 ? (
              <button
                onClick={() => dispatch(toggleSidebar())}
                className="h-12 w-12 bg-generator-buttons rounded-full ml-auto flex items-center justify-center drop-shadow-lg"
              >
                <ChevronDoubleLeftIcon className="h-6 w-6 text-default" />
              </button>
            ) : (
              ""
            )}
          </ul>
        </div>
      </aside>
    </>
  );
}
