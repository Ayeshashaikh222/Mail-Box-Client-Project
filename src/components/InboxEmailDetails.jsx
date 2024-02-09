import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function InboxEmailDetails() {
  const [inboxdata, setinboxData] = useState([]);

  const userEmail = useSelector((state) => state.authentication.userId);
  const email = userEmail.replace(/[^a-zA-Z0-9]/g, "");

  const { Id } = useParams();

  const inboxEmailMessage = async () => {
    try {
      const response = await fetch(
        `https://mail-box-client-auth-data-default-rtdb.firebaseio.com/inbox${email}.json`
      );
      const data = await response.json();
      const fetchedInboxData = [];
      for (const key in data) {
        fetchedInboxData.push({
          id: key,
          email: data[key].email,
          subject: data[key].subject,
          editor: data[key].editor,
        });
      }
      setinboxData(fetchedInboxData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    inboxEmailMessage();
  }, []);

  const inboxData = inboxdata.find((item) => item.id === Id);

  return (
    <>
      <div className="flex flex-col bg-white m-2 p-2 h-[100%] rounded">
        <h1 className="m-2 ml-10 mb-6 p-2 text-2xl">{inboxData?.subject}</h1>
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
          <span className=" ml-2">{inboxData?.email}</span>
        </div>
        <div className="m-4 ml-4 p-6">{inboxData?.editor}</div>
      </div>
    </>
  );
}

export default InboxEmailDetails;
