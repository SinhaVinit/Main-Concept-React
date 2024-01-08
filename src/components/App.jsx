import "./App.css";
import React from "react";

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handelClick = this.handelClick.bind(this);
  }

  //One way (we have to bind this handelClick)
  handelClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
    // console.log(this);
  }

  render() {
    return (
      <button onClick={this.handelClick}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}

export default Toggle;
