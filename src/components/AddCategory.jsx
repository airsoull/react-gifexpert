import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories, placeholderText }) => {
  // Hooks
  const [inputValue, setinputValue] = useState('');

  // validations
  const handleInputChange = (e) => setinputValue(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories((categories) => [inputValue, ...categories]);
      setinputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholderText}
      />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
  placeholderText: PropTypes.string,
};

AddCategory.defaultProps = {
  placeholderText: 'Busca tus gifs',
};

export default AddCategory;
