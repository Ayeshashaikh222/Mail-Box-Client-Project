import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { HomeActions } from "../Store/HomeSlice";

function Inbox() {
  const [inboxData, setInboxData] = useState([]);
  const [showInbox, setShowInbox] = useState(true);

  const dispatch = useDispatch();

  const userEmail = useSelector((state) => state.authentication.userId);
  const email = userEmail.replace(/[^a-zA-Z0-9]/g, "");

  const fetchInboxDataHandler = () => {
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
        let unreademailcount = 0;

        for (const key in data) {
          if (!data[key].viewed) {
            unreademailcount++;
          }
        }

        dispatch(HomeActions.setInboxCount(unreademailcount));
        console.log(fetchedInboxdata);
        setInboxData(fetchedInboxdata);
      });
  };

  const deleteInboxDataHandler = (itemId) => {
    fetch(
      `https://mail-box-client-auth-data-default-rtdb.firebaseio.com/inbox${email}/${itemId}.json`,
      {
        method: "DELETE",
      }
    ).then((res) => {
      if (res.ok) {
        console.log("successfully sent the email");
        setInboxData((prevState) =>
          prevState.filter((item) => item.id !== itemId)
        );
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "successfully deleted the sent email",
          showConfirmButton: false,
          timer: 1500,
        });
        return res.json();
      } else {
        return res.json().then((data) => {
          console.log("Failed to delete the inbox email ");
          Swal.fire({
            position: "top-center",
            icon: "error",
            title: "Failed to delete the inbox email",
            showConfirmButton: false,
            timer: 1500,
          });
        });
      }
    });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchInboxDataHandler();
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
              <button
                className="float-right text-gray-500"
                onClick={() => deleteInboxDataHandler(item.id)}
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
