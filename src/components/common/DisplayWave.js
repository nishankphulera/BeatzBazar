import React, { useRef, useEffect, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import "../Css/wave.css";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
const DisplayWave = (props) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    console.log(window.innerWidth);
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);
  const isMobile = width < 500;
  console.log(isMobile);
  console.log(props.uri);
  useEffect(() => {
    wavesurfer.current = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: "gray",
      progressColor: "#FE935F",
      hideScrollbar: true,
      hideNavigation: true,
      cursorWidth: 2,
      height: 140,
    });

    console.log("Loading audio file...");
    wavesurfer.current.load(props.uri);

    return () => wavesurfer.current.destroy();
  }, [props.uri]);

  const handlePlay = () => {
    wavesurfer.current.play();
    setIsPlaying(!isPlaying);
  };
  const handlePause = () => {
    wavesurfer.current.pause();
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "row",
        width: "100%",
      }}
      className="display-waveform"
    >
      <div style={{ width: "100%" }} ref={waveformRef} />
      <div style={{ marginLeft: 10, width: "10%" }}>
        {isPlaying ? (
          <AiFillPlayCircle
            onClick={handlePlay}
            color="#828282"
            size={40}
          ></AiFillPlayCircle>
        ) : (
          <AiFillPauseCircle
            onClick={handlePause}
            color="#828282"
            size={40}
          ></AiFillPauseCircle>
        )}
      </div>
    </div>
  );
};

export default DisplayWave;
