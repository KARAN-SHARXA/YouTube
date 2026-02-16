import React from "react";
import "./Video.css";
import { useParams } from "react-router-dom";
import Playvideo from "../../Components/Playvideo/Playvideo";
import Recommented from "../../Components/recommented/Recommented";

function Video() {
  const { videoId, categoryId } = useParams();

  return (
    <div className="play-container">
      <Playvideo videoId={videoId} />
      <Recommented />
    </div>
  );
}

export default Video;
