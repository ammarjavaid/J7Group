import React, { useEffect, useRef, useState } from "react";
import MyVideo from "../../assets/video/hotel.mp4";
import "./video.scss";
import { FaPlay } from "react-icons/fa";
import { AiOutlinePause } from "react-icons/ai";

const Video = () => {
  // const [isPlaying, setIsPlaying] = useState(false);
  // const videoRef = useRef(null);

  // const toggleVideo = () => {
  //   const video = videoRef.current;
  //   if (video) {
  //     if (video.paused) {
  //       video.play();
  //       setIsPlaying(true);
  //     } else {
  //       video.pause();
  //       setIsPlaying(false);
  //     }
  //   }
  // };

  // useEffect(() => {
  //   const video = videoRef.current;
  //   if (video) {
  //     const handleVideoStateChange = () => {
  //       setIsPlaying(!video.paused);
  //     };
  //     video.addEventListener("play", handleVideoStateChange);
  //     video.addEventListener("pause", handleVideoStateChange);
  //     return () => {
  //       video.removeEventListener("play", handleVideoStateChange);
  //       video.removeEventListener("pause", handleVideoStateChange);
  //     };
  //   }
  // }, []);

  // <video ref={videoRef} width="1500" height="250" controls>
  //           <source src={MyVideo} type="video/mp4" />
  //         </video>

  return (
    <>
      <div className="video-container">
        <div className="video-aspect-ratio">
          <video width="1500" height="250" controls={true}>
            <source src={MyVideo} type="video/mp4" />
          </video>
        </div>

        {/* <button
          id="pauseButton"
          className={`centered-button ${isPlaying ? "playing" : "paused"}`}
          onClick={toggleVideo}
        >
          {isPlaying ? (
            <AiOutlinePause className="play-icon" />
          ) : (
            <FaPlay className="play-icon" />
          )}
        </button> */}
      </div>
    </>
  );
};

export default Video;
