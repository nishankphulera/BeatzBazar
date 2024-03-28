import { useState, useEffect } from "react";
import { AiFillInfoCircle, AiFillLike } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { HiCurrencyRupee } from "react-icons/hi";
import DisplayWave from "../common/DisplayWave";
import axios from "axios";
import validate from "../common/validate";
const Beat = (props) => {
  const [liked, setLiked] = useState(false);
  const [play, setPlay] = useState(false);
  const [width, setWidth] = useState(0);
  const navigate = useNavigate();
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
  const initPayment = (data) => {
    const options = {
      key: "rzp_test_nTmx9SQAb5M4o1",
      amount: data.amount,
      currency: data.currency,
      name: props.title,
      description: "This is a test transaction",
      image: props.albumArt,
      order_id: data.id,
      handler: async (response) => {
        try {
          const verifyUrl = "/api/payment/verify";
          const { data } = await axios.post(verifyUrl, response);
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#FF935F",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handlePayment = async () => {
    const result = await validate();

    if (result) {
      try {
        const orderUrl = "/api/payment/orders";
        const { data } = await axios.post(orderUrl, { amount: props.price });
        console.log(data);
        initPayment(data.data);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("User Validation failed");
    }
  };
  return (
    <div
      style={{
        width: width,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#1B1C1D",
        borderTopWidth: 2,
        flexDirection: isMobile ? "column" : "row",
        display: "flex",

        padding: 20,
        // height: 220,
      }}
    >
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          marginBottom: 20,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: "40%",
            marginLeft: 20,
          }}
        >
          <img
            onClick={() => {
              // props.playOnClick({
              //   title: props.title,
              //   by: props.by,
              //   albumArt: props.albumArt,
              //   uri: props.uri,
              // });
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
            <div style={{ alignItems: "center", justifyContent: "center" }}>
              <text
                style={{
                  fontSize: isMobile ? 16 : 18,
                  fontWeight: "bold",
                  color: "white",
                  maxWidth: 60,
                }}
              >
                {props.title}
              </text>
            </div>
            <div style={{ alignItems: "center", justifyContent: "center" }}>
              <text
                style={{
                  fontSize: isMobile ? 14 : 16,
                  fontWeight: "bold",
                  color: "white",
                  marginBottom: 10,
                }}
              >
                {props.by}
              </text>
            </div>
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
            width: "80%",
          }}
        >
          <AiFillInfoCircle
            style={{ marginTop: 6, marginRight: 20 }}
            size={isMobile ? 18 : 22}
            color="white"
          ></AiFillInfoCircle>
          <div
            onClick={() => {
              handlePayment();
            }}
            style={{ display: "flex", flexDirection: "row" }}
          >
            <HiCurrencyRupee
              style={{ marginTop: 6 }}
              size={isMobile ? 18 : 22}
              color="white"
            ></HiCurrencyRupee>
            <text
              style={{
                marginLeft: 4,
                marginTop: 4,
                marginRight: 20,
                fontSize: isMobile ? 14 : 16,
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
            size={isMobile ? 18 : 22}
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
          width: isMobile ? "100%" : "70%",
        }}
      >
        <DisplayWave play={play} uri={props.uri}></DisplayWave>
      </div>
    </div>
  );
};

export default Beat;
