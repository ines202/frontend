import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useGetArchivedDoctors, useUpdateDoctor, useArchiveDoctor } from "@/api/doctor";
import { Doctor } from "@/types/doctor";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ArchivedDoctors = () => {
  const router = useRouter();
  const { data: doctors, error, isLoading, refetch } = useGetArchivedDoctors();
  //const { mutateAsync: updateDoctor, isPending } = useUpdateDoctor();
  const { mutateAsync: archiveDoctor, isPending: isArchiving } = useArchiveDoctor();

  const handleDoctorView = (doctor: Doctor) => {
    router.push(`/dashboard/doctors/${doctor.id}`);
  };


  const handleRestoreDoctor = async (doctor: Doctor) => {
    try {
      await archiveDoctor({ doctorId: doctor.id.toString(), isArchived: false }); // Restore doctor by setting isArchived to false
      toast.success("Doctor restored successfully");
      await refetch();
    } catch (error) {
      console.error("Error restoring doctor:", error);
      toast.error("Failed to restore doctor");
    }
  };

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <ToastContainer />
      <div className="px-4 py-6 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Archived Doctors List
        </h4>
      </div>

      <div className="grid grid-cols-12 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-12 md:px-6 2xl:px-7.5">
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Full name</p>
        </div>
        <div className="col-span-2 items-center">
          <p className="font-medium">Email</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Address</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Phone</p>
        </div>
        <div className="col-span-2 flex items-center ">
          <p className="font-medium">More details</p>
        </div>
        <div className="col-span-2 flex items-center justify-center">
          <p className="font-medium">Actions</p>
        </div>
      </div>

      {isLoading || !doctors ? (
        <Skeleton count={5} />
      ) : (
        doctors.map((doctor, key) => (
          <div
            className="grid grid-cols-12 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-12 md:px-6 2xl:px-7.5"
            key={key}
          >
            <div className="col-span-2 flex items-center">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <p className="text-sm text-black dark:text-white">
                  {`${doctor.first_name} ${doctor.last_name}`}
                </p>
              </div>
            </div>
            <div className="col-span-2 hidden items-center sm:flex">
              <p className="text-sm text-black dark:text-white">
                {doctor.email}
              </p>
            </div>
            <div className="col-span-2 flex items-center">
              <p className="text-sm text-black dark:text-white">
                {doctor.address}
              </p>
            </div>
            <div className="col-span-2 flex items-center">
              <p className="text-sm text-black dark:text-white">
                {doctor.phone}
              </p>
            </div>
            <div className="col-span-2 flex items-center p-2.5">
              <button
                className="rounded-md bg-purple-700 px-3 py-1 text-sm text-white dark:text-white"
                onClick={() => handleDoctorView(doctor)}
              >
                View
              </button>
            </div>
            <div className="col-span-2 flex items-center p-2.5">
              <button
                className="bg-purple-100 rounded-md ml-10 px-3 py-1 text-sm text-black dark:text-black"
                onClick={() => handleRestoreDoctor(doctor)}
                disabled={isArchiving}
              >
                Restore
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ArchivedDoctors;
