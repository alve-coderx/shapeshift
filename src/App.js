import React from "react";
import Hero from "./Components/Hero";
import videoAs from "./Assets/Apex_1685768084262.webm";
const App = () => {
  return (
    <div>
      <div className="bgvdo lg:block md:block hidden">
        <video
          className="object-cover lg:block md:block hidden"
          autoPlay={true}
          loop
          muted
          controls={false}
        >
          <source src={videoAs} type="video/mp4" />
        </video>
        <Hero />
      </div>
      <div className="mbbg lg:hidden md:hidden block">
        <Hero />
      </div>
    </div>
  );
};

export default App;
