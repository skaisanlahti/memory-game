import React, { useState } from "react";
import Score from "./components/Score";
import Cards from "./components/Cards";
import Win from "./components/Win";
import CardData from "./components/CardData";

// test comment 2
const App = (props) => {
  const [clickedImages, setClickedImages] = useState([]);
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);
  const [win, setWin] = useState(false);
  const maxScore = CardData.length;
  const handleClick = (event) => {
    if (clickedImages.includes(event.target.name)) {
      // Lose Game
      if (score > highscore) {
        setHighscore(score);
      }
      setScore(0);
      setClickedImages([]);
    } else if (score === maxScore - 1) {
      // Win Game
      setHighscore(maxScore);
      setScore(maxScore);
      setWin(true);
    } else {
      // progress game
      setScore(score + 1);
      setClickedImages([...clickedImages, event.target.name]);
    }
  };

  const handleWinClick = (event) => {
    // reset game
    setWin(false);
    setScore(0);
    setHighscore(0);
    setClickedImages([]);
  };

  if (win) {
    return (
      <div className="app">
        <h1 className="app-header">Memory Game</h1>
        <p className="instructions">
          Click all pictures once. Order suffled after every click.
        </p>
        <Score score={score} maxScore={maxScore} highscore={highscore} />
        <Win handleWinClick={handleWinClick} />
      </div>
    );
  }

  return (
    <div className="app">
      <h1 className="app-header">Memory Game</h1>
      <p className="instructions">
        Click all pictures once. Order suffled after every click.
      </p>
      <Score score={score} maxScore={maxScore} highscore={highscore} />
      <div className="card-grid">
        <Cards click={handleClick} />
      </div>
    </div>
  );
};

export default App;
