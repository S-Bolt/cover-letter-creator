"use client";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "@/store/slices/sidebarSlice";
import SmallSidebarButtons from "./smallSidebarButtons";

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
import DownloadButton from "./downloadButton";

export default function SmallSidebar({ onDownload, downloading }) {
  const dispatch = useDispatch();
  return (
    <aside className="bg-cl-generator col-span-2  rounded-xl border-r-6 border-primary-accent">
      <div className="flex w-full h-full justify-center">
        <ul className="grid grid-rows-8 text-default h-full w-full">
          <SmallSidebarButtons icon={PencilIcon} />
          <SmallSidebarButtons icon={ArrowPathIcon} />
          <SmallSidebarButtons icon={ClipboardDocumentIcon} />
          <SmallSidebarButtons icon={BookmarkSquareIcon} />
          <SmallSidebarButtons icon={QuestionMarkCircleIcon} />
          <SmallSidebarButtons icon={UserCircleIcon} />
          <DownloadButton onDownload={onDownload} downloading={downloading} />

          <div className="flex justify-center w-full mt-auto mb-4">
            <button
              onClick={() => dispatch(toggleSidebar())}
              className="h-8 w-8 bg-generator-buttons rounded-full flex items-center justify-center drop-shadow-lg"
            >
              <ChevronDoubleRightIcon className="h-6 w-6 text-default" />
            </button>
          </div>
        </ul>
      </div>
    </aside>
  );
}
