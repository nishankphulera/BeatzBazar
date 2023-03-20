import React, { useState, useEffect } from "react";
import background from "../../assets/youtubebanner.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Welcome = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [usernameLogin, setUsernameLogin] = useState();
  const [passwordLogin, setPasswordLogin] = useState();
  const [usernameSignup, setUsernameSignup] = useState();
  const [passwordSignup, setPasswordSignup] = useState();
  const [confirmPasswordSignup, setConfirmPasswordSignup] = useState();
  const [nameSignup, setNameSignup] = useState();
  const [emailSignup, setEmailSignup] = useState();
  const [phoneSignup, setPhoneSignup] = useState();
  const [professionSignup, setProfessionSignup] = useState();
  const [locationSignup, setLocationSignup] = useState();

  const navigate = useNavigate();
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((location) => {
      console.log(location);
    });
  }, []);
  const handleLogin = async (event) => {
    event.preventDefault();

    await axios({
      method: "post",
      url: "/api/user/getUser",
      data: { username: usernameLogin, password: passwordLogin },
    })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((error) => {
        console.log("Error" + error);
      });
  };
  const registeruser = (event) => {
    event.preventDefault();
    axios
      .post(
        "/api/user/registerUser",
        {
          name: usernameSignup,
          email: emailSignup,
          phone: phoneSignup,
          occupation: professionSignup,
          username: usernameSignup,
          password: passwordSignup,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch();
    {
      console.log("Problem in posting");
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100vw",
        height: "100vh",
        backgroundPosition: "center",

        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 20,
        overflowY: "auto",
      }}
    >
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 100,
          display: "flex",
          flexDirection: "row",
        }}
      >
        {/* <img
          style={{ height: 100, width: 200 }}
          src={require("../../assets/beatzbazar.png")}
        ></img> */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "white",
              margin: 20,
            }}
          >
            Already Have An Account?
          </text>
          <div
            onClick={() => {
              setShowLogin(!showLogin);
            }}
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#FE935F",
              padding: 10,
              width: 400,

              borderRadius: 10,
              margin: 20,
              display: "flex",
              flexDirection: "column",
              marginTop: 4,
            }}
          >
            <text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
              Login
            </text>
          </div>
          {showLogin && (
            <form
              onSubmit={handleLogin}
              style={{
                display: "flex",
                flexDirection: "column",
                width: "90%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <input
                style={{
                  borderWidth: 2,
                  borderRadius: 10,
                  width: "90%",
                  paddingLeft: 10,
                  color: "white",
                  backgroundColor: "#1D1F21",
                  height: 40,
                }}
                type="text"
                placeholder="Username"
                placeholderColor="white"
                value={usernameLogin}
                onChange={(e) => {
                  setUsernameLogin(e.target.value);
                }}
              />
              <input
                style={{
                  marginTop: 10,

                  borderWidth: 2,
                  borderRadius: 10,
                  width: "90%",
                  paddingLeft: 10,
                  color: "white",
                  backgroundColor: "#1D1F21",
                  height: 40,
                }}
                type="password"
                placeholder="Password"
                value={passwordLogin}
                onChange={(e) => {
                  setPasswordLogin(e.target.value);
                }}
              />
              <input
                style={{
                  height: 40,
                  width: 100,
                  backgroundColor: "#FE935F",
                  color: "white",
                  margin: 10,
                  borderRadius: 10,
                }}
                type="submit"
                value="Login"
              />
            </form>
          )}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "white",
              margin: 20,
            }}
          >
            New User?
          </text>
          <div
            onClick={() => {
              setShowSignup(!showSignup);
            }}
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#FE935F",
              padding: 10,
              width: 400,
              borderRadius: 10,
              margin: 20,
              display: "flex",
              flexDirection: "column",
              marginTop: 10,
            }}
          >
            <text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
              Signup
            </text>
          </div>
          {showSignup && (
            <form
              onSubmit={registeruser}
              style={{
                display: "flex",
                flexDirection: "column",
                width: "90%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <input
                style={{
                  borderWidth: 2,
                  borderRadius: 10,
                  width: "90%",
                  paddingLeft: 10,
                  color: "white",
                  backgroundColor: "#1D1F21",
                  height: 40,
                  marginTop: 10,
                }}
                type="text"
                placeholder="Name"
                placeholderColor="white"
                value={nameSignup}
                onChange={(e) => {
                  setNameSignup(e.target.value);
                }}
              />
              <input
                style={{
                  marginTop: 10,

                  borderWidth: 2,
                  borderRadius: 10,
                  width: "90%",
                  paddingLeft: 10,
                  color: "white",
                  backgroundColor: "#1D1F21",
                  height: 40,
                }}
                type="email"
                placeholder="Email"
                value={emailSignup}
                onChange={(e) => {
                  setEmailSignup(e.target.value);
                }}
              />
              <input
                style={{
                  borderWidth: 2,
                  borderRadius: 10,
                  width: "90%",
                  paddingLeft: 10,
                  color: "white",
                  backgroundColor: "#1D1F21",
                  height: 40,
                  marginTop: 10,
                }}
                type="number"
                placeholder="Phone"
                placeholderColor="white"
                value={phoneSignup}
                onChange={(e) => {
                  setPhoneSignup(e.target.value);
                }}
              />
              <input
                style={{
                  marginTop: 10,
                  borderWidth: 2,
                  borderRadius: 10,
                  width: "90%",
                  paddingLeft: 10,
                  color: "white",
                  backgroundColor: "#1D1F21",
                  height: 40,
                }}
                type="text"
                placeholder="Profession"
                value={professionSignup}
                onChange={(e) => {
                  setProfessionSignup(e.target.value);
                }}
              />
              <input
                style={{
                  marginTop: 10,
                  borderWidth: 2,
                  borderRadius: 10,
                  width: "90%",
                  paddingLeft: 10,
                  color: "white",
                  backgroundColor: "#1D1F21",
                  height: 40,
                }}
                type="text"
                placeholder="Username"
                placeholderColor="white"
                value={usernameSignup}
                onChange={(e) => {
                  setUsernameSignup(e.target.value);
                }}
              />
              <input
                style={{
                  marginTop: 10,
                  borderWidth: 2,
                  borderRadius: 10,
                  width: "90%",
                  paddingLeft: 10,
                  color: "white",
                  backgroundColor: "#1D1F21",
                  height: 40,
                }}
                type="password"
                placeholder="Password"
                value={passwordSignup}
                onChange={(e) => {
                  setPasswordSignup(e.target.value);
                }}
              />
              <input
                style={{
                  marginTop: 10,
                  borderWidth: 2,
                  borderRadius: 10,
                  width: "90%",
                  paddingLeft: 10,
                  color: "white",
                  backgroundColor: "#1D1F21",
                  height: 40,
                }}
                type="password"
                placeholder="Confirm Password"
                value={confirmPasswordSignup}
                onChange={(e) => {
                  setConfirmPasswordSignup(e.target.value);
                }}
              />
              <input
                style={{
                  marginTop: 10,
                  height: 40,
                  width: 100,
                  backgroundColor: "#FE935F",
                  color: "white",
                  margin: 10,
                  borderRadius: 10,
                }}
                type="submit"
                value="Signup"
              />
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
