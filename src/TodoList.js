import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    console.log('Список задач обновлен:', todos);
  }, [todos]);

  const addTodo = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    setTodos([...todos, { id: Date.now(), text: inputValue }]);
    setInputValue('');
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Добавить новую задачу"
        />
        <button type="submit">Добавить</button>
      </form>
      <ul>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} onRemove={removeTodo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;