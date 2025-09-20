// import './App.css';

import { Outlet,Navigate } from "react-router-dom";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import { useState } from "react";

function App() {
  let [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  return (
    <>
      {/* <h1>BlogBurg website</h1> */}
      <NavBar></NavBar>
      <Outlet context={{ isUserLoggedIn, setIsUserLoggedIn }}></Outlet>
    </>
  );
}

export default App;
