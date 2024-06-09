"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {};

const AppBar = (props: Props) => {
  const router = useRouter();
  return (
    <div className="bg-purple-100">
      <title>Home - Diabetic Foot Health Management</title>
      <header className="flex items-center justify-between p-8 shadow-md">
        <div className="flex items-center">
          <div className="relative ml-8 h-20 w-35 p-2 drop-shadow-2xl">
            <Image
              src="/images/logo/logo.png"
              width={100}
              height={100}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
              alt="Logo"
            />
          </div>
          {/* <h2 className="ml-4 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
            <span className="text-purple-700">Doolab</span>Care
          </h2> */}
        </div>

        <nav>
          <ul className="flex space-x-10">
            <li>
              <Link href="#what-we-do" className="text-2xl font-bold text-black hover:text-purple-700" passHref>
                About Us
              </Link>
            </li>
            <li>
              <Link href="#services" className="text-2xl font-bold text-black hover:text-purple-700" passHref>
                Services
              </Link>
            </li>
            <li>
              <Link href="#contact-us" className="text-2xl font-bold text-black hover:text-purple-700" passHref>
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <input
            type="button"
            value="Sign Up"
            onClick={() => {
              router.push("/signup");
            }}
            className="w-min cursor-pointer rounded-lg border border-purple-700 bg-purple-700 p-4 font-bold text-white transition hover:bg-opacity-90"
          />
          <input
            type="button"
            value="Sign In"
            onClick={() => {
              router.push("/signin");
            }}
            className="w-min ml-10 cursor-pointer rounded-lg border border-purple-700 bg-purple-700 p-4 font-bold text-white transition hover:bg-opacity-90"
          />
        </div>
      </header>

      <main className="container mx-auto  flex-grow bg-purple-100 px-4">
        <section className="flex flex-col items-center md:flex-row">
          <div className="ml-10 mt-10 md:w-1/2">
            <h2 className="text-4xl font-bold text-black">
              Diabetic Foot Health Management
            </h2>
            <p className="mt-4 font-bold text-black">
              Diabetic foot ulcers (DFUs) are a common consequence of diabetes that, if not addressed, can lead to major health problems. Early detection and proactive management are essential in avoiding complications including infections and amputations. Therefore, we propose a comprehensive system: our app <span className="text-purple-700">Doolab</span>Care, composed of two parts: a mobile application for patients and a web application for doctors and administrators.
            </p>
          </div>
          <div className="mt-8 md:mt-0 md:w-1/2">
            <Image
              src="/images/user/doctor-removebg-preview.png"
              alt="Health Professional"
              width={400}
              height={400}
              className="mx-auto max-w-sm"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default AppBar;
