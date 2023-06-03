import React from "react";
import Hero from "./Components/Hero";
import videoAs from "./Assets/Apex_1685768084262.webm";
const App = () => {
  return (
    <div className="bgvdo">
      <video autoPlay loop muted>
        <source src={videoAs} type="video/mp4"/>
      </video>
      <Hero />
    </div>
  );
};

export default App;
