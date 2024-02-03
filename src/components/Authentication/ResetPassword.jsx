import React, {useRef, useState} from "react";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {

  const emailInputRef = useRef();

  const navigate = useNavigate();

   const resetPasswordSubmitHandler = (event) => {
    event.preventDefault();
     
    const enteredEmail = emailInputRef.current.value;
    
    fetch("https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyB3WoU_Kz4oU0npmmPcUAmR5RU01TPol84", {
      method: "POST",
      body: JSON.stringify({
        requestType: "PASSWORD_RESET",
        email: enteredEmail,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if(res.ok){
        emailInputRef.current.value ="";
        console.log("successfully passwords is reset");
        return res.json();
      } else {
        return res.json().then((data) => {
          console.log("something went wrong");
        })
      }
      
    }).then((data) => {
      console.log("link successfully sent on your register email")
      navigator("/authentication");
    })
    
   };

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
           
           <form onSubmit={resetPasswordSubmitHandler}>
            <div className="flex flex-col mb-10">
              <label htmlFor="email" className="text-left text-xs  text-blue-900 mb-2 font-medium">EMAIL ADDRESS:</label>
              <input
                type="email"
                className=" w-full p-2 border text-brown border-brown-500 rounded"
                id="email"
                required
                placeholder="Enter email address"
                ref={emailInputRef}
              />
            </div>
            
            <div className="flex flex-col mb-6">
              <button type="submit" className="w-full border border-brown-500 bg-brown-500 p-2 text-white rounded mb-3">RESET PASSWORED</button>
            </div>

            <div className="flex border border-red-500">
            <div className="text-left flex gap-2 text-xs text-blue-900 mr-2">Remember your password?
            <button type="button" className="text-brown">Login here</button></div>
            </div>
          </form>  
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
