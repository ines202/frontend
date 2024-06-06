import { useState } from "react";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import { useGetPatients } from "@/api/patient";
import { NOTIFICATION } from "@/types/notification";

const notificationData: NOTIFICATION[] = [
  {
    firstname: "Anis",
    lastname: "Kehal",
    date: new Date("2024-03-21"),
    hour: "14:30",
    phone: 756359874,
    result: "ulcer",
    image: "/images/ulcer/1.jpg",
  },
  // {
  //   firstname: "Doe",
  //   lastname: "John",
  //   date: new Date("2024-02-21"),
  //   hour: "16:30",
  //   phone: 734567890,
  //   result: "healthy skin",
  //   image: "/images/ulcer/4.jpg",
  // },
  {
    firstname: "mouhamed",
    lastname: "bachiri",
    date: new Date("2024-04-21"),
    hour: "08:00",
    phone: 586391639,
    result: "healthy skin",
    image: "/images/ulcer/7.jpg",
  },
  {
    firstname: "fairouz",
    lastname: "achouri",
    date: new Date("2024-05-01"),
    hour: "14:30",
    phone: 697301522,
    result: "ulcer",
    image: "/images/ulcer/3.jpg",
  },
  // Ajoutez d'autres notifications ici...
];

const Test = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { data: patientProfiles, error, isLoading } = useGetPatients();

  const handleShowImage = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

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

      {isLoading ? (
        <Skeleton count={5} />
      ) : (
        notificationData.map((notification, index) => (
          <div
            className={`grid grid-cols-12 ${
              index === notificationData.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            } px-4 py-4.5`}
            key={index}
          >
            <div className="col-span-2 flex items-center">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <p className="text-sm text-black dark:text-white">
                  {notification.firstname}
                </p>
                <p className="text-sm text-black dark:text-white">
                  {notification.lastname}
                </p>
              </div>
            </div>
            <div className="col-span-2 flex items-center">
              <p className="text-black dark:text-white">
                {notification.date.toLocaleDateString()}
              </p>
            </div>
            <div className="col-span-2 flex items-center">
              <p className="text-black dark:text-white">{notification.hour}</p>
            </div>
            <div className="col-span-2 flex items-center">
              <p className="text-sm text-black dark:text-white">
                {notification.phone}
              </p>
            </div>
            <div className="col-span-2 flex items-center">
              <p className="text-black dark:text-white">
                {notification.result}
              </p>
            </div>
            <div className="col-span-2 flex items-center">
              <button
                className="border-gray-300 hover:bg-gray-100 rounded-md border bg-purple-700 px-4 py-2 pb-2 pt-2 text-white"
                onClick={() => handleShowImage(notification.image)}
              >
                Show
              </button>
              {selectedImage === notification.image && (
                <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
                  <div className="rounded-lg bg-white p-4">
                    <Image
                      src={selectedImage}
                      alt="Notification Image"
                      layout="responsive"
                      width={300}
                      height={300}
                    />
                    <button
                      className="hover:bg-gray-100 mt-4 rounded-md border border-purple-700 bg-purple-700 px-4 py-2 pb-2 pt-2 text-white"
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
  );
};

export default Test;
