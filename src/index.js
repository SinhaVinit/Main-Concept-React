import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Page from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Page isLoggedIn={false} />
  </div>
);
