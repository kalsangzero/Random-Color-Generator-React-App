import './App.css';
import { useState } from 'react';

const randomColor = require('randomcolor'); // import the script
export default function App() {
  const [customColor, setColor] = useState();
  // const [colorChoice, setColorChoice] = useState('');
  return (
    <div className="App">
      <h1>Random Color Generator</h1>
      <div
        style={{
          backgroundColor: customColor,
          border: '15px',
          padding: '50px',
          margin: '20px',
        }}
      >
        {customColor}
        <br />

        <button
          onClick={() => {
            /* trying out hue luminosity
            <input
          value={colorChoice}
          placeholder="Enter Hue and Luminosity"
          onChange={(event) => {
            const userInput = event.currentTarget.value;
            setColorChoice(userInput);
          }}
        />
            if (randomColor(colorChoice)) {
              const userColor = randomColor({
                hue: colorChoice,
                luminosity: colorChoice,
              });

              setColor(userColor);
            }
            setColor(randomColor.randomColor());
          }}*/
            setColor(randomColor.randomColor());
          }}
        >
          Random
        </button>
      </div>
    </div>
  );
}
