import { useState } from "react";

interface InfoPanelProps {
  hands: number;
  discards: number;
}

// InfoPanel: Number -> img
// Returns an image that displays:
// - the current number of discards remaining
function InfoPanel({hands, discards}: InfoPanelProps) {
  return (
    <div className="container">
      <img
        id="infoPanel"
        src="https://i.ibb.co/dWbWJ2P/hands-discards-money-ante-round.png"
      />
      <h1 id="handCount">{hands}</h1>
      <h1 id="discardCount">{discards}</h1>
    </div>
  );
}

export { InfoPanel };
