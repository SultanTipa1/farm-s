// src/pages/AnimalListing.js
import React, { useState } from 'react';
import FilterSidebar from '../components/FilterSidebar';

const AnimalListing = ({ animals }) => {
  const [filters, setFilters] = useState({});

  const filteredAnimals = animals.filter((animal) => {
    return (
      (!filters.breed || animal.breed.includes(filters.breed)) &&
      (!filters.age || animal.age <= filters.age)
    );
  });

  return (
    <div className="animal-listing">
      <FilterSidebar filters={filters} setFilters={setFilters} />
      <div className="animal-list">
        {filteredAnimals.map((animal) => (
          <div key={animal.id}>
            <h3>{animal.name}</h3>
            <p>{animal.breed}</p>
            <button>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimalListing;
