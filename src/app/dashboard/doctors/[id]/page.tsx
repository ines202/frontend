"use client";
import { useGetDoctorById } from "@/api/doctor";
import { useAuth } from "@/components/AuthContext";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DashboardLayout from "@/components/Layouts/DashboardLayout";
import { Roles } from "@/types/types";
import { useParams, useRouter } from "next/navigation";
import Image from 'next/image';
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import { useState } from 'react';

const DoctorDetails = () => {
  const { loggedInUser } = useAuth();
  const router = useRouter();
  const params = useParams();
  const { id } = params;
  const [newDoctor, setNewDoctor] = useState({});
  const [showOldDocument, setShowOldDocument] = useState(false);

  // Queries
  const { data: doctor, isLoading, error } = useGetDoctorById(id as string);

  return (
    <DashboardLayout>
      <Breadcrumb pageName={`Dr. ${doctor?.first_name} ${doctor?.last_name}`} />
      <div className="rounded-lg bg-white p-6 shadow-md dark:border-strokedark dark:bg-boxdark">
        {isLoading && <p>Loading...</p>}
        {error && <p className="text-red-500">Error: {error.message}</p>}
        {doctor && (
          <div>
            <div>
              <h2 className="mb-4 border-b border-stroke py-4 text-2xl font-semibold text-black dark:border-strokedark dark:text-white">
                Personal Information
              </h2>
              <div className="mb-4 grid grid-cols-3 gap-4">
                <div className="mb-3 flex flex-col">
                  <label
                    htmlFor="firstName"
                    className="mb-3 font-medium text-black dark:text-white"
                  >
                    Profile Photo:
                  </label>
                  <div className="relative h-40 w-40 rounded-full border-4 border-purple-700 drop-shadow-2">
                    {doctor && doctor.profilePicture && (
                      <Image
                        src={doctor.profilePicture}
                        fill
                        sizes="100%"
                        className="absolute rounded-full object-cover p-1"
                        alt="doctor profile"
                      />
                    )}
                  </div>
                </div>
                <div className="mb-3 flex flex-col">
                  <label
                    htmlFor="firstName"
                    className="mb-3 font-medium text-black dark:text-white"
                  >
                    First Name:
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-80 rounded border border-stroke bg-gray py-3 pl-4 pr-4.5 text-black focus:border-purple-700 focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-purple-700"
                    value={doctor.first_name}
                  />
                </div>
                <div className="mb-3 flex flex-col">
                  <label
                    htmlFor="lastName"
                    className=" mb-3 font-medium text-black dark:text-white"
                  >
                    Last Name:
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-80 rounded border border-stroke bg-gray py-3 pl-4 pr-4.5 text-black focus:border-purple-700 focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-purple-700"
                    value={doctor.last_name}
                  />
                </div>
                <div className="mb-3 flex flex-col">
                  <label
                    htmlFor="email"
                    className=" mb-3 font-medium text-black dark:text-white"
                  >
                    Email:
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="w-80 rounded border border-stroke bg-gray py-3 pl-4 pr-4.5 text-black focus:border-purple-700 focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-purple-700"
                    value={doctor.email}
                  />
                </div>
                <div className="mb-3 flex flex-col">
                  <label
                    htmlFor="phone"
                    className=" mb-3 font-medium text-black dark:text-white"
                  >
                    Phone:
                  </label>
                  <input
                    type="text"
                    id="phone"
                    className="w-80 rounded border border-stroke bg-gray py-3 pl-4 pr-4.5 text-black focus:border-purple-700 focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-purple-700"
                    value={doctor.phone}
                  />
                </div>
                <div className="mb-3 flex flex-col">
                  <label
                    htmlFor="speciality"
                    className="mb-3 font-medium text-black dark:text-white"
                  >
                    Speciality:
                  </label>
                  <input
                    type="text"
                    id="speciality"
                    className="w-80 rounded border border-stroke bg-gray py-3 pl-4 pr-4.5 text-black focus:border-purple-700 focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-purple-700"
                    value={doctor.speciality}
                  />
                </div>
                <div className="mb-3 flex flex-col">
                  <label
                    htmlFor="speciality"
                    className="mb-3 font-medium text-black dark:text-white"
                  >
                    Document:
                  </label>
                  {loggedInUser && loggedInUser.role === Roles.admin && doctor?.document && (
                    <a
                      href={doctor.document}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-700 hover:underline"
                    >
                      Download Document
                    </a>
                  )}
                </div>
                <div className="mb-3 flex flex-col">
                  <label
                    htmlFor="bio"
                    className="mb-3 font-medium text-black dark:text-white"
                  >
                    Bio:
                  </label>
                  <textarea
                    rows={5}
                    id="bio"
                    className="w-full rounded border border-stroke bg-gray py-3 pl-4 pr-4.5 text-black focus:border-purple-700 focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-purple-700"
                    value={doctor?.bio}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="mt-4 flex justify-end">
          <button
            className="mr-2 rounded-md bg-purple-700 px-4 py-2 text-white"
            onClick={() => router.back()}
          >
            Back
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DoctorDetails;
