import React, { use } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
const vetsPromise = fetch("../vetExparts.json").then((res) => res.json());

const MeetsExpert = () => {
  const vets = use(vetsPromise);
  console.log(vets);
  return (
  
      <div className="py-12 px-5 md:px-2 ">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary">
          Meet Our Veterinary Experts
        </h2>

        {vets.length === 0 ? (
          <p className="text-center text-gray-500">Loading expert data...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
            {vets.map((vet) => (
              <div
                key={vet.id}
                className="card bg-white shadow-md hover:shadow-xl transition rounded-2xl overflow-hidden"
              >
                {/* Vet Image */}
                <figure className="p-6">
                  <img
                    className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-primary shadow-md"
                    src={vet.photo}
                    alt={vet.name}
                  />
                </figure>

                {/* Vet Details */}
                <div className="card-body text-center">
                  <h2 className="text-xl font-semibold text-primary">
                    {vet.name}
                  </h2>
                  <p className="text-sm text-gray-500">{vet.title}</p>
                  <p className="text-pink-400 text-sm italic mb-3">
                    {vet.experience}
                  </p>
                  <p className="text-gray-700 text-sm mb-4 text-justify">{vet.about}</p>

                  {/* Social Links */}
                  <div className="flex justify-center gap-5 mt-3">
                    <a
                      href={vet.socials.facebook}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaFacebook
                        className="text-blue-600 hover:scale-110 transition"
                        size={20}
                      />
                    </a>
                    <a
                      href={vet.socials.instagram}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaInstagram
                        className="text-pink-500 hover:scale-110 transition"
                        size={20}
                      />
                    </a>
                    <a
                      href={vet.socials.linkedin}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedin
                        className="text-blue-800 hover:scale-110 transition"
                        size={20}
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
   
  );
};

export default MeetsExpert;
