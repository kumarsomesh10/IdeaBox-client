import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

const RegisterUsers = ({ GetIdeas, handleAuthChange }) => {
  // const URL = "https://ideabox-api-dlu6.onrender.com";
  const URL = "http://localhost:5000/api";

  async function handleChange(event) {
    event.preventDefault();
    const user = {
      email: event.target.email.value,
      username: event.target.username.value,
      password: event.target.password.value,
    };

    try {
      const response = await fetch(`${URL}/auth/register/new`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const auth = await response.json();
      // console.log(auth);
      GetIdeas(auth.email, auth.username, auth._id, true);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div className="Registration">
        <h1>Register</h1>
        <div className="form">
          <form onSubmit={handleChange}>
            <input placeholder="Email" type="email" name="email" />
            <br />
            <input placeholder="Username" type="text" name="username" />

            <br />
            <input placeholder="Password" type="password" name="password" />
            <br />
            <button type="submit">
              <AiFillCheckCircle />
            </button>
          </form>
        </div>
        <button
          className="top-right-button"
          onClick={() => {
            handleAuthChange();
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default RegisterUsers;
