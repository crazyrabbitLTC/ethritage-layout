import React, { useState } from "react";



function ThumbnailContainer(props) {

  console.log(props);

  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
ThumbNails!
<img src={props.images[0].url}/>
    </div>
  );
}

export default ThumbnailContainer;
