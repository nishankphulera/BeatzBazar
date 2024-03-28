import React, { useState, useEffect } from "react";
import Navigationbar from "../common/Navigationbar";
import Playlist from "../user/Playlist";
import SearchBar from "../user/SearchBar";
import FeaturedArtists from "../user/FeaturedArtists";
import sample from "../../assets/temporaryVideo.mp4";
import AboutUs from "../user/AboutUs";
import axios from "axios";

const Home = () => {
  const [allAlbums, setAllAlbums] = useState();

  useEffect(() => {
    const getUniqueAlbumName = async () => {
      await axios.post("/api/beat/getUniqueBeatAlbums").then((res) => {
        if (res.status == 200) {
          console.log(res.data);
          setAllAlbums(res.data);
        } else {
          console.log("Got bad response");
        }
      });
    };
    getUniqueAlbumName();
  }, []);
  return (
    <div
      style={{
        backgroundColor: "black",
        flexDirection: "column",
        overflowX: "hidden",
        overflowY: "hidden",
      }}
    >
      <div
        style={{ display: "flex", backgroundColor: "#1B1C1D", width: "100%" }}
      >
        <img
          style={{ height: 100, maxWidth: 240 }} // set width to 100%
          src={require("../../assets/beatzbazar.png")}
        ></img>
        <SearchBar></SearchBar>
      </div>
      <Navigationbar></Navigationbar>
      <div>
        <video
          className="videoTag"
          autoPlay
          loop
          muted
          style={{ width: "100%" }}
        >
          <source src={sample} type="video/mp4" />
        </video>
      </div>
      <div style={{ marginBottom: 30 }}>
        <AboutUs></AboutUs>
      </div>
      {allAlbums && (
        <Playlist
          data={allAlbums}
          type="Album"
          title="Featured Album"
        ></Playlist>
      )}

      <FeaturedArtists></FeaturedArtists>
      {/* <Album title="Happy" by=""></Album> */}
    </div>
  );
};

export default Home;
// import React from "react";
// import Navigationbar from "../common/Navigationbar";
// import Playlist from "../user/Playlist";
// import SearchBar from "../user/SearchBar";
// import FeaturedArtists from "../user/FeaturedArtists";
// import sample from "../../assets/temporaryVideo.mp4";
// import AboutUs from "../user/AboutUs";

// const Home = () => {
//   return (
//     <div
//       style={{
//         backgroundColor: "black",

//         flexDirection: "column",
//       }}
//     >
//       <div
//         style={{ display: "flex", backgroundColor: "#1B1C1D", width: "100%" }}
//       >
//         <img
//           style={{ height: 100, width: 200 }}
//           src={require("../../assets/beatzbazar.png")}
//         ></img>
//         <SearchBar></SearchBar>
//       </div>
//       <Navigationbar></Navigationbar>
//       <div>
//         <video className="videoTag" autoPlay loop muted>
//           <source src={sample} type="video/mp4" />
//         </video>
//       </div>
//       <div style={{ bottom: 300 }}>
//         <AboutUs></AboutUs>
//       </div>
//       {/* <div
//         style={{
//           width: "90%",
//         }}
//       >
//         <Beat title="Drake Type Beat" by="Maven"></Beat>
//         <Beat title="Drake Type Beat" by="Maven"></Beat>
//         <Beat title="Drake Type Beat" by="Maven"></Beat>
//       </div> */}

//       <Playlist
//         data={[
//           {
//             title: "Reverb",
//             by: "Maven",
//           },
//           {
//             title: "Reverb",
//             by: "Maven",
//           },

//           {
//             title: "Reverb",
//             by: "Maven",
//           },

//           {
//             title: "Reverb",
//             by: "Maven",
//           },

//           {
//             title: "Reverb",
//             by: "Maven",
//           },
//         ]}
//         type="Album"
//         title="Featured Album"
//       ></Playlist>

//       <FeaturedArtists></FeaturedArtists>
//       {/* <Album title="Happy" by=""></Album> */}
//     </div>
//   );
// };

// export default Home;
