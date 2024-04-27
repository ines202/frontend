import Image from "next/image";
import { PatientProfile } from "@/types/patientProfile";
import { useEffect } from "react";
import { useGetPatients } from "@/api/patient";
import Skeleton from "react-loading-skeleton";
import { useRouter } from "next/navigation";

const Patients = () => {
  const router = useRouter();
  // Queries
  const { data: patientProfiles, error, isLoading } = useGetPatients();
 // const { mutate: archivePatient } = useArchivePatient();
  // Effects
  // Handlers
  const handleMedicalRecordClick = (patientProfile: PatientProfile) => {
    router.push(`/dashboard/patients/${patientProfile.patient.id}`);
  };

  // const handleArchiveClick = async (patientId: string) => { // Modifiez la signature de la fonction
  //   try {
  //     await archivePatient(patientId); // Appel asynchrone de la fonction de mutation pour archiver le patient
  //   } catch (error) {
  //     console.error("Error archiving patient:", error);
  //   }
  // };

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="px-4 py-6 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Patients List
        </h4>
      </div>

      <div className="grid grid-cols-12 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-12 md:px-6 2xl:px-7.5">
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Full name</p>
        </div>
        <div className="col-span-2 items-center">
          <p className="font-medium">Email</p>
        </div>
        <div className="col-span-2 items-center">
          <p className="font-medium">Address</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Phone number</p>
        </div>

        <div className="col-span-2 flex items-center">
          <p className="font-medium">Medical record</p>
        </div>

        <div className="col-span-2 flex items-center justify-center">
          <p className="font-medium">Action</p>
        </div>
      </div>

      {isLoading || !patientProfiles ? (
        <Skeleton count={5} />
      ) : (
        patientProfiles.map((patientProfile, key) => (
          <div
            className="grid grid-cols-12 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-12 md:px-6 2xl:px-7.5"
            key={key}
          >
            <div className="col-span-2 flex items-center">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <p className="text-sm text-black dark:text-white">
                  {patientProfile.patient.first_name}
                </p>
                <p className="text-sm text-black dark:text-white">
                  {patientProfile.patient.last_name}
                </p>
              </div>
            </div>
            <div className="col-span-2 hidden items-center sm:flex">
              <p className="text-sm text-black dark:text-white">
                {patientProfile.patient.email}
              </p>
            </div>
            <div className="col-span-2 hidden items-center sm:flex">
              <p className="text-sm text-black dark:text-white">
                {patientProfile.patient.address}
              </p>
            </div>
            <div className="col-span-2 flex items-center">
              <p className="text-sm text-black dark:text-white">
                {patientProfile.patient.phone}
              </p>
            </div>
            <div className="flex items-center justify-center ">
              <button
                className="rounded-md bg-purple-700 px-3 py-1 text-sm text-white  dark:text-white"
                onClick={() => handleMedicalRecordClick(patientProfile)}
              >
                View
              </button>
            </div>
            <div className="flex items-center justify-center ">
             <button
                className="ml-73 rounded-md bg-purple-100 px-3 py-1 text-sm text-black  dark:text-black"
                // onClick={() => handleArchiveClick(patientProfile.patient.id.toString())}// Appel de la fonction handleArchiveClick avec l'ID du patient
              >
                Archive
              </button>
            </div>

          </div>
        ))
      )}
    </div>
  );
};

export default Patients;
