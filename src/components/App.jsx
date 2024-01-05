import "./App.css";

function App(props) {
  return (
    <div className="App">
      <h1>It is {props.date.toLocaleTimeString()}.</h1>
    </div>
  );
}

export default App;
