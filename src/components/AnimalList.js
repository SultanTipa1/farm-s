import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAnimals } from '../redux/animalSlice';
import AnimalCard from '../components/AnimalCard';

const AnimalListing = () => {
    const dispatch = useDispatch();
    const animals = useSelector(state => state.animals.list);

    useEffect(() => {
        dispatch(fetchAnimals());
    }, [dispatch]);

    return (
        <div>
            <h1>Browse Animals</h1>
            <div className="animal-list">
                {animals.map(animal => (
                    <AnimalCard key={animal.id} animal={animal} />
                ))}
            </div>
        </div>
    );
};

export default AnimalListing;
