import { useState, useEffect } from "react";
import { ShopTitle } from "./ShopTitle";

// See Hand.tsx for Card and Maybe-Number definitions
// A Joker is a new Joker([List-of Card] [List-of [Maybe-Number]] -> number[], Number, String, String)
// And represents a constantly present card that changes the way a round is played
// (very vague data definition because Jokers can do *many* things)
class Joker {
  constructor(
    effect: (ahand: object[], chipsAndMult: number[]) => number[],
    val: number,
    desc: string,
    img: string
  ) {
    this.effect = effect;
    this.val = val;
    this.desc = desc;
    this.img = img;
  }
}
// Examples
const JOKER = new Joker(
  (ahand, chipsAndMult) => [chipsAndMult[0], chipsAndMult[1] + 4],
  2,
  "Joker: +4 Mult",
  "https://static.wikia.nocookie.net/balatrogame/images/e/ef/Joker.png"
);
const GREEDYJOKER = new Joker(
  (ahand, chipsAndMult) => {
    const diamonds = ahand.filter((card) => card.suit === "diamonds");
    return [chipsAndMult[0], chipsAndMult[1] + diamonds.length * 3];
  },
  5,
  "Greedy Joker: Played cards with Diamond suit give +3 Mult when scored",
  "https://static.wikia.nocookie.net/balatrogame/images/4/43/Greedy_Joker.png"
);
const LUSTYJOKER = new Joker(
  (ahand, chipsAndMult) => {
    const hearts = ahand.filter((card) => card.suit === "hearts");
    console.log(hearts.length);
    return [chipsAndMult[0], chipsAndMult[1] + hearts.length * 3];
  },
  5,
  "Lusty Joker: Played cards with Heart suit give +3 Mult when scored",
  "https://static.wikia.nocookie.net/balatrogame/images/f/fd/Lusty_Joker.png"
);
const WRATHFULJOKER = new Joker(
  (ahand, chipsAndMult) => {
    const spades = ahand.filter((card) => card.suit === "spades");
    return [chipsAndMult[0], chipsAndMult[1] + spades.length * 3];
  },
  5,
  "Wrathful Joker: Played cards with Spade suit give +3 Mult when scored",
  "https://static.wikia.nocookie.net/balatrogame/images/7/7b/Wrathful_Joker.png"
);
const GLUTTONOUSJOKER = new Joker(
  (ahand, chipsAndMult) => {
    const clubs = ahand.filter((card) => card.suit === "clubs");
    return [chipsAndMult[0], chipsAndMult[1] + clubs.length * 3];
  },
  5,
  "Gluttonous Joker: Played cards with Club suit give +3 Mult when scored",
  "https://static.wikia.nocookie.net/balatrogame/images/a/ac/Gluttonous_Joker.png"
);
const GROSMICHEL = new Joker(
  (ahand, chipsAndMult) => {
    return [chipsAndMult[0], chipsAndMult[1] + 15];
  },
  5,
  "Gros Michel: +15 Mult, 1 in 6 chance this is destroyed at the end of round.",
  "https://static.wikia.nocookie.net/balatrogame/images/6/6f/Gros_Michel.png"
);
// Template
function JokerTemp(joker: Joker) {
  joker.effect;
  joker.val;
  joker.desc;
  joker.img;
}

const ALLJOKERS = [
  JOKER,
  GREEDYJOKER,
  LUSTYJOKER,
  WRATHFULJOKER,
  GLUTTONOUSJOKER,
  GROSMICHEL,
];

interface JokerOptionsProps {
  ownedJokers: number;
  updateJokers: (item: object) => void;
  money: number;
  updateMoney: (item: number) => void;
}

function JokerOptions({
  ownedJokers,
  updateJokers,
  money,
  updateMoney,
}: JokerOptionsProps) {
  // The jokers
  const [joker1, setJoker1] = useState(null);
  const [joker2, setJoker2] = useState(null);
  const [joker1Img, setJoker1Img] = useState(null);
  const [joker2Img, setJoker2Img] = useState(null);
  const [showJoker1, setShowJoker1] = useState(true);
  const [showJoker2, setShowJoker2] = useState(true);
  const [shopText, setShopText] = useState("");
  const [jokerCost, setJokerCost] = useState(null);

  useEffect(() => {
    // Make a shallow copy of ALLJOKERS to avoid modifying the original array
    const jokersCopy = [...ALLJOKERS];

    // Randomly select two unique jokers
    const joker1ind = Math.floor(Math.random() * jokersCopy.length);
    const selectedJoker1 = jokersCopy[joker1ind];
    jokersCopy.splice(joker1ind, 1); // Remove the selected joker

    const joker2ind = Math.floor(Math.random() * (jokersCopy.length - 1));
    const selectedJoker2 = jokersCopy[joker2ind];

    // Update state for the jokers
    setJoker1(selectedJoker1);
    setJoker2(selectedJoker2);

    // Update state for images
    setJoker1Img(selectedJoker1.img);
    setJoker2Img(selectedJoker2.img);
  }, []);

  return (
    <>
      <ShopTitle money={money} text={shopText} cost={jokerCost} />
      {showJoker1 && ( // Conditionally render the first image
        <img
          className="shopJoker"
          src={joker1Img}
          onMouseOver={() => {
            setShopText(joker1.desc);
            setJokerCost(joker1.val);
          }}
          onMouseOut={() => setShopText("")}
          onClick={() => {
            if (money >= joker1.val && ownedJokers < 3) {
              updateJokers(joker1); // add joker
              setShowJoker1(false); // hide image
              updateMoney(money - joker1.val); // subtract money
            }
          }}
        />
      )}
      {showJoker2 && (
        <img
          className="shopJoker"
          src={joker2Img}
          onMouseOver={() => {
            setShopText(joker2.desc);
            setJokerCost(joker2.val);
          }}
          onMouseOut={() => setShopText("")}
          onClick={() => {
            if (money >= joker2.val && ownedJokers < 3) {
              updateJokers(joker2);
              setShowJoker2(false);
              updateMoney(money - joker2.val);
            }
          }}
        />
      )}
    </>
  );
}

export { JokerOptions, ALLJOKERS };
