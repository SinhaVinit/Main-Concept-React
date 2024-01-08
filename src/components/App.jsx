import "./App.css";
import React from "react";

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
  }

  // This will fail because it will run infinite times
  // handelClick = (great) => {
  //   this.setState((prevState) => ({
  //     isToggleOn: !prevState.isToggleOn,
  //   }));
  //   console.log(this);
  //   console.log(great);
  // };

  // This will work
  handelClick(great) {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
    console.log(this);
    console.log(great);
  }

  render() {
    return (
      <button onClick={() => this.handelClick("Hii")}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}

export default Toggle;
