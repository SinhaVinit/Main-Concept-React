import React from "react";
import Dialog from "./Dialog";

const messages = [
  {
    title: "Welcome",
    message: "Thank you for visiting our spacecraft!",
    signUp: "Sign Up",
  },
  {
    title: "नमस्ते",
    message: "हमारे अंतरिक्ष यान पर आने के लिए धन्यवाद",
    signUp: "साइन अप करें",
  },
  {
    title: "いらっしゃいませ",
    message: "私たちの宇宙船をご覧いただきありがとうございます",
    signUp: "サインアップ",
  },
];

class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { login: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleChange(e) {
    this.setState({ login: e.target.value });
  }

  handleSignUp(e) {
    alert("Welcome " + this.state.login);
    e.preventDefault();
  }

  render() {
    return (
      <div>
        {messages.map((message, index) => (
          <div key={index}>
            <Dialog title={message.title} message={message.message}>
              <input value={this.state.value} onChange={this.handleChange} />
              <button onClick={this.handleSignUp}>{message.signUp}</button>
            </Dialog>
            <br />
          </div>
        ))}
      </div>
    );
  }
}

export default SignUpDialog;
