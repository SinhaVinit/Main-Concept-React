// In most cases, we recommend using controlled components to implement forms.
// In a controlled component, form data is handled by a React component.
// The alternative is uncontrolled components, where form data is handled by the DOM itself.

// To write an uncontrolled component, instead of writing an event handler for every state update,
// you can use a ref to get form values from the DOM.

import "./App.css";
import React from "react";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert("Your name is: " + this.input.current.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Enter Your Name:
          <input type="text" ref={this.input} placeholder="Enter your name" />
        </label>
        <button type="submit" value="Submit">
          Submit
        </button>
      </form>
    );
  }
}
export default NameForm;
