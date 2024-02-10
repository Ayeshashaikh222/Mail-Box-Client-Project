import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

function Inbox({ setInboxCount }) {
  const [inboxData, setInboxData] = useState([]);
  const [showInbox, setShowInbox] = useState(true);

  const userEmail = useSelector((state) => state.authentication.userId);
  const email = userEmail.replace(/[^a-zA-Z0-9]/g, "");

  const inboxDataHandler = () => {
    fetch(
      `https://mail-box-client-auth-data-default-rtdb.firebaseio.com/inbox${email}.json`
    )
      .then((res) => {
        if (res.ok) {
          console.log("successfully fetched inbox email data");

          return res.json();
        } else {
          return res.json().then((data) => {
            console.log("Something went wrong while fetching inbox email data");
          });
        }
      })
      .then((data) => {
        console.log(data);
        let fetchedInboxdata = [];
        for (const key in data) {
          fetchedInboxdata.push({
            id: key,
            email: data[key].email,
            subject: data[key].subject,
            editor: data[key].editor,
            viewed: data[key].viewed || false,
          });
        }
        console.log(fetchedInboxdata);
        setInboxData(fetchedInboxdata);
        // const unViewedData = inboxData.filter(
        //   (prevState) => prevState.viewed === false
        // );
        // setInboxCount(unViewedData.length);
      });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      inboxDataHandler();
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {showInbox && (
        <ul>
          {inboxData.map((item) => (
            <li
              key={item.id}
              className={`bg-white m-2 p-2  rounded hover:bg-slate-200 ${
                item.viewed ? "text-gray-500 font-normal" : "font-bold"
              } `}
            >
              <Link to={`/inboxmessage/${item.id}`}>
                {item.email} - {item.subject}
              </Link>
              <button className="float-right text-gray-500">
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
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Inbox;
