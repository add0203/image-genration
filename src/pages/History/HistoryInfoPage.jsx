import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./HistoryInfoPage.css";

const HistoryInfoPage = () => {
  const [data, setData] = useState(" ");

  const params = useParams();
  const historyId = params.historyId;

  const getData = async () => {
    const res = await fetch(`https:dummyjson.com/products/${historyId}`);
    const obj = await res.json();
    console.log(obj);
    setData(obj);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(historyId);

  return (
    <div className="card">
      {/* <h4>{historyId}</h4> */}
      <img src={data.thumbnail} alt="" />
    </div>
  );
};

export default HistoryInfoPage;
