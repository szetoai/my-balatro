import { useState } from "react";
import { MakeDeck, MakeHand } from "./Balatro";

function Start() {
  const [started, setStarted] = useState(false);
  if (started) {
    return <MakeHand deck={MakeDeck()} handsize={8} />
  } else {
    return (
      <img
        className="ui"
        src="https://i.ibb.co/26vt9qk/markup-1000008762.png"
        height="75px"
        onClick={() => setStarted(true)}
      ></img>
    );
  }
}

export default Start;