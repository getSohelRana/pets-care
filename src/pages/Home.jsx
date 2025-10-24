import React from "react";
import Carousel from "../components/Carousel";
import PetCards from "../components/petCards/PetCards";
import { Link, useLoaderData } from "react-router";

const Home = () => {
  const petsData = useLoaderData();
  // console.log(petsData)

  const pets = petsData.slice(7, 13);
  return (
    <div>
      <Carousel></Carousel>
      <div className="grid grid-cols-3 gap-4 mt-10 px-2">
        {pets.map((pet) => (
          <PetCards key={pet.serviceId} pet={pet} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-10 animate__animated animate__pulse animate__delay-2s animate__infinite	infinite">
        <Link to="/pets_all_details">
          {" "}
          <span className="btn  bg-primary text-white ">
            Show All Pets{" "}
          </span>
        </Link>
        
      </div>
    </div>
  );
};

export default Home;
