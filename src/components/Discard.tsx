interface DiscardProps {
  discards: number;
  onPress: () => void;
}

// Discard: [() => void] -> img
// Produces the discard button, which when clicked discards all active cards,
// refilling the hand with cards from the deck.
function Discard({ discards, onPress }: DiscardProps) {
  return (
    <img
      className="ui"
      id="discard"
      src="https://i.ibb.co/brPrQzd/discardbutton.png"
      onClick={() => {
        if (discards > 0) {
          onPress();
        }
      }}
    />
  );
}

export { Discard };
