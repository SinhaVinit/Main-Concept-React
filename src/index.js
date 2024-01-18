import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Reservation from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<input value="hi" />);

setTimeout(function () {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<input value={null} />);
}, 1000);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <div>
//     <Reservation />
//   </div>
// );
