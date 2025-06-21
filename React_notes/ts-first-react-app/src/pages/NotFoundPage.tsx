import React from 'react';

const NotFoundPage: React.FC = () => {
  return (
    <div style={{ padding: '20px', border: '1px solid #dc3545', borderRadius: '8px', color: '#dc3545' }}>
      <h2>404 Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFoundPage;