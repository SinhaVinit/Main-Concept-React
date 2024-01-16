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
  const listItems = posts.map((post) => (
    <ListItem key={post.id} value={post} />
  ));
  return <div>{listItems}</div>;
}

export default App;
