import React, { useEffect, useState } from "react";
import "./History.css";
import Navbar from "../common/Navbar/navbar";

import React from "react";
import { Link } from "react-router-dom";

const History = (props) => {
  const { userPoints, setUserPoints } = props;
  const [textValue, setTextValue] = useState(" ");
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      // const res = await fetch(
      //   `${process.env.BACKEND_URL}/api/v1/image/history`
      // );
      const res = await fetch(
        `${process.env.BACKEND_URL}/api/v1/image/history`,
        {
          method: "GET",
          // body: JSON.stringify({
          //   searchText: searchText,
          // }),
          headers: {
            "Content-Type": "application/json",
            authorization: "Bearer " + localStorage.getItem("authorization"),
          },
        }
      );

      const obj = await res.json();
      let data = obj.data; //static variable gets updated
      setData(data);
      console.log(obj);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  // infinite call for set of object take place if we not use the useEffect to stop it
  // getData();
  // to execute the for only first time the page render we use useEffect with empty dependencyArray
  //   useEffect(() => {
  //     getData();
  //   }, []);

  // first pass is done because of empty dependency array
  useEffect(() => {
    getData();
  }, [textValue]);

  //css

  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    margin: "16px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "auto",
    textAlign: "center",
  };

  const imageStyle = {
    width: "400px",
    height: "400px",
    objectFit: "cover",
    borderRadius: "8px",
  };
  return (
    <div>
      <Navbar
        pageName="history"
        userPoints={userPoints}
        setUserPoints={setUserPoints}
      />
      <div class="inputbox">
        <input
          onChange={(e) => setTextValue(e.target.value)}
          required="required"
          type="text"
        />
        {/* <span>Username</span> */}
        <i></i>
      </div>
      {
        // textValue &&
        data.reverse().map((item) => (
          // <div key={item._id}>
          <div key={item._id} style={cardStyle}>
            <img src={item.imageUrl} alt={item.searchText} style={imageStyle} />
            <h4>{item.searchText}</h4>
            <p>{item.imageUrl}</p>

            {/* <Link to={`/history/${item.imageUrl}`}>More..</Link> */}
            <Link to={`${item.imageUrl}`}>Open</Link>
            {/* </div> */}
          </div>
        ))
      }
    </div>
  );
};

// {/* search box text - state if typeed on that rerender the api call */}
export default History;
