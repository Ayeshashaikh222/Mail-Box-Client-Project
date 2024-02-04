import React, {useState} from "react";
import Header from "../Layout/Header";
import { Link } from "react-router-dom";
import ComposeModal from "../Layout/ComposeModal";
import Inbox from "../components/Inbox";
import SentBox from "../components/SentBox";

const Home = () => {
  const [showInbox, setShowInbox] = useState(false);
  const [showSent, setShowSent] = useState(false);
  

  const toggleInbox = () => {
    setShowInbox((prevstate) => !prevstate);
  };

  const toggleSent = () => {
    setShowSent((prevstate) => !prevstate);
  };


  return (
    <div className="h-screen">
      <Header />
      {/* Main Container */}
      <div className="flex h-[90%]">
        <div className=" flex flex-col  mb-2 bg-slate-200 m-2 w-1/5 h-full p-2 rounded">
          <ComposeModal />

          <div className="flex p-2 m-2 hover:bg-slate-300 rounded">
            <div>
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
                className="lucide lucide-inbox"
              >
                <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
                <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
              </svg>
            </div>
            <span>
              <Link to="" className="ml-2" onClick={toggleInbox}>
                Inbox
              </Link>
            </span>
          </div>

          <div className="flex p-2 m-2 hover:bg-slate-300 rounded">
            <div>
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
                className="lucide lucide-sticky-note"
              >
                <path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z" />
                <path d="M15 3v4a2 2 0 0 0 2 2h4" />
              </svg>
            </div>
            <span>
              <Link to="" className="ml-2">
                Draft
              </Link>
            </span>
          </div>

          <div className="flex p-2 m-2  hover:bg-slate-300 rounded">
            <div>
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
                className="lucide lucide-mouse-pointer-2"
              >
                <path d="m4 4 7.07 17 2.51-7.39L21 11.07z" />
              </svg>
            </div>
            <span>
              <Link to="" className="ml-2" onClick={toggleSent}>
                Sent
              </Link>
            </span>
          </div>

          <div className="flex p-2 m-2 hover:bg-slate-300 rounded">
            <div>
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
                className="lucide lucide-archive-x"
              >
                <rect width="20" height="5" x="2" y="3" rx="1" />
                <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" />
                <path d="m9.5 17 5-5" />
                <path d="m9.5 12 5 5" />
              </svg>
            </div>
            <span>
              <Link to="" className="ml-2">
                Junk
              </Link>
            </span>
          </div>

          <div className="flex p-2 m-2 hover:bg-slate-300 rounded">
            <div>
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
                className="lucide lucide-trash-2"
              >
                <path d="M3 6h18" />
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                <line x1="10" x2="10" y1="11" y2="17" />
                <line x1="14" x2="14" y1="11" y2="17" />
              </svg>
            </div>
            <span>
              <Link to="" className="ml-2">
                Trash
              </Link>
            </span>
          </div>
        </div>
        <div className="bg-slate-200 h-full m-2 w-10/12 rounded">
          
          { showInbox && <Inbox /> }
          { showSent && <SentBox />}

        </div>
      </div>
    </div>
  );
};

export default Home;
