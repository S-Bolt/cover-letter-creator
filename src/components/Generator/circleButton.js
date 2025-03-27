"use client";
import useWindowSize from "@/lib/hooks/useWindowSize";
export default function CircleButton({ icon: Icon, label, onClick }) {
  const width = useWindowSize();
  return (
    <div className="flex flex-col items-center">
      <div
        onClick={onClick}
        className="flex flex-col  justify-center items-center h-10 w-10 sm:h-15 sm:w-15 bg-generator-buttons rounded-full text-default shadow-md dark:shadow-sm  active:shadow-[inset_2px_2px_4px_#888] transition-all duration-200 border border-generator-dark "
      >
        {Icon && <Icon className="h-4 w-4 sm:h-6 sm:w-6" />}
        {width > 640 ? (
          <span className="mt-1 text-xs text-default">{label}</span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
