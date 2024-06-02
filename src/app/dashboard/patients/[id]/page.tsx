"use client";
import { useGetPatientById } from "@/api/patient";
import { useAuth } from "@/components/AuthContext";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DashboardLayout from "@/components/Layouts/DashboardLayout";
import { Roles } from "@/types/types";

import { useParams, useRouter } from "next/navigation";

const PatientDetails = () => {
  const params = useParams();
  const router = useRouter();
  const { id } = params;
  const { loggedInUser } = useAuth();

  // Queries
  const {
    data: patientProfile,
    isLoading,
    error,
  } = useGetPatientById(id as string);

  return (
    <DashboardLayout>
      {/* <Breadcrumb
        pageName={`Patient Details: ${patientProfile?.patient.first_name} ${patientProfile?.patient.last_name}`}
      /> */}
      <div className="rounded-lg bg-white p-6 shadow-md dark:border-strokedark dark:bg-boxdark">
        {isLoading && <p>Loading...</p>}
        {error && <p className="text-red-500">Error: {error.message}</p>}
        {patientProfile && (
          <div>
            <div>
              <h2 className="mb-4 border-b border-stroke px-7 py-4 text-2xl font-semibold text-black dark:border-strokedark dark:text-white">
                Personal Information
              </h2>
              <div className="mb-3 grid grid-cols-3 gap-4">
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
                    value={patientProfile.patient.first_name}
                    disabled
                  />
                </div>
                <div className="mb-3 flex flex-col">
                  <label
                    htmlFor="lastName"
                    className="mb-3 font-medium text-black dark:text-white"
                  >
                    Last Name:
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-80 rounded border border-stroke bg-gray py-3 pl-4 pr-4.5 text-black focus:border-purple-700 focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-purple-700"
                    value={patientProfile.patient.last_name}
                    disabled
                  />
                </div>
                <div className="mb-3 flex flex-col">
                  <label
                    htmlFor="email"
                    className="mb-3 font-medium text-black dark:text-white"
                  >
                    Email:
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="w-80 rounded border border-stroke bg-gray py-3 pl-4 pr-4.5 text-black focus:border-purple-700 focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-purple-700"
                    value={patientProfile.patient.email}
                    disabled
                  />
                </div>
                <div className="mb-3 flex flex-col">
                  <label
                    htmlFor="phone"
                    className="mb-3 font-medium text-black dark:text-white"
                  >
                    Phone:
                  </label>
                  <input
                    type="text"
                    id="phone"
                    className="w-80 rounded border border-stroke bg-gray py-3 pl-4 pr-4.5 text-black focus:border-purple-700 focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-purple-700"
                    value={patientProfile.patient.phone}
                    disabled
                  />
                </div>
                {/* <div className="mb-3 flex flex-col">
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
                    value={patientProfile.patient.address}
                    disabled
                  />
                </div> */}

                <div className="mb-3 flex flex-col">
                  <label
                    htmlFor="gender"
                    className="mb-3 font-medium text-black dark:text-white"
                  >
                    Gender:
                  </label>
                  <input
                    type="text"
                    id="gender"
                    value={patientProfile.gender}
                    className="w-80 rounded border capitalize border-stroke bg-gray py-3 pl-4 pr-4.5 text-black focus:border-purple-700 focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-purple-700"
                    disabled
                  />
                </div>
                <div className="mb-3 flex flex-col">
                  <label
                    htmlFor="height"
                    className="mb-3 font-medium text-black dark:text-white"
                  >
                    Height:
                  </label>
                  <input
                    type="text"
                    id="height"
                    value={`${patientProfile.height} m`}
                    disabled
                    className="w-80 rounded border border-stroke bg-gray py-3 pl-4 pr-4.5 text-black focus:border-purple-700 focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-purple-700"
                  />
                </div>
                <div className="mb-3 flex flex-col">
                  <label
                    htmlFor="weight"
                    className="mb-3 font-medium text-black dark:text-white"

                  >
                    Weight:
                  </label>
                  <input
                    type="text"
                    id="weight"
                    value={`${patientProfile.weight} kg`}
                    disabled
                    className="w-80 rounded border border-stroke bg-gray py-3 pl-4 pr-4.5 text-black focus:border-purple-700 focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-purple-700"
                  />
                </div>
                <div className="mb-3 flex flex-col">
                  <label
                    htmlFor="birthdate"
                    className="mb-3 font-medium text-black dark:text-white"
                  >
                    Birth date:
                  </label>
                  <input
                    type="text"
                    id="birthdate"
                    value={`${String(new Date(patientProfile.birth_date).getDate()).padStart(2, '0')}-${String(new Date(patientProfile.birth_date).getMonth() + 1).padStart(2, '0')}-${new Date(patientProfile.birth_date).getFullYear()}`}
                    disabled
                    className="w-80 rounded border border-stroke bg-gray py-3 pl-4 pr-4.5 text-black focus:border-purple-700 focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-purple-700"
                  />
                </div>
              </div>
            </div>
            {patientProfile.patient.medical_record && (
              <div>
                <h2 className="mb-4 border-b border-stroke px-7 py-4 text-2xl font-semibold text-black dark:border-strokedark dark:text-white">
                  Medical Record
                </h2>
                <div className="mb-4 grid grid-cols-3 gap-4">
                  <div className="mb-3 flex flex-col">
                    <label
                      htmlFor="bloodGroup"
                      className="mb-3 font-medium text-black dark:text-white"
                    >
                      Blood Group:
                    </label>
                    <input
                      type="text"
                      id="bloodGroup"
                      className="w-80 rounded border border-stroke bg-gray py-3 pl-4 pr-4.5 text-black focus:border-purple-700 focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-purple-700"
                      value={patientProfile.patient.medical_record.bloodGroup}
                    />
                  </div>
                  <div className="mb-3 flex flex-col">
                    <label
                      htmlFor="diabetesType"
                      className="mb-3 font-medium text-black dark:text-white"
                    >
                      Diabetes Type:
                    </label>
                    <input
                      type="text"
                      id="diabetesType"
                      className="w-80 rounded border border-stroke bg-gray py-3 pl-4 pr-4.5 text-black focus:border-purple-700 focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-purple-700"
                      value={patientProfile.patient.medical_record.diabetesType}
                    />
                  </div>
                  <div className="mb-3 flex flex-col">
                    <label
                      htmlFor="hadDiabetes"
                      className="mb-3 font-medium text-black dark:text-white"
                    >
                      Has Diabetes:
                    </label>
                    <input
                      type="text"
                      id="hadDiabetes"
                      className="w-80 rounded border border-stroke bg-gray py-3 pl-4 pr-4.5 text-black focus:border-purple-700 focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-purple-700"
                      value={new Date(
                        patientProfile.patient.medical_record.hadDiabetes,
                      ).toDateString()}
                    />
                  </div>
                  <div className="mb-3 flex flex-col">
                    <label
                      htmlFor="hasDfu"
                      className="mb-3 font-medium text-black dark:text-white"
                    >
                      Has DFU:
                    </label>
                    <input
                      type="text"
                      id="hasDfu"
                      className="w-80 rounded border border-stroke bg-gray py-3 pl-4 pr-4.5 text-black focus:border-purple-700 focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-purple-700"
                      value={
                        patientProfile.patient.medical_record.hasDFU
                          ? "Yes"
                          : "No"
                      }
                    />
                  </div>
                  <div className="mb-3 flex flex-col">
                    <label
                      htmlFor="isSmoker"
                      className="mb-3 font-medium text-black dark:text-white"
                    >
                      Is Smoker:
                    </label>
                    <input
                      type="text"
                      id="isSmoker"
                      className="w-80 rounded border border-stroke bg-gray py-3 pl-4 pr-4.5 text-black focus:border-purple-700 focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-purple-700"
                      value={
                        patientProfile.patient.medical_record.isSmoker
                          ? "Yes"
                          : "No"
                      }
                    />
                  </div>
                  {patientProfile.patient.medical_record.doctor &&
                    loggedInUser?.role === Roles.admin && (
                      <div className="mb-3 flex flex-col">
                        <label
                          htmlFor="doctor"
                          className="mb-3 font-medium text-black dark:text-white"
                        >
                          Doctor:
                        </label>
                        <input
                          type="text"
                          id="doctor"
                          className="w-80 rounded border border-stroke bg-gray py-3 pl-4 pr-4.5 text-black focus:border-purple-700 focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-purple-700"
                          value={`${patientProfile.patient.medical_record.doctor.first_name} ${patientProfile.patient.medical_record.doctor.last_name}`}
                        />
                      </div>
                    )}
                </div>
              </div>
            )}
          </div>
        )}
        <div className="mt-4 flex justify-end">
          {/* <button className="mr-2 rounded-md bg-purple-700 px-4 py-2 text-white">
            Save
          </button> */}

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

export default PatientDetails;
