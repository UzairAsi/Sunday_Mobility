import React, { useEffect, useState } from "react";
import "./App.css";

const getLocalItmes = () => {
  let list = localStorage.getItem("lists");

  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};

function Register() {
  const [success, setSuccess] = useState(false);
  const [bioData, setBioData] = useState([
    {
      username: "",
      password: "",
      email: "",
      number: "",
    },
  ]);
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    number: "",
  });
  const [newData, setNewData] = useState([]);
  const inputEvent = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setBioData({ ...bioData, [name]: value });
  };
  const Register = (e) => {
    e.preventDefault();
    if (validate()) {
      setNewData([...newData, { ...bioData }]);
      setBioData({ username: "", email: "", number: "", password: "" });
      setErrors({ username: "", email: "", password: "", number: "" });
      setSuccess(true);
    } else if (
      bioData.username ||
      bioData.email ||
      bioData.number ||
      bioData.password
    ) {
      setSuccess(false);
      if (!bioData.username) {
        setErrors((prevstate) => {
          return {
            ...prevstate,
            username: "Please enter your name",
          };
        });
      }
      if (!bioData.number) {
        setErrors((prevstate) => {
          return {
            ...prevstate,
            number: "Please enter your number",
          };
        });
      }
      if (!bioData.password) {
        setErrors((prevstate) => {
          return {
            ...prevstate,
            password:
              "Minimum 8 Characters Atleast One Capital, One Number and Special Character",
          };
        });
      }
      if (!bioData.email) {
        setErrors((prevstate) => {
          return {
            ...prevstate,
            email: "Please enter an email",
          };
        });
      }
    } else {
      setSuccess(false);
    }
  };
  function validate() {
    let isvalid = true;
    if (!bioData.username) {
      isvalid = false;
      setErrors((prevstate) => {
        return { ...prevstate, username: "Please enter your name" };
      });
    }
    if (!bioData.email) {
      isvalid = false;
      setErrors((prevstate) => {
        return { ...prevstate, email: "Please enter an email" };
      });
    }
    if (!bioData.number) {
      isvalid = false;
      setErrors((prevstate) => {
        return { ...prevstate, number: "Please enter a number" };
      });
    }
    if (!bioData.password) {
      isvalid = false;
      setErrors((prevstate) => {
        return {
          ...prevstate,
          password: "Minimum 8 Characters Atleast One Capital & One Number",
        };
      });
    }
    if (typeof bioData.username !== "undefined") {
      var patternname = /^[A-Za-z]+$/;
      if (!bioData.username.match(patternname)) {
        isvalid = false;
        setErrors((prevstate) => {
          return { ...prevstate, username: "Please enter a valid name" };
        });
      }
    }
    if (typeof bioData.number !== "undefined") {
      if (bioData.number.length !== 10) {
        isvalid = false;

        setErrors((prevstate) => {
          return {
            ...prevstate,
            number: "Please enter a valid number",
          };
        });
      }
    }
    if (typeof bioData.password !== "undefined") {
      var patternpassword = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
      );
      if (!bioData.password.match(patternpassword)) {
        isvalid = false;
        setErrors((prevstate) => {
          return {
            ...prevstate,
            password: "Minimum 8 Characters Atleast One Capital & One Number",
          };
        });
      }
    }
    if (typeof bioData.email !== "undefined") {
      var patternemail = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!bioData.email.match(patternemail)) {
        isvalid = false;
        setErrors((prevstate) => {
          return {
            ...prevstate,
            email: "Please enter a valid email",
          };
        });
      }
    }
    return isvalid;
  }
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(newData));
  }, [newData]);
  return (
    <>
      <h1 style={{ marginTop: "5%" }}>Register Page</h1>
      <form>
        <br />
        <input
          className="input1"
          value={bioData.username}
          onChange={inputEvent}
          type="text"
          placeholder="Name"
          autoComplete="off"
          name="username"
          id="username"
        />
        <br />
        <h5> {errors.username} </h5>
        <br />
        <input
          className="input1"
          value={bioData.email}
          autoComplete="off"
          placeholder="Email"
          onChange={inputEvent}
          type="text"
          name="email"
          id="email"
        />
        <br />
        <h5> {errors.email} </h5>
        <br />
        <input
          className="input1"
          value={bioData.password}
          placeholder="password"
          onChange={inputEvent}
          type="password"
          name="password"
          autoComplete="off"
          id="password"
        />
        <br />
        <h5> {errors.password} </h5>
        <br />
        <input
          className="input1"
          value={bioData.number}
          placeholder="Mobile Number"
          onChange={inputEvent}
          type="number"
          autoComplete="off"
          name="number"
          id="number"
        />
        <br />
        <h5> {errors.number} </h5>
        <button onClick={Register} type="submit">
          Register
        </button>
      </form>
      {success ? (
        <h4 style={{ display: "inline" }}>
          Registered successfully check the localStorage
        </h4>
      ) : (
        ""
      )}
    </>
  );
}

export default Register;
