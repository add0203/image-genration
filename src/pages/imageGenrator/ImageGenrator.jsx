// import React, { useState, useEffect } from "react";
// import "./ImageGenrator.css";
// import Navbar from "../common/Navbar/navbar";
// import { useContext } from "react";
// import PointsContext from "../../context/Context";

// const ImageGenrator = () => {
//   const [searchText, setSearchText] = useState("");
//   const [imageSrc, setImgSrc] = useState("");

//   const func = (e) => {
//     setSearchText(e.target.value);
//   };

//   const { userPoints, setUserPoints, loggedInUser } = useContext(PointsContext);
//   // console.log("user detail :");
//   // console.log(loggedInUser);
//   const handleClick = async () => {
//     try {
//       const res = await fetch(
//         `${process.env.BACKEND_URL}/api/v1/image/genrateImage`,
//         {
//           method: "POST",
//           body: JSON.stringify({
//             searchText: searchText,
//             userCoins: userPoints,
//             loggedInUser: loggedInUser,
//           }),
//           headers: {
//             "Content-Type": "application/json",
//             authorization: "Bearer " + localStorage.getItem("authorization"),
//           },
//         }
//       );
//       // localStorage.setItem("loggedInUser", loggedInUser);
//       if (!res.ok) {
//         // Handle non-200 responses
//         const errorText = await res.text();
//         console.error("Error fetching data:", errorText);
//         return;
//       }
//       const data = await res.json();
//       // checking the presence of user

//       console.log(data.data.imageUrl);
//       if (data?.status === 200) {
//         setImgSrc(data.data.imageUrl);
//       }
//     } catch (error) {
//       console.log(error + "at the catch of imagegenrator");
//     }
//   };

//   return (
//     <div>
//       <Navbar pageName="imageGenerator" />

//       <div className="image-gen-parent-container">
//         <div className="img">
//           {imageSrc}
//           <img src={imageSrc} alt="Generating" />
//           {/* {imageSrc && <a href={imageSrc}>download</a>} */}
//         </div>
//         <br />
//         <div className="inputbox">
//           <input
//             onChange={(e) => {
//               func(e);
//             }}
//             // placeholder=""
//             required="required"
//             type="text"
//           />
//           <span> What to create?</span>
//           <i></i>
//         </div>
//         <button
//           className="button-50"
//           role="button"
//           onClick={() => {
//             handleClick();
//             setUserPoints(userPoints - 1);
//           }}
//         >
//           Generate
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ImageGenrator;

// {
//   /* <button
//   onClick={() => {
//     setDisplay(!display);
//   }}
//   className=""
// >
//   Hide Image
// </button> */
// }
// {
//   /* {display && (
//   <div className="img">
//     <img src="https://picsum.photos/300/300" alt="" />
//   </div>
// )} */
// }

// {
//   /* {valueEntered} */
// }
// {
//   /* <button onClick={handleRefresh} className="">
//   Get New Image
// </button> */
// }

// import React, { useState, useEffect, useContext } from "react";
// import "./ImageGenrator.css";
// import Navbar from "../common/Navbar/navbar";
// import PointsContext from "../../context/Context";

// const ImageGenerator = () => {
//   const [searchText, setSearchText] = useState("");
//   const [imageSrc, setImgSrc] = useState("");
//   const { userPoints, setUserPoints, loggedInUser, setLoggedInUser } =
//     useContext(PointsContext);

//   const handleChange = (e) => {
//     setSearchText(e.target.value);
//   };

//   const handleClick = async () => {
//     setUserPoints(userPoints - 1);
//     try {
//       const res = await fetch(
//         `${process.env.BACKEND_URL}/api/v1/image/genrateImage`,
//         {
//           method: "POST",
//           body: JSON.stringify({
//             searchText,
//             userCoins: userPoints,
//             loggedInUser,
//           }),
//           headers: {
//             "Content-Type": "application/json",
//             authorization: "Bearer " + localStorage.getItem("authorization"),
//           },
//         }
//       );

//       if (!res.ok) {
//         const errorText = await res.text();
//         console.error("Error fetching data:", errorText);
//         return;
//       }

//       const data = await res.json();
//       console.log("Response data:", data);
//       if (data?.status === 200 && data.data?.imageUrl) {
//         setImgSrc(data.data.imageUrl);
//       } else {
//         console.error("Invalid response data:", data);
//       }
//     } catch (error) {
//       console.error("Error at the catch of imageGenerator:", error);
//     }
//   };

//   return (
//     <div>
//       <Navbar pageName="imageGenerator" />
//       <div className="image-gen-parent-container">
//         <div className="img">
//           {imageSrc && <img src={imageSrc} alt="Generating" />}
//         </div>
//         <br />
//         <div className="inputbox">
//           <input
//             onChange={handleChange}
//             value={searchText}
//             required
//             type="text"
//           />
//           <span> What to create?</span>
//           <i></i>
//         </div>
//         <button className="button-50" role="button" onClick={handleClick}>
//           Generate
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ImageGenerator;

//29-06-2024

// import React, { useState, useContext } from "react";
// import "./ImageGenrator.css";
// import Navbar from "../common/Navbar/navbar";
// import PointsContext from "../../context/Context";

