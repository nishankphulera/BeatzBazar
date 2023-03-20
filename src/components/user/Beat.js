import { useState, useEffect } from "react";
import { AiFillInfoCircle, AiFillLike } from "react-icons/ai";

import { HiCurrencyRupee } from "react-icons/hi";
import DisplayWave from "../common/DisplayWave";
const Beat = (props) => {
  const [liked, setLiked] = useState(false);
  const [play, setPlay] = useState(false);
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
  }, []);
  return (
    <div
      style={{
        width: "100%",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        borderColor: "#1B1C1D",
        borderBottomWidth: 2,
        padding: 20,
        display: "flex",
        height: 220,
      }}
    >
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          width: "20%",
          marginRight: 20,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            onClick={() => {
              props.playOnClick({
                title: props.title,
                by: props.by,
                albumArt: props.albumArt,
                uri: props.uri,
              });
              setPlay(true);
            }}
            style={{
              height: 100,
              width: 100,
              borderRadius: 20,
            }}
            src={props.albumArt}
          ></img>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: 20,
              marginRight: 20,
              width: 100,
            }}
          >
            <text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
              {props.title}
            </text>
            <text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: "white",
                marginBottom: 10,
              }}
            >
              {props.by}
            </text>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            backgroundColor: "#212529",
            padding: 10,
            borderRadius: 4,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
            width: "100%",
          }}
        >
          <AiFillInfoCircle
            style={{ marginTop: 6, marginRight: 20 }}
            size={22}
            color="white"
          ></AiFillInfoCircle>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <HiCurrencyRupee
              style={{ marginTop: 6 }}
              size={24}
              color="white"
            ></HiCurrencyRupee>
            <text
              style={{
                marginLeft: 4,
                marginTop: 4,
                marginRight: 20,
                fontSize: 18,
                fontWeight: "bolder",
                color: "white",
              }}
            >
              Buy
            </text>
          </div>
          <AiFillLike
            onClick={() => {
              setLiked(!liked);
            }}
            style={{ marginTop: 6 }}
            size={23}
            color={liked ? "#FE935F" : "white"}
          ></AiFillLike>
        </div>
      </div>
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          marginLeft: 10,
          width: "70%",
        }}
      >
        <DisplayWave play={play} uri={props.uri}></DisplayWave>
      </div>
    </div>
  );
};

export default Beat;
