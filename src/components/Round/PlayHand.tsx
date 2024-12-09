import { BestHand, ChipVal, MultVal } from "./Hand";

// For Card Data Definition, see Hand.tsx
// HandScore: [List-of Card] String -> img
// Calculates the value of the given hand based on each Card's rank
function HandScore(ahand, handType: string) {
  if (ahand.length === 0) {
    return 0;
  } else {
    // we only want the cards that contribute to the handType
    let countedCards;
    if (handType !== "High Card") {
      countedCards = ahand.filter(
        (item, index) => BestHand(ahand.toSpliced(index, 1)) !== handType
      );
    } else {
      countedCards = [ahand[0]];
    }
    console.log(countedCards);
    return countedCards.reduceRight((total, card) => {
      const rank = card.rank;
      let cardscore;
      if (rank === 14) {
        cardscore = 11;
      } else if (rank >= 10) {
        cardscore = 10;
      } else cardscore = rank;
      return total + cardscore;
    }, 0);
  }
}

interface PlayHandButtonProps {
  handCount: number;
  ahand: object[];
  updateScore: (item: number) => void;
  updateHand: (item: void) => void;
  updateHandCount: (item: void) => void;
}

// PlayHandButton: [List-of Card] -> img
// Renders the play hand button, which calculates the new player score
// based on the given [List-of Card] when clicked.
function PlayHandButton({
  handCount,
  ahand,
  updateScore,
  updateHand,
  updateHandCount,
}: PlayHandButtonProps) {
  const handType = BestHand(ahand);
  const chips = ChipVal(handType) + HandScore(ahand, handType);
  const mult = MultVal(handType);
  const score = chips * mult;
  return (
    <img
      className="ui"
      id="playHand"
      src="https://i.ibb.co/cgwMhHw/playhandbutton.png"
      onClick={() => {
        if (handCount > 0 && ahand.length > 0) {
          updateScore(score);
          updateHand();
          updateHandCount();
        }
      }}
    />
  );
}

export { PlayHandButton };
