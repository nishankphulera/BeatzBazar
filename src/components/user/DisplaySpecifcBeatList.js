// import Navigationbar from "../common/Navigationbar";
// import Beat from "./Beat";
// import { useLocation } from "react-router-dom";
// const DisplaySpecificBeatList = () => {
//   const location = useLocation();
//   const { data } = location.state || [];
//   console.log(typeof data);
//   return (
//     <div>
//       <div style={{ display: "flex", backgroundColor: "#1B1C1D" }}>
//         <img
//           style={{ height: 100, width: 200 }}
//           src={require("../../assets/beatzbazar.png")}
//         ></img>
//       </div>
//       <Navigationbar></Navigationbar>
//       <div
//         style={{
//           alignItems: "center",
//           justifyContent: "center",
//           backgroundColor: "black",
//           width: "100%",
//           overflowY: "hidden",
//         }}
//       >
//         {data &&
//           data.map((item, index) => {
//             console.log(item);
//             return (
//               <Beat
//                 key={index}
//                 title={item.beatName}
//                 by={item.by}
//                 uri={item.beatUri}
//                 albumArt={item.beatArt}
//               ></Beat>
//             );
//           })}
//       </div>
//     </div>
//   );
// };

// export default DisplaySpecificBeatList;
import React, { useState, useEffect } from "react";
import Navigationbar from "../common/Navigationbar";
import Beat from "./Beat";
import { useLocation } from "react-router-dom";
import alien from "../../assets/Alien.jpg";
const DisplaySpecificBeatList = () => {
  const location = useLocation();
  const data = location.state?.data || [];
  const image = location.state?.image || alien;
  const title = location.state?.title || "";
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
  }, [width]);
  const isMobile = width < 500;
  console.log(isMobile);
  console.log("The data is" + data);
  return (
    <div>
      <div style={{ display: "flex", backgroundColor: "#1B1C1D" }}>
        <img
          style={{ height: 120, width: 180 }}
          src={require("../../assets/beatzbazar.png")}
        ></img>
      </div>
      <Navigationbar />
      <div
        style={{
          paddingTop: 20,
          width: window.innerWidth,
          height: "40%",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          backgroundColor: "black",
          flexDirection: "row",
          paddingBottom: 40,
        }}
      >
        <div style={{ alignItems: "center", justifyContent: "center" }}>
          <text
            style={{
              fontSize: isMobile ? 24 : 30,
              fontWeight: "bold",
              color: "white",
              maxWidth: 60,
              marginRight: 40,
            }}
          >
            {title}
          </text>
        </div>
        <img
          style={{
            width: isMobile ? 200 : 300,
            height: isMobile ? 200 : 300,
            borderRadius: 10,
          }}
          src={image}
        ></img>
      </div>
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "black",
          width: "100%",
          overflowY: "hidden",
          height: "100%",
        }}
      >
        {data &&
          data.map((item, index) => {
            return (
              <Beat
                key={index}
                title={item.beatName}
                by={item.by}
                uri={item.beatUri}
                albumArt={item.beatArt}
                price={item.price.mp3}
              />
            );
          })}
      </div>
    </div>
  );
};

export default DisplaySpecificBeatList;
