import React from "react";
import Navbar from "../common/Navbar/navbar";
import "./Homepage.css";

const Homepage = (props) => {
  // const { userPoints, setUserPoints } = props;
  return (
    <div className="homepage-parent-container">
      <Navbar
        pageName="home"
        // userPoints={userPoints}
        // setUserPoints={setUserPoints}
      />
      HOME PAGE
    </div>
  );
};

export default Homepage;
