import "./App.css";

function App() {
  // const date = new Date();
  return (
    <div className="App">
      <h1>{new Date().toLocaleTimeString()}</h1>
    </div>
  );
}

export default App;
