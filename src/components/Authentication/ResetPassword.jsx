import React from "react";

const ResetPassword = () => {


  return (
    <>
      {/* Global Container */}
      <div className="flex items-center justify-center min-h-screen bg-slate-100 ">
        {/* Card container */}
        <div className="bg-white p-8 mx-6 rounded-lg shadow-md w-96 mb-10">
          <h2 className="text-2xl text-brown text-left font-bold mb-8">
            Forgot Password
          </h2>
          <p className="mb-8 text-sm text-left text-blue-900">Enter your email and we'll send you a link to reset your password</p>
           
            <div className="flex flex-col mb-10">
              <label htmlFor="email" className="text-left text-xs  text-blue-900 mb-2 font-medium">EMAIL ADDRESS:</label>
              <input
                type="email"
                className=" w-full p-2 border text-brown border-brown-500 rounded"
                id="email"
                placeholder="Enter email address"
              />
            </div>
            
            
            <div className="flex flex-col mb-6">
              <button type="button" className="w-full border border-brown-500 bg-brown-500 p-2 text-white rounded mb-3">RESET PASSWORED</button>
            </div>

            <div className="flex space-x-2 border border-red-500">
            <p className="text-left text-xs text-blue-900 mr-2">Remember your password?
            <button type="button" className="text-brown">Login here</button></p>
            </div>
            
        
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
