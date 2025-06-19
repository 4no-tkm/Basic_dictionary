import React from 'react';
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

      <p>JSX practice.</p>
    </div>
  );
}

export default App;
