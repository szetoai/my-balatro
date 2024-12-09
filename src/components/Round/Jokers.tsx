interface JokersProps {
  owned: object[];
}

// Jokers: [List-of Joker] -> img
// Renders all owned Jokers onto the screen
function Jokers({ owned }: JokersProps) {
  return <img id="jokers" src="https://i.ibb.co/6rg98wD/jokers.png" />;
}

export { Jokers };
