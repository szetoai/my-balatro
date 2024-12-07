// A Joker is a new Joker((Any) => Any, String, String)
// And represents a Constant that changes the way a round is played
// (very vague data definition because Jokers can do *many* things)
class Joker {
  constructor(effect:(effect:any) => any, desc:string, img:string) {
    this.effect = effect;
    this.desc = desc;
    this.img = img;
  }
}

// Examples
const JOKER = new Joker(
  (mult:number) => mult + 4,
  "+4 Mult",
  "https://static.wikia.nocookie.net/balatrogame/images/e/ef/Joker.png"
);
const GREEDYJOKER = new Joker(
  (mult:number) => mult + 4,
  "Played cards with Diamond suit give +3 Mult when scored",
  "https://static.wikia.nocookie.net/balatrogame/images/4/43/Greedy_Joker.png"
);
const LUSTYJOKER = new Joker(
  (mult:number) => mult + 4,
  "Played cards with Heart suit give +3 Mult when scored",
  "https://static.wikia.nocookie.net/balatrogame/images/f/fd/Lusty_Joker.png"
);
const WRATHFULJOKER = new Joker(
  (mult:number) => mult + 4,
  "Played cards with Spade suit give +3 Mult when scored",
  "https://static.wikia.nocookie.net/balatrogame/images/7/7b/Wrathful_Joker.png"
);
const GLUTTONOUSJOKER = new Joker(
  (mult:number) => mult + 4,
  "Played cards with Club suit give +3 Mult when scored",
  "https://static.wikia.nocookie.net/balatrogame/images/a/ac/Gluttonous_Joker.png"
);
