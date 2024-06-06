import React, { useContext, useState } from "react";
import Navbar from "../../common/Navbar/navbar";
import PointsContext from "../../../context/Context";
import "./LogIn.css";

const LogIn = () => {
  const { login } = useContext(PointsContext);
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();


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
    const data = await res.json();
    if (res.status === 200) {
      localStorage.setItem("authorization", data.data.token);
      login();
    }

    console.log(data);
    // setResponse(data);
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
        <button onClick={handleClick}>LogIn</button>
      </div>
    </div>
  );
};

export default LogIn;
