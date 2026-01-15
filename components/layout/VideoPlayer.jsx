"use client";
import React, { useRef, useState, useEffect } from "react";
import {
  Play,
  Pause,
  RectangleHorizontalIcon,
  VolumeX,
  Volume2,
} from "lucide-react";
import { BiFullscreen, BiExitFullscreen } from "react-icons/bi";

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [miniPlayer, setMiniPlayer] = useState(false);
  const [isVolumeChange, setIsIsVolumeChange] = useState(false);
  const [videoPlaybackRate, setVideoPlaybackRate] = useState("1x");
  const [currentTime, setCurrentTime] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);

  const formatDuration = (time) => {
    if (!time || isNaN(time)) return "00:00:00";
    let seconds = Math.floor(time % 60);
    let minutes = Math.floor(time / 60) % 60;
    let hours = Math.floor(time / 3600);

    if (hours > 0) {
      return `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    } else {
      return `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;
    }
  };

  // GET VIDEO TOTAL TIME
  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    if (video && !isNaN(video.duration) && video.duration > 0) {
      setTotalTime(video.duration);
    } else {
      setTotalTime(0);
    }
  };

  // No logging of totalTime; it is displayed in the UI only.
  // getTotal Time
  const handletimeUPdate = () => {
    const video = videoRef.current;
    if (video) {
      const currentDuration = video.currentTime;
      setCurrentTime(currentDuration);
    }
  };

  // HANDLE PLAY PAUSE FUNCTIONALITY
  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // HANDLE PLAYBACKRATE
  const handlePlayBackRate = () => {
    // SELECT THE VIDEO ELEMENT
    const video = videoRef.current;
    // INCREMENT 0.25 TO THE VIDEO PLAYBACKRATE TO ACHIEVE 1.25
    let newPlaybackRate = video.playbackRate + 0.25;
    // CHECK IF THE NEWPLAYRAE IS GREATER THAN 2 AND STABLIZE IT TO 0.25
    if (newPlaybackRate > 2) newPlaybackRate = 0.25;
    // ASSIGN THE NEWPLAYBACKRATE TO THE VIDEO CURRENT PLAYBACKRATE
    video.playbackRate = newPlaybackRate;
    setVideoPlaybackRate(`${newPlaybackRate}x`);
  };

  // HANDLE FULL SCREEN
  const handleFullScreen = () => {
    // CHECK IF VIDEO IS IN FULLSCREEN MODE
    if (document.fullscreenElement != null && isFullScreen) {
      document.exitFullscreen();
    } else {
      videoContainerRef.current.requestFullscreen();
    }
    setIsFullScreen((prev) => !prev);
  };

  // HANDLE FULL SCREEN
  const handlePictureInPicture = () => {
    // CHECK IF VIDEO IS IN FULLSCREEN MODE
    const video = videoRef.current;

    if (!miniPlayer) {
      video.requestPictureInPicture();
    } else {
      document.exitPictureInPicture();
    }
    setMiniPlayer((prev) => !prev);
  };

  const handleVolumeChange = () => {
    const video = videoRef.current;

    if (video) {
      const isVideoMuted = (video.muted = !video.muted);
      console.log(isVideoMuted);

      if (isVideoMuted) {
        setIsIsVolumeChange(true);
      } else {
        setIsIsVolumeChange(false);
      }
    }
  };

  return (
    <div
      className="video-container relative bg-white rounded-2xl overflow-hidden shadow-2xl"
      ref={videoContainerRef}
    >
      {/* TIMELINE CONTAINER */}
      {/* <div className="timeline-container">
          <div className="timeline"></div>
        </div> */}

      {/* CONTROLS */}
      <div className="video-control-container absolute bottom-0 left-0 pb-6 right-0 h-10 flex items-center">
        <div className="controls flex items-center justify-between gap-6 p-3 z-50 text-white/70">
          <div className="left-controls flex gap-3">
            <button
              className="cursor-pointer rounded-full control-bg"
              onClick={handlePlayPause}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5" fill="white" />
              ) : (
                <Play className="w-5 h-5" fill="white" />
              )}
            </button>

            <div className="duration flex items-center justify-center gap-1 font-medium control-bg rounded-2xl">
              <div className="current-duration">
                {formatDuration(currentTime)}
              </div>
              /<div className="total-duration">{formatDuration(totalTime)}</div>
            </div>
          </div>

          <div className="right-controls control-bg space-x-3 flex items-center rounded-sm">
            <button
              className="text-white/70 cursor-pointer"
              onClick={handleVolumeChange}
            >
              {isVolumeChange ? (
                <VolumeX className="w-5 h-5" fill="white" />
              ) : (
                <Volume2 className="w-5 h-5" fill="white" />
              )}
            </button>

            <button
              className="text-black cursor-pointer bg-white/90 
              px-.5 font-medium w-10 h-5 flex items-center justify-center rounded-sm"
              onClick={handlePlayBackRate}
            >
              {videoPlaybackRate}
            </button>

            <button
              className="text-white/70 cursor-pointer"
              onClick={handlePictureInPicture}
            >
              <RectangleHorizontalIcon className="w-5 h-5" />
            </button>

            <button
              className="text-white/70 cursor-pointer"
              onClick={handleFullScreen}
            >
              {isFullScreen ? (
                <BiExitFullscreen className="w-5 h-5" fill="white" />
              ) : (
                <BiFullscreen className="w-5 h-5" fill="white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* VIDEO ELEMENT */}
      <video
        ref={videoRef}
        src="/images/video-2.mp4"
        className={` ${
          isFullScreen ? "h-screen w-screen" : "h-80 w-full"
        } object-cover`}
        // controls
        // onLoadedMetadata={(e) => log}
        onTimeUpdate={handletimeUPdate}
        onError={() =>
          alert("Video failed to load. Check the file path and file validity.")
        }
      />
    </div>
  );
};

export default VideoPlayer;
