import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const AnimalCard = ({ animal }) => {
    const dispatch = useDispatch();

    return (
        <div className="animal-card">
            <img src={animal.image} alt={animal.name} />
            <h3>{animal.name}</h3>
            <p>Breed: {animal.breed}</p>
            <p>Price: ${animal.price}</p>
            <button onClick={() => dispatch(addToCart(animal))}>Add to Cart</button>
        </div>
    );
};

export default AnimalCard;
