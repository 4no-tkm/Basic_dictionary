import React, { useState } from 'react';
import './App.css';
import Greeting from './components/Greeting'; 

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

  const [count, setCount] = useState<number>(0);
  const [inputText, setInputText] = useState<String>('');

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  }

  return (
    <div className="App">
      <h1>{greetingMessage} Wellcome to React!</h1>
      <p>Date: {new Date().toLocaleTimeString()}</p>
      <p>This is simple application written in React and TypeScript.</p>
      
      <hr />

      <h2>Examples of Components and Props:</h2>
      <Greeting name="Alice" /> 
      <Greeting name="Bob" message="Nice to meet you!" />
      <Greeting name="Charlie" message="Hope you have a great day!" />
      <Greeting name="David" />

      <hr />

      <h2>Example of State and Hooks (`useState`): Counter</h2>
      <div style={{ padding: '15px', border: '1px solid #007bff', borderRadius: '8px', marginBottom: '20px' }}>
        <p>Count: <strong>{count}</strong></p>
        <button onClick={handleIncrement} style={{ margin: '5px' }}>Increment</button>
        <button onClick={handleDecrement} style={{ margin: '5px' }}>Decrement</button>
        <button onClick={() => setCount(0)} style={{ margin: '5px' }}>Reset</button>
      </div>

      <hr />

      <p>JSX practice.</p>
    </div>
  );
}

export default App;
