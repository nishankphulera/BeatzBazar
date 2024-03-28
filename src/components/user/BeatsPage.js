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
  const [uniqueMood, setUniqueMood] = useState();
  const [uniqueGenre, setUniqueGenre] = useState();
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
    await axios.post("/api/beat/getBeat").then((res) => {
      console.log(res.data);
      setAllBeats(res.data);
    });
    await axios.post("/api/beat/getUniqueMood").then((res) => {
      console.log(res.data);
      setUniqueMood(res.data);
    });
    await axios.post("/api/beat/getUniqueGenre").then((res) => {
      console.log(res.data);
      setUniqueGenre(res.data);
    });
  };

  // const playOnClick = (data) => {
  //   setBeatName(data.title);
  //   setBeatBy(data.by);
  //   setBeatUri(data.uri);
  //   setBeatArt(data.albumArt);
  // };
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
      {uniqueMood && (
        <Playlist
          data={uniqueMood}
          type="ExploreCircle"
          title="Mood"
        ></Playlist>
      )}
      {uniqueGenre && (
        <Playlist
          data={uniqueGenre}
          type="ExploreCircle"
          title="Genre"
        ></Playlist>
      )}
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "black",
          width: "100%",
          overflowY: "hidden",
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
                price={item.price.mp3}
                // playOnClick={playOnClick}
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
  );
};

export default BeatsPage;
