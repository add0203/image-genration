import React, { useState } from "react";
import "./ImageGenrator.css";
import Navbar from "../common/Navbar/navbar";
import { useContext } from "react";
import PointsContext from "../../context/Context";

const ImageGenrator = () => {
  // const { userPoints, setUserPoints } = props;
  // const [display, setDisplay] = useState(false);
  // const [valueEntered, setValueEntered] = useState("Genrating....");

  const [searchText, setSearchText] = useState();
  const [imageSrc, setImgSrc] = useState("");

  const func = (e) => {
    setSearchText(e.target.value);
  };

  const { userPoints, setUserPoints } = useContext(PointsContext);
  const handleClick = async () => {
    // setUserPoints(userPoints - 1);
    try {
      const res = await fetch(`${process.env.BACKEND_URL}/api/v1/image`, {
        method: "POST",
        body: JSON.stringify({
          searchText: searchText,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (data?.status === 200) {
        setImgSrc(data.data.imageUrl);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar pageName="imageGenerator" />

      <div className="image-gen-parent-container">
        <img src={imageSrc} />
        <div class="inputbox">
          <input
            onChange={(e) => {
              func(e);
            }}
            required="required"
            type="text"
          />

          <i></i>
        </div>
        {/* onClick={() => setUserPoints(userPoints + 1)} */}
        {/* <button onClick={handleClick}>Generate</button> */}
        <button
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
