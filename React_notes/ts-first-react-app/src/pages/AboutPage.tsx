import React from 'react';
import { useUser } from '../contexts/UserContext';

const AboutPage: React.FC = () => {
    const user = useUser();

    return (
    <div style={{ padding: '20px', border: '1px solid #28a745', borderRadius: '8px' }}>
      <h2>About Page</h2>
      <p>Learn more about our application.</p>
      <p>This app is being built by {user.name} (Role: {user.role}).</p>
    </div>
  );
};

export default AboutPage;