import "./App.css";
import React from "react";

class FileForm extends React.Component {
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
    // File name will be the value in the alert box.
    alert("Your favorit flavor is: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form className="App" onSubmit={this.handleSubmit}>
        <label>
          Upload your file:
          <input type="file" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default FileForm;
