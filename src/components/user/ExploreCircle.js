import React from "react";
import background from "../../assets/Alien.jpg";
import { useNavigate } from "react-router-dom";
import "../Css/album.css";
import axios from "axios";
const ExploreCircle = (props) => {
  const navigate = useNavigate();
  const title = props.title;
  const category = props.category;
  const handleCirlceClick = async () => {
    if (category === "Mood") {
      await axios({
        method: "post",
        url: "/api/beat/getMoodBeats",
        data: { mood: title },
      })
        .then((res) => {
          // console.log(res.data);
          navigate("/DisplaySpecificBeatList", {
            state: { data: res.data, image: props.image, title: props.title },
          });
        })
        .catch((error) => {
          console.log("Error" + error);
        });
    } else if (category === "Genre") {
      await axios({
        method: "post",
        url: "/api/beat/getGenreBeats",
        data: { genre: title },
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
    }
  };
  return (
    <div
      onClick={() => {
        handleCirlceClick();
      }}
      className="album inline-block"
      style={{
        backgroundImage: `url(${props.image})`,
        height: 120,
        width: 120,
        borderRadius: 60,
        margin: 20,
        padding: 20,
        paddingTop: 40,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        opacity: 0.8,
      }}
    >
      <text
        style={{
          fontSize: 24,
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
