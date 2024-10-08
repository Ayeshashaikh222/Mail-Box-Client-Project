import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

function sentBox() {
  const [sentData, setSentData] = useState([]);
  const [showSent, setShowsSent] = useState(true);

  const userEmail = useSelector((state) => state.authentication.userId);
  const email = userEmail.replace(/[^a-zA-Z0-9]/g, "");

  const fetchsentDataHandler = () => {
    fetch(
      `https://emaildata-7afb4-default-rtdb.firebaseio.com/sent${email}.json`
    )
      .then((res) => {
        if (res.ok) {
          console.log("successfully fetched sent email");
          return res.json();
        } else {
          return res.json().then((data) => {
            console.log("failed to fetch the sent email");
          });
        }
      })
      .then((data) => {
        console.log(data);
        let fetchedSentData = [];
        for (const key in data) {
          fetchedSentData.push({
            id: key,
            email: data[key].email,
            subject: data[key].subject,
            editor: data[key].editor,
          });
        }
        console.log(fetchedSentData);
        setSentData(fetchedSentData);
      });
  };

  const deleteSentDataHandler = (itemId) => {
    fetch(
      `https://emaildata-7afb4-default-rtdb.firebaseio.com/sent${email}/${itemId}.json`,
      {
        method: "DELETE",
      }
    ).then((res) => {
      if (res.ok) {
        console.log("successfully deleted the email");
        setSentData((prevState) =>
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
          console.log("Failed to delete the sent email ");
          Swal.fire({
            position: "top-center",
            icon: "error",
            title: "Failed to delete the sent email",
            showConfirmButton: false,
            timer: 1500,
          });
        });
      }
    });
  };

  useEffect(() => {
    fetchsentDataHandler();
  }, []);

  return (
    <>
      {showSent && (
        <ul>
          {sentData.map((item) => (
            <li
              key={item.id}
              className="bg-white m-2 p-2 rounded hover:bg-slate-200"
            >
              <Link to={`/sentmessage/${item.id}`}>
                {item.email} - {item.subject}
              </Link>
              <button
                className="float-right text-gray-500"
                onClick={() => deleteSentDataHandler(item.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
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

export default sentBox;
