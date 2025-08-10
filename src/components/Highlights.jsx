import React from "react";
import "../styles/profile.css";

const Highlights = ({ highlights }) => {
  return (
    <div className="highlights">
      {highlights.map((h) => (
        <div className="highlight" key={h.id}>
          <img className="w-full h-full object-cover" src={h.image} alt={h.title} />
          <span>{h.title}</span>
        </div>
      ))}
    </div>
  );
};

export default Highlights;
