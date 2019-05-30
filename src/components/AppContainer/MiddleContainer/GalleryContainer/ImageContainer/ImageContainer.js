import React, { useState } from "react";
import SingleImage from "./SingleImage";

function ImageContainer() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
ImageContainer!
<SingleImage />

    </div>
  );
}

export default ImageContainer;
