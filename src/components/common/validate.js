// import axios from "axios";
// const cookies = document.cookie.split(";");
// const tokenCookie = cookies.find((cookie) =>
//   cookie.trim().startsWith("myToken=")
// );
// const token = tokenCookie ? tokenCookie.split("=")[1] : null;
// const validate = async () => {
//   //   console.log(token);
//   await axios
//     .post("/api/beat/validateToken", {
//       token: token,
//     })
//     .then((res) => {
//       if (res.status == 200) {
//         console.log(res.data);
//         return true;
//       } else {
//         console.log("Got bad response");
//         return false;
//       }
//     });
// };

// export default validate;
import axios from "axios";

const cookies = document.cookie.split(";");
const tokenCookie = cookies.find((cookie) =>
  cookie.trim().startsWith("myToken=")
);
const token = tokenCookie ? tokenCookie.split("=")[1] : null;

const validate = async () => {
  try {
    const response = await axios.post("/api/beat/validateToken", { token });
    console.log(response.data);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default validate;
