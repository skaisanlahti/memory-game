import React, { useState } from "react";
import Score from "./components/Score";
import Cards from "./components/Cards";
import CardData from "./components/CardData";

const App = (props) => {
  const [clickedImages, setClickedImages] = useState([]);
  const [score, setScore] = useState(0);
  const maxScore = CardData.length;
  const handleClick = (event) => {
    if (score == maxScore) {
      // Win Game
    }
    if (clickedImages.includes(event.target.name)) {
      // Lose Game
      setScore(0);
      setClickedImages([]);
    } else {
      // progress game
      setScore(score + 1);
      setClickedImages([...clickedImages, event.target.name]);
    }
  };

  return (
    <div className="app">
      <h1 className="app-header">Memory Game</h1>
      <p>Click all pictures once. Order suffled after every click.</p>
      <Score score={score} maxScore={maxScore} />
      <div className="card-grid">
        <Cards click={handleClick} />
      </div>
    </div>
  );
};

export default App;
