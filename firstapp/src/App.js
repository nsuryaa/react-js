import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = "Surya";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Surya</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{"FROZEN NOVA"}</p>
        <p>{[1, 2, 3]}</p>
        <p>{name}</p>
      </header>
    </div>
  );
}

export default App;
