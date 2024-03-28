import { useState } from "react";
import axios from "axios";

const CreateBeat = () => {
  const [beatName, setBeatName] = useState("");
  const [by, setBy] = useState("");
  const [mood, setMood] = useState("");
  const [genre, setGenre] = useState("");
  const [bpm, setBpm] = useState("");
  const [key, setKey] = useState("");
  const [beatAlbum, setBeatAlbum] = useState();
  const [priceWave, setPriceWave] = useState("");
  const [priceStem, setPriceStem] = useState("");
  const [priceMp3, setPriceMp3] = useState("");
  const [beatArt, setBeatArt] = useState("");
  const [beatUri, setBeatUri] = useState("");
  const registeruser = (event) => {
    event.preventDefault();

    axios
      .post(
        "/api/beat/createBeat",
        {
          beatName: beatName,
          by: by,
          mood: mood,
          genre: genre,
          bpm: bpm,
          key: key,
          beatAlbum: beatAlbum,
          price: {
            wave: priceWave,
            stem: priceStem,
            mp3: priceMp3,
          },
          beatArt: beatArt,
          beatUri: beatUri,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        if (res.status == 200) {
          console.log(res.data);
        } else {
          console.log("Got invalid response");
        }
      })
      .catch(() => {
        console.log("Problem in posting");
      });
  };

  return (
    <div>
      <h1 style={{ margin: 10 }}>Create Beat</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
        onSubmit={registeruser}
      >
        <input
          style={{
            margin: 10,
            borderWidth: 2,
            borderRadius: 4,
            width: 400,
            paddingLeft: 10,
            borderColor: "orange",
          }}
          type="text"
          placeholder="Beat name"
          value={beatName}
          onChange={(e) => {
            setBeatName(e.target.value);
          }}
        />

        <input
          style={{
            margin: 10,
            borderWidth: 2,
            borderRadius: 4,
            width: 400,
            paddingLeft: 10,
            borderColor: "orange",
          }}
          type="text"
          placeholder="By"
          value={by}
          onChange={(e) => {
            setBy(e.target.value);
          }}
        />
        <input
          style={{
            margin: 10,
            borderWidth: 2,
            borderRadius: 4,
            width: 400,
            paddingLeft: 10,
            borderColor: "orange",
          }}
          type="text"
          placeholder="Beat Album"
          value={beatAlbum}
          onChange={(e) => {
            setBeatAlbum(e.target.value);
          }}
        />
        <input
          style={{
            margin: 10,
            borderWidth: 2,
            borderRadius: 4,
            width: 400,
            paddingLeft: 10,
            borderColor: "orange",
          }}
          type="text"
          placeholder="mood"
          value={mood}
          onChange={(e) => {
            setMood(e.target.value);
          }}
        />
        <input
          style={{
            margin: 10,
            borderWidth: 2,
            borderRadius: 4,
            width: 400,
            paddingLeft: 10,
            borderColor: "orange",
          }}
          type="text"
          placeholder="genre"
          value={genre}
          onChange={(e) => {
            setGenre(e.target.value);
          }}
        />
        <input
          style={{
            margin: 10,
            borderWidth: 2,
            borderRadius: 4,
            width: 400,
            paddingLeft: 10,
            borderColor: "orange",
          }}
          type="text"
          placeholder="BPM"
          value={bpm}
          onChange={(e) => {
            setBpm(e.target.value);
          }}
        />
        <input
          style={{
            margin: 10,
            borderWidth: 2,
            borderRadius: 4,
            width: 400,
            paddingLeft: 10,
            borderColor: "orange",
          }}
          type="text"
          placeholder="key"
          value={key}
          onChange={(e) => {
            setKey(e.target.value);
          }}
        />

        <input
          style={{
            margin: 10,
            borderWidth: 2,
            borderRadius: 4,
            width: 400,
            paddingLeft: 10,
            borderColor: "orange",
          }}
          type="text"
          placeholder="Price wave"
          value={priceWave}
          onChange={(e) => {
            setPriceWave(e.target.value);
          }}
        />
        <input
          style={{
            margin: 10,
            borderWidth: 2,
            borderRadius: 4,
            width: 400,
            paddingLeft: 10,
            borderColor: "orange",
          }}
          type="text"
          placeholder="Price stem"
          value={priceStem}
          onChange={(e) => {
            setPriceStem(e.target.value);
          }}
        />
        <input
          style={{
            margin: 10,
            borderWidth: 2,
            borderRadius: 4,
            width: 400,
            paddingLeft: 10,
            borderColor: "orange",
          }}
          type="text"
          placeholder="Price mp3"
          value={priceMp3}
          onChange={(e) => {
            setPriceMp3(e.target.value);
          }}
        />
        <input
          style={{
            margin: 10,
            borderWidth: 2,
            borderRadius: 4,
            width: 400,
            paddingLeft: 10,
            borderColor: "orange",
          }}
          type="text"
          placeholder="Beat Uri"
          value={beatUri}
          onChange={(e) => {
            setBeatUri(e.target.value);
          }}
        />
        <input
          style={{
            margin: 10,
            borderWidth: 2,
            borderRadius: 4,
            width: 400,
            paddingLeft: 10,
            borderColor: "orange",
          }}
          type="text"
          placeholder="Beat Art Uri"
          value={beatArt}
          onChange={(e) => {
            setBeatArt(e.target.value);
          }}
        />
        <input
          style={{
            height: 60,
            width: 100,
            backgroundColor: "orange",
            color: "white",
            margin: 10,
            borderRadius: 20,
          }}
          type="submit"
          value="Create Beat"
        />
      </form>
    </div>
  );
};

export default CreateBeat;
