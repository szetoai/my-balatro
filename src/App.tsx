import { useState } from "react";
import "./style.css";
import { Start } from "./components/Start";
import { Discard } from "./components/Discard";
import { MakeDeck, MakeHand, HandInfo } from "./components/Hand";

function App() {
  const [startState, setStartState] = useState(false);
  const [deckState, setDeckState] = useState(MakeDeck());
  const [handState, setHandState] = useState(Array);
  const [ahandState, setAhandState] = useState(Array);
  console.log(handState);
  if (startState) {
    return (
      <>
        <HandInfo ahand={ahandState} />
        <Discard
          onPress={
            // updateHandDiscard: () -> void
            // Updates the hand so that it contains only the cards that arent in the active hand
            function updateHandDiscard() {
              const newHandState = handState.filter(
                (x) => !ahandState.some((y) => y.img === x.img)
              );
              setHandState(newHandState);
              setAhandState([]);
            }
          }
        />
        <MakeHand
          oldHand={handState}
          ahand={ahandState}
          deck={deckState}
          updateHand={(x) => setHandState(x)}
          updateAhand={(y) => setAhandState(y)}
          updateDeck={(z) => setDeckState(z)}
        />
      </>
    );
  } else {
    return <Start isActive={startState} onPress={() => setStartState(true)} />;
  }
}

export default App;
