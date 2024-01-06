import "./App.css";
import React from "react";

class Counter extends React.Component {
  //Name of the function is preset.
  constructor(props) {
    super(props);
    //Here state is preset
    this.state = { counter: 0 };
  }

  //Name of the function is preset.
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  //Name of the function is preset.
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    // Wrong way to update State
    // this.state = { counter: this.state.counter + this.props.increment };

    // This code may fail to update the counter
    // this.setState({ counter: this.state.counter + this.props.increment });

    // Correct way
    // this.setState(function (state, props) {
    //   return {
    //     counter: state.counter + props.increment,
    //   };
    // });

    // Correct way
    this.setState((state, props) => ({
      // Only for intiger number
      // counter: state.counter + props.increment,

      // For upto 2 decimal
      counter: Math.round((state.counter + props.increment) * 100) / 100,
    }));
  }

  render() {
    return (
      <div className="App">
        <h1>Hello, world!</h1>
        <h2>Counter is at {this.state.counter}</h2>
      </div>
    );
  }
}

export default Counter;
