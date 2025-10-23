import React, { useEffect, useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { RiMailSendLine } from "react-icons/ri";
import { useParams } from "react-router";

const PetDetails = () => {
  const { serviceId } = useParams();
  const [petsDetails, setPetsDetails] = useState([]);

  useEffect(() => {
    fetch("/pets.json")
      .then((res) => res.json())
      .then(setPetsDetails)
      .catch((err) => console.error("Error loading pet data:", err));
  }, []);

  const singlePet = petsDetails.find(
    (pet) => String(pet.serviceId) === serviceId
  );

  if (!singlePet) {
    return (
      <p className="text-center mt-10 text-lg text-gray-500">
        <span className="w-30 h-30 loading loading-ring loading-xl text-success"></span>
      </p>
    );
  }
  const {
    serviceName,
    price,
    rating,
    image,
    category,
    description,
    providerName,
    providerEmail,
    slotsAvailable,
  } = singlePet || {};
  return (
    <div className="card bg-white shadow-sm">
      <figure>
        <img
          className="w-full h-100 object-cover"
          src={image}
          alt={serviceName}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">
          {serviceName}
          <div className="badge badge-primary text-pink-500">{category}</div>
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-between items-center">
          <div className="badge  text-xl p-4">Price: {price} TK</div>

          <div className="badge  text-xl p-4">
            {" "}
            <span className="text-pink-500">
              <FaRegStar />
            </span>{" "}
            {rating}
						<div className=" text-xl p-4">Available: {slotsAvailable} </div>
          </div>
					
        </div>
        <div className="card-actions justify-between items-center">
          <div className="badge  text-xl p-4">{providerName}</div>
          <div className="badge  text-xl p-4">
            {" "}
            <span className="text-pink-500">
              <RiMailSendLine />
            </span>{" "}
            {providerEmail}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetDetails;
