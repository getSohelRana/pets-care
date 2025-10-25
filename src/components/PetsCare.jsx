import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const PetsCare = () => {
    // aos init
    useEffect(() => {
      Aos.init({
        duration: 800, 
        easing: "ease-in-out",
        delay: 0, 
        once: true, 
        mirror: false, 
        offset: 100, 
      });
    }, []);
  return (
    <div className="mt-10 px-2">
			<h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary" data-aos="fade-up">Winter Care Tips for Pets</h1>
      <div className="join join-vertical bg-white w-full">
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title font-semibold">
            01. Keep Your Pets Inside:
          </div>
          <div className="collapse-content text-sm ">
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-10 px-5">
              {/* Image */}
              <img
                className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border-4 border-blue-200 shadow-md"
                src="https://i.ibb.co.com/KZgHdwG/Keep-Your-Pets-Inside.jpg"
                alt="Winter Pet"
              />

              {/* Text */}
              <p className="text-gray-700 text-center md:text-left md:w-3/5 leading-relaxed">
                During the winter, it’s best to keep your pets inside,
                especially if it’s very cold or windy outside. If you must take
                your pet outside, make sure they are adequately covered by a
                coat or sweater, and keep them outside for a short period of
                time to avoid hypothermia or frostbite.
              </p>
            </div>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title font-semibold">
            02. Keep Your Home Warm:
          </div>
          <div className="collapse-content text-sm">
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-10 px-5">
              {/* Image */}
              <img
                className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border-4 border-blue-200 shadow-md"
                src="https://i.ibb.co.com/N6tbWgts/Keep-Your-Home-Warm.jpg"
                alt="Winter Pet"
              />
              {/* Text */}
              <p className="text-gray-700 text-center md:text-left md:w-3/5 leading-relaxed">
                If you have outdoor pets, it’s best to move them indoors during
                the cold months. Especially if your pets are older or have
                health difficulties, make sure your home is warm enough for
                them. To keep your pet warm, consider using a space heater or
                covering their bed with an additional blanket.
              </p>
            </div>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title font-semibold">
            03. Keep your pets safe from the weather:
          </div>
          <div className="collapse-content text-sm">
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-10 px-5">
              {/* Image */}
              <img
                className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border-4 border-blue-200 shadow-md"
                src="https://i.ibb.co.com/KczFhBRx/Keep-your-pets-safe-from-the-weather.jpg"
                alt="Winter Pet"
              />
              {/* Text */}
              <p className="text-gray-700 text-center md:text-left md:w-3/5 leading-relaxed">
                If you have to take your pet outside, make sure the cold wind
                can’t get to them. Think about giving them booties to protect
                their paws from the ice and salt, and clean off their paws and
                legs when you get back inside to get rid of any possible dirt
                buildup.
              </p>
            </div>
          </div>
        </div>

        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title font-semibold">
            04. Make Sure Your Pets Get Enough Water:
          </div>
          <div className="collapse-content text-sm">
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-10 px-5">
              <img
                className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border-4 border-blue-200 shadow-md"
                src="https://i.ibb.co.com/h1Z7YzSH/Make-Sure-Your-Pets-Get-Enough-Water.jpg"
                alt="Winter Pet"
              />
              {/* Text */}
              <p className="text-gray-700 text-center md:text-left md:w-3/5 leading-relaxed">
                During the winter, when pets may be less active, it’s crucial to
                make sure your pets are getting enough water. To encourage your
                pets to drink more, think about utilising a pet water fountain.
                Additionally, make sure their water bowl is always filled and
                not too cold.
              </p>
            </div>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title font-semibold">
            05. Keep an eye out for signs of illness:
          </div>
          <div className="collapse-content text-sm">
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-10 px-5">
              <img
                className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border-4 border-blue-200 shadow-md"
                src="https://i.ibb.co.com/DHLVzW4y/Keep-an-eye-out-for-signs-of-illness.jpg"
                alt="Winter Pet"
              />
              {/* Text */}
              <p className="text-gray-700 text-center md:text-left md:w-3/5 leading-relaxed">
                Cold weather can make some health problems, like arthritis and
                breathing problems, worse. If you observe any changes in your
                pets’ behaviour or health, keep an eye out for symptoms of
                illness and visit a veterinarian.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetsCare;
