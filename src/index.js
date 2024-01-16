import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";

const posts = [
  { id: 1, title: "Hello World", content: "Welcome to learning React!" },
  { id: 2, title: "Installation", content: "You can install React from npm." },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <App posts={posts} />
  </div>
);
