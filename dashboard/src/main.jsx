import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Workspace from "./Workspace";
import "./styles.css";
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {new URLSearchParams(location.search).has("workspace") ? <Workspace /> : <App />}
  </React.StrictMode>,
);
