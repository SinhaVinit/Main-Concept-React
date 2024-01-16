import "./App.css";

function ListItem(props) {
  return (
    <div className="App">
      <h1>{props.value.title}</h1>
      <p>{props.value.content}</p>
    </div>
  );
}

function App(props) {
  const posts = props.posts;
  return (
    <div>
      {posts.map((post) => (
        <ListItem key={post.id} value={post} />
      ))}
    </div>
  );
}

export default App;
