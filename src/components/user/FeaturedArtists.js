import { useState } from "react";
import ArtistCircle from "./ArtistCircle";

const FeaturedArtists = () => {
  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
      }}
    >
      <text
        style={{
          fontSize: 22,
          fontWeight: "bold",
          marginLeft: 50,
          color: "#F6F6F6",
        }}
      >
        Featured Artist
      </text>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <ArtistCircle title="Maven"></ArtistCircle>
        <ArtistCircle title="Maven"></ArtistCircle>
        <ArtistCircle title="Maven"></ArtistCircle>
        <ArtistCircle title="Maven"></ArtistCircle>
        <ArtistCircle title="Maven"></ArtistCircle>
      </div>
    </div>
  );
};

export default FeaturedArtists;

// import { useState, useRef } from "react";
// import ArtistCircle from "./ArtistCircle";
// const FeaturedArtists = () => {
//   // const windowSize = useRef([window.innerWidth, window.innerHeight]);
//   // console.log(windowSize);
//   return (
//     <div
//       style={{
//         alignItems: "center",
//         justifyContent: "center",
//         marginTop: 20,
//       }}
//     >
//       <text
//         style={{
//           fontSize: 22,
//           fontWeight: "bold",
//           marginLeft: 50,
//           color: "#F6F6F6",
//         }}
//       >
//         Featured Artist
//       </text>
//       <div
//         style={{
//           alignItems: "center",
//           justifyContent: "center",
//           display: "flex",
//           flexDirection: "row",
//           marginTop: 20,
//         }}
//       >
//         <ArtistCircle title="Maven"></ArtistCircle>
//         <ArtistCircle title="Maven"></ArtistCircle>
//         <ArtistCircle title="Maven"></ArtistCircle>
//         <ArtistCircle title="Maven"></ArtistCircle>
//         <ArtistCircle title="Maven"></ArtistCircle>
//       </div>
//     </div>
//   );
// };

// export default FeaturedArtists;
