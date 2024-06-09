import { useContext } from "react";
import React, { useEffect, useState } from "react";
import "./navbar.css";

import { Link, useNavigate } from "react-router-dom";
import PointsContext from "../../../context/Context.jsx";

const Navbar = (props) => {
  const { userPoints, setUserPoints, isLoggedIn, login, logout } =
    useContext(PointsContext);

  const navigate = useNavigate();
  const [redirectToLogin, setRedirectToLogin] = useState(false);

  const handleLoginClick = () => {
    // login(); // Call the login function from context
    setRedirectToLogin(true);
  };

  useEffect(() => {
    if (redirectToLogin) {
      navigate("/log-in");
    }
  }, [redirectToLogin, navigate]);

  const page = props.pageName;

  const customColor = (x) => {
    return { color: page === x ? "red" : "white" };
  };
  console.log(isLoggedIn);

  return (
    <div className="header-parent-container">
      <div className="left">
        <Link to="/" style={customColor("home")}>
          Home
        </Link>
        <Link to="/image-genrator" style={customColor("imageGenerator")}>
          Image Genrator
        </Link>
        <Link to="/history" style={customColor("history")}>
          History
        </Link>
        {!isLoggedIn && (
          <div className="sign-up-log-in">
            <Link to="/sign-up" style={customColor("signUp")}>
              SingUp
            </Link>
            {/* <Link to="/log-in" style={customColor("logIn")}>
              LogIn
            </Link> */}
          </div>
        )}
      </div>
      <div
        className="right"
        style={{ padding: "4px", color: "brown", fontWeight: "bold" }}
      >
        {userPoints}
      </div>
      {isLoggedIn ? (
        <button className="button-50" role="button" onClick={logout}>
          Logout
        </button>
      ) : (
        <button className="button-50" role="button" onClick={handleLoginClick}>
          Login
        </button>
      )}
    </div>
  );
};

export default Navbar;

{
  /* <div onClick={() => setMenu(!menu)} className="right">
  <ThemeProvider theme={theme}>
    <MenuSharpIcon color="primary" />
  </ThemeProvider>
</div>
{menu && <div>hello</div>} */
}
