import "./App.css";
import Authentication from "./components/Authentication/Authentication";
import ResetPassword from "./components/Authentication/ResetPassword";
import Successful from "./Pages/Successful";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./Pages/Home";
import InboxEmailDetails from "./components/InboxEmailDetails";
import SentEmailDetails from "./components/SentEmailDetails";

function App() {
  const isLoggedIn = useSelector((state) => state.authentication.isLoggedIn);

  return (
    <Routes>
      <Route path="/" element={<Authentication />} />

      {!isLoggedIn && (
        <>
          <Route path="/authentication" element={<Authentication />} />
        </>
      )}

      {isLoggedIn && (
        <>
          <Route path="/successful" element={<Successful />} />
          <Route path="/home" element={<Home />} />
          <Route path="/inboxmessage/:Id" element={<InboxEmailDetails />} />
          <Route path="/sentmessage/:Id" element={<SentEmailDetails />} />
        </>
      )}

      <Route path="*" element={<Navigate to="/" />} />

      <Route path="/forget" element={<ResetPassword />} />
    </Routes>
  );
}

export default App;
