
import React from "react";
import { TbHealthRecognition } from "react-icons/tb";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { MdManageAccounts } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi2";

import { SlCalender } from "react-icons/sl";
const AboutUs = () => {
  return (
    <div>
    <section className="bg-white pt-8 pb-8 px-8  ">
          <div className="">
            <h3 className="text-2xl font-bold  text-purple-700">What We Do</h3>
            <p className="text-black mt-2  sm:text-title-xl2">We provide the perfect solution to your foot health</p>
          </div>
          <div className="flex justify-center space-x-4 mt-20">
            {/* Icône 1 */}
            <div className="w-1/3 ">
            <TbPlayerTrackNextFilled className="h-15 mx-auto text-purple-700 mb-5 "  size={130}/>
              <h4 className="mt-2 text-lg text-black  font-bold text-center">Tracking Patient condition</h4>
              <p className="text-center text-lg text-black">We assist patients in remotly monitoring their diabetes.</p>
            </div>
            {/* Icône 2 */}
            <div className="w-1/3">
            <TbHealthRecognition className="h-15 mx-auto text-teal-400 mb-5"  size={130}/>
              <h4 className="mt-2 text-lg text-black font-bold text-center">Early Detection</h4>
              <p className="text-center text-lg text-black">We help identify the best ways to improve your foot care.</p>
            </div>
            {/* Icône 3 */}
            <div className="w-1/3">
            <MdManageAccounts className="h-15 mx-auto text-purple-700 mb-5"  size={130}/>
              <h4 className="mt-2 text-lg text-black font-bold text-center">Reduce the effort .</h4>
              <p className="text-center text-lg text-black ">We help you organize your clinic and make it easier.</p>
            </div>
          </div>
        </section>
       
        <div className="flex justify-center items-center space-x-100 bg-purple-100 pt-20 pb-20">
      {/* Carte de Satisfaction des Patients */}
      <div className="flex flex-col items-center">
     
        <div className="flex items-center  text-black">
        <HiUserGroup className="h-15 mx-auto  mb-5"  size={130} />
        </div>
        <p className="text-lg text-black font-bold">Users Satisfaction</p>
        <p className="text-lg font-semibold text-purple-700">20%</p>
        
      </div>

      {/* Carte d'Années d'Expérience */}
      <div className="flex flex-col items-center">
        <div className="flex items-center text-black">
        <SlCalender className="h-15 mx-auto  mb-5"  size={130} />
        </div>
        <p className="text-lg text-black font-bold">Years Experience</p>
        <p className="text-lg font-semibold text-purple-700">2 ans</p>
        
      </div>
    </div>
        
        </div>
  );
};

export default AboutUs;
