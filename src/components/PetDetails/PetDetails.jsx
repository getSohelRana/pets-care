import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaRegStar } from "react-icons/fa";
import { PiUserCircleGearBold } from "react-icons/pi";
import { RiMailSendLine } from "react-icons/ri";
import { Link, useParams } from "react-router";

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
  // handle book now
  const handleBook = (e) => {
    e.preventDefault();
    toast.success("Successfully Booked Confirm!");
    e.target.reset();
  };
  return (
    <div className="card bg-white shadow-sm md:w-4/6 mx-auto ">
      <title>Pets details</title>
      <figure className="p-5 ">
        <img
          className="w-full md:h-100 object-cover rounded-xl"
          src={image}
          alt={serviceName}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title  md:text-2xl">
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
            <div className=" text-xl p-4">Stock: {slotsAvailable} </div>
          </div>
        </div>
        <div className="card-actions justify-between items-center">
          <div className="badge  text-xl p-4">
            {" "}
          <PiUserCircleGearBold size={25} className="text-pink-500" />{" "}
          {providerName}
          </div>
          <div className="badge  text-xl p-4">
            {" "}
            <span className="text-pink-500">
              <RiMailSendLine />
            </span>{" "}
            {providerEmail}
          </div>
        </div>
      </div>
      {/* book now area */}
      <div className=" my-10">
        <form className="flex flex-col gap-4 justify-center items-center"  onSubmit={handleBook}>
          <input
            className="input w-4/6 text-[17px] focus:outline-primary focus:border-0"
            type="email"
            placeholder="mail@site.com"
            required
          />
          <button className="btn btn-primary text-black w-2/6 md:w-[220px] sm:text-[17px]">Book Now</button>
        </form>
      </div>
      <Toaster
        position="left-bottom"
        toastOptions={{
          // Define default options
          className: "",
          duration: 3000,
          removeDelay: 100,
          style: {
            background: "#ff9e9e",
            color: "#000",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            iconTheme: {
              primary: "green",
              secondary: "#fff",
            },
            style: {
              background: "#7cf2c3",
              color: "#000",
            },
          },
        }}
      />
    </div>
  );
};

export default PetDetails;
