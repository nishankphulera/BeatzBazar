import React from "react";
import background from "../../assets/Alien.jpg";
import "../Css/album.css";
const ExploreCircle = (props) => {
  return (
    <div
      className="album inline-block"
      style={{
        backgroundColor: "#FE935F",
        height: 120,
        width: 120,
        borderRadius: 60,
        margin: 20,
        padding: 20,
        paddingTop: 40,
      }}
    >
      <text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "white",
        }}
      >
        {props.title}
      </text>
    </div>
  );
};

export default ExploreCircle;
