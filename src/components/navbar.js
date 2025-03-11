import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import GetStartedButton from "./getStartedButton";

export default function Navbar() {
  return (
    <div className="flex xs-flex-col justify-between items-center  m-2 sm:m-4 bg-white dark:bg-background-dark lg:text-xl">
      <div>
        <span className="text-black font-serif ">CL</span>
        <span className="text-primary font-leckerli dark:text-white font-sans">
          Rizz
        </span>
      </div>
      <div className="flex justify-between items-center space-x-2 sm:space-x-8 md:space-x-8 lg:space-x-16 xl:space-x-24 xs-flex-col ">
        <button className=" ">
          <SunIcon className="h-4 w-4 lg:h-6 lg:w-6 hidden dark:block" />
          <MoonIcon className="h-4 w-4 lg:h-6 lg:w-6 dark:hidden" />
        </button>
        <div className="text-sm sm:text-base lg:text-xl ">Pricing</div>
        <div className="text-sm sm:text-base lg:text-xl ">Login</div>
        <GetStartedButton className="px-4 py-1 rounded-xl sm:rounded-3xl xl:px-12 lg:text-xl" />
      </div>
    </div>
  );
}
