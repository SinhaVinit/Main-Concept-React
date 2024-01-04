import "./welcome.css";
import React from "react";

// Declaration of React component or function componen with properties

//React Component
// function Welcome(props) {
//   return <h1>Hello, {props.name}!</h1>;
// }

//ES6 class
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

export default Welcome;
