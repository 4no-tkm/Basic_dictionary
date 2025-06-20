import React, { useState, useEffect  } from 'react';
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
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleButtonClick = (message: string) => {
    alert(`Clicked the button: ${message}`);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`This form was send. Input: ${inputText}`);
  };

  const handleMouseEnter = () => {
    setIsMouseOver(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };

  useEffect(() =>  {
    console.log('App component has been rendered or updated.');
  })

  useEffect(() => {
    console.log('App component mounted for the first time. It will be executed only once.');
    const timerId = setInterval(() => {
      console.log('Interval timer running...');
    }, 3000);

    return () => {
      console.log('App component unmounted. Clear timer.')
      clearInterval(timerId);
      };
  }, []);

  useEffect(() => {
    console.log('Current count changed:', count);
    if (count % 5 === 0 && count !== 0) {
      alert(`The count is now ${count}!`)
    }
  }, [count]);

  useEffect(() => {
    console.log('Input text has changed:', inputText);
  }, [inputText]);


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

      <h2>Example of State and Hooks (`useState`): Text input</h2>
      <div style={{ padding: '15px', border: '1px solid #28a745', borderRadius: '8px', marginBottom: '20px' }}>
        <p>Entered text: <strong>{inputText}</strong></p>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Please enter something..."
          style={{ width: '80%', padding: '8px', fontSize: '16px' }}
        />
      </div>

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

      <h2>Example of form submission:.</h2>
      <div style={{ padding: '15px', border: '1px solid #6f42c1', borderRadius: '8px' }}>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            placeholder="Fill out the form..."
            style={{ width: '80%', padding: '8px', fontSize: '16px', marginBottom: '10px' }}
          />
          <button type="submit">Submit</button>
        </form>
      </div>

      <p>JSX practice.</p>
    </div>
  );
}

export default App;
