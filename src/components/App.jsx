import "./App.css";
import React from "react";

class FileForm extends React.Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    // console.log(event);
    // console.log(this);
    // alert("Your name is: " + this.fileInput.current.value);
    alert(`Selected file - ${this.fileInput.current.files[0].name}`);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Upload your file:
          <input type="file" ref={this.fileInput} />
        </label>
        <button type="submit" value="Submit">
          Submit
        </button>
      </form>
    );
  }
}
export default FileForm;
