import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const root = document.getElementById("root")!;
root.style.opacity = "1";
createRoot(root).render(<App />);
