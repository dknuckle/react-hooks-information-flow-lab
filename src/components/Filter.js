import React from 'react';

const Filter = ({ onCategoryChange }) => {
  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    onCategoryChange(selectedCategory); // Invoking the callback function from the prop
  };

  return (
    <select onChange={handleCategoryChange}>
      {/* Your select options go here */}
    </select>
  );
};

export default Filter;
