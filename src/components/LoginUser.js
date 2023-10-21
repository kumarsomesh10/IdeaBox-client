import React, { useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";

const LoginUser = ({ GetIdeas, handleAuthChange }) => {
  const [message, setMessage] = useState("");
  // const URL = "https://ideabox-api-dlu6.onrender.com";
  const URL = "http://localhost:5000/api";

  async function handleChange(event) {
    event.preventDefault();
    const user = {
      username: event.target.username.value,
      password: event.target.password.value,
    };

    try {
      setMessage("Loading...");
      const response = await fetch(`${URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const auth = await response.json();
      if (auth.message === "Wrong Credential") {
        setMessage("Wrong Credential");
      } else if (auth.message === "Internal server error") {
        setMessage("Internal server error");
      } else {
        GetIdeas(auth.email, auth.username, auth._id, true);
      }
      // console.log(auth.message);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div className="Registration">
        <h1>Login</h1>
        <div className="form">
          <form onSubmit={handleChange}>
            <input placeholder="Username" type="text" name="username" />

            <br />
            <input placeholder="Password" type="password" name="password" />
            <br />
            <button type="submit">
              <AiFillCheckCircle />
            </button>
          </form>
        </div>
        <p className="message">{`${message}`} </p>
        <button
          className="top-right-button"
          onClick={() => {
            handleAuthChange();
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default LoginUser;
