"use client";
import { useGetDoctorById, useUpdateDoctor } from "@/api/doctor";
import { useAuth } from "@/components/AuthContext";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DashboardLayout from "@/components/Layouts/DashboardLayout";
import { Roles } from "@/types/types";
import { useParams, useRouter } from "next/navigation";
import Image from 'next/image';
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import { useEffect, useState } from 'react';
import { toast } from "react-toastify";

const DoctorDetails = () => {
  const { loggedInUser } = useAuth();
  const router = useRouter();
  const params = useParams();
  const { id } = params;
  const [newDoctor, setNewDoctor] = useState();
  const { data: doctor, isLoading, error } = useGetDoctorById(id as string);
  const { mutateAsync: updateDoctor } = useUpdateDoctor();

  useEffect(() => {
    if (doctor) {
      setNewDoctor(doctor);
    }
  }, [doctor]);
  // Handler for saving changes
  const handleSaveChanges = async () => {
    if (!newDoctor) return;
    try {
      // Call API to update doctor
      await updateDoctor(newDoctor);
  
    } catch (error) {
      console.error("Error updating doctor:", error);
      // Handle error if necessary
    }
    toast.success("Profile updated successfully");
  };
 
  
  return (
    <DashboardLayout>
      
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
                    value={newDoctor?.first_name}
                    onChange={(e) => setNewDoctor({...newDoctor, first_name: e.target.value})}
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
                    value={newDoctor?.last_name}
                    onChange={(e) => setNewDoctor({...newDoctor, last_name: e.target.value})}
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
                    value={newDoctor?.email}
                    onChange={(e) => setNewDoctor({...newDoctor, email: e.target.value})}
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
                    type="number"
                    id="phone"
                    className="w-80 rounded border border-stroke bg-gray py-3 pl-4 pr-4.5 text-black focus:border-purple-700 focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-purple-700"
                    value={newDoctor?.phone}
                    onChange={(e) => setNewDoctor({...newDoctor, phone: e.target.value})}
                  />
                </div>
                <div className="mb-3 flex flex-col">
                  <label
                    htmlFor="address"
                    className="mb-3 font-medium text-black dark:text-white"
                  >
                    Address:
                  </label>
                  <input
                    type="text"
                    id="address"
                    className="w-80 rounded border border-stroke bg-gray py-3 pl-4 pr-4.5 text-black focus:border-purple-700 focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-purple-700"
                    value={newDoctor?.address}
                    onChange={(e) => setNewDoctor({...newDoctor, address: e.target.value})}
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
                    htmlFor="speciality"
                    className="mb-3 font-medium text-black dark:text-white"
                  >
                    Speciality:
                  </label>
                  <input
                    type="text"
                    id="speciality"
                    className="w-80 rounded border border-stroke bg-gray py-3 pl-4 pr-4.5 text-black focus:border-purple-700 focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-purple-700"
                    value={newDoctor?.speciality}
                    onChange={(e) => setNewDoctor({...newDoctor, speciality: e.target.value})}
                  />
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
          <button className="mr-2 rounded-md bg-purple-700 px-4 py-2 text-white"
        onClick={handleSaveChanges}
          >
            Save
          </button>

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
