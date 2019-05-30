import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TopContainer from "./TopContainer/TopContainer";
import MiddleContainer from "./MiddleContainer/MiddleContainer";
import BottomContainer from "./BottomContainer/BottomContainer";

function AppContainer() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <Router>
    <div className="app-container">
      <TopContainer />
      <MiddleContainer />
      <BottomContainer />
    </div>
    </Router>
  );
}

export default AppContainer;
