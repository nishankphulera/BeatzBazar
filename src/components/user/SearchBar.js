import React, { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // perform the search here, for example by making an API call
    // setResults(response from the API call)
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          style={styles.input}
          placeholder="What are you looking for"
        />
        <button
          onClick={() => {
            console.log("CLicked Search");
          }}
          type="submit"
          style={styles.button}
        >
          Search
        </button>
      </div>
      <div style={styles.resultsContainer}>
        {results.map((result) => (
          <div key={result.id} style={styles.result}>
            {result.title}
          </div>
        ))}
      </div>
    </form>
  );
};

const styles = {
  form: {
    display: "flex",
    marginLeft: 50,
    justifyContent: "center",
    flexDirection: "column",
    marginTop: 20,
    width: "50%",
  },
  input: {
    padding: 10,
    fontSize: 16,
    borderRadius: 10,
    border: "2px solid #383838",
    margin: 10,
    width: "100%",
    height: 50,
  },
  button: {
    padding: 4,
    backgroundColor: "#FE935F",
    color: "white",
    borderRadius: 5,
    border: "none",
    margin: 10,
    width: 100,
    border: "2px solid #383838",
  },
  resultsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: 20,
  },
  result: {
    padding: 10,
    margin: 10,
    border: "1px solid lightgray",
    borderRadius: 5,
    backgroundColor: "lightgray",
  },
};

export default SearchBar;
