import React from "react";
import Hero from "./Components/Hero";
import videoAs from "./Assets/Apex_1685768084262.webm";
const App = () => {
  return (
    <div className="bgvdo">
      <video
        className="lg:object-cover object-none"
        autoPlay={true}
        loop
        muted
        controls={false}
      >
        <source src={videoAs} type="video/mp4" />
      </video>
      <Hero />
    </div>
  );
};

export default App;
