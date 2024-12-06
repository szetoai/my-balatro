import { useState } from "react";
import "./style.css";
import { Start } from "./components/Start";
import { MakeDeck, MakeHand, HandInfo } from "./components/Hand";
import { InfoPanel } from "./components/GameInfo";
import { Discard } from "./components/Discard";

function App() {
  const [startState, setStartState] = useState(false); // Whether the game has started or not
  const [deckState, setDeckState] = useState(MakeDeck()); // Deck
  const [handState, setHandState] = useState(Array); // Hand
  const [ahandState, setAhandState] = useState(Array); // Active hand
  const [handNum, setHandNum] = useState(4); // Number of hands
  const [discardNum, setDiscardNum] = useState(4); // Number of discards
  if (startState) {
    return (
      <>
        <HandInfo ahand={ahandState} />
        <InfoPanel discards={discardNum} />
        <Discard
          discards={discardNum}
          onPress={
            // updateHandDiscard: () -> void
            // Updates the hand so that it contains only the cards that arent in the active hand
            function updateHandDiscard() {
              const newHandState = handState.filter(
                (x) => !ahandState.some((y) => y.img === x.img)
              );
              setHandState(newHandState);
              setAhandState([]);
              setDiscardNum(discardNum - 1);
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
