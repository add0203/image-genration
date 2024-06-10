import React from "react";

import Navbar from "../common/Navbar/navbar";
import "./Homepage.css";
import React from "react";
import linkdinImg from "../../assets/linkedin.png";

const Homepage = () => {
  const redirectToGitHub = () => {
    window.location.href = "https://github.com/add0203";
  };

  return (
    <div className="homepage-parent-container">
      <Navbar pageName="home" />
      <div style={styles.container}>
        <h1 style={styles.heading}>Welcome to AI Image Genrator</h1>
        <p style={styles.paragraph}>
          Made During 2.5 weeks bootcamp by Programming Pathsala
        </p>
        <Button onClick={redirectToGitHub}>Go to GitHub</Button>
        <a
          href="https://www.linkedin.com/in/anand-dhar-dwivedi/"
          className="social-link"
          target="_blank"
        >
          <img
            src={linkdinImg}
            alt=""
            style={{ height: "35px", width: "35px" }}
          />
        </a>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "70vh",
    textAlign: "center",
    backgroundColor: "black",
    padding: "50px",
    borderRadius: "10px",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
    // fontFamily: "Arial, sans-serif",
    color: "white",
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "20px",
    color: "white",
  },
  paragraph: {
    fontSize: "1.2rem",
    marginBottom: "40px",
    color: "#ccc",
  },
};

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovering: false,
    };
  }

  handleMouseEnter = () => {
    this.setState({ hovering: true });
  };

  handleMouseLeave = () => {
    this.setState({ hovering: false });
  };

  render() {
    const { hovering } = this.state;
    const buttonStyle = hovering
      ? { ...styles.button, ...styles.buttonHover }
      : styles.button;

    return (
      <button
        className="button-50"
        role="button"
        onClick={this.props.onClick}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Homepage;
