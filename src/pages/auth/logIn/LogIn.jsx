import React, { useState } from "react";
import Navbar from "../../common/Navbar/navbar";

const LogIn = () => {
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [response, setResponse] = useState(" ");

  const handleClick = async () => {
    if (!email && !password) {
      return;
    }

    const res = await fetch(`${process.env.BACKEND_URL}/api/v1/auth/logIn`, {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // if (!res.ok) {

    // }
    const data = await res.json();
    console.log(data);
    setResponse(data);
  };

  return (
    <div className="log-in-container">
      <Navbar pageName="logIn" />
      <div className="log-in-box">
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
        <button onClick={handleClick}></button>
      </div>
    </div>
  );
};

export default LogIn;
