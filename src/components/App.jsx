import "./App.css";
import React from "react";

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <h1>Welcome Back!</h1>;
  }
  return <h1>Please Sign Up!</h1>;
}

function LoginButton(props) {
  return (
    <button className="LoginButton" onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button className="LogoutButton" onClick={props.onClick}>
      Logout
    </button>
  );
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handelLoginClick = this.handelLoginClick.bind(this);
    this.handelLogoutClick = this.handelLogoutClick.bind(this);
    this.state = { isLoggedIn: true };
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
      button = <LogoutButton onClick={this.handelLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handelLoginClick} />;
    }
    return (
      <div className="App">
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

export default LoginControl;
