// import React, { useContext, useState } from "react";
// import Navbar from "../../common/Navbar/navbar";
// import PointsContext from "../../../context/Context";
// import "./LogIn.css";

// const LogIn = () => {
//   const { login, userPoints } = useContext(PointsContext);
//   const [password, setPassword] = useState();
//   const [email, setEmail] = useState();
//   const [isError, setIsError] = useState(false);

//   const handleClick = async () => {
//     if (!email && !password) {
//       return;
//     }
//     try {
//       const res = await fetch(`${process.env.BACKEND_URL}/api/v1/auth/logIn`, {
//         method: "POST",
//         body: JSON.stringify({
//           email,
//           password,
//         }),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       const data = await res.json();
//       if (res.ok) {
//         setResponseMessage(data.message);
//         setIsError(false);
//       } else {
//         setResponseMessage(data.message || "An error occurred during sign up.");
//         setIsError(true);
//       }
//       if (res.status === 200) {
//         localStorage.setItem("authorization", data.data.token);
//         localStorage.setItem("userPoints", userPoints);
//         login();
//       }
//     } catch (error) {
//       setResponseMessage("An error occurred: " + error.message);
//       setIsError(true);
//     }

//     // console.log(data);
//     // setResponse(data);
//   };

//   return (
//     <div className="log-in-container">
//       <Navbar pageName="logIn" />

//       <div className="log-in-box">
//         <div class="inputbox">
//           <input
//             onChange={(e) => {
//               setEmail(e.target.value);
//             }}
//             required="required"
//             type="text"
//             placeholder="Email"
//           />

//           <i></i>
//         </div>

//         <div class="inputbox">
//           <input
//             onChange={(e) => {
//               setPassword(e.target.value);
//             }}
//             placeholder="Password"
//             required="required"
//             type="text"
//           />

//           <i></i>
//         </div>

//         <button className="button-50" role="button" onClick={handleClick}>
//           LogIn
//         </button>
//       </div>
//       {/*  */}
//       {responseMessage && (
//         <div
//           style={{
//             color: isError ? "red" : "white",
//             marginTop: "10px",
//           }}
//         >
//           {responseMessage}
//         </div>
//       )}
//     </div>
//   );
// };

// export default LogIn;

import React, { useContext, useState } from "react";
import Navbar from "../../common/Navbar/navbar";
import PointsContext from "../../../context/Context";
import "./LogIn.css";

const LogIn = () => {
  const { login, userPoints } = useContext(PointsContext);
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
        localStorage.setItem("userPoints", userPoints);
        login();
      } else {
        setResponseMessage(data.message || "An error occurred during login.");
        setIsError(true);
      }
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
            placeholder="Email"
          />

          <i></i>
        </div>

        <div className="inputbox">
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
            required="required"
            // type="password"
            type={showPassword ? "text" : "password"}
          />

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
