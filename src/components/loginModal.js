import Image from "next/image";

export default function LoginModal({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Modal */}
      <div className="relative bg-background  p-6 rounded-lg shadow-lg w-2/3  ">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-default scale-100 hover:scale-150"
        >
          X
        </button>
        <div className="flex flex-col sm:flex-row items-center justify-center h-full sm:p-6">
          <div className="flex flex-col sm:flex-1 sm:px-3">
            <h2 className="text-primary text-3xl sm:text-5xl font-bold">
              Hello
            </h2>
            <p className="text-2xl sm:text-4xl font-semibold mb-4">Sign In!</p>
            <form>
              <input
                id="email"
                name="email"
                type="text"
                placeholder="email"
                autoComplete="email"
                required
                className="w-full bg-gray-50 text-black shadow-inner rounded-full pl-2 my-2 focus:outline-none"
              />
              <div className="text-xs text-red-500 hidden">
                Please input an email
              </div>
              <input
                id="password"
                name="password"
                type="password"
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
              <button className="rounded-full w-full bg-primary text-white my-2">
                Sign In
              </button>
            </form>
          </div>
          {/* right side */}
          <div className="flex flex-col items-center   sm:flex-1 h-full sm:px-3">
            <div className="text-center text-sm sm:text-base my-2">
              <div className="sm:text-xl">Not a member?</div>
              <div
                // onClick={() =>}
                className="text-primary font-semibold underline"
              >
                Signup here
              </div>
            </div>
            <div className="mt-2 sm:w-2/3 xl:w-1/2 2xl:w-1/3">
              <Image
                src="/undraw_signup.svg"
                alt="sign-up"
                width={100}
                height={100}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
