import React from 'react';
import { useUser } from '../contexts/UserContext';

interface GreetingProps {
  message?: string;
}

const Greeting: React.FC<GreetingProps> = ({ message = "How can I help you today?"}) => {
  const user = useUser();

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '5px' }}>
      <h2>Hello, {user.name}!</h2>
      <p>{message}</p>
      <p>This component now uses Context API instead of Props for name.</p>
      <p>Your role is: {user.role}</p>
    </div>
  );
};

export default Greeting;