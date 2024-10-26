import React from "react";
import "../style/WPersonality.css"

const WPersonality = () => (
  <div className="card">
    <h3>Personality</h3>
    <p>
      Introvert
      <span className="progress">
        <span style={{ width: "40%" }}></span>
      </span>
      Extrovert
    </p>
    <p>
      Analytical
      <span className="progress">
        <span style={{ width: "60%" }}></span>
      </span>
      Creative
    </p>
    {/* Add more as needed */}
  </div>
);

export default WPersonality;
