import React, { useState, useEffect } from 'react';

const TextInput: React.FC = () => {
    const [inputText, setInputText] = useState<string>('');

    useEffect(() => {
        console.log('TextInput component: The input text has been changed:', inputText);
    }, [inputText]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value);
    }

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert(`From TextInput component: Form has been submitted. Input value: ${inputText}`);
        setInputText('');
    }

    return (
        <div style={{ padding: '15px', border: '1px solid #28a745', borderRadius: '8px' }}>
            <h3>text entry form</h3>
            <p>Entered text: <strong>{inputText}</strong></p>
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
    );
};

export default TextInput;