// const ImageGenerator = () => {
//   const [searchText, setSearchText] = useState("");
//   const [imageSrc, setImgSrc] = useState("");
//   const [fetchError, setFetchError] = useState(false);
//   const [loading, setLoading] = useState(false); // Add loading state
//   const { userPoints, setUserPoints, loggedInUser } = useContext(PointsContext);

//   const handleChange = (e) => {
//     setSearchText(e.target.value);
//   };

//   const handleClick = async () => {
//     setUserPoints(userPoints - 1);
//     setLoading(true); // Start loading
//     try {
//       const res = await fetch(
//         `${process.env.BACKEND_URL}/api/v1/image/genrateImage`,
//         {
//           method: "POST",
//           body: JSON.stringify({
//             searchText,
//             userCoins: userPoints,
//             loggedInUser,
//           }),
//           headers: {
//             "Content-Type": "application/json",
//             authorization: "Bearer " + localStorage.getItem("authorization"),
//           },
//         }
//       );

//       if (!res.ok) {
//         const errorText = await res.text();
//         console.error("Error fetching data:", errorText);
//         setLoading(false); // Stop loading on error
//         return;
//       }

//       const data = await res.json();
//       console.log("Response data:", data);
//       if (data?.status === 200 && data.data?.imageUrl) {
//         try{
//         setImgSrc(data.data.imageUrl);
//         }
//         catch(e){
//           setFetchError(true);
//         }
//       } else {
//         console.error("Invalid response data:", data);
//       }
//     } catch (error) {
//       console.error("Error at the catch of imageGenerator:", error);
//     } finally {
//       setLoading(false); // Stop loading once done
//     }
//   };

//   return (
//     <div>
//       <Navbar pageName="imageGenerator" />
//       <div className="image-gen-parent-container">
//         <div className="img">
//           {loading ? (
//             <p>Generating...</p>
//           ) : (
//             imageSrc && <img src={imageSrc} alt="Generated" />
//           )}
//           {
//             fetchError ? (
//               <p>Fetch API Expire Error</p>
//             ):(
//               <p>Image Genrated</p>
//             )
//           }
//         </div>
//         <br />
//         <div className="inputbox">
//           <input
//             onChange={handleChange}
//             value={searchText}
//             required
//             type="text"
//           />
//           <span> What to create?</span>
//           <i></i>
//         </div>
//         <button className="button-50" role="button" onClick={handleClick}>
//           Generate
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ImageGenerator;


// import React, { useState, useContext } from "react";
// import "./ImageGenrator.css";
// import Navbar from "../common/Navbar/navbar";
// import PointsContext from "../../context/Context";



// import React, { useState, useContext } from "react";
// import "./ImageGenerator.css";
// import Navbar from "../common/Navbar/navbar";
// import PointsContext from "../../context/Context";
import React, { useState, useContext } from "react";
import "./ImageGenrator.css";
import Navbar from "../common/Navbar/navbar";
import PointsContext from "../../context/Context";

const ImageGenerator = () => {
  const [searchText, setSearchText] = useState("");
  const [imageSrc, setImgSrc] = useState("");
  const [fetchError, setFetchError] = useState(false);
  const [loading, setLoading] = useState(false); // Add loading state
  const { userPoints, setUserPoints, loggedInUser } = useContext(PointsContext);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleClick = async () => {
    setUserPoints(userPoints - 1);
    setLoading(true); // Start loading
    setFetchError(false); // Reset fetch error
    try {
      const res = await fetch(
        `${process.env.BACKEND_URL}/api/v1/image/genrateImage`,
        {
          method: "POST",
          body: JSON.stringify({
            searchText,
            userCoins: userPoints,
            loggedInUser,
          }),
          headers: {
            "Content-Type": "application/json",
            authorization: "Bearer " + localStorage.getItem("authorization"),
          },
        }
      );

      if (!res.ok) {
        const errorText = await res.text();
        console.error("Error fetching data:", errorText);
        setFetchError(true);
        setLoading(false); // Stop loading on error
        return;
      }

      const data = await res.json();
      console.log("Response data:", data);
      if (data?.status === 200 && data.data?.imageUrl) {
        setImgSrc(data.data.imageUrl);
      } else {
        console.error("Invalid response data:", data);
        setFetchError(true);
      }
    } catch (error) {
      console.error("Error at the catch of imageGenerator:", error);
      setFetchError(true);
    } finally {
      setLoading(false); // Stop loading once done
    }
  };

  return (
    <div>
      <Navbar pageName="imageGenerator" />
      <div className="image-gen-parent-container">
        <div className="img">
          {loading ? (
            <p>Generating...</p>
          ) : (
            imageSrc && <img src={imageSrc} alt="Generated" />
          )}
          {fetchError && <p>Failed to fetch the image. Please try again.</p>}
          {!loading && !fetchError && imageSrc && <p>Image Generated Successfully</p>}
        </div>
        <br />
        <div className="inputbox">
          <input
            onChange={handleChange}
            value={searchText}
            required
            type="text"
          />
          <span>What to create?</span>
          <i></i>
        </div>
        <button className="button-50" role="button" onClick={handleClick}>
          Generate
        </button>
      </div>
    </div>
  );
};

export default ImageGenerator;
