"use client";
import Link from "next/link";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import GetStartedButton from "./getStartedButton";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import LoginModal from "./loginModal";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <>
      <div className="flex xs-flex-col justify-between items-center  m-2 sm:m-4 text-default bg-background  lg:text-xl lg:mx-8 xl:mx-16">
        <div>
          <Link href={"/"}>
            <span className="text-default font-serif ">CL</span>
            <span className="text-primary font-leckerli dark:text-white font-sans">
              Rizz
            </span>
          </Link>
        </div>
        <div className="flex justify-between items-center space-x-2 sm:space-x-8 md:space-x-8 lg:space-x-16 xl:space-x-24 xs-flex-col ">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="scale-100 hover:scale-125 "
            >
              {theme === "dark" ? (
                <SunIcon className="h-6 w-6 text-primary" />
              ) : (
                <MoonIcon className="h-6 w-6 text-gray-800" />
              )}
            </button>
          )}
          <button
            className="text-sm sm:text-base lg:text-xl"
            onClick={() => setIsLoginOpen(true)}
          >
            Login
          </button>

          <div className="text-sm sm:text-base lg:text-xl ">Pricing</div>
          <GetStartedButton className="px-4 py-1 rounded-xl sm:rounded-3xl xl:px-12 lg:text-xl" />
        </div>
      </div>

      {/* Render the Login Modal */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
}
