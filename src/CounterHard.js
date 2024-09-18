import React, { useState, useEffect } from 'react';

function CounterHard() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    console.log('Компонент обновился');
  });

  useEffect(() => {
    console.log('Компонент смонтирован');
  
    return () => {
      console.log('Компонент выключен');
    }
  }, []);

  useEffect(() => {
    document.title = `Вы кликнули ${count} раз`;
    console.log(`Вы кликнули ${count} раз`);
  }, [count, name]);


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

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Введите имя"
      />
    </div>
  );
}

export default CounterHard;