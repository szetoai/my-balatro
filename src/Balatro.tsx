import { MakeDeck, MakeHand } from './components/Game';
import './style.css'

function Balatro() {
  const current_deck = MakeDeck();
  return <MakeHand deck={current_deck} handsize = {5}/>;
}

export default Balatro;