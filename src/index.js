import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/globals.css";
import Home from "../src/pages/Home";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  </React.StrictMode>
);
