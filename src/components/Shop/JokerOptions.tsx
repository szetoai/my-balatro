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

function JokerOptions() {
  const [joker1Img, setJoker1Img] = useState(null);
  const [joker2Img, setJoker2Img] = useState(null);
  let joker1OgImg = null;
  let joker2OgImg = null;
  useEffect(() => {
    // Randomly select two unique jokers
    const joker1ind = Math.floor(Math.random() * ALLJOKERS.length);
    const joker1 = ALLJOKERS[joker1ind];
    ALLJOKERS.splice(joker1ind, 1); // Remove the selected joker
    // Do the same for second joker
    const joker2ind = Math.floor(Math.random() * ALLJOKERS.length);
    const joker2 = ALLJOKERS[joker2ind];
    ALLJOKERS.splice(joker2ind, 1);
    // Set the images for the selected jokers
    setJoker1Img(joker1.img);
    setJoker2Img(joker2.img);
  }, []);
  return (
    <>
      <img
        className="shopJoker"
        src={joker1Img}
        onMouseOver={() => setJoker1Img(joker2Img)}
        onMouseOut={() =>
          setJoker1Img(
            "https://static.wikia.nocookie.net/balatrogame/images/2/2e/Joker_Stencil.png"
          )
        }
      />
      <img className="shopJoker" src={joker2Img} />
    </>
  );
}

export { JokerOptions };
