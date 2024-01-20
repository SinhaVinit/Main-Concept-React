import "./App.css";
import React from "react";

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temperature: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ temperature: event.target.value });
  }

  render() {
    return (
      <fieldset className="App">
        <legent>Enter temperature in celsius: </legent>
        <input value={this.state.temperature} onChange={this.handleChange} />
        <BoilingVerdict celsius={parseFloat(this.state.temperature)} />
      </fieldset>
    );
  }
}

export default Calculator;
