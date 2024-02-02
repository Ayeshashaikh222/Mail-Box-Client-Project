import "./App.css";
import Authentication from "./components/Authentication/Authentication";
import ResetPassword from "./components/Authentication/ResetPassword";
import Successful from "./components/Pages/Successful";

function App() {

  return (
    <>
      <Authentication />
      <ResetPassword />
      <Successful />
      
      
    </>
  );
}

export default App;
