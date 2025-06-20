import React, { useState, useEffect  } from 'react';
import './App.css';
import Greeting from './components/Greeting'; 
import Counter from './components/Counter';
import TextInput from './components/TextInput';

function App() {
  const currentHour = new Date().getHours();
  let greetingMessage = "";

  if (currentHour < 12) {
    greetingMessage = "Good Morning!";
  } else if (currentHour < 18) {
    greetingMessage = "Hello!";
  } else {
    greetingMessage = "Good Evening!"
  }

  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);

  const handleButtonClick = (message: string) => {
    alert(`Clicked the button: ${message}`);
  };

  const handleMouseEnter = () => {
    setIsMouseOver(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };

  useEffect(() => {
    console.log('App component mounted for the first time. It will be executed only once.');
    const timerId = setInterval(() => {
      console.log('Interval timer running...');
    }, 5000);

    return () => {
      console.log('App component unmounted. Clear timer.')
      clearInterval(timerId);
      };
  }, []);

  return (
    <div className="App">
      <h1>{greetingMessage} Wellcome to React!</h1>
      <p>Date: {new Date().toLocaleTimeString()}</p>
      <p>This is simple application written in React and TypeScript.</p>

      <hr />

      <h2>Examples of Components and Props:</h2>
      <Greeting name="Alice" /> 
      <Greeting name="Bob" message="Nice to meet you!" />

      <hr />

      <h2>Counter component</h2>
      <Counter />
      <Counter initialValue={100} />

      <hr />

      <h2>TextInput Component</h2>
      <TextInput />

      <hr />

      <h2>Event handling practice:</h2>
      <div style={{ padding: '15px', border: '1px solid #ffc107', borderRadius: '8px', marginBottom: '20px' }}>
        <button onClick={() => handleButtonClick("No argument")}>
          Show message (No argument)
        </button>
        <button onClick={() => handleButtonClick("with argument")}>
          Show message (With argument)
        </button>
      </div>

      <div
        style={{
          padding: '20px',
          border: '1px solid #17a2b8',
          borderRadius: '8px',
          backgroundColor: isMouseOver ? '#e0f7fa' : 'transparent',
          transition: 'background-color 0.3s'
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <p>Try hovering the mouse over here. </p>
        <p>{ isMouseOver ? "Mouse is on!" : "Mouse on!" } </p>
      </div>

      <hr />

      <p>JSX practice.</p>
    </div>
  );
}

export default App;
