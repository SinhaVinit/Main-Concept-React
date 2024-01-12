import "./App.css";
import React from "react";

function Message(props) {
  return (
    <h1>The user is {props.isLoggedIn ? "currently" : "not"} logged in.</h1>
  );
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick} className="LoginButton">
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick} className="LogoutButton">
      Logout
    </button>
  );
}

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.handelLoginClick = this.handelLoginClick.bind(this);
    this.handelLogoutClick = this.handelLogoutClick.bind(this);
    this.state = { isLoggedIn: props.isLoggedIn };
    // console.log(props.isLoggedIn);
  }

  handelLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handelLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LoginButton onClick={this.handelLogoutClick} />;
    } else {
      button = <LogoutButton onClick={this.handelLoginClick} />;
    }
    return (
      <div className="App">
        <Message isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

export default Greeting;
