import React, { useState } from "react";
import "./App.css";
import Login from "./Login";
import Register from "./Register";
import Userlist from "./Userlist";

const App = () => {
  const [toggles1, setToggles1] = useState(false);
  const [toggles2, setToggles2] = useState(true);
  const [toggles3, setToggles3] = useState(false);
  const [toggles4, setToggles4] = useState(true);
  const [toggles5, setToggles5] = useState(false);
  const [toggles6, setToggles6] = useState(true);
  const [toggleClose, setToggleClose] = useState(false);

  const viewLogin1 = () => {
    setToggles1(true);
    setToggles2(false);
    setToggles4(false);
    setToggles6(false);
    setToggleClose(true);
  };
  const viewLogin2 = () => {
    setToggles3(true);
    setToggles4(false);
    setToggles2(false);
    setToggles6(false);
    setToggleClose(true);
  };
  const viewLogin3 = () => {
    setToggles5(true);
    setToggles4(false);
    setToggles2(false);
    setToggles6(false);
    setToggleClose(true);
  };
  const closes = () => {
    setToggles1(false);
    setToggles3(false);
    setToggles5(false);
    setToggles2(true);
    setToggles4(true);
    setToggles6(true);
    setToggleClose(false);
  };
  return (
    <div className="app">
      <div className="app_image">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
          alt="..."
        />
      </div>
      <div className="app_form">
        {toggles2 ? (
          <button onClick={viewLogin1}>Click To View Login Page</button>
        ) : (
          ""
        )}
        {toggles1 ? <Login /> : ""}
        {toggles4 ? (
          <button onClick={viewLogin2}>Click To View Register Page</button>
        ) : (
          ""
        )}
        {toggles3 ? <Register /> : ""}
        {toggles6 ? (
          <button onClick={viewLogin3}>Click To View User List Page</button>
        ) : (
          ""
        )}
        {toggles5 ? <Userlist /> : ""}
        {toggleClose ? (
          <button style={{ width: "10%" }} onClick={closes}>
            Close
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default App;
