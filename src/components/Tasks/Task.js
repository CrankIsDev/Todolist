// Imports npm
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FaTrash, FaRegStar, FaStar } from 'react-icons/fa';

import './task.scss';

const Task = ({
  id,
  done,
  label,
  fav,
  onChangeTaskDone,
  onChangeTaskFav,
  onDeleteTask,
}) => {
  const taskId = `task-${id}`;
  const className = classNames(
    'task',
    {
      'task--done': done,
      'task--fav': fav,
    },
  );

  const Favorite = fav ? FaStar : FaRegStar;

  return (
    <li className={className}>
      <label htmlFor={taskId}>
        <input
          type="checkbox"
          id={taskId}
          checked={done}
          onChange={() => onChangeTaskDone(id)}
        />
        {label}
      </label>
      <FaTrash
        className="task-trash"
        onClick={() => onDeleteTask(id)}
      />
      <Favorite
        className="task-fav"
        onClick={() => onChangeTaskFav(id)}
      />
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  fav: PropTypes.bool.isRequired,
  onChangeTaskDone: PropTypes.func.isRequired,
  onChangeTaskFav: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
};

export default Task;