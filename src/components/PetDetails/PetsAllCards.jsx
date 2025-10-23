import React from "react";
import { FaRegStar } from "react-icons/fa";

const PetsAllCards = ({ pet }) => {
//   console.log(pet);

  const { serviceName, price, rating, image, category, description } =
    pet || {};
  return (
    <div className="card bg-white shadow-sm">
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
      </div>
    </div>
  );
};

export default PetsAllCards;
