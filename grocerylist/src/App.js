import logo from "./logo.svg";
import "./App.css";

function handleNameChange() {
  const names = ["Earn", "Grow", "Give"];
  const int = Math.floor(Math.random() * 3);
  return names[int];
}
function App() {
  // const name = "Surya";
  return (
    <div>
      Learning React
      <p>Lets {handleNameChange()} Money</p>
    </div>
  );
}

export default App;
