import React from "react";

const Successful = () => {
  return (
    <>
      {/* Global Container */}
      <div className="flex items-center justify-center min-h-screen bg-slate-100 ">
        {/* Card container */}
        <div className="bg-white p-8 mx-6 rounded-lg shadow-md w-96 mb-10">
          <h2 className="text-2xl text-brown text-left font-bold mb-8">
            Successful
          </h2>
          <p className="mb-10 text-sm text-left text-blue-900">
            Your password has been changed you can proceed to login now
          </p>
          <div className="flex flex-col mb-4">
            <button
              type="button"
              className="w-full border border-brown-500 bg-brown-500 p-2 text-white rounded mb-3"
            >
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Successful;
