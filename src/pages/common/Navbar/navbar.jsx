import { useContext } from "react";
import React, { useEffect, useState } from "react";
import "./navbar.css";

import { Link } from "react-router-dom";
import PointsContext from "../../../context/Context.jsx";

const Navbar = (props) => {
  const { userPoints, setUserPoints } = useContext(PointsContext);

  // console.log(useContext(PointsContext));
  const page = props.pageName;

  const customColor = (x) => {
    return { color: page === x ? "red" : "white" };
  };
  // console.log(userPoints);

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
        <Link to="/sign-up" style={customColor("signUp")}>
          SingUp
        </Link>
        <Link to="/log-in" style={customColor("signIn")}>
          LogIn
        </Link>
      </div>
      <div className="right">
        <div className="circle">{userPoints}</div>
      </div>
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
