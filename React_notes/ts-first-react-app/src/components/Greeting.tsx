import React from 'react';

interface GreetingProps {
  name: string;
  message: string;
}

const Greeting: React.FC<GreetingProps> = ({ name, message = "How can I help you today?"}) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '5px' }}>
      <h2>Hello, {name}!</h2>
      <p>{message}</p>
      <p>This is a reusable Greeting component.</p>
    </div>
  );
};

export default Greeting;