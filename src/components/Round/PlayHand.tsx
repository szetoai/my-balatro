import { BestHand, ChipVal, MultVal } from "./Hand";

// CountedCards: [List-of Card] String -> [List-of Card]
// Filters out any non-scoring cards in a hand,
// (ex. any card besides the highest in a high card, non pair in x of a kind)
function CountedCards(ahand: object[], handType: string) {
  if (handType !== "High Card") {
    return ahand.filter(
      (item, index) => BestHand(ahand.toSpliced(index, 1)) !== handType
    );
  } else {
    return [ahand[0]];
  }
}

// For Card Data Definition, see Hand.tsx
// HandScore: [List-of Card] String -> img
// Calculates the value of the given hand based on each Card's rank
function HandScore(ahand, handType: string) {
  if (ahand.length === 0) {
    return 0;
  } else {
    const countedHand = CountedCards(ahand, handType);
    return countedHand.reduceRight((total, card) => {
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

// See Hand.tsx for [Maybe-Number] definition
// ApplyJokers: [List-of Joker] [List-of Card] [List-of [Maybe-Number]]
// Applies all Jokers in the given [List-of Joker] onto the score.
function ApplyJokers(jokers: object[], ahand: object[], chipsAndMult: any[]) {
  const countedHand = CountedCards(ahand, BestHand(ahand));
  let curChipsAndMult = chipsAndMult;
  jokers.forEach((element) => {
    curChipsAndMult = element.effect(countedHand, curChipsAndMult);
  });
  return curChipsAndMult[0] * curChipsAndMult[1];
}

interface PlayHandButtonProps {
  handCount: number;
  ahand: object[];
  jokers: object[];
  updateScore: (item: number) => void;
  updateHand: (item: void) => void;
  updateHandCount: (item: void) => void;
}

// PlayHandButton: Number [List-of Card] [List-of Joker] [(item: number) -> void] [(item: void) -> void] [(item: void) -> void]
// -> img
// Renders the play hand button, which calculates the new player score
// based on the given [List-of Card] when clicked.
function PlayHandButton({
  handCount,
  ahand,
  jokers,
  updateScore,
  updateHand,
  updateHandCount,
}: PlayHandButtonProps) {
  const handType = BestHand(ahand);
  const chips = ChipVal(handType) + HandScore(ahand, handType);
  const mult = MultVal(handType);
  const chipsAndMult = [chips, mult];
  const score = ApplyJokers(jokers, ahand, chipsAndMult);
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
