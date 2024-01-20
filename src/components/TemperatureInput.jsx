import React from "react";

const scaleName = {
  c: "celsius",
  f: "fahrenheit",
};

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    // this.setState({ temperature: e.target.value });
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const scale = this.props.scale;
    const temperature = this.props.temperature;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleName[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

export default TemperatureInput;
