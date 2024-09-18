import React from 'react';

function TodoItem({ todo, onRemove }) {
  return (
    <li>
      {todo.text}
      <button onClick={() => onRemove(todo.id)}>Удалить</button>
    </li>
  );
}

export default TodoItem;