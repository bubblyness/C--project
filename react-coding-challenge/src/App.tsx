import React, { useState } from "react";
import "./App.css";

type Synonym = {
  word: string;
  score: number;
};

const API_URL = process.env.API_URL ?? `https://api.datamuse.com`;

function App() {
  const [word, setWord] = useState("");
  const [synonyms, setSynonyms] = useState<Synonym[]>([]);

  const fetchSynonyms = (word: string) => {
    fetch(`${API_URL}/words?rel_syn=${word}`)
      .then((res) => res.json())
      .then(setSynonyms);
  };
  const wordHandler = (e) => {
    setWord(e.target.value);
  };

  const handleFetchSynonyms = (e: React.FormEvent) => {
    e.preventDefault();

    fetchSynonyms(word);
  };

  const handleSynonymClicked = (newWord: string) => {
    setWord(newWord);
    fetchSynonyms(newWord);
  };

  return (
    <div className="App">
      <form onSubmit={handleFetchSynonyms}>
        <label htmlFor="word-input">Your Word</label>
        <input id="word-input" value={word} onChange={wordHandler}></input>
        <button onClick={handleFetchSynonyms}>Submit</button>
      </form>

      <ul>
        {synonyms.map((synonym) => {
          return (
            <li
              key={synonym.word}
              onClick={() => handleSynonymClicked(synonym.word)}
            >
              {synonym.word}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
