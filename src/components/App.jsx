import SplitPane from "./SplitPane";

function Contacts() {
  return <div className="Contacts" />;
}

function Chat() {
  return <div className="Chat" />;
}

function App() {
  return <SplitPane left={<Contacts />} right={<Chat />} />;
}

export default App;
