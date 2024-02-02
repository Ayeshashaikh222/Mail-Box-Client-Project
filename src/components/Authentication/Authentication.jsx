import React, { useRef, useState } from "react";

const Authentication = () => {
  const [showpassword, setShowPassword] = useState(false);

  const [isLogin, setisLogin] = useState(true);
  
  const fullnameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();


  return (
    <>
      {/* Global Container */}
      <div className="flex items-center justify-center min-h-screen bg-slate-100 ">
        {/* Card container */}
        <div className="bg-white p-8 mx-6 rounded-lg shadow-md w-96 mb-10">
          <h2 className="text-2xl text-brown text-left font-bold mb-8">
            {isLogin ? "Welcome Back" : "Get Started"}
          </h2>
          {/* form Conatiner */}
          <form action="">
            {!isLogin && (
              <div className="flex flex-col mb-4">
                <label
                  htmlFor="fullname"
                  className="text-left text-blue-900 text-xs mb-2"
                >
                  FULL NAME:
                </label>
                <input
                  type="text"
                  className=" w-full p-2 border text-brown border-brown-500 rounded"
                  id="fullname"
                  required
                  placeholder="Enter full name"
                  ref={fullnameInputRef}
                />
              </div>
            )}

            <div className="flex flex-col mb-4">
              <label
                htmlFor="email"
                className="text-left text-xs  text-blue-900 mb-2 font-medium"
              >
                EMAIL ADDRESS:
              </label>
              <input
                type="email"
                className=" w-full p-2 border text-brown border-brown-500 rounded"
                id="email"
                required
                placeholder="Enter email address"
                ref={emailInputRef}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label
                htmlFor="password"
                className="text-left text-xs  text-blue-900 mb-2"
              >
                PASSWORD:
              </label>
              <div className="relative flex flex-col ">
                <input
                  type="password"
                  id="password"
                  required
                  className=" w-full p-2 border text-brown border-brown-500 rounded"
                  placeholder="Create a Password"
                  ref={passwordInputRef}
                />
                <button
                  type="button"
                  className="absolute insert-y-0 right-0 pr-2"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                ></button>
              </div>
            </div>

            {!isLogin && (
              <div className="flex mb-4">
                <input type="checkbox" />
                <p className="inline-block text-xs mt-3">
                  I have read and agreed to NestGen's{" "}
                  <span className="text-brown underline">Terms of Service</span>{" "}
                  and <span className="text-bold">Privacy Policy.</span>
                </p>
              </div>
            )}

            {isLogin && (
              <div className="flex flex-col mb-4  ">
                <button type="button" className="text-brown text-right text-sm">
                  Forget Password
                </button>
              </div>
            )}

            <div className="flex flex-col mb-4">
              <button
                type="button"
                className="w-full border border-brown-500 bg-brown-500 p-2 text-white rounded mb-3"
              >
                {isLogin ? "LOGIN" : "SIGN UP"}
              </button>

              <button
                type="button"
                className="w-full border p-2 text-blue-900 border-slate-300 rounded mb-4"
              >
                Sign in with Google
              </button>
            </div>
            <div className="flex gap-2">
              <p className="text-left text-xs text-blue-900">
                {isLogin ? "Don't have an account?" : "Already have an account"}
                <button type="button" className="text-brown">
                  {isLogin ? "Sign Up" : "Log In"}
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Authentication;
