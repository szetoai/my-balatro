interface JokersProps {
  owned: object[];
}

// Jokers: [List-of Joker] -> img
// Renders all owned Jokers onto the screen
function Jokers({ owned }: JokersProps) {
  const JokerNum = owned.length;
  console.log(owned);
  return (
    <>
      <img id="jokers" src="https://i.ibb.co/6rg98wD/jokers.png" />
      {JokerNum >= 1 && (
        <img id="roundJoker1" className="roundJoker" src={owned[0].img} />
      )}
      {JokerNum >= 2 && (
        <img id="roundJoker2" className="roundJoker" src={owned[1].img} />
      )}
      {JokerNum >= 3 && (
        <img id="roundJoker3" className="roundJoker" src={owned[2].img} />
      )}
    </>
  );
}

export { Jokers };
