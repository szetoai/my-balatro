import { useState } from "react";

interface ScoreProps {
  num: number;
}

// Score: Number -> img
// Returns the round score img for the given Number
function Score({ num }: ScoreProps) {
  const score = !isNaN(num) ? num : 0;
  return (
    <div className="container">
      <h1 id="roundScoreNumber">{score}</h1>
      <img
        id="roundScore"
        className="ui"
        src="https://i.ibb.co/3SjbwdV/roundscore.png"
      />
    </div>
  );
}

export { Score };
