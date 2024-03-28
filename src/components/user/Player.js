import React, { useState, useEffect } from "react";
// import ReactAudioPlayer from "react-audio-player";
import {
  AiFillPlayCircle,
  AiFillPauseCircle,
  AiFillCaretRight,
  AiFillCaretLeft,
} from "react-icons/ai";
import Sound from "react-sound";
const Player = (props) => {
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const currentSong = props.data;
  useEffect(() => {
    setProgress(Math.floor((100 * currentTime) / duration));
  }, [currentTime, duration]);
  const handlePlayPause = () => {
    isPlaying
      ? setPlayStatus(Sound.status.STOPPED)
      : setPlayStatus(Sound.status.PLAYING);
    setIsPlaying(!isPlaying);
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    setProgress(event.target.value);
    setCurrentTime((event.target.value * duration) / 100);
  };
  const handleBackward = () => {
    setProgress(progress - 5);
    setCurrentTime((currentTime * duration) / 100);
  };

  // const handleForward = () => {
  //   setProgress(event.target.value + 10);
  //   setCurrentTime(((event.target.value + 10) * duration) / 100);
  // };

  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        marginTop: 40,
      }}
      className="music-player"
    >
      <img
        src={currentSong.albumArt}
        style={{
          height: 240,
          width: 240,
          borderRadius: 10,
        }}
        alt="album art"
        className="album-art"
      />
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          margin: 10,
        }}
        className="song-info"
      >
        <text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            margin: 8,
            color: "#828282",
          }}
          className="song-name"
        >
          {currentSong.name}
        </text>
        <text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            margin: 8,
            color: "#828282",
          }}
          className="artist-name"
        >
          {currentSong.artist}
        </text>
      </div>

      <input
        style={{ width: 200 }}
        type="range"
        min={0}
        max={100}
        value={isNaN(progress) ? 0 : progress}
        onChange={handleChange}
        id="input"
      />
      {isNaN(progress) ? (
        <p>0%</p>
      ) : (
        <p style={{ color: "#828282" }}>{progress}%</p>
      )}

      <Sound
        url={currentSong.url}
        playStatus={playStatus}
        position={currentTime * 1000}
        onFinishedPlaying={() => {
          setIsPlaying(!isPlaying);
          setPlayStatus(Sound.status.STOPPED);
        }}
        onPlaying={({ position, duration }) => {
          setCurrentTime(position / 1000);
          setDuration(duration / 1000);
        }}
      />
      <div
        style={{ display: "flex", flexDirection: "row" }}
        className="controls"
      >
        <AiFillCaretLeft
          style={{ margin: 8, color: "#828282" }}
          onClick={handleBackward}
          size={40}
        ></AiFillCaretLeft>
        <button
          style={{ margin: 8, color: "#828282" }}
          onClick={handlePlayPause}
        >
          {isPlaying ? (
            <AiFillPauseCircle color="#828282" size={40}></AiFillPauseCircle>
          ) : (
            <AiFillPlayCircle color="#828282" size={40}></AiFillPlayCircle>
          )}
        </button>
        <AiFillCaretRight
          style={{ margin: 8, color: "#828282" }}
          size={40}
        ></AiFillCaretRight>
      </div>
      {/* <ReactAudioPlayer
        src="https://beatsbazar.s3.ap-south-1.amazonaws.com/lifelike-126735.mp3"
        autoPlay={false}
        controls
      /> */}
    </div>
  );
};

export default Player;
