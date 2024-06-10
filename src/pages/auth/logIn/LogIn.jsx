import React, { useContext, useState } from "react";
import Navbar from "../../common/Navbar/navbar";
import PointsContext from "../../../context/Context";
import "./LogIn.css";
// import { useNavigate } from "react-router-dom";
// const navigate = useNavigate();

const LogIn = () => {
  const { login, userPoints, loggedInUser, setLoggedInUser } =
    useContext(PointsContext);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = async () => {
    if (!email || !password) {
      setResponseMessage("Email and password are required.");
      setIsError(true);
      return;
    }

    try {
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
      if (res.ok) {
        setResponseMessage("User logged in successfully!");
        setIsError(false);
        localStorage.setItem("authorization", data.data.token);
        // localStorage.setItem("userPoints", userPoints);
        login();
        // navigate("/image-genrator");
      } else {
        setResponseMessage(data.message || "An error occurred during login.");
        setIsError(true);
      }
      // seting loggedIn user as global variable
      setLoggedInUser(data.data.user);
      // console.log(loggedInUser);
      // console.log("'");
    } catch (error) {
      setResponseMessage("An error occurred: " + error.message);
      setIsError(true);
    }
  };

  return (
    <div className="log-in-container">
      <Navbar pageName="logIn" />

      <div className="log-in-box">
        <div className="inputbox">
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required="required"
            type="text"
          />
          <span> Email</span>
          <i></i>
        </div>

        <div className="inputbox">
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required="required"
            // type="password"
            type={showPassword ? "text" : "password"}
          />
          <span> Password</span>
          <i></i>
        </div>

        <button
          type="button"
          onClick={() => setShowPassword((prevState) => !prevState)}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
        <button className="button-50" role="button" onClick={handleClick}>
          LogIn
        </button>
      </div>

      {responseMessage && (
        <div
          style={{
            color: isError ? "red" : "white",
            marginTop: "10px",
          }}
        >
          {responseMessage}
        </div>
      )}
    </div>
  );
};

export default LogIn;
