"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { useAuth } from "@/components/AuthContext";
import { Doctor } from "@/types/doctor";
import { BsPerson } from "react-icons/bs";
import { FaRegEnvelope } from "react-icons/fa";
import { GiPositionMarker } from "react-icons/gi";
import { IoCallOutline } from "react-icons/io5";
import { BsBriefcase } from "react-icons/bs";
import clsx from "clsx";
import ImageUpload from "@/components/ImageUpload";

const initialDoctor: Doctor = {
  first_name: "",
  last_name: "",
  email: "",
  address: "",
  speciality: "",
  phone: "",
  password: "",
  role: "doctor",
  pic: "",
  document: "",
};

const SignUp: React.FC = () => {
  const [myNewDoctor, setMyNewDoctor] = useState<Doctor>(initialDoctor);
  const { signUp, loading } = useAuth();

  // Handlers
  const handleUploadImage = (pic: string) => {
    setMyNewDoctor({ ...myNewDoctor, pic });
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center ">
      <div className="w-full max-w-5xl">
        <Breadcrumb pageName="Sign Up" />

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="flex flex-wrap items-center">
            <div className="hidden w-full xl:block xl:w-1/2">
              <h2 className=" ms-15  text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
                {" "}
                Welcome to
                <span className="ms-2 text-purple-700">Doolab</span>Care
              </h2>
              <div className="px-26 py-17.5 ">
                <Link className="mb-5.5 inline-block pb-8   pl-13" href="/">
                  <Image
                    className="hidden dark:block "
                    src={"/images/logo/logo.png"}
                    alt="Logo"
                    width={130}
                    height={32}
                  />
                  <Image
                    className="dark:hidden"
                    src={"/images/logo/logo-dark.png"}
                    alt="Logo"
                    width={130}
                    height={32}
                  />
                </Link>
                <p className="text-center 2xl:px-10">
                  To keep connected with us please login with your personal
                  info.
                </p>
                <Image
                  className=""
                  src={"/images/signin/signup.png"}
                  alt="signin"
                  width={350}
                  height={800}
                />
              </div>
            </div>

            <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
              <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
                <form>
                  <div className="mb-4">
                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                      First Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Enter your First name"
                        value={myNewDoctor?.first_name}
                        onChange={(e) => {
                          if (e.target.value.length > 0) {
                            setMyNewDoctor({
                              ...myNewDoctor,
                              first_name: e.target.value,
                            });
                          }
                        }}
                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-purple-700 focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-purple-700"
                      />

                      <span className="absolute right-4 top-4">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <BsPerson className="text-grey-200" size={20} />
                        </div>
                      </span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                      {" "}
                      Last Name{" "}
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Enter your Last name"
                        value={myNewDoctor?.last_name}
                        onChange={(e) => {
                          setMyNewDoctor({
                            ...myNewDoctor,
                            last_name: e.target.value,
                          });
                        }}
                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-purple-700 focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-purple-700"
                      />

                      <span className="absolute right-4 top-4">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <BsPerson className="text-grey-200" size={20} />
                        </div>
                      </span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                      Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-purple-700 focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-purple-700"
                        value={myNewDoctor?.email}
                        onChange={(e) => {
                          setMyNewDoctor({
                            ...myNewDoctor,
                            email: e.target.value,
                          });
                        }}
                      />

                      <span className="absolute right-4 top-4">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <FaRegEnvelope className="text-grey-200" size={20} />
                        </div>
                      </span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                      {" "}
                      Address
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Enter your Address"
                        value={myNewDoctor?.address}
                        onChange={(e) => {
                          setMyNewDoctor({
                            ...myNewDoctor,
                            address: e.target.value,
                          });
                        }}
                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-purple-700 focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-purple-700"
                      />

                      <span className="absolute right-4 top-4">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <GiPositionMarker
                            className="text-grey-200"
                            size={20}
                          />
                        </div>
                      </span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                      {" "}
                      Phone Number
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Enter your Phone Number"
                        value={myNewDoctor?.phone}
                        onChange={(e) => {
                          setMyNewDoctor({
                            ...myNewDoctor,
                            phone: e.target.value,
                          });
                        }}
                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-purple-700 focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-purple-700"
                      />

                      <span className="absolute right-4 top-4">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <IoCallOutline className="text-gray-200" size={20} />
                        </div>
                      </span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                      {" "}
                      Speciality
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Enter your Speciality"
                        value={myNewDoctor?.speciality}
                        onChange={(e) => {
                          setMyNewDoctor({
                            ...myNewDoctor,
                            speciality: e.target.value,
                          });
                        }}
                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-purple-700 focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-purple-700"
                      />

                      <span className="absolute right-4 top-4">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <BsBriefcase className="text-gray-200" size={20} />
                        </div>
                      </span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        placeholder="Enter your password"
                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        value={myNewDoctor?.password}
                        onChange={(e) => {
                          setMyNewDoctor({
                            ...myNewDoctor,
                            password: e.target.value,
                          });
                        }}
                      />
                    </div>
                  </div>
                  <ImageUpload
                    uploadedImageURL={(imageURL) =>
                      setMyNewDoctor({ ...myNewDoctor, pic: imageURL })
                    }
                  />

                  {/* <div className="mb-6">
                    <label className="mb-2.5 block font-medium text-black dark:text-white">Re-type Passwor</label>
                    <div className="relative">
                      <input
                        type="password"
                        placeholder="Re-enter your password"
                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"/>
                      <span className="absolute right-4 top-4">
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <MdLockOutline className="text-gray-400" size={20} />
</div>
                      </span>
                    </div>
                  </div> */}

                  <div className="mb-5">
                    <input
                      type="submit"
                      value={loading ? "Creating account.." : "Create account"}
                      onClick={(e) => {
                        e.preventDefault();
                        signUp(myNewDoctor);
                      }}
                      className={clsx(
                        "w-full cursor-pointer rounded-lg border border-purple-700 bg-purple-700 p-4 text-white transition hover:bg-opacity-90",
                        {
                          "opacity-50": loading,
                          "pointer-events-none": loading,
                        },
                      )}
                      disabled={loading}
                    />
                  </div>

                  <div className="mt-6 text-center">
                    <p>
                      Already have an account?{" "}
                      <Link href="/signin" className="text-purple-700">
                        Sign in
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
