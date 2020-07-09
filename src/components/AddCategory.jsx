import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories, placeholderText }) => {
  // Hooks
  const [inputValue, setInputValue] = useState('');

  // validations
  const handleInputChange = (e) => setInputValue(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories((categories) => [inputValue, ...categories]);
      setInputValue('');
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
  placeholderText: 'Search yours GIFs...',
};

export default AddCategory;
