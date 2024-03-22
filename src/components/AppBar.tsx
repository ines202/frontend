// AppBar.tsx
"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import router from "next/router";

type Props = {};

const AppBar = (props: Props) => {
  const router = useRouter();
  return (
    <div className="bg-purple-100">
      
        <title>Home - Diabetic Foot Health Management</title>


        <header className="flex justify-between items-center p-4 shadow-md">
        <div className="flex items-center"> {/* Ajoutez un conteneur flex pour aligner l'image et le titre */}
          <div className="relative h-20 w-20 p-2 drop-shadow-2"> {/* Code de l'image */}
            <Image
              src={"/images/logo/logo.png"}
              width={100}
              height={100}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
              alt="profile"
            />
          </div>
          <h2 className="ms-4 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
            <span className="text-purple-700">Doolab</span>Care
          </h2>
        </div>
        
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-purple-700 text-black text-lg font-bold ">About Us </a></li>
            <li><a href="#" className="hover:text-purple-700 text-black text-lg font-bold">Services</a></li>
            <li><a href="#" className="hover:text-purple-700  text-black text-lg font-bold">Contact Us</a></li>
          </ul>
        </nav>
        <div>
         
          <input
          type="submit"
          value="Sign Up Now"
          onClick={() => {
            router.push("/dashboard");
          }}
          className="w-min cursor-pointer font-bold rounded-lg border border-purple-700 bg-purple-700 p-4 text-white transition hover:bg-opacity-90"
        />
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 bg-purple-100  h-screen">
        <section className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mt-70 ml-10">
            <h2 className="text-4xl font-bold text-black">Diabetic Foot Health Management</h2>
            <p className="text-black mt- 15 font-bold "> <span className="ms-4">Diabetic foot ulcers</span> (DFUs) are a common diabetes consequence that,
             if not addressed, can lead to major health problems.
              Early detection and proactive management are essential in avoiding complications including infections and amputations.
              So,we propose a comprehensive system whitch is our app <span className="text-purple-700">Doolab</span>Care composed of two parts:
               a mobile application for patients and a web application for doctors and admins.</p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img src="/health-professional.png" alt="Health Professional" className="max-w-sm mx-auto"/>
          </div>
        </section>

       
        
      </main>
    </div>
  );
};

export default AppBar;
