import "./App.css";

const user = {
  firstName: "Vinit",
  lastName: "Sinha",
};

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

function App() {
  return (
    <div className="App">
      <h1>Hello, {formatName(user)}!</h1>
    </div>
  );
}

export default App;
