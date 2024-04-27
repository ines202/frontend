import { useState } from "react";
import { NOTIFICATION } from "@/types/notification";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import { PatientProfile } from "@/types/patientProfile";
import { useEffect } from "react";
import { useGetPatients } from "@/api/patient";

const notificationData: NOTIFICATION[] = [
  {
    firstname: "John ",
    lastname: " Doe",
    date: new Date("2024-03-21"),
    hour: "14:30",
    phone: 1234567890,
    result: 50,
    image: "/images/logo/logo.png",
  },
  {
    firstname: " Doe",
    lastname: "John ",
    date: new Date("2024-02-21"),
    hour: "16:30",
    phone: 1234567890,
    result: 20,
    image: "/images/product/product-01.png",
  },
  {
    firstname: "ines",
    lastname: "boukhors",
    date: new Date("2024-03-21"),
    hour: "14:30",
    phone: 1234567890,
    result: 1,
    image: "/images/logo/logo.png",
  },
  {
    firstname: "kawther",
    lastname: "rached",
    date: new Date("2024-03-21"),
    hour: "14:30",
    phone: 1234567890,
    result: 0,
    image: "/images/logo/logo.png",
  },
  // Ajoutez d'autres notifications ici...
];

const Test = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleShowImage = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };
  const { data: patientProfiles, error, isLoading } = useGetPatients();

  const handleCloseImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="px-4 py-6 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Tests Result
        </h4>
      </div>

      <div className="grid grid-cols-12 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-12 md:px-6 2xl:px-7.5">
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Full name</p>
        </div>
          <div className="col-span-2 flex items-center">
            <p className="font-medium">Date</p>
          </div>
          <div className="col-span-2 flex items-center">
            <p className="font-medium">Hour</p>
          </div>
          <div className="col-span-2 flex items-center">
            <p className="font-medium">Phone number</p>
          </div>
          <div className="col-span-2 flex items-center">
            <p className="font-medium">Result</p>
          </div>
          <div className="col-span-2 flex items-center">
            <p className="font-medium">Foot image</p>
          </div>
        </div>

        {/* Affichage des notifications */}
        {notificationData.map((notification, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-6 ${
              key === notificationData.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={key}
          >
            {/* Contenu de chaque notification */}

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
            <div className="flex items-center justify-center p-2.5">
              <p className="text-black dark:text-white">{notification.date.toLocaleDateString()}</p>
            </div>
            <div className="flex items-center justify-center p-2.5">
              <p className="text-black dark:text-white">{notification.hour}</p>
            </div>
            <div className="col-span-2 flex items-center">
              <p className="text-sm text-black dark:text-white">
                {patientProfile.patient.phone}
              </p>
            </div>
            <div className="hidden items-center justify-center p-2.5 sm:flex">
              <p className="text-black dark:text-white">{notification.result}</p>
            </div>
            <div className="flex items-center justify-center p-2.5 sm:flex">
              <button
                className=" border border-gray-300 text-white hover:bg-gray-100 rounded-md bg-purple-700   pt-2 pb-2 px-4 py-2"
                onClick={() => handleShowImage(notification.image)}
              >
                Show
              </button>
              {selectedImage === notification.image && (
                <div className="absolute  z-10 w-full min-h-64
                flex items-center justify-center bg-purple-100 ">
                  <div className="">
                    <Image src={selectedImage} alt="Notification Image" layout="responsive" width={300} height={300} />
                    <button
                      className=" border border-purpele-700 text-white hover:bg-gray-100 rounded-md bg-purple-700  pt-2 pb-2 px-4 py-2"
                      onClick={handleCloseImage}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>

          </div>
 ))
)}
        
        </div>
))}

      </div>

  );
};

export default Test;
