import "./App.css";
import React from "react";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    // console.log(event);
    // console.log(this);
    alert("Your name is: " + this.input.current.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Enter Your Name:
          <input
            type="text"
            // If we put "value" instead of "defaultValue," then we are not able to make changes in the DOM after rendering this app.
            defaultValue="Name"
            ref={this.input}
            placeholder="Enter your name"
          />
        </label>
        <button type="submit" value="Submit">
          Submit
        </button>
      </form>
    );
  }
}
export default NameForm;
