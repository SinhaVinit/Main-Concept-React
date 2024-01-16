import "./App.css";
import React from "react";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // console.log(event);
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    // console.log(event);
    alert("A name was submitted: " + this.state.value);
    // After submitting the form the page is refreshing. To prevent this we have to use preventDefault().
    event.preventDefault();
  }

  render() {
    return (
      <form className="App" onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            placeholder="Enter your name"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm;
