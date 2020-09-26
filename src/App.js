import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Display from "./components/Display";
import RepoDisplay from "./components/Repo";

function App() {
  const [character, setCharacter] = useState("");
  const [info, setInfo] = useState({});

  const receivedSearchItem = (char) => {
    setCharacter(char);
    console.log(character);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (character !== "") {
          const recData = await fetch(
            `https://api.github.com/users/${character}`
          );
          const data = await recData.json();
          console.log(data);
          setInfo(data);
        }
      } catch (error) {
        alert.alert(error);
      }
    };
    fetchData();
  }, [character]);

  return (
    <div className="App">
      {character === "" ? (
        <>
          <Header />
          <SearchBar value={receivedSearchItem} />{" "}
        </>
      ) : (
        <>
          <Display info={info} />
          <RepoDisplay info={info} />
        </>
      )}
    </div>
  );
}

export default App;
