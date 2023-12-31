import "./App.css";
const users = [
  {
    id: 1,
    name: "Vinit",
  },
  {
    id: 2,
    name: "Vishal",
  },
  {
    id: 3,
    name: "Aakash",
  },
  {
    id: 4,
    name: "Guest",
  },
];

function formatUser(user) {
  return <h1>Hello {user.name}</h1>;
}

function App() {
  return <div className="App">{users.map(formatUser)}</div>;
}

export default App;
