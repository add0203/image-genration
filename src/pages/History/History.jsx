import React, { useEffect, useState } from "react";
import "./History.css";
import Navbar from "../common/Navbar/navbar";
// import HistoryCard from "./HistoryCard";

// const dummyData = [
//   {
//     id: "1",
//     title: "Learn React",
//     date: "2024-06-01",
//   },
//   {
//     id: "2",
//     title: "Build a MERN Stack App",
//     date: "2024-06-02",
//   },
//   {
//     id: "3",
//     title: "Deploy to Heroku",
//     date: "2024-06-03",
//   },
//   {
//     id: "4",
//     title: "Understand Redux",
//     date: "2024-06-04",
//   },
//   {
//     id: "5",
//     title: "Learn TypeScript",
//     date: "2024-06-05",
//   },
//   {
//     id: "6",
//     title: "Master CSS Grid",
//     date: "2024-06-06",
//   },
//   {
//     id: "7",
//     title: "Write Unit Tests",
//     date: "2024-06-07",
//   },
//   {
//     id: "8",
//     title: "Integrate with REST APIs",
//     date: "2024-06-08",
//   },
//   {
//     id: "9",
//     title: "Explore GraphQL",
//     date: "2024-06-09",
//   },
//   {
//     id: "10",
//     title: "Optimize Performance",
//     date: "2024-06-10",
//     day: {
//       dayName: "monday",
//     },
//   },
// ];

// const changeTitle = () => {
//   console.log("title changed");
// };

// const changeDescription = () => {
//   console.log("Description changed");
// };
// const History = () => {

// const [title, setTitle] = useState();
// const [desc, setDecs] = useState();

// useEffect(()=>{
//     console.log("always get rerenderd if not dependency array is passed : ");
// })
// useEffect(()=>{
//     console.log("only when the page is render first time ");
// },[])

// useEffect(() => {
//     console.log("title changed");
// }, [title]);

//   useEffect(() => {
//     console.log("desc changed");
//   }, [desc]);
//   useEffect(() => {
//     console.log("desc changed");
//   }, [title,desc]);

//   return (
//     <div>
//       <Navbar />
//       <div className="history-main-container">
//         <button onClick={changeTitle}>change title</button>
//         <button
//           onClick={() => {
//             changeTitle();
//             changeDescription();
//           }}
//         >
//           change title and discription
//         </button>
//         <button onClick={changeDescription}>change discription</button>
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => {
//             setTitle(e.target.value);
//           }}
//         />
//         <br />
//         <input
//           value={desc}
//           type="text"
//           onChange={(e) => {
//             setDecs(e.target.value);
//           }}
//         />
//         <br />
//         title : {title}
//         desc : {desc}
//         {/* component */}
//         {/* {dummyData.map((item) => (
//           <HistoryCard key={item.id} data={item} />
//         ))} */}
//         {/* {dummyData.map((item) => (
//          return(
//            { item.title}
//          ) />
//         ))} */}
//       </div>
//       hi
//     </div>
//   );
// };

// export default History;

import React from "react";
import { Link } from "react-router-dom";

const History = (props) => {
  const { userPoints, setUserPoints } = props;
  const [textValue, setTextValue] = useState(" ");
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch(
        `https:dummyjson.com/products/search?q=${textValue}`
      );
      const obj = await res.json();
      // let data = obj.products; //static variable gets updated
      setData(obj.products);
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
      {/* {textValue && */}
      {data.map((item) => (
        <div key={item.id}>
          <div className="history-card">
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <Link to={`/history/${item.id}`}>More..</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

// {/* search box text - state if typeed on that rerender the api call */}
export default History;
