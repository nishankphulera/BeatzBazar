import { useState } from "react";
const ArtistCircle = (props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        margin: 20,
      }}
    >
      <img
        style={{ height: 200, width: 200, borderRadius: 100 }}
        src={require("../../assets/maven.jpg")}
      ></img>

      <text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          marginTop: 20,
          color: "#828282",
        }}
      >
        {props.title}
      </text>
    </div>
  );
};

export default ArtistCircle;
