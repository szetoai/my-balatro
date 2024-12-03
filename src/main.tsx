import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import Start from "./components/StartButton";

createRoot(document.getElementById("root")!).render(
  <>
  <Start />
  </>
);
