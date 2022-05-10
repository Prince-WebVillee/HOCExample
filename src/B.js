import React from "react";
import HOC from "./HOC";
const B = ({ count, increment }) => {
  return (
    <div>
      <h1>B component</h1>
      <h1>{count}</h1>
      <button onMouseOver={increment}>Click</button>
    </div>
  );
};

export default HOC(B, 5);
