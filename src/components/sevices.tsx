// ServicesSection.tsx
import React from "react";

const Services = () => {
  return (
    <div>
    <section className="bg-white pt-8 px-4 ">
          <div className="">
            <h3 className="text-2xl font-bold text-purple-700">What We Do</h3>
            <p className="text-black mt-2  sm:text-title-xl2">We provide the perfect solution to your foot health</p>
          </div>
          <div className="flex justify-center space-x-4 mt-35">
            {/* Icône 1 */}
            <div className="w-1/3 ">
             
              <h4 className="mt-2 text-lg font-bold text-center">Tracking Patient condition</h4>
              <p className="text-center text-black">We assist patients in remotly monitoring their diabetes.</p>
            </div>
            {/* Icône 2 */}
            <div className="w-1/3">
              
              <h4 className="mt-2 text-lg font-bold text-center">Early Detection</h4>
              <p className="text-center text-black">We help identify the best ways to improve your foot care.</p>
            </div>
            {/* Icône 3 */}
            <div className="w-1/3">
              
              <h4 className="mt-2 text-lg font-bold text-center">Titre 3</h4>
              <p className="text-center text-black">Petite description pour icône 3.</p>
            </div>
          </div>
        </section>
        </div>
  );
};

export default Services;
