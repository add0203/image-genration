import React, { useState, useEffect } from "react";
import "./ImageGenrator.css";
import Navbar from "../common/Navbar/navbar";
import { useContext } from "react";
import PointsContext from "../../context/Context";

const ImageGenrator = () => {
  const [searchText, setSearchText] = useState();
  const [imageSrc, setImgSrc] = useState("");

  const func = (e) => {
    setSearchText(e.target.value);
  };

  const { userPoints, setUserPoints } = useContext(PointsContext);
  const handleClick = async () => {
    // if (!token) {
    //   console.error("No token found in localStorage");
    //   return;
    // }
    // console.log(localStorage.getItem("authorization"));

    // setUserPoints(userPoints - 1);
    try {
      const res = await fetch(
        `${process.env.BACKEND_URL}/api/v1/image/genrateImage`,
        {
          method: "POST",
          body: JSON.stringify({
            searchText: searchText,
          }),
          headers: {
            "Content-Type": "application/json",
            authorization: "Bearer " + localStorage.getItem("authorization"),
            owner: "Anand-dahr-dwivedi",
          },
        }
      );
      if (!res.ok) {
        // Handle non-200 responses
        const errorText = await res.text();
        console.error("Error fetching data:", errorText);
        return;
      }
      const data = await res.json();
      if (data?.status === 200) {
        setImgSrc(data.data.imageUrl);
      }
    } catch (error) {
      console.log(error + "at the catch of imagegenrator");
    }
  };

  return (
    <div>
      <Navbar pageName="imageGenerator" />

      <div className="image-gen-parent-container">
        <div className="img">
          {imageSrc && <img src={imageSrc} alt="Generated" />}
          {/* {imageSrc && <a href={imageSrc}>download</a>} */}
        </div>

        <br />
        <div className="inputbox">
          <input
            onChange={(e) => {
              func(e);
            }}
            // placeholder=""
            required="required"
            type="text"
          />
          <span> What to create?</span>
          <i></i>
        </div>
        <button
          className="button-50"
          role="button"
          onClick={() => {
            handleClick();
            setUserPoints(userPoints - 1);
          }}
        >
          Generate
        </button>
      </div>
    </div>
  );
};

export default ImageGenrator;

{
  /* <button
  onClick={() => {
    setDisplay(!display);
  }}
  className=""
>
  Hide Image
</button> */
}
{
  /* {display && (
  <div className="img">
    <img src="https://picsum.photos/300/300" alt="" />
  </div>
)} */
}

{
  /* {valueEntered} */
}
{
  /* <button onClick={handleRefresh} className="">
  Get New Image
</button> */
}
