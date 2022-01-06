import React from 'react';
import './Counter.css';

const Controls = ({ increment, decrement }) => {
  return (
    <div className="Counter__controls">
      <button type="button" onClick={increment}>
        Увеличить на 1
      </button>
      <button type="button" onClick={decrement}>
        Уменьшить на 1
      </button>
    </div>
  );
};

export default Controls;
