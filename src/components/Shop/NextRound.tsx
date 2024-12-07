interface NextRoundProps {
  onPress: () => void;
}

// NextRound: Void -> img
// Transitions from Shop to Round Game States
function NextRound({ onPress }: NextRoundProps) {
  return (
    <img
      id="nextRound"
      className="ui"
      src="https://i.ibb.co/jvgjSqv/nextround.png"
      onClick={onPress}
    />
  );
}

export { NextRound };
