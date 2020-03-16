// Imports npm
import React from 'react';
import PropTypes from 'prop-types';

// Imports locaux
import './tasks.scss';
import Task from './Task';

const Tasks = ({ tasks, actions }) => (
  <ul>
    {tasks.map((task) => {
      return (
        <Task
          key={task.id}
          {...actions}
          {...task}
        />
      );
    })

    }
  </ul>
);

Tasks.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Tasks;