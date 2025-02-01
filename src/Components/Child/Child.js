import React, { memo } from "react";
import "./Child.css";
const Child = (props) => {
  console.log("Compnonet Child");
  return (
    <div>
      <button onClick={props.onClick}>Add Number</button>
    </div>
  );
};

export default memo(Child);
