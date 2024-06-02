import React, { useState } from "react";
import Navbar from "../../common/Navbar/navbar";
import "./SignUp.css";

const SignUp = () => {
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const handleClick = async () => {
    console.log(password, email);
    if (!email && !password) {
      return;
    }
    const res = await fetch(`${process.env.BACKEND_URL}/api/v1/auth/signUp`, {
      // http://localhost:5001/api/v1/auth/signup
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
  };
  return (
    <div className="sign-up-container">
      <Navbar pageName="signUp" />
      <div className="sign-up-box">
        <input
          type="text"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="text"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button onClick={handleClick}>SignUp</button>
      </div>
    </div>
  );
};

export default SignUp;
