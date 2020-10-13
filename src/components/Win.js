import React from "react";

const Win = (props) => {
  return (
    <div className="win-message" onClick={props.handleWinClick}>
      <h2>Congratulations! You beat the game!</h2>
    </div>
  );
};

export default Win;
