import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import { MakeDeck, MakeHand } from "./components/Balatro";

const current_deck = MakeDeck();
createRoot(document.getElementById("root")!).render(
  <MakeHand deck={current_deck} handsize={52} />
);
