import "./App.css";
import Comment from "./comment";
import comment from "./data";

function App() {
  return (
    <div className="App">
      <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
      />
    </div>
  );
}

export default App;
