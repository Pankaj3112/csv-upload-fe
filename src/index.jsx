import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./index.css";
import { CsvProvider } from "./providers";
import { useCsvs } from "./hooks";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CsvProvider>
    <App />
  </CsvProvider>
);
