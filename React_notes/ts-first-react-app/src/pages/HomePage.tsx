import React, { useState, useEffect } from 'react';
import Greeting from '../components/Greeting';  
import Counter from '../components/Counter'; 
import TextInput from '../components/TextInput'; 

const HomePage: React.FC = () => {
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
        console.log('HomePage mounted for the first time. It will be executed only once.');
        const timerId = setInterval(() => {
        console.log('Interval timer running...');
    }, 5000);

    return () => {
        console.log('HomeePage unmounted. Clear timer.')
        clearInterval(timerId);
        };
    }, []);


    return (
        <div style={{ padding: '20px', border: '1px solid #007bff', borderRadius: '8px' }}>
            <h2>Home Page</h2>
            <p>This is the home page of our React application.</p>
            <p>Welcome! Enjoy exploring.</p>

            <hr />

            <h3>Examples of Components and Props:</h3>
            <Greeting name="Alice" /> 
            <Greeting name="Bob" message="Nice to meet you!" />

            <hr />

            <h3>Counter component</h3>
            <Counter />
            <Counter initialValue={100} />

            <hr />

            <h3>TextInput Component</h3>
            <TextInput />

            <hr />

            <h3>Event handling practice:</h3>
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
};

export default HomePage;