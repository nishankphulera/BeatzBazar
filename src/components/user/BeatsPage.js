import Player from "./Player";
import Beat from "./Beat";
import { useState, useEffect } from "react";
import axios from "axios";
import Navigationbar from "../common/Navigationbar";
import SearchBar from "./SearchBar";
import Playlist from "./Playlist";
import "../Css/beatPage.css";
const BeatsPage = () => {
  const [allBeats, setAllBeats] = useState();
  const [beatName, setBeatName] = useState("Rich Flex Type Beat");
  const [beatBy, setBeatBy] = useState("Maven");
  const [beatUri, setBeatUri] = useState(
    "https://beatsbazar.s3.ap-south-1.amazonaws.com/lifelike-126735.mp3"
  );
  const [beatArt, setBeatArt] = useState(require("../../assets/Alien.jpg"));

  useEffect(() => {
    getAllBeats();
  }, []);

  const getAllBeats = async () => {
    await axios.get("http://localhost:1337/api/beat/getBeat").then((res) => {
      console.log(res.data);
      setAllBeats(res.data);
    });
  };

  const playOnClick = (data) => {
    setBeatName(data.title);
    setBeatBy(data.by);
    setBeatUri(data.uri);
    setBeatArt(data.albumArt);
  };
  return (
    <div>
      <div style={{ display: "flex", backgroundColor: "#1B1C1D" }}>
        <img
          style={{ height: 100, width: 200 }}
          src={require("../../assets/beatzbazar.png")}
        ></img>
        <SearchBar></SearchBar>
      </div>
      <Navigationbar></Navigationbar>

      <Playlist
        data={[
          {
            title: "Reverb",
          },
          {
            title: "Reverb",
          },
          ,
          {
            title: "Reverb",
          },
          ,
          {
            title: "Reverb",
          },
          ,
          {
            title: "Reverb",
          },
          {
            title: "Reverb",
          },
          {
            title: "Reverb",
          },
          ,
          {
            title: "Reverb",
          },
          ,
          {
            title: "Reverb",
          },
          ,
          {
            title: "Reverb",
          },
        ]}
        type="ExploreCircle"
        title=""
      ></Playlist>
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          width: "100%",
          height: "100%",
          backgroundColor: "black",
        }}
      >
        <div
          className="container"
          style={{
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: 10,
            width: "100%",
            scrollbarWidth: "none",
            overflowY: "auto",
          }}
        >
          {allBeats &&
            allBeats.map((item, index) => {
              return (
                <Beat
                  key={index}
                  title={item.beatName}
                  by={item.by}
                  uri={item.beatUri}
                  albumArt={item.beatArt}
                  playOnClick={playOnClick}
                ></Beat>
              );
            })}
        </div>
        {/* <div
          style={{
            height: "100%",
            paddingLeft: 40,
            paddingRight: 20,
            width: "30%",

            borderColor: "black",
          }}
        >
          <Player
            data={{
              name: beatName,
              artist: beatBy,
              albumArt: beatArt,
              url: beatUri,
            }}
          ></Player>
        </div> */}
      </div>
    </div>
  );
};

export default BeatsPage;
