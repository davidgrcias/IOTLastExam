import React from "react";
// Adjust the path if necessary
import TinySlider from "./TinySlider"; // Adjust the path if necessary
import RelaxHeader from "./RelaxHeader"; // Adjust the path if necessary
import ThingsContent1 from "./ThingsContent1";
import ThingsContent2 from "./ThingsContent2";
import TinySlider2 from "./TinySlider2";
import TinySlider3 from "./TinySlider3";
import TinySlider4 from "./TinySlider4";
import Cursor from "./cursor";

function ThingsToDo() {
  return (
    <div>
      <RelaxHeader />
      <ThingsContent1 />

      <TinySlider />
      <TinySlider2 />
      <TinySlider3 />
      <TinySlider4 />
      <ThingsContent2 />
      <Cursor />


      {/* You can add more components as needed */}
    </div>
  );
}

export default ThingsToDo;
