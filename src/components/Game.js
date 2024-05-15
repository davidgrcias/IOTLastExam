import React, { useState, useEffect } from "react";
import GuessGame from "./GuessGame";
import Cursor from "./cursor";

function Game() {
  return (
    <div>
      <GuessGame />
      <Cursor />

      {/* You can add more components as needed */}
    </div>
  );
}

export default Game;
