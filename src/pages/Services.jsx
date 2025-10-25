import React from "react";
import { useLoaderData } from "react-router";
import PetsAllCards from "../components/PetDetails/PetsAllCards";

const Services = () => {
  const allPets = useLoaderData();
  // console.log(allPets);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 px-2">
      {allPets.map((pet) => (
        <PetsAllCards key={pet.serviceId} pet={pet}></PetsAllCards>
      ))}
    </div>
  );
};

export default Services;
