import React from "react";
import Carousel from "../components/Carousel";
import PetCards from "../components/petCards/PetCards";
import { Link, useLoaderData } from "react-router";

const Home = () => {
  const petsData = useLoaderData();
  // console.log(petsData)

  const pets = petsData.slice(0, 6);
  return (
    <div>
      <Carousel></Carousel>
      <div className="grid grid-cols-3 gap-4 mt-10 px-2">
        {pets.map((pet) => (
          <PetCards key={pet.serviceId} pet={pet} />
        ))}
      </div>
      <div className="container mx-auto flex justify-center items-center mt-10">
        <Link to="/allpets">
          {" "}
          <a className="btn  bg-primary text-white">
            Show All Pets{" "}
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
