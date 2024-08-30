import React, { useRef, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";
import { useSelector } from "react-redux";
import "sweetalert2/dist/sweetalert2.min.css";

function ComposeModal() {
  const userEmail = useSelector((state) => state.authentication.userId);
  const email = userEmail.replace(/[^a-zA-Z0-9]/g, "");

  const [showModal, setShowModal] = React.useState(false);

  const emailInputRef = useRef();

  const subjectInputRef = useRef();

  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );

  const EditorStateChangeHandler = (e) => {
    setEditorState(e);
  };

  let enteredEmail = emailInputRef?.current?.value;
  enteredEmail = enteredEmail?.replace(/[^a-zA-Z0-9]/g, "");
  const enteredSubject = subjectInputRef?.current?.value;

  const data = {
    email: enteredEmail,
    subject: enteredSubject,
    editor: editorState.getCurrentContent().getPlainText(),
  };

  const submitHandler = () => {
    // const editorContent = editorState.getCurrentContent().getPlainText();
    // const wordCount = editorContent.split(/\s+/).length;
    // if (wordCount < 10) {
    //   alert("Please enter at least 10 words in the editor field.");
    //   return;
    // }

    // const data = {
    //   email: enteredEmail,
    //   subject: enteredSubject,
    //   editor: editorState.getCurrentContent().getPlainText(),
    // };

    inboxDataHandler();
    sentDataHandler();
    setShowModal(false);

    // const editorContent = editorState.getCurrentContent().getPlainText();
    // const wordCount = editorContent.split(/\s+/).length;

    // Check if the word count is less than 10
    // if (wordCount < 10) {
    //   alert("Please enter at least 10 words in the editor field.");
    //   return;
    // }

    // const enteredEmail = emailInputRef?.current?.value;
    // const enteredSubject = subjectInputRef?.current?.value;

    // const data = {
    //   email: enteredEmail,
    //   subject: enteredSubject,
    //   editor: editorContent,
    // };

    // inboxDataHandler(data);
    // sentDataHandler(data);
    // setShowModal(false);
  };

  const inboxDataHandler = () => {
    fetch(
      `https://emaildata-7afb4-default-rtdb.firebaseio.com/inbox${enteredEmail}.json`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      if (res.ok) {
        console.log("successfully sent the email");

        return res.json();
      } else {
        return res.json().then((data) => {
          console.log("something went wrong ");
        });
      }
    });
  };

  const sentDataHandler = () => {
    fetch(
      `https://emaildata-7afb4-default-rtdb.firebaseio.com/sent${email}.json`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      if (res.ok) {
        console.log("Successfully sent email");

        res.json();
      } else {
        return res.json().then((data) => {
          console.log("something went wrong");
        });
      }
    });
  };

  return (
    <>
      <button
        className="flex mt-16 ml-4 mb-16  text-white w-40 bg-blue-800 p-3 items-center rounded-lg shadow hover:shadow-lg outline-none focus:outline-non ease-linear transition-all duration-150 hover:bg-blue-900"
        type="button"
        onClick={() => setShowModal(true)}
      >
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
          className="lucide lucide-pencil"
        >
          <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
          <path d="m15 5 4 4" />
        </svg>
        <span className="text-sm ml-2">Compose</span>
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center w-screen flex overflow-x-hidden border border-red-800 overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="fixed  bottom-5 right-4 w-[80%] my-6 mx-auto max-w-3xl">
              {/* {/content/} */}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full  bg-white outline-none focus:outline-none">
                {/* {/header/} */}
                <div className="flex items-start justify-between p-2 ml-2 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-sm mt-2 font-semibold">New Message</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black">
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
                        className="lucide lucide-x"
                      >
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                      </svg>
                    </span>
                  </button>
                </div>
                <div className=" ml-4 border-b p-2 border-solid border-blueGray-200 rounded-t">
                  <label htmlFor="to" className="">
                    To:
                  </label>
                  <input
                    type="email"
                    id="to"
                    required
                    className="ml-2 border border-none focus:outline-none border-transparent"
                    ref={emailInputRef}
                  />
                </div>
                <div className=" ml-4 border-b p-2 border-solid border-blueGray-200 rounded-t">
                  <label htmlFor="subject" className="">
                    Subject:
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    className="ml-2 border border-none focus:outline-none border-transparent"
                    ref={subjectInputRef}
                  />
                </div>
                {/* {/body/} */}
                <div className="relative p-6 flex-auto">
                  <Editor
                    editorState={editorState}
                    onEditorStateChange={EditorStateChangeHandler}
                  />
                </div>
                {/* {/footer/} */}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-blue-800 text-white active:bg-blue-800 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={submitHandler}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default ComposeModal;
