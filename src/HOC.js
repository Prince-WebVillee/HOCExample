import React, { useState } from "react";

const HOC = (WrappedComponent, num) => {
  const HOC = (props) => {
    const [count, setCount] = useState(0);
    const increment = () => {
      setCount(count + num);
    };
    return (
      <div>
        <WrappedComponent count={count} increment={increment} />
      </div>
    );
  };
  return HOC;
};

export default HOC;
