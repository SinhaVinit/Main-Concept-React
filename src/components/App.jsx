import "./App.css";
import React from "react";

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value < 0
        ? 0
        : event.target.value;
    // console.log(name);
    // console.log(value);
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    alert(
      "Is Going: " +
        this.state.isGoing +
        "\nNumber of Guests: " +
        this.state.numberOfGuests
    );
    event.preventDefault();
  }

  render() {
    return (
      <form className="App" onSubmit={this.handleSubmit}>
        <label>
          Is Going:
          <input
            type="checkbox"
            name="isGoing"
            checked={this.state.isGoing}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Number of Guests:
          <input
            type="number"
            name="numberOfGuests"
            value={this.state.numberOfGuests}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Reservation;
