import "./App.css";
import Authentication from "./components/Authentication/Authentication";
import ResetPassword from "./components/Authentication/ResetPassword";
import Successful from "./Pages/Successful";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

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

      {isLoggedIn && <Route path="/successful" element={<Successful />} />}

      <Route path="*" element={<Navigate to="/" />} />

      <Route path="/forget" element={<ResetPassword />} />
    </Routes>
  );
}

export default App;
