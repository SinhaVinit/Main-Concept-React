import "./App.css";

// function App() {
//   const numbers = [1, 2, 3, 4, 5];
//   const doubled = numbers.map((number) => number * 2);
//   console.log(doubled);
// }

function App() {
  const numbers = [1, 2, 3, 4, 5];
  const doubled = numbers.map((number, index) => (
    // You’ll be given a warning that a key should be provided for list items.
    // Use "index", only if items have no stable IDs
    <li key={index}>
      Key = {index} Value = {number}
    </li>
  ));
  return <ul>{doubled}</ul>;
}

export default App;
