import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    //Here state is preset
    this.state = { date: new Date() };
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
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default App;
