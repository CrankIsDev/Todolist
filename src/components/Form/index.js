// Imports npm
import React from 'react';
import PropTypes from 'prop-types';

// Imports locaux
import './form.scss';

const Form = ({ handleSubmit, label, handleChange }) => {
  const getValueAndSubmit = (event) => {
    event.preventDefault();
    handleSubmit();
  };

  const getNewValue = (event) => {
    handleChange(event.target.value);
  };

  return (
    <form className="form-add-task" onSubmit={getValueAndSubmit}>
      <input
        type="text"
        placeholder="Ajouter une tâche"
        className="form-input"
        value={label}
        onChange={getNewValue}
      />
    </form>
  );
  }

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Form;