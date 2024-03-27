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
      <div>
        {patientProfile && (
          <>
            <p>First name: {patientProfile.patient.first_name}</p>
            <p>Last name: {patientProfile.patient.last_name}</p>
            <p>Email: {patientProfile.patient.email}</p>
            <p>Phone: {patientProfile.patient.phone}</p>
            {patientProfile.patient.medical_record && (
              <>
                <p>Medical record:</p>
                <p>
                  Blood Group:{" "}
                  {patientProfile.patient.medical_record.bloodGroup}
                </p>
                <p>
                  Diabetes Type:{" "}
                  {patientProfile.patient.medical_record.diabetesType}
                </p>
                <p>
                  has Diabetes:{" "}
                  {new Date(
                    patientProfile.patient.medical_record.hadDiabetes,
                  ).toDateString()}
                </p>
                <p>
                  Has DFU:{" "}
                  {patientProfile.patient.medical_record.hasDfu ? "Yes" : "No"}
                </p>
                <p>
                  Is Smoker:{" "}
                  {patientProfile.patient.medical_record.isSmoker
                    ? "Yes"
                    : "No"}
                </p>
                {patientProfile.patient.medical_record.doctor && (
                  <>
                    <p>
                      Doctor:{" "}
                      {patientProfile.patient.medical_record.doctor.first_name}{" "}
                      {patientProfile.patient.medical_record.doctor.last_name}
                    </p>
                  </>
                )}
              </>
            )}
          </>
        )}
      </div>
    </DashboardLayout>
  );
};

export default PatientDetails;
