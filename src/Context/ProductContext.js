import { createContext, useState } from "react";
// Create Context

export const ProductContext = createContext();

const ProductContextFunc = (props) => {
  const [product, setProduct] = useState("laptop");
  return (
    <ProductContext.Provider value={product}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextFunc;
