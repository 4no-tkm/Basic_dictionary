// Greeting.tsx
import React from 'react';

// Propsの型定義 (TypeScriptの重要な部分)
interface GreetingProps {
  name: string;
  message?: string; // オプショナルなプロパティ
}

const Greeting: React.FC<GreetingProps> = ({ name, message }) => {
  return (
    <div>
      <h2>Hello, {name}!</h2>
      {message && <p>{message}</p>} {/* messageが存在すれば表示 */}
    </div>
  );
};

export default Greeting;