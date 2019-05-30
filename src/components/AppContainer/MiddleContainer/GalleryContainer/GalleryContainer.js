import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ThumbnailContainer from "./ThumbnailContainer/ThumbnailContainer";
import ImageContainer from "./ImageContainer/ImageContainer";

function GalleryContainer() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div className="galleryContainer">
THIS IS GALLERY CONTAINER
    </div>
  );
}

export default GalleryContainer;
