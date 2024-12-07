// A Joker is a new Joker((Any) => Any)
// And represents a Constant that changes the way a round is played
// (very vague data definition because Jokers can do *many* things)
class Joker {
  constructor(effect, img) {
    this.effect = effect;
    this.img = img;
  }
}
// Examples
const JOKER = new Joker(
  (mult) => mult + 4,
  (
    <img src="https://static.wikia.nocookie.net/balatrogame/images/e/ef/Joker.png/revision/latest/scale-to-width-down/80?cb=20230925003651" />
  )
);
