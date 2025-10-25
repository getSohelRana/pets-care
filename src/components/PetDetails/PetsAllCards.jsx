import React from "react";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";

const PetsAllCards = ({ pet }) => {
//   console.log(pet);

  const { serviceName, price, rating, image, category, description, serviceId } =
    pet || {};
  return (
    <div className="card bg-white shadow-sm">
      <title>All Pets</title>
      <figure>
        <img
          className="w-full h-50 object-cover"
          src={image}
          alt={serviceName}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
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
          </div>
          
        </div>
         <Link to={`/petsDetails/${serviceId}`} className="btn mt-2">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PetsAllCards;
