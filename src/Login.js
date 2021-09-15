import { useState } from "react";
import "./App.css";

function Login() {
  const [input, setInput] = useState({
    firstname: "",
    email: "",
  });
  const [errors, setErrors] = useState({
    firstname: "",
    email: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setErrors({ firstname: "", email: "" });
    } else if (input.firstname || input.email) {
      if (!input.firstname) {
        setErrors((prevstate) => {
          return {
            ...prevstate,
            firstname: "Please enter your name",
            email: "",
          };
        });
      }
      if (!input.email) {
        setErrors((prevstate) => {
          return {
            ...prevstate,
            firstname: "",
            email: "Please enter an email",
          };
        });
      }
    }
  };

  function validate() {
    let isvalid = true;
    if (!input.firstname) {
      isvalid = false;
      setErrors((prevstate) => {
        return { ...prevstate, firstname: "Please enter your name" };
      });
    }
    if (!input.email) {
      isvalid = false;
      setErrors((prevstate) => {
        return { ...prevstate, email: "Please enter an email" };
      });
    }
    if (typeof input.firstname !== "undefined") {
      var patternname = /^[A-Za-z]+$/;
      if (!input.firstname.match(patternname)) {
        isvalid = false;
        setErrors((prevstate) => {
          return { ...prevstate, firstname: "Please enter a valid name" };
        });
      }
    }
    if (typeof input.email !== "undefined") {
      var patternemail = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!input.email.match(patternemail)) {
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
  return (
    <>
      <h1>Welcome back!</h1>
      <h3>Please login to your account.</h3>
      <form onSubmit={handleSubmit}>
        <input
          className="input1"
          type="text"
          name="firstname"
          onChange={handleChange}
          value={input.firstname}
          placeholder="username"
          id="firstname"
        />
        <br />
        <h5> {errors.firstname} </h5>
        <br />
        <input
          className="input1"
          type="text"
          name="email"
          onChange={handleChange}
          value={input.email}
          placeholder="password"
          id="email"
        />
        <br />
        <h5> {errors.email} </h5>
        <input className="input2" type="checkbox" />
        <label htmlFor="checkbox"> Remember Me </label>
        <a href="/"> Forgot Password</a>
        <br />
        <button type="submit">Login</button>
      </form>
      <h4> Terms of use. Privacy Policy </h4>
    </>
  );
}

export default Login;
