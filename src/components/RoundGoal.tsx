interface GoalProps {
  goal: number;
}

// RoundGoal: Number -> img
// Renders the target chip graphic for the given Number
function RoundGoal({ goal }: GoalProps) {
  return (
    <div className="container">
      <img id="roundGoal" src="https://i.ibb.co/k1CRrLj/goalscore.png" />
      <h1 id="roundGoalChips">{goal}</h1>
    </div>
  );
}

export { RoundGoal };
