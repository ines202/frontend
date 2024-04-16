import Image from "next/image";
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { useGetDoctors, useUpdateDoctor } from "@/api/doctor";
import { Doctor } from "@/types/doctor";
import { useRouter } from "next/navigation";
import clsx from "clsx";

const Patients = () => {
  const router = useRouter();
  // Queries
  const { data: doctors, error, isLoading, refetch } = useGetDoctors();
  // Mutations
  const { mutateAsync: updateDoctor, isPending } = useUpdateDoctor();
  // Handlers
  const handleDoctorView = (doctor: Doctor) => {
    router.push(`/dashboard/doctors/${doctor.id}`);
  };
  const handleDoctorStatus = (doctor: Doctor) => async () => {
    await updateDoctor({
      ...doctor,
      id: doctor.id,
      isDisabled: !doctor.isDisabled,
    });
    await refetch();
  };

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="px-4 py-6 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Doctors List
        </h4>
      </div>

      <div className="grid grid-cols-12 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-12 md:px-6 2xl:px-7.5">
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Full name</p>
        </div>
        <div className="col-span-3 items-center">
          <p className="font-medium">Email</p>
        </div>

        <div className="col-span-2 flex items-center">
          <p className="font-medium">Address</p>
        </div>

        <div className="col-span-2 flex items-center">
          <p className="font-medium">Phone</p>
        </div>


        <div className="col-span-2 flex items-center">
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
            <div className="col-span-3 hidden items-center sm:flex">
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
                className="rounded-md bg-graydark px-3 py-1 text-sm text-white  dark:text-white"
                onClick={() => handleDoctorView(doctor)}
              >
                View
              </button>
              <button
                className={clsx(
                  "disabled:bg-gray-300 dark:hover:bg-gray-800 ml-5 rounded-md bg-green-600 px-3 py-1 text-sm",
                  {
                    "bg-red text-white": doctor.isDisabled,
                    "bg-green-600 text-white": !doctor.isDisabled,
                    "cursor-not-allowed opacity-75": isPending,
                  },
                )}
                onClick={handleDoctorStatus(doctor)}
                disabled={isPending}
              >
                {doctor.isDisabled ? "Enable" : "Disable"}
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Patients;
