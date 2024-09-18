import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Счетчик: {count}</h2>
      <button onClick={incrementCount}>Увеличить</button>
      <button onClick={decrementCount}>Уменьшить</button>
      <p>Вы нажали на кнопки {count} раз</p>
      {count > 10 && <p>Ого, вы очень активны!</p>}
    </div>
  );
}

export default Counter;
