import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import useWindowSize from "@/lib/hooks/useWindowSize";

export default function DownloadButton({ onDownload, downloading }) {
  const width = useWindowSize();
  const { sidebar } = useSelector((state) => state.sidebar);

  return (
    <div className="w-full flex flex-col items-center">
      {sidebar === "large" && width > 640 ? (
        <>
          <button
            onClick={onDownload}
            className="flex items-center pl-[15%] w-full"
          >
            <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
            <div className="flex-grow px-2 py-4 hover:bg-primary-accent rounded-l-lg drop-shadow-lg hover:text-primary">
              <span className="text-sm font-semibold">
                {downloading ? "DOWNLOADING..." : "DOWNLOAD"}
              </span>
            </div>
          </button>
        </>
      ) : (
        <>
          <button onClick={onDownload} className="w-full">
            <div className="flex justify-center items-center py-4 ml-2 hover:bg-primary-accent rounded-l-lg drop-shadow-lg hover:text-primary">
              <ArrowDownTrayIcon className="h-5 w-5 xl:h-7 xl:w-7 mr-2" />
            </div>
          </button>
        </>
      )}
      {/* Progress Bar */}
      {downloading && (
        <div className="w-[80%] h-2 bg-background rounded-full overflow-hidden">
          <div className="h-full bg-primary animate-pulse w-full"></div>
        </div>
      )}
    </div>
  );
}
