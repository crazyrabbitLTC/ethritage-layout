import React, { useState } from "react";
import LeftMenu from "./LeftMenu/LeftMenu";
import RightMenu from "./RightMenu/RightMenu";

function BottomContainer() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div class="bottom-container">
      <LeftMenu />
      Center Area
      <RightMenu />
    </div>
  );
}
export default BottomContainer;
