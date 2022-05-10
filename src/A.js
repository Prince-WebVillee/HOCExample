import React from "react";
import HOC from "./HOC";
const A = ({ count, increment }) => {
  return (
    <div>
      <h1>A component</h1>
      <h1>{count}</h1>
      <button onClick={increment}>Click</button>
    </div>
  );
};

export default HOC(A, 20);
