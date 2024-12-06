import { useState } from "react";

// InfoPanel: Number -> img
// Returns an image that displays:
// - the current number of discards remaining
function InfoPanel(discards) {
  return (
    <img
      id="infopanel"
      src="https://i.ibb.co/c1Y0Wmb/hands-discards-money-ante-round.png"
    />
  );
}

export { InfoPanel };
