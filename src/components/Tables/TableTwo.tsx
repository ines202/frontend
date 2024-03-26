import Image from "next/image";
import { Patient } from "@/types/patient";

const patientData: Patient[] = [
  // Exemple 1
  {id:4,
    first_name: "John",
    last_name: "Doe",
    email: "john.doe@example.com",
    phone: "124567890",
    password:"12345",
  },
  {id:4,
    first_name: "Alice",
    last_name: "Smith",
    email: "alice.smith@example.com",
    phone: "0876543210",
    password:"12345",
  },
  {id:4,
    first_name: "Michael",
    last_name: "Johnson",
    email: "michael.johnson@example.com",
    phone: "456780123",
    password:"12345",
  },
  {id:4,
    first_name: "Emily",
    last_name: "Brown",
    email: "emily.brown@example.com",
    phone: "3206549870",
    password:"12345",
  },
];

const TableTwo = () => {
  const handleMedicalRecordClick = (patient: Patient) => {
    // Gérer le clic sur le bouton du dossier médical du patient
    console.log(
      "Medical record clicked for",
      patient.first_name,
      patient.last_name,
    );
    // Vous pouvez implémenter ici la logique pour ouvrir le dossier médical du patient
  };

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="px-4 py-6 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Top patient
        </h4>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Full name</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-medium">Email</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Phone</p>
        </div>

        <div className="col-span-2 flex items-center">
          <p className="font-medium">Medical record</p>
        </div>
      </div>

      {patientData.map((patient, key) => (
        <div
          className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
          key={key}
        >
          <div className="col-span-2 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <p className="text-sm text-black dark:text-white">
                {patient.first_name}
              </p>
              <p className="text-sm text-black dark:text-white">
                {patient.last_name}
              </p>
            </div>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">
              {patient.email}
            </p>
          </div>
          <div className="col-span-2 flex items-center">
            <p className="text-sm text-black dark:text-white">
              {patient.phone}
            </p>
          </div>


          <div className="flex items-center justify-center p-2.5">
            <button
              className="rounded-md bg-purple-700 px-3 py-1 text-sm text-white hover:bg-purple-700 dark:text-white"
              onClick={() => handleMedicalRecordClick(patient)}
            >
              View
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableTwo;
