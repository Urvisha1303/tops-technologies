import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./Login";
import LoginContext from "./LoginContext";
import Themeprovider from "./Themeprovider";

function App() {
  return (
    <>
      <Themeprovider>
        <LoginContext>
          <Login />
        </LoginContext>
      </Themeprovider>
    </>
  );
}

export default App;
