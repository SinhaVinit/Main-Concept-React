import "./App.css";
import Welcome from "./welcome";

function App() {
  const element = <Welcome name="Vishal Sinha" />; // React Element
  return (
    <div className="App">
      <Welcome name="Vinit Sinha" />
      {element}
    </div>
  );
}

export default App;
