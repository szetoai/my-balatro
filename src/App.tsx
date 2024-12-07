import { useState } from "react";
import "./style.css";
// GameOver Components
import { Start } from "./components/GameOver/Start";
// Round Components
import { MakeDeck, MakeHand, HandInfo } from "./components/Round/Hand";
import { RoundGoal } from "./components/Round/Goal";
import { InfoPanel } from "./components/Round/RoundInfo";
import { Score } from "./components/Round/Score";
import { PlayHandButton } from "./components/Round/PlayHand";
import { Discard } from "./components/Round/Discard";
// Shop Components
import { NextRound } from "./components/Shop/NextRound";

const AnteBaseValues = [100, 300, 800, 2000, 5000, 11000, 20000, 35000, 50000];

function App() {
  // A gameState is one of: "Game Over" "Round" "Shop" and represents one of 3 game states
  const [gameState, setgameState] = useState("Game Over");
  const [handNum, setHandNum] = useState(4); // Number of hands
  const [discardNum, setDiscardNum] = useState(4); // Number of discards
  const [ante, setAnte] = useState(1); // Ante Number
  const [round, setRound] = useState(1); // Round Number
  const [roundScore, setRoundScore] = useState(0); // Current Score
  const [deckState, setDeckState] = useState(MakeDeck()); // Deck
  const [handState, setHandState] = useState(Array); // Hand
  const [ahandState, setAhandState] = useState(Array); // Active hand
  const [money, setMoney] = useState(0);
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
    setHandNum(4);
    setDiscardNum(4);
    setRoundScore(0);
    setHandState([]);
    setAhandState([]);
  };
  switch (gameState) {
    case "Round":
      // Goal and Round winning logic
      const curGoal = AnteBaseValues[ante] * (1 + 0.5 * ((round - 1) % 3));
      const curReward = 3 + ((round - 1) % 3) + handNum;
      // If we beat the level
      if (roundScore >= curGoal) {
        const newRound = round + 1;
        setMoney(money + curReward);
        setRound(newRound);
        if (newRound % 3 == 1) {
          setAnte(ante + 1);
        }
        reset();
        setgameState("Shop");
      } else if (handNum <= 0) {
        setgameState("Game Over");
        reset();
        setAnte(1);
        setRound(1);
        setMoney(0);
      }
      return (
        <>
          <div className="container">
            <RoundGoal goal={curGoal} reward={curReward - 1} />
            <InfoPanel
              hands={handNum}
              discards={discardNum}
              money={money}
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
              if (ahandState.length > 0) {
                updateHand();
                setDiscardNum(discardNum - 1);
              }
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
    case "Shop":
      return <NextRound onPress={() => setgameState("Round")} />;
    case "Game Over":
      return (
        <>
          <h1 id="rules">
            <span className="rulesbg">
              Rules:
              <br />
              - Reach the target chip value using Poker Hands (better hand =
              more chips)
              <br />
              - If you run out of hands, you lose!
              <br />
              - Each leftover hand = +$1 reward (Extra discards do nothing)
              <br />
              - Spend $ on Jokers to boost your performance
              <br />- Each Ante is 3 Rounds, beat 8 Antes to win!
            </span>
          </h1>
          <Start onPress={() => setgameState("Round")} />;
        </>
      );
  }
}

export default App;
