import { useState, useEffect } from "react";

// A Joker is a new Joker((Any) => Any, String, String)
// And represents a constantly present card that changes the way a round is played
// (very vague data definition because Jokers can do *many* things)
class Joker {
  constructor(
    effect: (effect: any) => any,
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
  (mult: number) => mult + 4,
  2,
  "+4 Mult",
  "https://static.wikia.nocookie.net/balatrogame/images/e/ef/Joker.png"
);
const GREEDYJOKER = new Joker(
  (mult: number) => mult + 4,
  5,
  "Played cards with Diamond suit give +3 Mult when scored",
  "https://static.wikia.nocookie.net/balatrogame/images/4/43/Greedy_Joker.png"
);
const LUSTYJOKER = new Joker(
  (mult: number) => mult + 4,
  5,
  "Played cards with Heart suit give +3 Mult when scored",
  "https://static.wikia.nocookie.net/balatrogame/images/f/fd/Lusty_Joker.png"
);
const WRATHFULJOKER = new Joker(
  (mult: number) => mult + 4,
  5,
  "Played cards with Spade suit give +3 Mult when scored",
  "https://static.wikia.nocookie.net/balatrogame/images/7/7b/Wrathful_Joker.png"
);
const GLUTTONOUSJOKER = new Joker(
  (mult: number) => mult + 4,
  5,
  "Played cards with Club suit give +3 Mult when scored",
  "https://static.wikia.nocookie.net/balatrogame/images/a/ac/Gluttonous_Joker.png"
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
];

interface JokerOptionsProps {
  updateJokers: (item: object) => void;
  money: number;
  updateMoney: (item: number) => void;
}

function JokerOptions({ updateJokers, money, updateMoney }: JokerOptionsProps) {
  const [joker1, setJoker1] = useState(null);
  const [joker2, setJoker2] = useState(null);
  const [joker1Img, setJoker1Img] = useState(null);
  const [joker2Img, setJoker2Img] = useState(null);
  const [showJoker1, setShowJoker1] = useState(true);
  const [showJoker2, setShowJoker2] = useState(true);

  useEffect(() => {
    // Make a shallow copy of ALLJOKERS to avoid modifying the original array
    const jokersCopy = [...ALLJOKERS];

    // Randomly select two unique jokers
    const joker1ind = Math.floor(Math.random() * jokersCopy.length);
    const selectedJoker1 = jokersCopy[joker1ind];
    jokersCopy.splice(joker1ind, 1); // Remove the selected joker

    const joker2ind = Math.floor(Math.random() * jokersCopy.length);
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
      {showJoker1 && ( // Conditionally render the first image
        <img
          className="shopJoker"
          src={joker1Img}
          onMouseOver={() => setJoker1Img(joker2Img)}
          onMouseOut={() =>
            setJoker1Img(
              "https://static.wikia.nocookie.net/balatrogame/images/2/2e/Joker_Stencil.png"
            )
          }
          onClick={() => {
            if (money >= joker1.val) {
              updateJokers(joker1); // add joker
              setShowJoker2(false); // hide image
              updateMoney(money - joker1.val); // subtract money
            }
          }}
        />
      )}
      {showJoker2 && (
        <img
          className="shopJoker"
          src={joker2Img}
          onMouseOver={() => setJoker2Img(joker1Img)}
          onMouseOut={() =>
            setJoker1Img(
              "https://static.wikia.nocookie.net/balatrogame/images/2/2e/Joker_Stencil.png"
            )
          }
          onClick={() => {
            if (money >= joker2.val) {
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

export { JokerOptions };
