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
import { toast } from "react-toastify";
import DocumentUpload from "@/components/DocumentUpload";
import { UploadFolders } from "@/api/upload";

const initialDoctor: Omit<Doctor, "id"> = {
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
  const [myNewDoctor, setMyNewDoctor] = useState<Omit<Doctor, "id">>(initialDoctor);
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const { signUp, loading } = useAuth();

  // Handlers
  const handleUploadImage = (imageURL: string) => {
    setMyNewDoctor({ ...myNewDoctor, pic: imageURL })
  };
  const handleUploadDocument = (documentURL: string) => { 
    setMyNewDoctor({ ...myNewDoctor, document: documentURL })
  }

  const handleSubmit = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault();
    if (myNewDoctor.password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    signUp(myNewDoctor);
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center ">
      <div className="w-full max-w-5xl">
        <Breadcrumb pageName="Sign Up" />

        <div className="rounded-sm border border-stroke bg-white shadow-default">
          <div className="flex flex-col items-center">
            <div className="flex w-full flex-col items-center justify-center py-10">
              <div className="mb-2">
                <Link className="inline-block" href="/">
                  <Image
                    className="hidden dark:block"
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
              </div>
              <h2 className="text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
                Welcome to
                <span className="ms-2 text-purple-700">Doolab</span>Care
              </h2>
            </div>

            <div className="grid w-full grid-cols-2 gap-12 px-16">
              <div className="w-full">
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
                      Phone Number
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
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
                  <div className="pt-4">
                    <ImageUpload
                      uploadFolder={UploadFolders["doctor/images"]}
                      uploadedImageURL={handleUploadImage}
                    />
                  </div>
                </form>
              </div>
              <div className="w-full">
                <form>
                  <div className="mb-4">
                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                      Last Name
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
                      Confirm Password
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        placeholder="Confirm your password"
                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        value={confirmPassword}
                        onChange={(e) => {
                          setConfirmPassword(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="pt-4">
                    <DocumentUpload
                      uploadFolder={UploadFolders["doctor/documents"]}
                      uploadedDocumentURL={handleUploadDocument}
                    />
                  </div>
                </form>
              </div>
            </div>

            <div className="flex w-full flex-col items-center justify-center pb-6">
              <div className="w-60">
                <input
                  type="submit"
                  value={loading ? "Creating account.." : "Create account"}
                  onClick={handleSubmit}
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

              <div className="mt-4 text-center">
                <p>
                  Already have an account?
                  <Link href="/signin" className="text-purple-700">
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
