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

    //display the return res from the backend with status
    console.log(data);
  };
  return (
    <div className="sign-up-container">
      <Navbar pageName="signUp" />
      <div className="sign-up-box">
        <div class="inputbox">
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
            required="required"
            type="text"
          />

          <i></i>
        </div>
        <div class="inputbox">
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
            required="required"
            type="text"
          />

          <i></i>
        </div>

        <button className="button-50" role="button" onClick={handleClick}>
          SignUp
        </button>
      </div>
      {/* {data.ok && <div>user created</div>} */}
    </div>
  );
};

export default SignUp;
