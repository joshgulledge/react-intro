import logo from './logo.svg';
import './App.css';
import HelloCullen from './HelloCullen';

import { useState } from 'react';

// App is a component
function App() {
  const [name, setName] = useState('Josh');
  // let myName = 'josh';

  let myH1 = <h1>Go home, {name}, you're Drunk</h1>;

  // does not render this way
  // let drinkCount = 1;

  const soberUp = function () {
    setDrinkCount(0);
  };

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

      <input
        placeholder="Enter your name"
        onChange={(e) => {
          console.log(e.target.value);
          setName(e.target.value);
        }}
      ></input>
    </div>
  );
}

export default App;
