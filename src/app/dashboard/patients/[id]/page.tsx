"use client";
import { useGetPatientById } from "@/api/patient";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DashboardLayout from "@/components/Layouts/DashboardLayout";
import { useParams } from "next/navigation";

const PatientDetails = () => {
  const params = useParams();
  const { id } = params;

  // Queries
  const {
    data: patientProfile,
    isLoading,
    error,
  } = useGetPatientById(id as string);

  return (
    <DashboardLayout>
      <Breadcrumb
        pageName={`Patient Details: ${patientProfile?.patient.first_name} ${patientProfile?.patient.last_name}`}
      />
      <div className="rounded-lg bg-white p-6 shadow-md dark:border-strokedark dark:bg-boxdark">
        {isLoading && <p>Loading...</p>}
        {error && <p className="text-red-500">Error: {error.message}</p>}
        {patientProfile && (
          <div>
            <div>
              <h2 className="mb-4 text-2xl font-semibold border-b border-stroke px-7 py-4 dark:border-strokedark text-black dark:text-white">
                Personal Information
              </h2>
              <div className="mb-4 grid grid-cols-2 gap-4">
                <div className="mb-3 flex flex-col">
                  <label
                    htmlFor="firstName"
                    className="font-medium text-black dark:text-white"
                  >
                    First Name:
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-80 rounded border border-stroke bg-gray py-3 pl-4 pr-4.5 text-black focus:border-purple-700 focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-purple-700"
                    value={patientProfile.patient.first_name}

                  />
                </div>
                <div className="mb-3 flex flex-col">
                  <label
                    htmlFor="lastName"
                    className="font-medium text-black dark:text-white"
                  >
                    Last Name:
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-80 rounded border border-stroke bg-gray py-3 pl-4 pr-4.5 text-black focus:border-purple-700 focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-purple-700"
                    value={patientProfile.patient.last_name}

                  />
                </div>
                <div className="mb-3 flex flex-col">
                  <label
                    htmlFor="email"
                    className="font-medium text-black dark:text-white"
                  >
                    Email:
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="w-80 rounded border border-stroke bg-gray py-3 pl-4 pr-4.5 text-black focus:border-purple-700 focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-purple-700"
                    value={patientProfile.patient.email}

                  />
                </div>
                <div className="mb-3 flex flex-col">
                  <label
                    htmlFor="phone"
                    className="font-medium text-black dark:text-white"
                  >
                    Phone:
                  </label>
                  <input
                    type="text"
                    id="phone"
                    className="w-80 rounded border border-stroke bg-gray py-3 pl-4 pr-4.5 text-black focus:border-purple-700 focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-purple-700"
                    value={patientProfile.patient.phone}

                  />
                </div>
              </div>
            </div>
            {patientProfile.patient.medical_record && (
              <div>
                <h2 className="mb-4 text-2xl font-semibold border-b border-stroke px-7 py-4 dark:border-strokedark text-black dark:text-white">
                  Medical Record
                </h2>
                <div className="mb-4 grid grid-cols-2 gap-4">
                  <div className="mb-3 flex flex-col">
                    <label
                      htmlFor="bloodGroup"
                      className="font-medium text-black dark:text-white"
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
                      className="font-medium text-black dark:text-white"
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
                      className="font-medium text-black dark:text-white"
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
                      className="font-medium text-black dark:text-white"
                    >
                      Has DFU:
                    </label>
                    <input
                      type="text"
                      id="hasDfu"
                      className="w-80 rounded border border-stroke bg-gray py-3 pl-4 pr-4.5 text-black focus:border-purple-700 focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-purple-700"
                      value={
                        patientProfile.patient.medical_record.hasDfu
                          ? "Yes"
                          : "No"
                      }

                    />
                  </div>
                  <div className="mb-3 flex flex-col">
                    <label
                      htmlFor="isSmoker"
                      className="font-medium text-black dark:text-white"
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
                  {patientProfile.patient.medical_record.doctor && (
                    <div className="mb-3 flex flex-col">
                      <label
                        htmlFor="doctor"
                        className="font-medium text-black dark:text-white"
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
         <div className="flex justify-end mt-4">
          <button className="px-4 py-2 mr-2 bg-purple-700 text-white rounded-md">Save</button>
          <button className="px-4 py-2 bg-purple-100 text-black rounded-md">Back</button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PatientDetails;
