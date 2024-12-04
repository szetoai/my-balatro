import { useState } from "react";
import "./style.css";
import { MakeDeck, MakeHand } from "./components/Balatro";

function App() {
  const [startState, setStartState] = useState(false);
  if (startState) {
    return <MakeHand deck={MakeDeck()} handsize={8} />;
  } else {
    return <Start isActive={startState} onPress={() => setStartState(true)} />;
  }
}

function Start({ isActive, onPress }) {
  if (!isActive) {
    return (
      <img
        className="ui"
        src="https://i.ibb.co/26vt9qk/markup-1000008762.png"
        height="75px"
        onClick={onPress}
      />
    );
  }
}

export default App;
