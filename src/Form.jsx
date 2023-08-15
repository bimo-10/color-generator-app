import React, { useState } from "react";

const Form = ({ addColor }) => {
  // useState input color
  const [color, setColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
  };

  return (
    <section className="container">
      <form action="" className="color-form" onSubmit={handleSubmit}>
        <h2>Color Generator</h2>
        <input
          type="color"
          name="color"
          id="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className=""
        />
        <input
          type="text"
          name="text"
          id="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="#ffffff"
        />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </section>
  );
};
export default Form;
