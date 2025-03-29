import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { uploadJsonToFirebase } from "./utils/uploadJsonToFirebase.js";
import "./index.css";

// Llamar a uploadJsonToFirebase fuera del StrictMode
uploadJsonToFirebase();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
