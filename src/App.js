import logo from './logo.svg';
import './App.css';
import HelloCullen from './HelloCullen';

// App is a component
function App() {
  let myName = 'josh';

  let myH1 = <h1>Go home, {myName}, you're Drunk</h1>;
  // 'HTML' is acutally 'JSX'
  // "Javascript eXtended"
  // App.jsk
  return (
    <div className="App">
      {myH1}
      <header className="App-header">
        {/*HelloCullen is a react component */}
        <HelloCullen />
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
      </header>
    </div>
  );
}

export default App;
