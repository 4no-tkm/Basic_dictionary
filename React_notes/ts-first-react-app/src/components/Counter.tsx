import React, { useState, useEffect } from 'react';

interface CounterProps {
    initialValue?: number;
}

const Counter: React.FC<CounterProps> = ({ initialValue = 0 }) => {
    const [count, setCount] = useState<number>(initialValue);

    useEffect(() => {
        console.log('Counter component: Current counts have changed:', count);
        if (count % 5 === 0 && count !== 0) {
            alert(`From counter component: The count is now ${count}!`);
        }
    }, [count]);

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };

    const handleDecrement = () => {
        setCount(prevCount => prevCount - 1);
    };

    return (
    <div style={{ padding: '15px', border: '1px solid #007bff', borderRadius: '8px', marginBottom: '20px' }}>
      <h3>Simple counter</h3>
      <p>Current count: <strong>{count}</strong></p>
      <button onClick={handleIncrement} style={{ margin: '5px' }}>Increment</button>
      <button onClick={handleDecrement} style={{ margin: '5px' }}>Decrement</button>
      <button onClick={() => setCount(initialValue)} style={{ margin: '5px' }}>Reset</button>
    </div>
  );
};

export default Counter;