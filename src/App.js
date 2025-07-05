import logo from "./logo.svg";
import "./App.css";

function App() {
  const callMe = () => {
    return "Hello Tech Non";
  };

  // Hello Rocky
  // Hello everybudy


  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <button>Home</button>
      <button>About</button>
      <button>Settings</button>
    </div>
  );
}

export default App;
