import React from "react";

const Score = (props) => {
  return (
    <div className="score-board">
      <h2>
        Score: {props.score} / {props.maxScore}
      </h2>
    </div>
  );
};

export default Score;
