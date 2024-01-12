import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Greeting from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Greeting isLoggedIn={false} />
  </div>
);
