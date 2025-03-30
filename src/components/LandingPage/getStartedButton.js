import Link from "next/link";

export default function GetStartedButton({ className = "" }) {
  return (
    <Link href={"/start"}>
      <button
        className={`text-sm bg-primary text-white  whitespace-nowrap  hover:bg-orange-700 active:shadow-inner transition sm:text-base sm:py-2 sm:px-6  ${className}`}
      >
        Get Started
      </button>
    </Link>
  );
}
