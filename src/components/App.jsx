import Dialog from "./Dialog";

function App() {
  const messages = [
    { title: "Welcome", message: "Thank you for visiting our spacecraft!" },
    { title: "नमस्ते", message: "हमारे अंतरिक्ष यान पर आने के लिए धन्यवाद" },
    {
      title: "いらっしゃいませ",
      message: "私たちの宇宙船をご覧いただきありがとうございます",
    },
  ];

  return (
    <div>
      {messages.map((message) => (
        <div>
          <Dialog title={message.title} message={message.message} />
          <br />
        </div>
      ))}
    </div>
  );
}
export default App;
