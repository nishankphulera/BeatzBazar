import { useState } from "react";

const Album = (props) => {
  return (
    <div
      className="album inline-block"
      style={{
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        margin: 20,
        height: 200,
        width: 240,
      }}
    >
      <img
        style={{
          height: 240,
          width: 240,
          borderRadius: 20,
          border: "2px solid #383838",
        }}
        src={props.image}
      ></img>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: 20,
          marginTop: 4,
        }}
      >
        <text style={{ fontSize: 18, fontWeight: "bold", color: "#FFFFFF" }}>
          {props.title}
        </text>
        <div style={{ alignItems: "center", justifyContent: "center" }}>
          <text style={{ fontSize: 14, fontWeight: "bold", color: "#828282" }}>
            {props.by}
          </text>
        </div>
      </div>
    </div>
  );
};

export default Album;
