import logo from './logo.svg';
import './App.css';
import HelloCullen from './HelloCullen';

import { useState } from 'react';

// App is a component
function App() {
  let myName = 'josh';

  let myH1 = <h1>Go home, {myName}, you're Drunk</h1>;

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
        {myName} has had {drinkCount} Drinks
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
    </div>
  );
}

export default App;
