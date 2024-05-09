import React from "react";
import MainSlider from "./MainSlider"; // Adjust the path if necessary
import TinySlider from "./TinySlider"; // Adjust the path if necessary
import RelaxHeader from "./RelaxHeader"; // Adjust the path if necessary
import ThingsContent1 from "./ThingsContent1";
import ThingsContent2 from "./ThingsContent2";

function ThingsToDo() {
  return (
    <div>
      <RelaxHeader />
      <ThingsContent1 />
      <MainSlider />
      <TinySlider />
      <ThingsContent2 />

      {/* You can add more components as needed */}
    </div>
  );
}

export default ThingsToDo;
