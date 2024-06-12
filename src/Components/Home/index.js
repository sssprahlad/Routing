import React, { useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Home</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <p style={{ margin: "10px" }}>{count}</p>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
    </div>
  );
};

export default Home;
