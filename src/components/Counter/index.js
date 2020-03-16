// Imports npm
import React from 'react';
import PropTypes from 'prop-types';

// Imports locaux
import './counter.scss';

const Counter = ({ nbTasks }) => {
  let message = '';

  switch (nbTasks) {
    case 0:
      message = 'Aucune tâche en cours';
      break;
    case 1:
      message = '1 tâche en cours';
      break;
    default:
      message = `${nbTasks} tâches en cours`;
      break;
  }
  return (
    <p className="counter">{message}</p>
  );
};

Counter.propTypes = {
  nbTasks: PropTypes.number.isRequired,
};

export default Counter;