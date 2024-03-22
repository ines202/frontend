import { useState } from "react";
import { NOTIFICATION } from "@/types/notification";
import Image from "next/image";

const notificationData: NOTIFICATION[] = [
  {
    fullname: "John Doe",
    date: new Date("2024-03-21"),
    hour: "14:30",
    phone: 1234567890,
    result: 50,
    image: "/images/logo/logo.png",
  },
  {
    fullname: "John Doe",
    date: new Date("2024-02-21"),
    hour: "16:30",
    phone: 1234567890,
    result: 20,
    image: "/images/product/product-01.png",
  },
  {
    fullname: "John Doe",
    date: new Date("2024-03-21"),
    hour: "14:30",
    phone: 1234567890,
    result: 1,
    image: "/images/logo/logo.png",
  },
  {
    fullname: "John Doe",
    date: new Date("2024-03-21"),
    hour: "14:30",
    phone: 1234567890,
    result: 0,
    image: "/images/logo/logo.png",
  },
  // Ajoutez d'autres notifications ici...
];

const TableOne = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleShowImage = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const handleCloseImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Resent Tests
      </h4>

      <div className="flex flex-col">
        {/* Tableau de notification */}
        <div className="grid grid-cols-3 rounded-sm bg-gray-200 dark:bg-gray-800 sm:grid-cols-6">
          {/* En-têtes de colonne */}
          <div className="p-2.5">
            <h5 className="text-sm font-medium uppercase">Patient</h5>
          </div>
          <div className="p-2.5 text-center">
            <h5 className="text-sm font-medium uppercase">Date</h5>
          </div>
          <div className="p-2.5 text-center">
            <h5 className="text-sm font-medium uppercase">Hour</h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block">
            <h5 className="text-sm font-medium uppercase">Phone number</h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block">
            <h5 className="text-sm font-medium uppercase">Result</h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block">
            <h5 className="text-sm font-medium uppercase">Foot image</h5>
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
            <div className="flex items-center p-2.5">
              <p className="text-black dark:text-white">{notification.fullname}</p>
            </div>
            <div className="flex items-center justify-center p-2.5">
              <p className="text-black dark:text-white">{notification.date.toLocaleDateString()}</p>
            </div>
            <div className="flex items-center justify-center p-2.5">
              <p className="text-black dark:text-white">{notification.hour}</p>
            </div>
            <div className="hidden items-center justify-center p-2.5 sm:flex">
              <p className="text-black dark:text-white">{notification.phone}</p>
            </div>
            <div className="hidden items-center justify-center p-2.5 sm:flex">
              <p className="text-black dark:text-white">{notification.result}%</p>
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
        ))}
      </div>
    </div>
  );
};

export default TableOne;
