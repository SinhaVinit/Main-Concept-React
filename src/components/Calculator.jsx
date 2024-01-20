import React from "react";
import TemperatureInput from "./TemperatureInput";
import { toCelsius, toFahrenheit, toConvert } from "./convertors";
import BoilingVerdict from "./BoilingVerdict";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { scale: "c", temperature: "" };

    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
  }

  handleCelsiusChange(temperature) {
    this.setState({ scale: "c", temperature });
  }

  handleFahrenheitChange(temperature) {
    this.setState({ scale: "f", temperature });
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius =
      scale === "f" ? toConvert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? toConvert(temperature, toFahrenheit) : temperature;
    return (
      <div className="colour">
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict celsius={celsius} />
      </div>
    );
  }
}

export default Calculator;
