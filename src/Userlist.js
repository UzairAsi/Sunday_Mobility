import React, { useState } from "react";
import "./App.css";

function Userlist() {
  const [todo, setTodo] = useState([
    {
      username: "",
    },
  ]);
  const [datas, setDatas] = useState([]);
  const [errore, setErrore] = useState(false);
  const inputEvents = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setTodo({ ...todo, [name]: value });
  };
  const listSubmit = (event) => {
    event.preventDefault();
    if (!todo.username) {
      setErrore(true);
    } else {
      setDatas([...datas, { ...todo }]);
      setTodo({ username: "" });
      setErrore(false);
    }
  };
  const Delete = (index) => {
    const del = datas.filter((currElem, indexs) => {
      return indexs !== index;
    });
    setDatas(del);
  };
  return (
    <>
      <h1 style={{ marginTop: "0" }}>User List Page</h1>
      <form>
        <input
          className="input1"
          type="text"
          placeholder="Email"
          autoComplete="off"
          value={todo.username}
          onChange={inputEvents}
          id="username"
          name="username"
        />
        <br />
        {errore ? <h5>Please Write Something</h5> : ""}

        <br />
        <button
          style={{ marginBottom: "8px" }}
          type="submit"
          onClick={listSubmit}
        >
          Add
        </button>
      </form>
      <ol>
        {datas.map((currElem, index) => {
          return (
            <li style={{ marginLeft: "10%" }} key={index}>
              {currElem.username}
              <button
                style={{
                  width: "4%",
                  height: "20px",
                  marginTop: "1%",
                  marginLeft: "4%",
                  borderRadius: "0%",
                  fontSize: "smaller",
                }}
                onClick={() => Delete(index)}
              >
                X
              </button>
            </li>
          );
        })}
      </ol>
    </>
  );
}

export default Userlist;
