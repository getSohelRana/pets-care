import React from 'react';
import { useLoaderData } from 'react-router';
import PetsAllCards from './PetsAllCards';
const PetsAll = () => {
    const allPets = useLoaderData();
    return (
        <div className="grid grid-cols-3 gap-4 mt-10 px-2">
        {allPets.map((pet) => (
          <PetsAllCards key={pet.serviceId} pet={pet}></PetsAllCards>
        ))}
      </div>
    );
};

export default PetsAll;