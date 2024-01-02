import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import MyComponent from "./components/clock";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <App />
    <MyComponent />
  </div>
);
