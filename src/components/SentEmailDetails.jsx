import React from "react";

function SentEmailDetails({email, resetsentBox}) {

  return (
    <>
      <div className="flex flex-col bg-white m-2 p-2 h-[100%] rounded">
      <div>
          <button onClick={resetsentBox}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-left"
            >
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
          </button>
        </div>
        <h1 className="m-2 ml-10 mb-6 p-2 text-2xl">{email.subject}</h1>
        <div className="flex text-lg">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-circle-user-round ml-2 bg-blue-400 rounded-xl"
            >
              <path d="M18 20a6 6 0 0 0-12 0" />
              <circle cx="12" cy="10" r="4" />
              <circle cx="12" cy="12" r="10" />
            </svg>
          </span>
          <span className=" ml-2">{email.email}</span>
        </div>
        <div className="m-4 ml-4 p-6">{email.editor}</div>
      </div>
    </>
  );
}

export default SentEmailDetails;
