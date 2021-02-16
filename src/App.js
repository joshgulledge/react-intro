import logo from './logo.svg';
import './App.css';
import HelloCullen from './HelloCullen';

import { useState } from 'react';

// App is a component
function App() {
  const [name, setName] = useState('Josh');
  // let myName = 'josh';

  const [nameInput, setNameInput] = useState('')

  let myH1 = <h1>Go home, {name}, you're Drunk</h1>;

  // does not render this way
  // let drinkCount = 1;

  const soberUp = function () {
    setDrinkCount(0);
  };

  const onSubmit = (event) => {
    event.preventDefault()
    console.log('name', name);
    console.log('nameInput', nameInput);
    // grad the value from input field
    // and update the name
    setName(nameInput)

    // clear name input
    setNameInput('');
  }

  const [drinkCount, setDrinkCount] = useState(1);

  // 'HTML' is acutally 'JSX'
  // "Javascript eXtended"
  // App.jsk
  return (
    <div>
      <h1>Cullen Happy Hour!</h1>
      <p>
        {name} has had {drinkCount} Drinks
      </p>

      <button
        onClick={function () {
          console.log('you clicked me, jerk');
          setDrinkCount(drinkCount + 1);
        }}
      >
        Drink Up
      </button>

      <button onClick={soberUp}>Get Sober</button>

      <form onSubmit={onSubmit}>
      <input
        value={nameInput}
        placeholder="Enter your name"
        onChange={(e) => {
          console.log(e.target.value);
          setNameInput(e.target.value);
        }}></input>

        <input type="submit"></input>
      </form>
    </div>
  );
}

export default App;
