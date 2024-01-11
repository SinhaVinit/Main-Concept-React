import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MailBox from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));

const messages = ["React", "React 1", "React 2", "React 3", "React 4"];

root.render(
  <div>
    <MailBox unreadMessages={messages} />
  </div>
);
