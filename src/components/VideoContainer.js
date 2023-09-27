import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../Utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();

    setVideos(json.items);
  };
  return (
    <div className="flex">
      <VideoCard info={videos[0]} />
    </div>
  );
};

export default VideoContainer;
