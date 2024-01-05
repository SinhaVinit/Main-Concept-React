import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));

function tick() {
  root.render(
    <div>
      <App date={new Date()} />
    </div>
  );
}

setInterval(tick, 1000);
