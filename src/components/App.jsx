import "./App.css";
import React from "react";

function MailBox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div className="App">
      <h1>Hello Vinit!</h1>
      {unreadMessages.length > 0 && (
        <h2>You have {unreadMessages.length} unread messages.</h2>
      )}
    </div>
  );
}

export default MailBox;
