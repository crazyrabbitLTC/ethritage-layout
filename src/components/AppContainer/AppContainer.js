import React, { useState } from "react";
import TopContainer from "./TopContainer/TopContainer";
import MiddleContainer from "./MiddleContainer/MiddleContainer";
import BottomContainer from "./BottomContainer/BottomContainer";

function AppContainer() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div class="app-container">
      <TopContainer />
      <MiddleContainer />
      <BottomContainer />
    </div>
  );
}

export default AppContainer;
