import React from "react";

const Video = ({ videoUrl, videoName, ...props }) => (
   <>
   <h2>{videoUrl}HHHHHHHH</h2>
<div className="video">
    <iframe
      src={videoUrl}
      title={videoName}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
   </> 
  
)
export default Video;
