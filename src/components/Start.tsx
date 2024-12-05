interface StartProps {
  isActive: boolean;
  onPress: () => void;
}

// Start: Boolean [() => void] -> img
// Returns the start button depending on the given Boolean determining
// whether the game has already started or not, and the given function
// determining what happens when the button is pressed.
function Start({ isActive, onPress }: StartProps) {
  if (!isActive) {
    return (
      <img
        className="ui"
        src="https://i.ibb.co/26vt9qk/markup-1000008762.png"
        height="75px"
        onClick={onPress}
      />
    );
  }
}

export { Start };