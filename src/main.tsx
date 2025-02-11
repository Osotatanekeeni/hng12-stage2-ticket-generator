import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { TicketifyProvider } from "./Context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <TicketifyProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </TicketifyProvider>
);
