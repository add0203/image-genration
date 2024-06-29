import React, { useEffect, useState, useContext } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import PointsContext from "../../../context/Context.jsx";

const Navbar = (props) => {
  const { userPoints, isLoggedIn, login, logout } = useContext(PointsContext);
  const navigate = useNavigate();
  const [redirectToLogin, setRedirectToLogin] = useState(false);

  useEffect(() => {
    if (redirectToLogin) {
      navigate("/log-in");
    }
  }, [redirectToLogin, navigate]);

  const handleLoginClick = () => {
    setRedirectToLogin(true);
  };

  const page = props.pageName;

  const customColor = (x) => {
    return { color: page === x ? "red" : "white" };
  };

  return (
    <div className="header-parent-container">
      <div className="left">
        <Link to="/" style={customColor("home")}>
          Home
        </Link>
        <Link to="/image-genrator" style={customColor("imageGenerator")}>
          Image Generator
        </Link>
        <Link to="/history" style={customColor("history")}>
          History
        </Link>
        {!isLoggedIn && (
          <div className="sign-up-log-in">
            <Link to="/sign-up" style={customColor("signUp")}>
              Sign Up
            </Link>
            {/* Uncomment this link when needed */}
            {/* <Link to="/log-in" style={customColor("logIn")}>
              LogIn
            </Link> */}
          </div>
        )}
      </div>
      <div className="right">
        <div className="points-container">{userPoints}</div>
        {isLoggedIn ? (
          <button className="button-50" onClick={logout}>
            Logout
          </button>
        ) : (
          <button className="button-50" onClick={handleLoginClick}>
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
