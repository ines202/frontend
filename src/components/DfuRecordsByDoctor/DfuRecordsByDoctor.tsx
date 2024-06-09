import { useEffect, useState } from "react";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import { useGetDfuRecordsByDoctorId } from "@/api/dfuRecordsByDoctor";
import { useAuth } from "../AuthContext";
import { AiOutlineClose } from "react-icons/ai"; // Import the close icon

const DfuRecordsByDoctor = () => {
  const { loggedInUser } = useAuth();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  // Queries
  const {
    data: dfuRecordsData,
  } = useGetDfuRecordsByDoctorId(loggedInUser?.doctor?.id);

  useEffect(() => {
    if (dfuRecordsData) {
      console.log(dfuRecordsData);
    }
  }, [dfuRecordsData]);

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

      <div className="grid grid-cols-10 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-10 md:px-6 2xl:px-7.5">
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Full name</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Date and Time</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Phone number</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Result</p>
        </div>
        <div className="col-span-2 flex items-center justify-center">
          <p className="font-medium">Foot image</p>
        </div>
      </div>

      {!dfuRecordsData?.dfuRecords ? (
        <Skeleton count={5} />
      ) : (
        dfuRecordsData.dfuRecords.map((dfuRecord, index) => (
          <div
            className={`grid grid-cols-10 ${
              index === dfuRecordsData.dfuRecords.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            } px-4 py-4.5`}
            key={index}
          >
            <div className="col-span-2 flex items-center">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <p className="text-sm text-black dark:text-white">
                  {dfuRecord.medical_record.patient.first_name}
                </p>
                <p className="text-sm text-black dark:text-white">
                  {dfuRecord.medical_record.patient.last_name}
                </p>
              </div>
            </div>
            <div className="col-span-2 flex items-center">
              <p className="text-black dark:text-white">
                {dfuRecord.updatedAtFormatted}
              </p>
            </div>
            <div className="col-span-2 flex items-center">
              <p className="text-sm text-black dark:text-white">
                {dfuRecord.medical_record.patient.phone}
              </p>
            </div>
            <div className="col-span-2 flex items-center">
              <p className="text-black dark:text-white">
                {dfuRecord.prediction}
              </p>
            </div>
            <div className="col-span-2 flex items-center justify-center">
              <button
                className="border-gray-300 hover:bg-gray-100 rounded-md border bg-purple-700 px-4 py-2 pb-2 pt-2 text-white"
                onClick={() => handleShowImage(dfuRecord.image)}
              >
                Show
              </button>
              {selectedImage === dfuRecord.image && (
                <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
                  <div className="relative h-96 w-96 overflow-hidden rounded-lg bg-white p-4">
                    <button
                      className="hover:bg-gray-100 absolute right-2 top-2 z-20 rounded-full border border-purple-700 bg-purple-700 p-2 text-white"
                      onClick={handleCloseImage}
                    >
                      <AiOutlineClose size={20} />
                    </button>
                    <div className="relative h-full w-full flex-grow">
                      <a href={dfuRecord.image} target="_blank">
                        <Image
                          src={selectedImage}
                          alt="DFU Record Image"
                          layout="fill"
                          objectFit="contain"
                        />
                      </a>
                    </div>
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

export default DfuRecordsByDoctor;
