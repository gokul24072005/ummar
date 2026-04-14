// src/components/HeroAnimatedBackground.jsx
import React from "react";

const HeroAnimatedBackground = () => {
  return (
    <div
      className="absolute inset-0 pointer-events-none z-0 bg-no-repeat"
      style={{
        backgroundImage: "url(/hero/jeremy-bishop-G9i_plbfDgk-unsplash.jpg)", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.72,
      }}
    />
  );
};

export default HeroAnimatedBackground;
