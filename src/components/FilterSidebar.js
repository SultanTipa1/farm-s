// src/components/FilterSidebar.js
import React from 'react';

const FilterSidebar = ({ filters, setFilters }) => {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <div className="filter-sidebar">
      <h3>Filter Animals</h3>
      <div>
        <label>Breed:</label>
        <input name="breed" onChange={handleFilterChange} value={filters.breed || ''} />
      </div>
      <div>
        <label>Age:</label>
        <input name="age" type="number" onChange={handleFilterChange} value={filters.age || ''} />
      </div>
    </div>
  );
};

export default FilterSidebar;
