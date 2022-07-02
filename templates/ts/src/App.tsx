import "./App.css";
import { useUser } from "./hooks/useUser";

function App() {
  const user = useUser();
  console.log(user);

  return (
    <div className="App">
      <header className="App-header">
        <p>Freact App</p>
        <p>
          <a
            className="App-link"
            href="https://beta.reactjs.org/learn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://firebase.google.com/docs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Firebase Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
