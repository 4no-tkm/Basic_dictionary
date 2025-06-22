import React, { useState } from 'react';

export interface Todo {
    id: string;
    text: string;
    completed: boolean;
}

const TodoListPage: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodoText, setNewTodoText] = useState<string>('');

    const handleAddTodo = (e: React.FormEvent) => {
        e.preventDefault();
        if (newTodoText.trim() === '') {
            alert('Enter your ToDo!');
            return;
        }
        const newTodo: Todo = {
            id:  Date.now().toString(),
            text: newTodoText,
            completed: false,
        };
        setTodos((prevTodos) => [...prevTodos, newTodo]);
        setNewTodoText('');
    };

    return (
        <div style={{ padding: '20px', border: '1px solid #ff5722', borderRadius: '8px' }}>
      <h2>My ToDo List</h2>

      <form onSubmit={handleAddTodo} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="Enter new ToDo!"
          style={{ padding: '8px', marginRight: '10px', width: '70%' }}
        />
        <button type="submit" style={{ padding: '8px 15px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px' }}>
          Add ToDo
        </button>
      </form>

      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {todos.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#666' }}>No to-dos yet. Let's add it!</p>
        ) : (
          todos.map((todo) => (
            <li key={todo.id} style={{ 
              padding: '10px', 
              borderBottom: '1px solid #eee', 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              textDecoration: todo.completed ? 'line-through' : 'none',
              color: todo.completed ? '#aaa' : '#333'
            }}>
              <span>{todo.text}</span>
            </li>
          ))
        )}
      </ul>
    </div>
    );
};

export default TodoListPage;
