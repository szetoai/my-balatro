import { useState } from "react";
import "./style.css";
import { Start } from "./components/Start";
import { MakeDeck, MakeHand, HandInfo } from "./components/Hand";
import { RoundGoal } from "./components/RoundGoal";
import { InfoPanel } from "./components/RoundInfo";
import { Score } from "./components/RoundScore";
import { PlayHandButton } from "./components/PlayHand";
import { Discard } from "./components/Discard";

const AnteBaseValues = [100, 300, 800, 2000, 5000, 11000, 20000, 35000, 50000];

function App() {
  const [startState, setStartState] = useState(false); // Whether the game has started or not
  const [handNum, setHandNum] = useState(4); // Number of hands
  const [discardNum, setDiscardNum] = useState(4); // Number of discards
  const [ante, setAnte] = useState(1); // Ante Number
  const [round, setRound] = useState(1); // Round Number
  const [roundScore, setRoundScore] = useState(0); // Current Score
  const [deckState, setDeckState] = useState(MakeDeck()); // Deck
  const [handState, setHandState] = useState(Array); // Hand
  const [ahandState, setAhandState] = useState(Array); // Active hand]
  // updateHand: () -> void
  // Updates the hand so that it contains only the cards that arent in the active hand
  const updateHand = () => {
    const newHandState = handState.filter(
      (x) => !ahandState.some((y) => y.img === x.img)
    );
    setHandState(newHandState);
    setAhandState([]);
  };
  // reset: () -> void
  // Resets the deck, hand, active hand, number of hands, number of discards, and current score
  // back to initial values
  const reset = () => {
    setDeckState(MakeDeck());
    setHandState(Array);
    setAhandState(Array);
    setHandNum(4);
    setDiscardNum(4);
    setRoundScore(0);
  };
  if (startState) {
    return (
      <>
        <div className="container">
          <RoundGoal goal={AnteBaseValues[ante] * (0.5 + 0.5 * (round % 3))} />
          <InfoPanel
            hands={handNum}
            discards={discardNum}
            ante={ante}
            round={round}
          />
          <Score num={roundScore} />
        </div>
        <HandInfo ahand={ahandState} />
        <PlayHandButton
          handCount={handNum}
          ahand={ahandState}
          updateScore={(x) => setRoundScore(x + roundScore)}
          updateHand={updateHand}
          updateHandCount={() => setHandNum(handNum - 1)}
        />
        <Discard
          discards={discardNum}
          onPress={() => {
            updateHand();
            setDiscardNum(discardNum - 1);
          }}
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
