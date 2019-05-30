import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";




import GalleryContainer  from "./GalleryContainer/GalleryContainer";
import ThumbnailContainer from "./GalleryContainer/ThumbnailContainer/ThumbnailContainer";
import ImageContainer from "./GalleryContainer/ImageContainer/ImageContainer";



import AdminContainer  from "./AdminContainer/AdminContainer";



import sampleImages from "../../../SampleData/sampleImages";

function MiddleContainer() {
  // Declare a new state variable, which we'll call "count"

  const sampleData = sampleImages;

  const [images, setimages] = useState(sampleData);

  return <div className="middle-container">
    <Route path="/admin" component={AdminContainer}/>
    <Route path="/gallery" component={GalleryContainer} />
    {/* <Route path="/gallery/thumbnails" component={ThumbnailContainer} /> */}
    <Route path="/gallery/thumbnails" render={(props)=> <ThumbnailContainer {...props} images={images} />}/>
    <Route path="/gallery/image" component={ImageContainer} />
   
    
  </div>;
}

export default MiddleContainer;
