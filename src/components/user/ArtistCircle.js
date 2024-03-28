import { useState } from "react";

const ArtistCircle = (props) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768); // adjust breakpoint as needed

  const handleWindowSizeChange = () => {
    setIsSmallScreen(window.innerWidth < 768); // adjust breakpoint as needed
  };

  window.addEventListener("resize", handleWindowSizeChange);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: 20,
        minWidth: isSmallScreen ? "120px" : "200px",
      }}
    >
      <img
        style={{
          height: isSmallScreen ? "100px" : "200px",
          width: isSmallScreen ? "100px" : "200px",
          borderRadius: "50%",
        }}
        src={require("../../assets/maven.jpg")}
      ></img>

      <text
        style={{
          fontSize: isSmallScreen ? "14px" : "18px",
          fontWeight: "bold",
          marginTop: 20,
          color: "#828282",
          textAlign: "center",
        }}
      >
        {props.title}
      </text>
    </div>
  );
};

export default ArtistCircle;

// import { useState } from "react";
// const ArtistCircle = (props) => {
//   return (
//     <div
//       style={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         flexDirection: "column",
//         margin: 20,
//       }}
//     >
//       <img
//         style={{ height: 200, width: 200, borderRadius: 100 }}
//         src={require("../../assets/maven.jpg")}
//       ></img>

//       <text
//         style={{
//           fontSize: 18,
//           fontWeight: "bold",
//           marginTop: 20,
//           color: "#828282",
//         }}
//       >
//         {props.title}
//       </text>
//     </div>
//   );
// };

// export default ArtistCircle;
