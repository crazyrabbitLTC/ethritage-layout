import React, { useState } from "react";

function GalleryContainer() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>TOP COUNTER</button>
    </div>
  );
}

export default GalleryContainer;
