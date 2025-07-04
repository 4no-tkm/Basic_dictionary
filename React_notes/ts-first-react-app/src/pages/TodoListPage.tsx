import React, { useState, useEffect } from 'react';
import TodoItem from '../components/TodoItem';
import type { Todo } from '../types/todo';

const TodoListPage: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>(() => {
      const savedTodos = localStorage.getItem('todos');
      return savedTodos ? JSON.parse(savedTodos) : [];
    });
    const [newTodoText, setNewTodoText] = useState<string>('');

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
      console.log('Todos saved to localStorage:', todos);
    }, [todos]);

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

    const handleToggleComplete = (id: string) => {
      setTodos((prevTodos) => 
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed} : todo
        )
      );
    };

    const handleDeleteTodo = (id: string) => {
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    const totalTodos = todos.length;
    const completedTodos = todos.filter(todo => todo.completed).length;
    const remainingTodos = totalTodos - completedTodos;

    const sortedTodos = [...todos].sort((a, b) => {
      if (a.completed && !b.completed) return 1;
      if (!a.completed && b.completed) return -1;
      return a.id.localeCompare(b.id);
    });

    return (
        <div style={{ padding: '20px', border: '1px solid #ff5722', borderRadius: '8px' }}>
      <h2>My ToDo List</h2>

      <div style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#f0f0f0', borderRadius: '5px', display: 'flex', justifyContent: 'space-around' }}>
        <p style={{ margin: 0 }}>Total: <strong>{totalTodos}</strong></p>
        <p style={{ margin: 0 }}>Completed: <strong style={{ color: '#28a745' }}>{completedTodos}</strong></p>
        <p style={{ margin: 0 }}>Remaining: <strong style={{ color: '#dc3545' }}>{remainingTodos}</strong></p>
      </div>

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
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggleComplete={handleToggleComplete} // 親から子へ関数をPropsとして渡す
              onDelete={handleDeleteTodo}             // 親から子へ関数をPropsとして渡す
            />
          ))
        )}
      </ul>
    </div>
    );
};

export default TodoListPage;
