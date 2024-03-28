import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Album = (props) => {
  const navigate = useNavigate();
  const handleAlbumClick = async () => {
    const albumName = props.title;
    await axios({
      method: "post",
      url: "/api/beat/getAlbumBeats",
      data: { albumName: albumName },
    })
      .then((res) => {
        console.log(res.data);
        navigate("/DisplaySpecificBeatList", {
          state: { data: res.data, image: props.image, title: props.title },
        });
      })
      .catch((error) => {
        console.log("Error" + error);
      });
  };
  return (
    <div
      onClick={() => {
        handleAlbumClick();
      }}
      className="album inline-block"
      style={{
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        margin: 20,
        height: 300,
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
