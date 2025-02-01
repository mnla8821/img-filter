import React, { useContext } from "react";
import { ProductContext } from "../../Context/ProductContext";

const Item = () => {
  const lap = useContext(ProductContext);
  console.log(lap);
  return <div>{lap}</div>;
};

export default Item;
