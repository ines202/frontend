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
      <header className="flex items-center justify-between p-8 shadow-md">
        <div className="flex items-center">
          {/* Ajoutez un conteneur flex pour aligner l'image et le titre */}
          <div className="relative h-20 w-20 p-2 drop-shadow-2">
            {/* Code de l'image */}
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
          <ul className="flex space-x-10">
            <li>
              <a
                href="#"
                className="text-2xl font-bold text-black hover:text-purple-700 "
              >
                About Us{" "}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-2xl font-bold text-black hover:text-purple-700"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-2xl  font-bold text-black hover:text-purple-700"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
        <div>
          <input
            type="submit"
            value="Sign Up"
            onClick={() => {
              router.push("/signup");
            }}
            className="w-min cursor-pointer rounded-lg border border-purple-700 bg-purple-700 p-4 font-bold text-white transition hover:bg-opacity-90"
          />
          <input
            type="submit"
            value="Sign In"
            onClick={() => {
              router.push("/signin");
            }}
            className="w-min ml-10 cursor-pointer rounded-lg border border-purple-700 bg-purple-700 p-4 font-bold text-white transition hover:bg-opacity-90"
          />
        </div>

      </header>

      <main className="container mx-auto h-screen flex-grow bg-purple-100  px-4">
        <section className="flex flex-col items-center md:flex-row">
          <div className="ml-10 mt-70 md:w-1/2">
            <h2 className="text-4xl font-bold text-black">
              Diabetic Foot Health Management
            </h2>
            <p className="mt- 15 font-bold text-black ">
              {" "}
              <span className="ms-4">Diabetic foot ulcers</span> (DFUs) are a
              common diabetes consequence that, if not addressed, can lead to
              major health problems. Early detection and proactive management
              are essential in avoiding complications including infections and
              amputations. So,we propose a comprehensive system whitch is our
              app <span className="text-purple-700">Doolab</span>Care composed
              of two parts: a mobile application for patients and a web
              application for doctors and admins.
            </p>
          </div>
          <div className="mt-8 md:mt-0 md:w-1/2">
            <img
              src="/health-professional.png"
              alt="Health Professional"
              className="mx-auto max-w-sm"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default AppBar;
