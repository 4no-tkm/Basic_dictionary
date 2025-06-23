import React from 'react';
import type { Todo } from '../types/todo';

interface TodoItemProps {
    todo: Todo;
    onToggleComplete: (id: string) => void;
    onDelete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggleComplete, onDelete }) => {
    return (
        <li
            style={{
                padding: '10px',
                borderBottom: '1px solid #eee',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                textDecoration: todo.completed ? 'line-through' : 'none',
                color: todo.completed ? '#aaa' : '#333',
                backgroundColor: todo.completed ? '#e0ffe0' : '#fff',
                marginBottom: '5px',
                borderRadius: '4px'
            }}
        >
            <span
                onClick={() => onToggleComplete(todo.id)}
                style={{ cursor: 'pointer', flexGrow: 1 }} 
            >
                {todo.text}
            </span>

            <button
                onClick={() => onDelete(todo.id)}
                style={{
                marginLeft: '15px',
                padding: '5px 10px',
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
                }}
            >
                Delete
            </button>
        </li>
    );
};

export default TodoItem;