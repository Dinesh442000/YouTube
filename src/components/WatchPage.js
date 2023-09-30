import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeAccountDetails, closeMenu, toggleMenu } from "../Utils/appSlice";
import { useParams, useSearchParams } from "react-router-dom";
import Comments from "./Comments";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    dispatch(closeAccountDetails());
  }, []);
  return (
    <div className=" flex-col w-full">
      <div className=" px-24 flex ">
        <div>
          <iframe
            className="rounded-lg"
            width="1300"
            height="600"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className=" w-full">
          <LiveChat />
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default WatchPage;
