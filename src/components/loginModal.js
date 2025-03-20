import Image from "next/image";

export default function LoginModal({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Modal */}
      <div className="relative bg-background  p-6 rounded-lg shadow-lg w-2/3">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-default scale-100 hover:scale-150"
        >
          X
        </button>
        <div className="flex flex-col  sm:flex-row ">
          <div className="flex flex-col sm:w-1/2 ">
            <h2 className="text-primary text-3xl sm:text-xl font-bold">
              Hello
            </h2>
            <p className="text-2xl sm:text-xl font-semibold mb-2">Sign In!</p>
            <form>
              <input
                id="email"
                name="email"
                type="text"
                placeholder="email"
                autoComplete="email"
                required
                className="w-full bg-gray-50 shadow-inner rounded-full pl-2 my-2 focus:outline-none"
              />
              <input
                id="password"
                name="password"
                type="password"
                placeholder="password"
                required
                autoComplete="current-password"
                className="w-full bg-gray-50 shadow-inner rounded-full pl-2 my-2 focus:outline-none "
              />
              <div className="flex items-center m-2">
                <input
                  id="rememberMe"
                  name="rememberMe"
                  type="checkbox"
                  className="h-4 w-4"
                />
                <label
                  htmlFor="rememberMe"
                  className="ml-2 text-xs text-default"
                >
                  Remember Me
                </label>
              </div>
              <button className="rounded-full w-full bg-primary text-white">
                Sign In
              </button>
            </form>
          </div>
          <div className="text-center text-sm sm:text-base my-2">
            Not a member? Signup here
          </div>
          <div className="my-2">
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
  );
}
