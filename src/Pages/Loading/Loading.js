import React from "react";
import "./Loading.css";
const Loading = () => {
  return (
    <div className="load">
      <div className=" spinner-border text-info" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
