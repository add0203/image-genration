// import React, { useState } from "react";
// import Navbar from "../../common/Navbar/navbar";
// import "./SignUp.css";

// const SignUp = () => {
//   const [password, setPassword] = useState();
//   const [email, setEmail] = useState();
//   const [responseMessage, setResponseMessage] = useState("");
//   const handleClick = async () => {
//     console.log(password, email);
//     if (!email && !password) {
//       return;
//     }
//     try {
//       const res = await fetch(`${process.env.BACKEND_URL}/api/v1/auth/signUp`, {
//         // http://localhost:5001/api/v1/auth/signup
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
//         setResponseMessage("User created successfully!");
//       } else {
//         setResponseMessage(data.message || "An error occurred during sign up.");
//       }
//     } catch (error) {
//       setResponseMessage("An error occurred: " + error.message);
//     }
//     //display the return res from the backend with status
//     console.log(data);
//   };
//   return (
//     <div className="sign-up-container">
//       <Navbar pageName="signUp" />
//       <div className="sign-up-box">
//         <div className="inputbox">
//           <input
//             onChange={(e) => {
//               setEmail(e.target.value);
//             }}
//             placeholder="Email"
//             required="required"
//             type="text"
//           />

//           <i></i>
//         </div>
//         <div className="inputbox">
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
//           SignUp
//         </button>
//       </div>

//       {responseMessage && (
//         <div style={{ color: "white", marginTop: "10px" }}>
//           {responseMessage}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SignUp;

import React, { useState } from "react";
import Navbar from "../../common/Navbar/navbar";
import "./SignUp.css";

const SignUp = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = async () => {
    console.log(password, email);
    if (!email || !password) {
      setResponseMessage("Email and password are required.");
      setIsError(true);
      return;
    }
    try {
      const res = await fetch(`${process.env.BACKEND_URL}/api/v1/auth/signUp`, {
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
        setResponseMessage(data.user.message);
        setIsError(false);
      } else {
        setResponseMessage(
          data.user.message || "An error occurred during sign up."
        );
        setIsError(true);
      }
    } catch (error) {
      setResponseMessage("An error occurred: " + error.message);
      setIsError(true);
    }
  };

  return (
    <div className="sign-up-container">
      <Navbar pageName="signUp" />
      <div className="sign-up-box">
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
          SignUp
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

export default SignUp;
