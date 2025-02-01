import React, { useContext } from "react";
import { ProductContext } from "../../Context/ProductContext";

const Widgets = () => {
  const lapWidgets = useContext(ProductContext);
  return <div>Widgets
    {lapWidgets}
  </div>;
};

export default Widgets;
