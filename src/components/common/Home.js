import React from "react";
import Navigationbar from "../common/Navigationbar";
import Playlist from "../user/Playlist";
import SearchBar from "../user/SearchBar";
import FeaturedArtists from "../user/FeaturedArtists";
import sample from "../../assets/temporaryVideo.mp4";
import AboutUs from "../user/AboutUs";

const Home = () => {
  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        // backgroundImage: `url(${background})`,
        height: "100%",

        backgroundColor: "black",
      }}
    >
      <div style={{ display: "flex", backgroundColor: "#1B1C1D" }}>
        <img
          style={{ height: 100, width: 200 }}
          src={require("../../assets/beatzbazar.png")}
        ></img>
        <SearchBar></SearchBar>
      </div>
      <Navigationbar></Navigationbar>
      <div>
        <video className="videoTag" autoPlay loop muted>
          <source src={sample} type="video/mp4" />
        </video>
      </div>
      <div style={{ bottom: 300 }}>
        <AboutUs></AboutUs>
      </div>
      {/* <div
        style={{
          width: "90%",
        }}
      >
        <Beat title="Drake Type Beat" by="Maven"></Beat>
        <Beat title="Drake Type Beat" by="Maven"></Beat>
        <Beat title="Drake Type Beat" by="Maven"></Beat>
      </div> */}

      <Playlist
        data={[
          {
            title: "Reverb",
            by: "Maven",
          },
          {
            title: "Reverb",
            by: "Maven",
          },
          ,
          {
            title: "Reverb",
            by: "Maven",
          },
          ,
          {
            title: "Reverb",
            by: "Maven",
          },
          ,
          {
            title: "Reverb",
            by: "Maven",
          },
        ]}
        type="Album"
        title="Featured Album"
      ></Playlist>

      <FeaturedArtists></FeaturedArtists>
      {/* <Album title="Happy" by=""></Album> */}
    </div>
  );
};

export default Home;
