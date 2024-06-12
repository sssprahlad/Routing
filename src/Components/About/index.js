import React, { useState } from "react";

const About = () => {
  const [text, updateText] = useState(true);
  let texts = text ? "Login" : "Logout";
  return (
    <div>
      <h1>About</h1>
      <button
        onClick={() => {
          updateText(!text);
        }}
      >
        {texts}
      </button>
    </div>
  );
};

export default About;
