import "./App.css";
import React from "react";

function WarningBanner(props) {
  if (props.showWarning) {
    return <div className="warningClass">Warning!</div>;
  }
  return null;
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.handelToggleClick = this.handelToggleClick.bind(this);
    this.state = { showWarning: true };
  }

  handelToggleClick() {
    this.setState({ showWarning: !this.state.showWarning });
  }

  render() {
    return (
      <div className="App">
        <WarningBanner showWarning={this.state.showWarning} />
        <button onClick={this.handelToggleClick}>
          {this.state.showWarning ? "Hide" : "Show"}
        </button>
      </div>
    );
  }
}

export default Page;
