// src/pages/AnimalDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const AnimalDetails = ({ animals }) => {
  const { id } = useParams();
  const animal = animals.find((animal) => animal.id === Number(id));

  if (!animal) return <p>Animal not found</p>;

  return (
    <div className="animal-details">
      <h2>{animal.name}</h2>
      <p>Breed: {animal.breed}</p>
      <p>Age: {animal.age}</p>
      <p>Price: ${animal.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default AnimalDetails;
