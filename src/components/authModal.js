"use client";
import Image from "next/image";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeAuthModal, openAuthModal } from "@/store/slices/authModalSlice";
import { signIn } from "next-auth/react";

export default function AuthModal() {
  const { isOpen, mode } = useSelector((state) => state.authModal);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  if (!isOpen) return null;

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (mode === "login") {
      // Call NextAuth signIn for login
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
    } else {
      //Call NextAuth signUp
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, username, password }),
      });
      const data = await res.json();

      // Optionally, log the user in after successful signup:
      if (!data.error) {
        await signIn("credentials", {
          email,
          password,
          redirect: false,
        });
      }
    }
    // Close modal after submission (optional)
    dispatch(closeAuthModal());
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Modal */}
      <div className="relative bg-background  p-6 rounded-lg shadow-lg w-2/3 sm:h-2/3  ">
        <button
          onClick={() => dispatch(closeAuthModal())}
          className="absolute top-3 right-3 text-default scale-100 hover:scale-150"
        >
          X
        </button>
        <div className="flex flex-col sm:flex-row items-center justify-center h-full sm:p-6">
          <div className="flex flex-col sm:flex-1 mr-responsive">
            <h2 className="text-primary text-3xl sm:text-5xl font-bold">
              Hello!
            </h2>
            <p className="text-2xl sm:text-4xl font-semibold mb-4">
              {mode === "login" ? "Sign In" : "Sign Up"}
            </p>
            <form onSubmit={handleSubmit}>
              <input
                id="email"
                name="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
                autoComplete="email"
                required
                className="w-full bg-gray-50 text-black shadow-inner rounded-full pl-2 my-2 focus:outline-none"
              />
              <div className="text-xs text-red-500 hidden">
                Please input an email
              </div>
              {mode === "signup" && (
                <>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="username"
                    required
                    className="w-full bg-gray-50 text-black shadow-inner rounded-full pl-2 my-2 focus:outline-none"
                  />
                  <div className="text-xs text-red-500 hidden">
                    Please input username
                  </div>
                </>
              )}
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                required
                autoComplete="current-password"
                className="w-full bg-gray-50 text-black shadow-inner rounded-full pl-2 my-2 focus:outline-none "
              />
              <div className="text-xs text-red-500 hidden">
                Please input an email
              </div>
              <div className="flex items-center my-2">
                <input
                  id="rememberMe"
                  name="rememberMe"
                  type="checkbox"
                  className="h-4 w-4"
                />
                <label
                  htmlFor="rememberMe"
                  className="ml-2 text-xs sm:text-sm text-default  "
                >
                  Remember Me
                </label>
              </div>
              <div className="">
                <button className="rounded-full w-2/3  bg-primary text-white my-2">
                  {mode === "login" ? "Sign In" : "Create"}
                </button>
              </div>
            </form>
            <div className=" text-sm sm:text-base my-2">
              <div className="sm:text-xl">
                {mode === "login" ? "Not a member?" : "Already a member?"}
              </div>
              <div
                onClick={() =>
                  dispatch(openAuthModal(mode === "login" ? "signup" : "login"))
                }
                className="text-primary font-semibold underline"
              >
                {mode === "login" ? "Create Account" : "Sign In"}
              </div>
            </div>
          </div>
          {/* Right Side */}
          <div className="flex items-center justify-center sm:flex-1 h-full">
            <div className="mt-2  ">
              <Image
                src="/signup.svg"
                alt="sign-up"
                width={100}
                height={100}
                className="w-full "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
