import React, { useState } from "react";
import LeftMenu from "./LeftMenu/LeftMenu";
import RightMenu from "./RightMenu/RighMenu";

function TopContainer() {
  // Declare a new state variable, which we'll call "count"
  //const [count, setCount] = useState(0);

  return (
    <div class="top-container">
      <LeftMenu />
      Middle part
      <RightMenu />
    </div>
  );
}

export default TopContainer;
