import React from "react";
import Album from "./Album";
import ExploreCircle from "./ExploreCircle";
import "../Css/playlist.css";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
const Playlist = (props) => {
  const data = props.data;
  console.log(data);
  const type = props.type;
  const title = props.title;

  const slideleft = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideright = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <div
      style={{ paddingTop: 20, backgroundColor: "black", paddingBottom: 40 }}
    >
      <text
        style={{
          fontSize: 20,
          marginLeft: 70,
          fontWeight: "bold",
          color: "#F6F6F6",
        }}
      >
        {title}
      </text>
      <div style={{ marginTop: 20 }} className="relative flex items-center">
        <AiFillCaretLeft
          color="#F6F6F6"
          size={50}
          onClick={slideleft}
        ></AiFillCaretLeft>
        <div
          id="slider"
          className="w-full h-full overflow-x-scroll scroll scroll-smooth whitespace-nowrap scrollbar-hide"
        >
          {type === "Album" &&
            data &&
            data.map((item, index) => {
              return (
                <Album
                  key={index}
                  title={item.title}
                  by={item.by}
                  image={require("../../assets/Cyberpunk.jpg")}
                ></Album>
              );
            })}
          {type === "ExploreCircle" &&
            data.map((item, index) => {
              return (
                <ExploreCircle
                  key={index}
                  title={item.title}
                  by={item.by}
                ></ExploreCircle>
              );
            })}
        </div>
        <AiFillCaretRight
          color="#F6F6F6"
          size={50}
          onClick={slideright}
        ></AiFillCaretRight>
      </div>
    </div>
  );
};

export default Playlist;
