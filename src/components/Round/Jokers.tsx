interface JokersProps {
  owned: object[];
}

// Jokers: [List-of Joker] -> img
// Renders all owned Jokers onto the screen
function Jokers({ owned }: JokersProps) {
  const JokerNum = owned.length;
  return (
    <>
      <img id="jokers" src="https://i.ibb.co/6rg98wD/jokers.png" />
      {JokerNum >= 1 && <img src={owned[0].img} />}
      {JokerNum >= 2 && <img src={owned[1].img} />}
      {JokerNum >= 3 && <img src={owned[3].img} />}
    </>
  );
}

export { Jokers };
